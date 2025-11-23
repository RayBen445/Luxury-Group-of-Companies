import { useLocation } from "wouter";
import { Footer } from "@/components/restaurant/footer";
import { GroupFooter } from "@/components/group/group-footer";
import { HotelFooter } from "@/components/hotel/hotel-footer";
import { ClubFooter } from "@/components/club/club-footer";
import { LoungeFooter } from "@/components/lounge/lounge-footer";
import { TechFooter } from "@/components/tech/tech-footer";
import { BankFooter } from "@/components/bank/bank-footer";
import { ConstructionFooter } from "@/components/construction/construction-footer";
import { UniversityFooter } from "@/components/university/university-footer";
import { HospitalFooter } from "@/components/hospital/hospital-footer";
import { YachtClubFooter } from "@/components/yacht-club/yacht-club-footer";
import { AirlineFooter } from "@/components/airline/airline-footer";
import { SupermarketFooter } from "@/components/supermarket/supermarket-footer";
import { CarCompanyFooter } from "@/components/car-company/car-company-footer";

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
  } else if (location.startsWith("/bank")) {
    return <BankFooter />;
  } else if (location.startsWith("/construction")) {
    return <ConstructionFooter />;
  } else if (location.startsWith("/university")) {
    return <UniversityFooter />;
  } else if (location.startsWith("/hospital")) {
    return <HospitalFooter />;
  } else if (location.startsWith("/yacht-club")) {
    return <YachtClubFooter />;
  } else if (location.startsWith("/airline")) {
    return <AirlineFooter />;
  } else if (location.startsWith("/supermarket")) {
    return <SupermarketFooter />;
  } else if (location.startsWith("/car-company")) {
    return <CarCompanyFooter />;
  } else {
    // Restaurant and all other routes use the restaurant footer
    return <Footer />;
  }
}
