import { useQuery, useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type CartItem = any;
type Product = any;

export default function SupermarketCartPage() {
  const { toast } = useToast();

  const { data: cartItems = [], isLoading } = useQuery<CartItem[]>({
    queryKey: ["/api/cart"],
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const removeFromCartMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiRequest("DELETE", `/api/cart/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      toast({ title: "Item removed from cart" });
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      await apiRequest("PATCH", `/api/cart/${id}`, { quantity });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
    },
  });

  const cartWithDetails = cartItems.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId),
  }));

  const subtotal = cartWithDetails.reduce(
    (acc, item) => acc + (parseFloat(item.product?.price || "0") * item.quantity || 0),
    0
  );

  const deliveryFee = subtotal > 0 ? 5.0 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  if (isLoading) {
    return <div className="py-20 text-center">Loading cart...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto max-w-4xl px-4" data-testid="container-cart">
        <Link href="/supermarket">
          <Button variant="ghost" className="mb-8" data-testid="button-continue-shopping">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2" data-testid="container-items">
            <h1 className="text-3xl font-bold mb-8" data-testid="text-title">
              Shopping Cart
            </h1>

            {cartWithDetails.length === 0 ? (
              <Card data-testid="card-empty">
                <CardContent className="p-12 text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Link href="/supermarket">
                    <Button data-testid="button-shop-now">Start Shopping</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4" data-testid="list-items">
                {cartWithDetails.map((item) => (
                  <Card key={item.id} className="hover-elevate" data-testid={`card-item-${item.id}`}>
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center text-3xl" data-testid={`img-item-${item.id}`}>
                        ⭐
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold" data-testid={`text-name-${item.id}`}>
                          {item.product?.name}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-price-${item.id}`}>
                          ${parseFloat(item.product?.price || "0").toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2" data-testid={`container-qty-${item.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantityMutation.mutate({
                              id: item.id,
                              quantity: Math.max(1, item.quantity - 1),
                            })
                          }
                          data-testid={`button-qty-minus-${item.id}`}
                        >
                          −
                        </Button>
                        <span className="w-8 text-center text-sm font-medium" data-testid={`text-qty-${item.id}`}>
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantityMutation.mutate({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          }
                          data-testid={`button-qty-plus-${item.id}`}
                        >
                          +
                        </Button>
                      </div>
                      <div className="w-24 text-right" data-testid={`container-subtotal-${item.id}`}>
                        <p className="font-semibold" data-testid={`text-subtotal-${item.id}`}>
                          ${(parseFloat(item.product?.price || "0") * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCartMutation.mutate(item.id)}
                        data-testid={`button-remove-${item.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div data-testid="container-summary">
            <Card className="sticky top-8 hover-elevate" data-testid="card-summary">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4" data-testid="text-summary-title">
                  Order Summary
                </h2>

                <div className="space-y-2 mb-6 pb-6 border-b" data-testid="container-prices">
                  <div className="flex justify-between text-sm" data-testid="row-subtotal">
                    <span>Subtotal</span>
                    <span data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" data-testid="row-delivery">
                    <span>Delivery Fee</span>
                    <span data-testid="text-delivery">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm" data-testid="row-tax">
                    <span>Tax (10%)</span>
                    <span data-testid="text-tax">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6 text-lg font-bold" data-testid="row-total">
                  <span>Total</span>
                  <span className="text-primary" data-testid="text-total">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Link href={cartWithDetails.length > 0 ? "/supermarket/checkout" : "/supermarket"}>
                  <Button className="w-full" disabled={cartWithDetails.length === 0} data-testid="button-checkout">
                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4" data-testid="text-secure">
                  ✓ Secure Checkout
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
