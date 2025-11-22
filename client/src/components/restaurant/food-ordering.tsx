import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { foods } from "@shared/foods-data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Plus, Minus, Trash2, Home, Store } from "lucide-react";

const orderSchema = z.object({
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone required"),
  deliveryType: z.enum(["pickup", "delivery"]),
  deliveryAddress: z.string().optional(),
  specialInstructions: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

export function FoodOrderingSection() {
  const [cartItems, setCartItems] = useState<{ food: typeof foods[0]; qty: number }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      email: "",
      phone: "",
      deliveryType: "pickup",
      specialInstructions: "",
    },
  });

  const deliveryType = form.watch("deliveryType");
  const categories = [...new Set(foods.filter(f => !f.comingSoon).map(f => f.category))];

  const availableFoods = foods.filter(f => !f.comingSoon && (selectedCategory === "All" || f.category === selectedCategory));

  const addToCart = (food: typeof foods[0]) => {
    const existing = cartItems.find(item => item.food.name === food.name);
    if (existing) {
      setCartItems(cartItems.map(item => 
        item.food.name === food.name ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { food, qty: 1 }]);
    }
  };

  const removeFromCart = (foodName: string) => {
    setCartItems(cartItems.filter(item => item.food.name !== foodName));
  };

  const updateQuantity = (foodName: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(foodName);
    } else {
      setCartItems(cartItems.map(item =>
        item.food.name === foodName ? { ...item, qty } : item
      ));
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.food.price * item.qty), 0);
  const deliveryFee = deliveryType === "delivery" ? 25 : 0;
  const total = subtotal + deliveryFee;

  const onSubmit = async (data: OrderFormData) => {
    if (cartItems.length === 0) {
      alert("Please add items to your cart");
      return;
    }

    setIsLoading(true);
    try {
      await apiRequest("POST", "/api/food-orders", {
        ...data,
        items: JSON.stringify(cartItems),
        subtotal,
        deliveryFee,
        total,
        status: "pending",
      });
      setSubmitted(true);
      setCartItems([]);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Order failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="food-ordering" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-food-ordering">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-order">Order Now</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-order-title">
            Order for Delivery or Pickup
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-order-subtitle">
            Enjoy our cuisine from the comfort of your home or office
          </p>
        </div>

        {submitted && (
          <Card className="mb-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" data-testid="card-order-success">
            <CardContent className="p-6">
              <p className="text-green-700 dark:text-green-300 font-semibold" data-testid="text-order-success">
                ✓ Order confirmed! We'll prepare your meal right away.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-order-menu">Browse Menu</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Button
                  variant={selectedCategory === "All" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("All")}
                  size="sm"
                  data-testid="button-cat-all"
                >
                  All
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    onClick={() => setSelectedCategory(cat)}
                    size="sm"
                    data-testid={`button-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {availableFoods.map((food, idx) => (
                <Card key={`${food.name}-${idx}`} className="hover-elevate active-elevate-2" data-testid={`card-order-item-${idx}`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm" data-testid={`text-order-name-${idx}`}>{food.name}</h4>
                      <span className="text-primary font-bold" data-testid={`text-order-price-${idx}`}>${food.price}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2" data-testid={`text-order-desc-${idx}`}>
                      {food.description}
                    </p>
                    <div className="flex gap-2 mb-3">
                      {food.vegetarian && <Badge variant="secondary" className="text-xs">V</Badge>}
                      {food.vegan && <Badge variant="secondary" className="text-xs">VG</Badge>}
                    </div>
                    <Button
                      onClick={() => addToCart(food)}
                      size="sm"
                      className="w-full"
                      data-testid={`button-add-${idx}`}
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div data-aos="fade-left">
            <Card className="glass-effect sticky top-24" data-testid="card-order-summary">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4" data-testid="text-cart-title">Your Cart</h3>

                {cartItems.length === 0 ? (
                  <p className="text-muted-foreground text-sm mb-4" data-testid="text-cart-empty">
                    Your cart is empty. Add items to get started.
                  </p>
                ) : (
                  <>
                    <div className="space-y-3 mb-4 max-h-64 overflow-y-auto" data-testid="list-cart-items">
                      {cartItems.map((item, idx) => (
                        <div key={`${item.food.name}-${idx}`} className="flex justify-between items-center text-sm pb-2 border-b" data-testid={`item-cart-${idx}`}>
                          <div className="flex-1">
                            <p className="font-medium" data-testid={`text-cart-name-${idx}`}>{item.food.name}</p>
                            <p className="text-muted-foreground" data-testid={`text-cart-price-${idx}`}>${item.food.price}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.food.name, item.qty - 1)}
                              className="h-6 w-6 p-0"
                              data-testid={`button-qty-minus-${idx}`}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-6 text-center text-sm" data-testid={`text-qty-${idx}`}>{item.qty}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.food.name, item.qty + 1)}
                              className="h-6 w-6 p-0"
                              data-testid={`button-qty-plus-${idx}`}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.food.name)}
                            className="h-6 w-6 p-0 ml-2"
                            data-testid={`button-remove-${idx}`}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 py-4 border-t">
                      <div className="flex justify-between text-sm" data-testid="row-subtotal">
                        <span>Subtotal:</span>
                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm" data-testid="row-delivery">
                        <span>Delivery:</span>
                        <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold pt-2 border-t" data-testid="row-total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} data-testid="input-order-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} data-testid="input-order-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="deliveryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Delivery Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-delivery-type">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="pickup">
                                <span className="flex items-center gap-2"><Store className="w-4 h-4" /> Pickup</span>
                              </SelectItem>
                              <SelectItem value="delivery">
                                <span className="flex items-center gap-2"><Home className="w-4 h-4" /> Delivery</span>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {deliveryType === "delivery" && (
                      <FormField
                        control={form.control}
                        name="deliveryAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">Delivery Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St, City, State 12345" {...field} data-testid="input-order-address" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="specialInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Special Instructions</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any allergies or special requests?" {...field} data-testid="textarea-order-instructions" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full pulse-gold" disabled={isLoading || cartItems.length === 0} data-testid="button-place-order">
                      {isLoading ? "Placing Order..." : `Place Order - $${total.toFixed(2)}`}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
