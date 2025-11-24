import { useState, useEffect } from "react";
import { Menu, X, Building2, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/restaurant/theme-toggle";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function GroupNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const groupLinks = [
    { name: "Home", href: "/" },
    { name: "Restaurant", href: "/restaurant" },
  ];

  const properties = [
    { name: "Hotel", href: "/hotel" },
    { name: "Club", href: "/club" },
    { name: "Lounge", href: "/lounge" },
    { name: "Tech", href: "/tech" },
    { name: "Bank", href: "/bank" },
    { name: "Construction", href: "/construction" },
    { name: "University", href: "/university" },
    { name: "Hospital", href: "/hospital" },
    { name: "Yacht Club", href: "/yacht-club" },
    { name: "Airline", href: "/airline" },
    { name: "Spa & Wellness", href: "/spa-wellness" },
    { name: "Supermarket", href: "/supermarket" },
    { name: "Car Company", href: "/car-company" },
  ];

  return (
    <motion.nav
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      data-testid="nav-group"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80"
              data-testid="group-logo"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Building2 className="w-6 h-6 text-primary" />
              </motion.div>
              <h1 className="font-serif text-xl sm:text-2xl gradient-text font-bold">
                Luxury Group
              </h1>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {groupLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="ghost"
                  className="hover-elevate active-elevate-2"
                  data-testid={`link-group-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            
            {/* Properties Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover-elevate active-elevate-2 flex items-center gap-1"
                  data-testid="button-group-properties-menu"
                >
                  Properties
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {properties.map((prop, idx) => (
                  <div key={prop.name}>
                    {idx === 3 || idx === 6 ? <DropdownMenuSeparator /> : null}
                    <Link href={prop.href}>
                      <DropdownMenuItem
                        className="cursor-pointer"
                        data-testid={`link-properties-${prop.name.toLowerCase()}`}
                      >
                        {prop.name}
                      </DropdownMenuItem>
                    </Link>
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Link href="/hotel">
              <Button className="pulse-gold" data-testid="button-group-book">
                Book Hotel
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-group-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {groupLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <Button
                  variant="ghost"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-start hover-elevate active-elevate-2"
                  data-testid={`link-group-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            
            <div className="pt-2 border-t">
              <p className="px-2 py-2 text-sm font-semibold text-muted-foreground">Properties</p>
              {properties.map((prop) => (
                <Link key={prop.name} href={prop.href}>
                  <Button
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full justify-start pl-6 hover-elevate active-elevate-2 text-sm"
                    data-testid={`link-group-mobile-${prop.name.toLowerCase()}`}
                  >
                    {prop.name}
                  </Button>
                </Link>
              ))}
            </div>
            
            <Link href="/hotel">
              <Button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full pulse-gold mt-4"
                data-testid="button-group-mobile-book"
              >
                Book Hotel
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
