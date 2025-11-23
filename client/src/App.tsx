import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/restaurant/navigation";
import { GroupNavigation } from "@/components/group/group-navigation";
import { FooterWrapper } from "@/components/footer-wrapper";
import { Preloader } from "@/components/restaurant/preloader";
import { ScrollToTop } from "@/components/restaurant/scroll-to-top";
import { WhatsAppChat } from "@/components/restaurant/whatsapp-chat";
import { LiveChat } from "@/components/restaurant/live-chat";
import { FloatingReserveButton } from "@/components/restaurant/floating-reserve";
import NotFound from "@/pages/not-found";
import GroupLandingPage from "@/pages/group-landing";
import HomePage from "@/pages/home";
import MenuPage from "@/pages/menu";
import ReservationsPage from "@/pages/reservations";
import ChefsPage from "@/pages/chefs";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import FoodOrderingPage from "@/pages/food-ordering";
import PoliciesPage from "@/pages/policies";
import LoyaltyPage from "@/pages/loyalty";
import SettingsPage from "@/pages/settings";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";
import CancellationPolicyPage from "@/pages/cancellation-policy";
import HotelPage from "@/pages/hotel";
import ClubPage from "@/pages/club";
import LoungePage from "@/pages/lounge";
import TechPage from "@/pages/tech";
import BankPage from "@/pages/bank";
import BankOpenAccountPage from "@/pages/bank-open-account";
import BankDashboardPage from "@/pages/bank-dashboard";
import ConstructionPage from "@/pages/construction";
import UniversityPage from "@/pages/university";
import HospitalPage from "@/pages/hospital";
import YachtClubPage from "@/pages/yacht-club";
import AirlinePage from "@/pages/airline";
import SpaWellnessPage from "@/pages/spa-wellness";
import SupermarketPage from "@/pages/supermarket";
import SupermarketProductPage from "@/pages/supermarket-product";
import SupermarketCartPage from "@/pages/supermarket-cart";
import SupermarketCheckoutPage from "@/pages/supermarket-checkout";
import CarCompanyPage from "@/pages/car-company";
import CarCompanyVehiclePage from "@/pages/car-company-vehicle";
import LoginPage from "@/pages/auth-login";
import SignupPage from "@/pages/auth-signup";
import AboutGroupPage from "@/pages/about-group";
import RestaurantPoliciesPage from "@/pages/policies/restaurant-policies";
import HotelPoliciesPage from "@/pages/policies/hotel-policies";
import BankPoliciesPage from "@/pages/policies/bank-policies";
import ClubPoliciesPage from "@/pages/policies/club-policies";
import TechPoliciesPage from "@/pages/policies/tech-policies";
import LoungePoliciesPage from "@/pages/policies/lounge-policies";
import ConstructionPoliciesPage from "@/pages/policies/construction-policies";
import UniversityPoliciesPage from "@/pages/policies/university-policies";
import HospitalPoliciesPage from "@/pages/policies/hospital-policies";
import YachtClubPoliciesPage from "@/pages/policies/yacht-club-policies";
import AirlinePoliciesPage from "@/pages/policies/airline-policies";
import SpaWellnessPoliciesPage from "@/pages/policies/spa-wellness-policies";

function Router() {
  const [location] = useLocation();
  const isGroupRoute = location === "/" || location.startsWith("/hotel") || location.startsWith("/club") || location.startsWith("/lounge") || location.startsWith("/tech") || location.startsWith("/bank") || location.startsWith("/construction") || location.startsWith("/university") || location.startsWith("/hospital") || location.startsWith("/yacht-club") || location.startsWith("/airline") || location.startsWith("/spa-wellness") || location.startsWith("/supermarket") || location.startsWith("/car-company");

  return (
    <Switch>
      {/* Group Landing - First Page */}
      <Route path="/" component={GroupLandingPage} />
      
      {/* Group Properties */}
      <Route path="/hotel" component={HotelPage} />
      <Route path="/club" component={ClubPage} />
      <Route path="/lounge" component={LoungePage} />
      <Route path="/tech" component={TechPage} />
      <Route path="/bank" component={BankPage} />
      <Route path="/bank/open-account" component={BankOpenAccountPage} />
      <Route path="/bank/dashboard" component={BankDashboardPage} />
      <Route path="/construction" component={ConstructionPage} />
      <Route path="/university" component={UniversityPage} />
      <Route path="/hospital" component={HospitalPage} />
      <Route path="/yacht-club" component={YachtClubPage} />
      <Route path="/airline" component={AirlinePage} />
      <Route path="/spa-wellness" component={SpaWellnessPage} />
      <Route path="/supermarket" component={SupermarketPage} />
      <Route path="/supermarket/product/:id" component={SupermarketProductPage} />
      <Route path="/supermarket/cart" component={SupermarketCartPage} />
      <Route path="/supermarket/checkout" component={SupermarketCheckoutPage} />
      <Route path="/car-company" component={CarCompanyPage} />
      <Route path="/car-company/vehicle/:id" component={CarCompanyVehiclePage} />
      
      {/* Authentication Routes */}
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/signup" component={SignupPage} />
      <Route path="/about-group" component={AboutGroupPage} />

      {/* Policy Routes */}
      <Route path="/restaurant/policies" component={RestaurantPoliciesPage} />
      <Route path="/hotel/policies" component={HotelPoliciesPage} />
      <Route path="/bank/policies" component={BankPoliciesPage} />
      <Route path="/club/policies" component={ClubPoliciesPage} />
      <Route path="/tech/policies" component={TechPoliciesPage} />
      <Route path="/lounge/policies" component={LoungePoliciesPage} />
      <Route path="/construction/policies" component={ConstructionPoliciesPage} />
      <Route path="/university/policies" component={UniversityPoliciesPage} />
      <Route path="/hospital/policies" component={HospitalPoliciesPage} />
      <Route path="/yacht-club/policies" component={YachtClubPoliciesPage} />
      <Route path="/airline/policies" component={AirlinePoliciesPage} />
      <Route path="/spa-wellness/policies" component={SpaWellnessPoliciesPage} />
      
      {/* Restaurant Routes */}
      <Route path="/restaurant" component={HomePage} />
      <Route path="/restaurant/menu" component={MenuPage} />
      <Route path="/restaurant/food-ordering" component={FoodOrderingPage} />
      <Route path="/restaurant/reservations" component={ReservationsPage} />
      <Route path="/restaurant/chefs" component={ChefsPage} />
      <Route path="/restaurant/gallery" component={GalleryPage} />
      <Route path="/restaurant/about" component={AboutPage} />
      <Route path="/restaurant/contact" component={ContactPage} />
      <Route path="/restaurant/policies" component={PoliciesPage} />
      <Route path="/restaurant/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/restaurant/terms-of-service" component={TermsOfServicePage} />
      <Route path="/restaurant/cancellation-policy" component={CancellationPolicyPage} />
      <Route path="/restaurant/loyalty" component={LoyaltyPage} />
      <Route path="/restaurant/settings" component={SettingsPage} />
      
      {/* Legacy routes for backward compatibility */}
      <Route path="/menu" component={MenuPage} />
      <Route path="/food-ordering" component={FoodOrderingPage} />
      <Route path="/reservations" component={ReservationsPage} />
      <Route path="/chefs" component={ChefsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/policies" component={PoliciesPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/cancellation-policy" component={CancellationPolicyPage} />
      <Route path="/loyalty" component={LoyaltyPage} />
      <Route path="/settings" component={SettingsPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function NavigationWrapper() {
  const [location] = useLocation();
  const isGroupRoute = location === "/" || location.startsWith("/hotel") || location.startsWith("/club") || location.startsWith("/lounge") || location.startsWith("/tech") || location.startsWith("/bank") || location.startsWith("/construction") || location.startsWith("/university") || location.startsWith("/hospital") || location.startsWith("/yacht-club") || location.startsWith("/airline") || location.startsWith("/spa-wellness") || location.startsWith("/supermarket") || location.startsWith("/car-company");

  return isGroupRoute ? <GroupNavigation /> : <Navigation />;
}

function ConditionalRestaurantComponents() {
  const [location] = useLocation();
  const isRestaurantRoute = location.startsWith("/restaurant") || location.startsWith("/menu") || location.startsWith("/food-ordering") || location.startsWith("/reservations") || location.startsWith("/chefs") || location.startsWith("/gallery") || location.startsWith("/about") || location.startsWith("/contact") || location.startsWith("/policies") || location.startsWith("/privacy-policy") || location.startsWith("/terms-of-service") || location.startsWith("/cancellation-policy") || location.startsWith("/loyalty") || location.startsWith("/settings") || location === "/";

  if (!isRestaurantRoute) {
    return null;
  }

  return (
    <>
      <FloatingReserveButton />
      <LiveChat />
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Preloader />
          <NavigationWrapper />
          <Router />
          <FooterWrapper />
          <ScrollToTop />
          <WhatsAppChat />
          <ConditionalRestaurantComponents />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
