import { useState } from "react";
import { ExpandedMenuSection } from "@/components/restaurant/expanded-menu";
import { WinePairingSection } from "@/components/restaurant/wine-pairing";
import { MenuFilters } from "@/components/restaurant/menu-filters";
import { FAQSection } from "@/components/restaurant/faq-section";
import { DishComparison } from "@/components/restaurant/dish-comparison";
import { SeasonalSpecials } from "@/components/restaurant/seasonal-specials";

export default function MenuPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  return (
    <main className="pt-24">
      <MenuFilters selectedFilters={selectedFilters} onChange={setSelectedFilters} />
      <ExpandedMenuSection />
      <DishComparison />
      <WinePairingSection />
      <SeasonalSpecials />
      <FAQSection />
    </main>
  );
}
