import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Truck, Shield, Heart, ChevronRight } from "lucide-react";
import { useState } from "react";
import supermarketImage from "@assets/generated_images/premium_supermarket_storefront.png";

type Product = any;
type Category = any;

export default function SupermarketPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products.filter((p) => {
    const matchesCategory = !selectedCategory || p.categoryId === selectedCategory;
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Quick Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap" data-testid="button-back-home">
                ← Back to Properties
              </Button>
            </Link>
            <Link href="/supermarket/cart">
              <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap" data-testid="button-view-cart">
                <ShoppingCart className="w-4 h-4" />
                My Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src={supermarketImage} 
            alt="Premium Supermarket" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <Badge className="mb-4" data-testid="badge-supermarket">
            Royale Luxury Collection
          </Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-title">
            Royale Luxury Supermarket
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8" data-testid="text-subtitle">
            Everything you need in one place. Premium selection, exceptional quality, express delivery available.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8" data-testid="container-search">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="input-search"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto" data-testid="grid-features">
            <div className="text-center" data-testid="feature-delivery">
              <Truck className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Express Delivery</p>
            </div>
            <div className="text-center" data-testid="feature-quality">
              <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Premium Quality</p>
            </div>
            <div className="text-center" data-testid="feature-value">
              <Heart className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm font-medium">Best Value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-categories">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-categories-title">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" data-testid="grid-categories">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-lg border text-center transition ${
                !selectedCategory
                  ? "bg-primary text-white border-primary"
                  : "bg-background border-border hover-elevate"
              }`}
              data-testid="button-category-all"
            >
              <span className="text-2xl mb-2 block">🛒</span>
              <span className="font-medium text-sm">All</span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-4 rounded-lg border text-center transition ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-background border-border hover-elevate"
                }`}
                data-testid={`button-category-${cat.name}`}
              >
                <span className="text-2xl mb-2 block">{cat.icon}</span>
                <span className="font-medium text-sm">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {!selectedCategory && !searchQuery && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-featured">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-featured-title">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-featured">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-products">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-products-title">
            {selectedCategory || searchQuery ? "Results" : "All Products"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-products">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-span-full text-center py-12" data-testid="text-no-products">
                <p className="text-muted-foreground">No products found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  // Map categories to icons/emojis for visual representation
  const getCategoryIcon = (categoryName: string) => {
    const icons: Record<string, string> = {
      "Fruits & Vegetables": "🥬",
      "Dairy & Eggs": "🥛",
      "Meat & Seafood": "🍖",
      "Bakery": "🥐",
      "Beverages": "🧃",
      "Snacks": "🍿",
      "Frozen Foods": "🧊",
      "Health & Beauty": "💆",
      "Household": "🧹",
    };
    return icons[categoryName] || "📦";
  };

  return (
    <Link href={`/supermarket/product/${product.id}`}>
      <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-product-${product.id}`}>
        <CardContent className="p-4">
          <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center text-5xl" data-testid={`img-product-${product.id}`}>
            {getCategoryIcon(product.categoryName || "")}
          </div>
          <h3 className="font-semibold mb-2 line-clamp-2" data-testid={`text-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-1" data-testid={`text-desc-${product.id}`}>
            {product.description}
          </p>
          <div className="flex items-center justify-between mb-4" data-testid={`container-price-${product.id}`}>
            <span className="text-lg font-bold text-primary" data-testid={`text-price-${product.id}`}>
              ${parseFloat(product.price || "0").toFixed(2)}
            </span>
            {product.isOrganic && (
              <Badge variant="outline" data-testid={`badge-organic-${product.id}`}>
                Organic
              </Badge>
            )}
          </div>
          <Button className="w-full" size="sm" data-testid={`button-view-${product.id}`}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            View
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
