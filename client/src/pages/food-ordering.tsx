import { FoodOrderingSection } from "@/components/restaurant/food-ordering";
import { DishCustomizer } from "@/components/restaurant/dish-customizer";
import { BundleDeals } from "@/components/restaurant/bundle-deals";
import { PromoCodes } from "@/components/restaurant/promo-codes";
import { DishComparison } from "@/components/restaurant/dish-comparison";
import { FavoritesSection } from "@/components/restaurant/favorites";

export default function FoodOrderingPage() {
  return (
    <main className="pt-24">
      <FoodOrderingSection />
      <FavoritesSection />
      <DishComparison />
      <DishCustomizer />
      <BundleDeals />
      <PromoCodes />
    </main>
  );
}
