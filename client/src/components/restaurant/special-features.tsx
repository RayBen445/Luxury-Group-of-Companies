import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Leaf, Users, Utensils } from "lucide-react";

export function SpecialFeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-special-features">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-features">Special Services</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-features-title">
            Premium Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="container-features">
          <Card className="hover-elevate text-center" data-testid="card-feature-1">
            <CardContent className="p-8">
              <Gift className="w-10 h-10 mx-auto mb-4 text-primary" data-testid="icon-gift"/>
              <h3 className="font-serif text-xl font-bold mb-2" data-testid="text-feature-gift">Gift Cards</h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-gift-desc">
                Give the gift of fine dining
              </p>
              <Button variant="outline" size="sm" data-testid="button-gift-cards">
                Shop Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate text-center" data-testid="card-feature-2">
            <CardContent className="p-8">
              <Leaf className="w-10 h-10 mx-auto mb-4 text-primary" data-testid="icon-vegan"/>
              <h3 className="font-serif text-xl font-bold mb-2" data-testid="text-feature-vegan">Vegan Menu</h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-vegan-desc">
                50+ plant-based dishes
              </p>
              <Button variant="outline" size="sm" data-testid="button-vegan-menu">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate text-center" data-testid="card-feature-3">
            <CardContent className="p-8">
              <Users className="w-10 h-10 mx-auto mb-4 text-primary" data-testid="icon-events"/>
              <h3 className="font-serif text-xl font-bold mb-2" data-testid="text-feature-events">Private Events</h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-events-desc">
                Host your special occasion
              </p>
              <Button variant="outline" size="sm" data-testid="button-private-events">
                Inquire
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate text-center" data-testid="card-feature-4">
            <CardContent className="p-8">
              <Utensils className="w-10 h-10 mx-auto mb-4 text-primary" data-testid="icon-catering"/>
              <h3 className="font-serif text-xl font-bold mb-2" data-testid="text-feature-catering">Catering</h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-catering-desc">
                Bring us to your event
              </p>
              <Button variant="outline" size="sm" data-testid="button-catering">
                Get Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
