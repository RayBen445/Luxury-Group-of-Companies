import { useParams, Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, Share2, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type Product = any;

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["/api/products", id],
  });

  const addToCartMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/cart", {
        productId: id,
        quantity,
      });
    },
    onSuccess: () => {
      toast({ title: "Added to cart!" });
      queryClient.invalidateQueries({ queryKey: ["/api/cart"] });
      setQuantity(1);
    },
    onError: () => {
      toast({ title: "Please login to add to cart", variant: "destructive" });
    },
  });

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto max-w-4xl px-4" data-testid="container-product-detail">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="grid-product">
          {/* Product Image */}
          <Card className="hover-elevate" data-testid="card-image">
            <CardContent className="p-8">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-7xl" data-testid="img-product">
                {product.isFeatured && "⭐"}
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <div data-testid="container-details">
            <h1 className="font-serif text-4xl font-bold mb-4" data-testid="text-name">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6" data-testid="container-meta">
              {product.isOrganic && (
                <Badge data-testid="badge-organic">Organic</Badge>
              )}
              {product.isFeatured && (
                <Badge variant="secondary" data-testid="badge-featured">
                  Featured
                </Badge>
              )}
              <span className="text-muted-foreground" data-testid="text-rating">
                ⭐ {product.rating}
              </span>
            </div>

            <p className="text-muted-foreground mb-8" data-testid="text-description">
              {product.description}
            </p>

            {/* Pricing */}
            <div className="mb-8" data-testid="container-pricing">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-primary" data-testid="text-price">
                  ${parseFloat(product.price || "0").toFixed(2)}
                </span>
                {product.discountPrice && (
                  <span className="text-lg text-muted-foreground line-through" data-testid="text-discount">
                    ${parseFloat(product.discountPrice).toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-stock">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 flex items-center gap-4" data-testid="container-quantity">
              <label className="font-medium" data-testid="text-qty-label">
                Quantity:
              </label>
              <div className="flex items-center gap-2" data-testid="container-qty-buttons">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="button-qty-minus"
                >
                  −
                </Button>
                <span className="w-8 text-center font-medium" data-testid="text-qty-value">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  data-testid="button-qty-plus"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8" data-testid="container-actions">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => addToCartMutation.mutate()}
                disabled={addToCartMutation.isPending || product.stock === 0}
                data-testid="button-add-cart"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {addToCartMutation.isPending ? "Adding..." : "Add to Cart"}
              </Button>
              <Button variant="outline" size="lg" data-testid="button-wishlist">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" data-testid="button-share">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4" data-testid="grid-info">
              <Card data-testid="card-shipping">
                <CardContent className="p-4">
                  <p className="text-sm font-medium mb-2">🚚 Fast Delivery</p>
                  <p className="text-xs text-muted-foreground">Next day delivery available</p>
                </CardContent>
              </Card>
              <Card data-testid="card-quality">
                <CardContent className="p-4">
                  <p className="text-sm font-medium mb-2">✓ Quality Guaranteed</p>
                  <p className="text-xs text-muted-foreground">100% authentic products</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
