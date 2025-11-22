import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const bundles = [
  {
    id: 1,
    name: "Dinner for Two",
    price: 99,
    originalPrice: 140,
    items: ["Appetizer for 2", "Main course for 2", "Dessert for 2", "Wine pairing"],
  },
  {
    id: 2,
    name: "Romantic Evening",
    price: 159,
    originalPrice: 220,
    items: ["Champagne bottle", "3-course tasting", "Chocolate dessert", "Rose arrangement"],
  },
  {
    id: 3,
    name: "Family Feast",
    price: 189,
    originalPrice: 280,
    items: ["Appetizers (4)", "Main courses (4)", "Sides & bread", "Dessert platter"],
  },
  {
    id: 4,
    name: "Business Lunch",
    price: 49,
    originalPrice: 65,
    items: ["Salad course", "Main course", "Coffee & pastry", "Business setting"],
  },
];

export function BundleDeals() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20" data-testid="section-bundles">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-bundles">Save More</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-bundles-title">
            Bundle Deals
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-bundles-subtitle">
            Save up to 30% with our curated packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="container-bundles">
          {bundles.map((bundle) => {
            const savings = bundle.originalPrice - bundle.price;
            return (
              <Card key={bundle.id} className="hover-elevate relative overflow-hidden" data-testid={`card-bundle-${bundle.id}`}>
                <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-lg" data-testid={`badge-savings-${bundle.id}`}>
                  Save ${savings}
                </div>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-2" data-testid={`text-bundle-name-${bundle.id}`}>
                    {bundle.name}
                  </h3>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary" data-testid={`text-price-${bundle.id}`}>${bundle.price}</p>
                    <p className="text-sm text-muted-foreground line-through" data-testid={`text-original-price-${bundle.id}`}>
                      ${bundle.originalPrice}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {bundle.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm" data-testid={`text-item-${bundle.id}-${idx}`}>
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" data-testid={`button-order-bundle-${bundle.id}`}>
                    <Zap className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
