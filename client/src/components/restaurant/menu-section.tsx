import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  vegetarian?: boolean;
  special?: boolean;
};

const menuItems: MenuItem[] = [
  { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons, classic dressing", price: "$14", category: "Starters", vegetarian: true },
  { name: "French Onion Soup", description: "Caramelized onions, gruyere cheese, crispy bread", price: "$12", category: "Starters" },
  { name: "Escargot", description: "Burgundy snails, garlic herb butter, toasted baguette", price: "$18", category: "Starters", special: true },
  { name: "Beef Wellington", description: "Tenderloin, mushroom duxelles, puff pastry, red wine jus", price: "$68", category: "Main Courses", special: true },
  { name: "Pan-Seared Salmon", description: "Atlantic salmon, lemon beurre blanc, seasonal vegetables", price: "$42", category: "Main Courses" },
  { name: "Duck Confit", description: "Crispy duck leg, orange glaze, root vegetables", price: "$48", category: "Main Courses", special: true },
  { name: "Lobster Risotto", description: "Creamy arborio rice, fresh lobster, saffron, herbs", price: "$54", category: "Chef Specials", special: true },
  { name: "Wagyu Ribeye", description: "Premium Japanese beef, truffle butter, asparagus", price: "$98", category: "Chef Specials", special: true },
  { name: "Eggplant Parmigiana", description: "Layered eggplant, mozzarella, tomato sauce, basil", price: "$28", category: "Vegetarian", vegetarian: true },
  { name: "Butternut Squash Ravioli", description: "Handmade pasta, sage brown butter, parmesan", price: "$32", category: "Vegetarian", vegetarian: true },
  { name: "Grilled Portobello", description: "Balsamic marinated mushroom, polenta, arugula", price: "$26", category: "Vegetarian", vegetarian: true },
  { name: "Tiramisu", description: "Classic Italian dessert, espresso, mascarpone, cocoa", price: "$14", category: "Desserts" },
  { name: "Crème Brûlée", description: "Vanilla custard, caramelized sugar, fresh berries", price: "$12", category: "Desserts" },
  { name: "Tarte Tatin", description: "Upside-down caramelized apple tart, vanilla ice cream", price: "$14", category: "Desserts" },
  { name: "Bordeaux Reserve", description: "Full-bodied red wine, aged 5 years", price: "$18/glass", category: "Wines" },
  { name: "Champagne Brut", description: "French sparkling wine, celebration special", price: "$22/glass", category: "Wines" },
  { name: "Craft Cocktails", description: "Signature mixology creations, premium spirits", price: "$16", category: "Drinks" },
];

const categories = ["All", "Starters", "Main Courses", "Chef Specials", "Vegetarian", "Desserts", "Wines", "Drinks"];
const filters = ["All", "Vegetarian", "Specials", "Drinks"];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = activeCategory === "All" || item.category === activeCategory;
    const filterMatch =
      activeFilter === "All" ||
      (activeFilter === "Vegetarian" && item.vegetarian) ||
      (activeFilter === "Specials" && item.special) ||
      (activeFilter === "Drinks" && (item.category === "Wines" || item.category === "Drinks"));

    return categoryMatch && filterMatch;
  });

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-menu">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-menu">Our Menu</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text" data-testid="text-menu-title">
            Culinary Excellence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-menu-subtitle">
            Explore our carefully curated selection of dishes crafted with passion
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="hover-elevate active-elevate-2"
              data-testid={`button-filter-${filter.toLowerCase()}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="mb-12 flex flex-wrap gap-2 justify-center" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className="hover-elevate active-elevate-2"
              data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <Card
              key={`${item.name}-${index}`}
              className="hover-elevate active-elevate-2 transition-all"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 50, 500)}
              data-testid={`card-menu-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-bold" data-testid={`text-menu-item-${index}`}>
                    {item.name}
                  </h3>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-4" data-testid={`text-price-${index}`}>
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-3" data-testid={`text-desc-${index}`}>
                  {item.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" data-testid={`badge-cat-${index}`}>{item.category}</Badge>
                  {item.vegetarian && <Badge variant="secondary" data-testid={`badge-veg-${index}`}>Vegetarian</Badge>}
                  {item.special && <Badge data-testid={`badge-special-${index}`}>Chef's Special</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No items found matching your selection.</p>
          </div>
        )}
      </div>
    </section>
  );
}
