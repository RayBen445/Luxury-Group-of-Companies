import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/restaurant/navigation";
import { Footer } from "@/components/restaurant/footer";
import { Preloader } from "@/components/restaurant/preloader";
import { ScrollToTop } from "@/components/restaurant/scroll-to-top";
import { FloatingReserveButton } from "@/components/restaurant/floating-reserve";
import { WhatsAppChat } from "@/components/restaurant/whatsapp-chat";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import MenuPage from "@/pages/menu";
import ReservationsPage from "@/pages/reservations";
import ChefsPage from "@/pages/chefs";
import GalleryPage from "@/pages/gallery";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import FoodOrderingPage from "@/pages/food-ordering";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/food-ordering" component={FoodOrderingPage} />
      <Route path="/reservations" component={ReservationsPage} />
      <Route path="/chefs" component={ChefsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Preloader />
          <Navigation />
          <Router />
          <Footer />
          <ScrollToTop />
          <FloatingReserveButton />
          <WhatsAppChat />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
