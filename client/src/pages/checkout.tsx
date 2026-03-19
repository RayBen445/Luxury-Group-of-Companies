import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const checkoutSchema = z.object({
  deliveryAddress: z.string().min(5, "Address must be at least 5 characters"),
  phoneNumber: z.string().min(10, "Phone must be at least 10 digits"),
  notes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;
type CartItem = any;
type Product = any;

export default function CheckoutPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      deliveryAddress: "",
      phoneNumber: "",
      notes: "",
    },
  });

  const { data: cartItems = [] } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const createOrderMutation = useMutation({
    mutationFn: async (data: CheckoutFormData) => {
      const items = cartItems.map((item) => ({
        ...item,
        product: products.find((p) => p.id === item.productId),
      }));

      const subtotal = items.reduce(
        (acc, item) => acc + parseFloat(item.product?.price || "0") * item.quantity,
        0
      );

      const response = await apiRequest("POST", "/api/orders", {
        items: JSON.stringify(items),
        subtotal: subtotal.toString(),
        deliveryFee: "5.00",
        tax: (subtotal * 0.1).toString(),
        total: (subtotal + 5 + subtotal * 0.1).toString(),
        status: "confirmed",
        deliveryAddress: data.deliveryAddress,
        phoneNumber: data.phoneNumber,
        notes: data.notes,
      });
      return response.json();
    },
    onSuccess: (order) => {
      toast({ title: "Order placed successfully!" });
      queryClient.invalidateQueries({ queryKey: ["/api/orders"] });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      setLocation(`/order-confirmation/${order.id}`);
    },
    onError: () => {
      toast({
        title: "Failed to place order",
        description: "Please try again",
        variant: "destructive",
      });
    },
  });

  const cartWithDetails = cartItems.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId),
  }));

  const subtotal = cartWithDetails.reduce(
    (acc, item) => acc + parseFloat(item.product?.price || "0") * item.quantity,
    0
  );

  const deliveryFee = 5.0;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  const onSubmit = (data: CheckoutFormData) => {
    createOrderMutation.mutate(data);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto max-w-4xl px-4" data-testid="container-checkout">
        <h1 className="text-3xl font-bold mb-8" data-testid="text-title">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2" data-testid="container-form">
            <Card className="hover-elevate" data-testid="card-delivery">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4" data-testid="text-delivery-title">
                  Delivery Information
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-checkout">
                    <FormField
                      control={form.control}
                      name="deliveryAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel data-testid="label-address">Delivery Address</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter your full address" {...field} data-testid="input-address" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel data-testid="label-phone">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel data-testid="label-notes">Special Instructions (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any special delivery instructions..." {...field} data-testid="input-notes" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      className="w-full"
                      disabled={createOrderMutation.isPending}
                      data-testid="button-place-order"
                    >
                      {createOrderMutation.isPending ? "Placing Order..." : "Place Order"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div data-testid="container-summary">
            <Card className="sticky top-8 hover-elevate" data-testid="card-summary">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4" data-testid="text-summary-title">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 pb-6 border-b" data-testid="list-items">
                  {cartWithDetails.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm" data-testid={`item-${item.id}`}>
                      <span>
                        {item.product?.name} x {item.quantity}
                      </span>
                      <span>${(parseFloat(item.product?.price || "0") * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-6 pb-6 border-b" data-testid="container-prices">
                  <div className="flex justify-between text-sm" data-testid="row-subtotal">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" data-testid="row-delivery">
                    <span>Delivery</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" data-testid="row-tax">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold" data-testid="row-total">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
