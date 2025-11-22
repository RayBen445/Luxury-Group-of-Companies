import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface FavoriteDish {
  id: string;
  name: string;
  category: string;
  price: number;
}

export function FavoritesSection() {
  const [favorites, setFavorites] = useState<FavoriteDish[]>([
    { id: "1", name: "Beef Wellington", category: "Main Courses", price: 68 },
    { id: "2", name: "Lobster Thermidor", category: "Main Courses", price: 72 },
    { id: "3", name: "Wild Mushroom Risotto", category: "Vegetarian", price: 38 },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-favorites">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-favorites">Your Favorites</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-favorites-title">
            Saved Dishes
          </h2>
          <p className="text-muted-foreground" data-testid="text-favorites-subtitle">
            {favorites.length} dishes in your collection
          </p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="container-favorites">
            {favorites.map((dish) => (
              <Card key={dish.id} className="hover-elevate" data-testid={`card-favorite-${dish.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg" data-testid={`text-dish-name-${dish.id}`}>{dish.name}</h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-category-${dish.id}`}>{dish.category}</p>
                    </div>
                    <button onClick={() => removeFavorite(dish.id)} data-testid={`button-remove-favorite-${dish.id}`}>
                      <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary" data-testid={`text-price-${dish.id}`}>${dish.price}</p>
                    <Button size="sm" data-testid={`button-order-${dish.id}`}>Order</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center p-12" data-testid="card-empty-favorites">
            <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground" data-testid="text-no-favorites">No favorites yet. Start adding your favorite dishes!</p>
          </Card>
        )}
      </div>
    </section>
  );
}
