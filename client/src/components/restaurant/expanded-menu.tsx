import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { foods } from "@shared/foods-data";
import { Input } from "@/components/ui/input";
import defaultFoodImage from "@assets/generated_images/caesar_salad_restaurant_style.png";

export function ExpandedMenuSection() {
  const [activeCategory, setActiveCategory] = useState("Appetizers");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Appetizers",
    "Soups",
    "Main Courses - Beef",
    "Main Courses - Seafood",
    "Main Courses - Poultry",
    "Main Courses - Lamb",
    "Pasta",
    "Vegetarian",
    "Desserts",
    "Coming Soon",
  ];

  const filters = ["All", "Vegetarian", "Vegan", "Spicy", "Coming Soon"];

  const filteredItems = foods.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const filterMatch =
      activeFilter === "All" ||
      (activeFilter === "Vegetarian" && item.vegetarian) ||
      (activeFilter === "Vegan" && item.vegan) ||
      (activeFilter === "Spicy" && item.spicy) ||
      (activeFilter === "Coming Soon" && item.comingSoon);

    return categoryMatch && searchMatch && filterMatch;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-expanded-menu">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-menu-expanded">1000+ Dishes</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text" data-testid="text-menu-expanded-title">
            Complete Menu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-menu-desc">
            Explore our extensive collection of culinary creations
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up">
          <Input
            placeholder="Search dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sm:w-64"
            data-testid="input-search-menu"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="hover-elevate active-elevate-2"
              data-testid={`button-filter-expanded-${filter.toLowerCase()}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center overflow-x-auto pb-4" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className="hover-elevate active-elevate-2 whitespace-nowrap"
              data-testid={`button-cat-expanded-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => {
            let foodImage = defaultFoodImage;
            if (item.image) {
              try {
                foodImage = require(`@assets/generated_images/${item.image}`).default;
              } catch {
                foodImage = defaultFoodImage;
              }
            }
            return (
            <Card
              key={`${item.name}-${index}`}
              className="hover-elevate active-elevate-2 transition-all overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 30, 300)}
              data-testid={`card-expanded-menu-${index}`}
            >
              {item.image && (
                <div className="relative w-full h-48 bg-muted overflow-hidden" data-testid={`img-expanded-${index}`}>
                  <img 
                    src={foodImage}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {item.comingSoon && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Badge className="text-xs">Coming Soon</Badge>
                    </div>
                  )}
                </div>
              )}
              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-bold flex-1" data-testid={`text-expanded-item-${index}`}>
                    {item.name}
                  </h3>
                  {!item.comingSoon && (
                    <span className="text-primary font-bold whitespace-nowrap ml-2" data-testid={`text-expanded-price-${index}`}>
                      ${item.price}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-1" data-testid={`text-expanded-desc-${index}`}>
                  {item.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <Badge variant="outline" className="text-xs" data-testid={`badge-expanded-cat-${index}`}>
                    {item.category}
                  </Badge>
                  {item.vegetarian && <Badge variant="secondary" className="text-xs" data-testid={`badge-expanded-veg-${index}`}>V</Badge>}
                  {item.vegan && <Badge variant="secondary" className="text-xs" data-testid={`badge-expanded-vegan-${index}`}>VG</Badge>}
                  {item.spicy && <Badge className="text-xs bg-red-600" data-testid={`badge-expanded-spicy-${index}`}>Spicy</Badge>}
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg" data-testid="text-no-results">
              No items found matching your search.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-menu-count">
            Showing {filteredItems.length} of {foods.length} dishes
          </p>
        </div>
      </div>
    </section>
  );
}
