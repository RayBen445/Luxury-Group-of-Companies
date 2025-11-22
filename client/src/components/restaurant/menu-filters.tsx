import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MenuFiltersProps {
  selectedFilters: string[];
  onChange: (filters: string[]) => void;
}

export function MenuFilters({ selectedFilters, onChange }: MenuFiltersProps) {
  const filters = [
    { id: "vegetarian", label: "Vegetarian", icon: "🥬" },
    { id: "vegan", label: "Vegan", icon: "🌱" },
    { id: "glutenFree", label: "Gluten Free", icon: "🌾" },
    { id: "spicy", label: "Spicy", icon: "🌶️" },
  ];

  const toggleFilter = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(f => f !== filterId)
      : [...selectedFilters, filterId];
    onChange(newFilters);
  };

  return (
    <div className="space-y-4 p-6 bg-card rounded-lg mb-8" data-testid="section-menu-filters">
      <h3 className="font-semibold text-lg" data-testid="text-filter-title">Filter by Dietary Preference</h3>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
            size="sm"
            onClick={() => toggleFilter(filter.id)}
            data-testid={`button-filter-${filter.id}`}
            className="gap-2"
          >
            <span>{filter.icon}</span>
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
