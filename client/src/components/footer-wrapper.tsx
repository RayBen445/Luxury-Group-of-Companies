import { useLocation } from "wouter";
import { Footer } from "@/components/restaurant/footer";
import { GroupFooter } from "@/components/group/group-footer";
import { HotelFooter } from "@/components/hotel/hotel-footer";
import { ClubFooter } from "@/components/club/club-footer";
import { LoungeFooter } from "@/components/lounge/lounge-footer";
import { TechFooter } from "@/components/tech/tech-footer";
import { BankFooter } from "@/components/bank/bank-footer";

export function FooterWrapper() {
  const [location] = useLocation();

  // Determine which footer to show based on the current route
  if (location === "/" || location === "") {
    return <GroupFooter />;
  } else if (location.startsWith("/hotel") || location.startsWith("/club") || location.startsWith("/lounge") || location.startsWith("/tech") || location.startsWith("/bank") || location.startsWith("/construction") || location.startsWith("/university") || location.startsWith("/hospital") || location.startsWith("/yacht-club") || location.startsWith("/airline")) {
    // All group properties use the group footer
    return <GroupFooter />;
  } else {
    // Restaurant and all other routes use the restaurant footer
    return <Footer />;
  }
}
