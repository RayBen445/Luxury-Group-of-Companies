import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  allergens: string[];
}

interface NutritionInfoProps {
  nutrition?: NutritionData;
}

export function NutritionInfo({ nutrition }: NutritionInfoProps) {
  if (!nutrition) return null;

  return (
    <div className="space-y-4 mt-4" data-testid="container-nutrition">
      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800" data-testid="card-nutrition">
        <CardContent className="p-6">
          <h4 className="font-semibold mb-4" data-testid="text-nutrition-title">Nutritional Information</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div data-testid="item-calories">
              <p className="text-sm text-muted-foreground" data-testid="label-calories">Calories</p>
              <p className="text-xl font-bold text-primary" data-testid="value-calories">{nutrition.calories}</p>
            </div>
            <div data-testid="item-protein">
              <p className="text-sm text-muted-foreground" data-testid="label-protein">Protein</p>
              <p className="text-xl font-bold text-primary" data-testid="value-protein">{nutrition.protein}g</p>
            </div>
            <div data-testid="item-carbs">
              <p className="text-sm text-muted-foreground" data-testid="label-carbs">Carbs</p>
              <p className="text-xl font-bold text-primary" data-testid="value-carbs">{nutrition.carbs}g</p>
            </div>
            <div data-testid="item-fat">
              <p className="text-sm text-muted-foreground" data-testid="label-fat">Fat</p>
              <p className="text-xl font-bold text-primary" data-testid="value-fat">{nutrition.fat}g</p>
            </div>
            <div data-testid="item-fiber">
              <p className="text-sm text-muted-foreground" data-testid="label-fiber">Fiber</p>
              <p className="text-xl font-bold text-primary" data-testid="value-fiber">{nutrition.fiber}g</p>
            </div>
          </div>

          {nutrition.allergens.length > 0 && (
            <div className="mt-6 pt-6 border-t" data-testid="container-allergens">
              <p className="text-sm font-semibold mb-3" data-testid="text-allergens-title">Contains Allergens:</p>
              <div className="flex flex-wrap gap-2">
                {nutrition.allergens.map((allergen, idx) => (
                  <Badge key={idx} variant="destructive" data-testid={`badge-allergen-${idx}`}>
                    {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
