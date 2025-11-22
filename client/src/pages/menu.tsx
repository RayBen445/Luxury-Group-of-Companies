import { MenuSection } from "@/components/restaurant/menu-section";
import { WinePairingSection } from "@/components/restaurant/wine-pairing";

export default function MenuPage() {
  return (
    <main className="pt-24">
      <MenuSection />
      <WinePairingSection />
    </main>
  );
}
