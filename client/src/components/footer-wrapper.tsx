import { useLocation } from "wouter";
import { Footer } from "@/components/restaurant/footer";
import { GroupFooter } from "@/components/group/group-footer";
import { HotelFooter } from "@/components/hotel/hotel-footer";
import { ClubFooter } from "@/components/club/club-footer";
import { LoungeFooter } from "@/components/lounge/lounge-footer";
import { TechFooter } from "@/components/tech/tech-footer";

export function FooterWrapper() {
  const [location] = useLocation();

  // Determine which footer to show based on the current route
  if (location === "/" || location === "") {
    return <GroupFooter />;
  } else if (location.startsWith("/hotel")) {
    return <HotelFooter />;
  } else if (location.startsWith("/club")) {
    return <ClubFooter />;
  } else if (location.startsWith("/lounge")) {
    return <LoungeFooter />;
  } else if (location.startsWith("/tech")) {
    return <TechFooter />;
  } else {
    // Restaurant and all other routes use the restaurant footer
    return <Footer />;
  }
}
