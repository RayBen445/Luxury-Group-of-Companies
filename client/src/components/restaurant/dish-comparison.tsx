import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const comparisonData = [
  {
    category: "Beef",
    dishes: [
      { name: "Filet Mignon", price: 58, calories: 450, protein: 45, served: "8oz" },
      { name: "Ribeye Steak", price: 52, calories: 520, protein: 48, served: "10oz" },
      { name: "Wagyu Ribeye", price: 98, calories: 580, protein: 42, served: "8oz" },
    ]
  },
  {
    category: "Seafood",
    dishes: [
      { name: "Chilean Sea Bass", price: 64, calories: 280, protein: 40, served: "8oz" },
      { name: "Lobster Thermidor", price: 72, calories: 320, protein: 35, served: "1.5lb" },
      { name: "Pan-Seared Salmon", price: 42, calories: 380, protein: 38, served: "6oz" },
    ]
  }
];

export function DishComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-comparison">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-comparison">Compare</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-comparison-title">
            Dish Comparison
          </h2>
        </div>

        <div className="space-y-12" data-testid="container-comparisons">
          {comparisonData.map((section, sIdx) => (
            <div key={sIdx} data-testid={`section-${section.category.toLowerCase()}`}>
              <h3 className="font-serif text-2xl font-bold mb-6" data-testid={`text-category-${sIdx}`}>
                {section.category}
              </h3>
              <div className="overflow-x-auto" data-testid={`table-${sIdx}`}>
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2" data-testid={`header-${sIdx}`}>
                      <th className="text-left p-4 font-semibold" data-testid="col-dish">Dish</th>
                      <th className="text-right p-4 font-semibold" data-testid="col-price">Price</th>
                      <th className="text-right p-4 font-semibold" data-testid="col-calories">Calories</th>
                      <th className="text-right p-4 font-semibold" data-testid="col-protein">Protein</th>
                      <th className="text-right p-4 font-semibold" data-testid="col-served">Serving</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.dishes.map((dish, dIdx) => (
                      <tr key={dIdx} className="border-b hover:bg-muted/50" data-testid={`row-${sIdx}-${dIdx}`}>
                        <td className="p-4" data-testid={`text-dish-${sIdx}-${dIdx}`}>{dish.name}</td>
                        <td className="p-4 text-right text-primary font-semibold" data-testid={`text-price-${sIdx}-${dIdx}`}>${dish.price}</td>
                        <td className="p-4 text-right" data-testid={`text-calories-${sIdx}-${dIdx}`}>{dish.calories}</td>
                        <td className="p-4 text-right" data-testid={`text-protein-${sIdx}-${dIdx}`}>{dish.protein}g</td>
                        <td className="p-4 text-right text-muted-foreground" data-testid={`text-served-${sIdx}-${dIdx}`}>{dish.served}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
