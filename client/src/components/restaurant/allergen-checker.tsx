import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AllergenCheckerProps {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  spicy?: boolean;
}

export function AllergenChecker({ vegetarian, vegan, glutenFree, spicy }: AllergenCheckerProps) {
  const allergens = [];

  if (vegetarian) allergens.push({ label: "Vegetarian", color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" });
  if (vegan) allergens.push({ label: "Vegan", color: "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300" });
  if (glutenFree) allergens.push({ label: "Gluten Free", color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300" });
  if (spicy) allergens.push({ label: "Spicy", color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300" });

  if (allergens.length === 0) return null;

  return (
    <div className="space-y-2 mt-3" data-testid="container-allergen-checker">
      <div className="flex flex-wrap gap-2">
        {allergens.map((allergen, idx) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-xs font-medium ${allergen.color}`}
            data-testid={`badge-allergen-${allergen.label.toLowerCase().replace(" ", "-")}`}
          >
            {allergen.label}
          </span>
        ))}
      </div>
    </div>
  );
}
