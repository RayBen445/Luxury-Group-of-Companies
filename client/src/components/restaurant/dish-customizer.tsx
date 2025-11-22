import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function DishCustomizer() {
  const [customization, setCustomization] = useState({
    cookingLevel: "medium",
    spiciness: "medium",
    sides: [] as string[],
    sauces: [] as string[],
  });

  const cookingLevels = ["Rare", "Medium Rare", "Medium", "Medium Well", "Well Done"];
  const spiceLevels = ["Mild", "Medium", "Spicy", "Very Spicy"];
  const sides = ["Truffle Fries", "Roasted Vegetables", "Wild Mushrooms", "Mashed Potatoes"];
  const sauces = ["Béarnaise", "Peppercorn", "Red Wine Reduction", "Chimichurri"];

  const toggleOption = (category: "sides" | "sauces", option: string) => {
    setCustomization(prev => ({
      ...prev,
      [category]: prev[category].includes(option)
        ? prev[category].filter(x => x !== option)
        : [...prev[category], option]
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-customizer">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-customize">Build Your Dish</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-customize-title">
            Customize Your Order
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-customize-subtitle">
            Make it perfectly yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="container-customizer">
          <Card className="hover-elevate" data-testid="card-cooking">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6" data-testid="text-cooking-title">Cooking Level</h3>
              <div className="space-y-3">
                {cookingLevels.map((level, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer" data-testid={`label-cooking-${idx}`}>
                    <input
                      type="radio"
                      name="cooking"
                      value={level}
                      checked={customization.cookingLevel === level}
                      onChange={(e) => setCustomization({...customization, cookingLevel: e.target.value})}
                      className="w-4 h-4"
                      data-testid={`radio-cooking-${idx}`}
                    />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-spice">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6" data-testid="text-spice-title">Spiciness Level</h3>
              <div className="space-y-3">
                {spiceLevels.map((level, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer" data-testid={`label-spice-${idx}`}>
                    <input
                      type="radio"
                      name="spice"
                      value={level}
                      checked={customization.spiciness === level}
                      onChange={(e) => setCustomization({...customization, spiciness: e.target.value})}
                      className="w-4 h-4"
                      data-testid={`radio-spice-${idx}`}
                    />
                    <span>{level}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate md:col-span-2" data-testid="card-sides">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6" data-testid="text-sides-title">Select Sides</h3>
              <div className="grid grid-cols-2 gap-4">
                {sides.map((side, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer" data-testid={`label-side-${idx}`}>
                    <Checkbox
                      checked={customization.sides.includes(side)}
                      onCheckedChange={() => toggleOption("sides", side)}
                      data-testid={`checkbox-side-${idx}`}
                    />
                    <span>{side}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate md:col-span-2" data-testid="card-sauces">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-6" data-testid="text-sauces-title">Choose Sauces</h3>
              <div className="grid grid-cols-2 gap-4">
                {sauces.map((sauce, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer" data-testid={`label-sauce-${idx}`}>
                    <Checkbox
                      checked={customization.sauces.includes(sauce)}
                      onCheckedChange={() => toggleOption("sauces", sauce)}
                      data-testid={`checkbox-sauce-${idx}`}
                    />
                    <span>{sauce}</span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" data-testid="button-add-custom-to-cart">
            Add Customized Dish to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}
