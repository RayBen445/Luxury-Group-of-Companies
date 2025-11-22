import { ExpandedMenuSection } from "@/components/restaurant/expanded-menu";
import { WinePairingSection } from "@/components/restaurant/wine-pairing";

export default function MenuPage() {
  return (
    <main className="pt-24">
      <ExpandedMenuSection />
      <WinePairingSection />
    </main>
  );
}
