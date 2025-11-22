import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Flame } from "lucide-react";

const specials = [
  { id: 1, name: "Holiday Truffle Menu", description: "5-course tasting with black truffles", price: 185, endsIn: "8 days", icon: "🍄" },
  { id: 2, name: "Winter Harvest Bowl", description: "Seasonal vegetables with wild mushrooms", price: 28, endsIn: "15 days", icon: "🥘" },
  { id: 3, name: "Festive Duck Preparation", description: "Orange gastrique with cranberry glaze", price: 52, endsIn: "10 days", icon: "🦆" },
  { id: 4, name: "Dessert Trio Sampler", description: "Three premium desserts in one plate", price: 22, endsIn: "5 days", icon: "🍰" },
];

export function SeasonalSpecials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20" data-testid="section-seasonal">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="destructive" data-testid="badge-seasonal">Limited Time</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-seasonal-title">
            Seasonal Specials
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-seasonal-subtitle">
            Exclusive dishes available this season only
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-testid="container-specials">
          {specials.map((special) => (
            <Card key={special.id} className="hover-elevate relative overflow-hidden" data-testid={`card-special-${special.id}`}>
              <div className="absolute top-0 right-0 text-4xl p-4" data-testid={`icon-special-${special.id}`}>{special.icon}</div>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2" data-testid={`text-special-name-${special.id}`}>
                      {special.name}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-special-desc-${special.id}`}>
                      {special.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-3xl font-bold text-primary" data-testid={`text-special-price-${special.id}`}>${special.price}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2" data-testid={`text-expires-${special.id}`}>
                      <Clock className="w-3 h-3" />
                      Ends in {special.endsIn}
                    </div>
                  </div>
                  <Button data-testid={`button-order-special-${special.id}`}>Order Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
