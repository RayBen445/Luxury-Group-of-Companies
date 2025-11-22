import { LoyaltyProgram } from "@/components/restaurant/loyalty-program";
import { FavoritesSection } from "@/components/restaurant/favorites";
import { PromoCodes } from "@/components/restaurant/promo-codes";

export default function LoyaltyPage() {
  return (
    <main className="pt-24">
      <LoyaltyProgram />
      <FavoritesSection />
      <PromoCodes />
    </main>
  );
}
