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
import { FloatingReserveButton } from "@/components/restaurant/floating-reserve";
import { WhatsAppChat } from "@/components/restaurant/whatsapp-chat";
import { LiveChat } from "@/components/restaurant/live-chat";
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

function Router() {
  const [location] = useLocation();
  const isGroupRoute = location === "/" || location.startsWith("/hotel") || location.startsWith("/club") || location.startsWith("/lounge") || location.startsWith("/tech") || location.startsWith("/bank");

  return (
    <Switch>
      {/* Group Properties */}
      <Route path="/" component={GroupLandingPage} />
      <Route path="/hotel" component={HotelPage} />
      <Route path="/club" component={ClubPage} />
      <Route path="/lounge" component={LoungePage} />
      <Route path="/tech" component={TechPage} />
      <Route path="/bank" component={BankPage} />
      
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
  const isGroupRoute = location === "/" || location.startsWith("/hotel") || location.startsWith("/club") || location.startsWith("/lounge") || location.startsWith("/tech") || location.startsWith("/bank");

  return isGroupRoute ? <GroupNavigation /> : <Navigation />;
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
          <FloatingReserveButton />
          <WhatsAppChat />
          <LiveChat />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
