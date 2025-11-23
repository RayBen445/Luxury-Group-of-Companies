import { useState, useEffect } from "react";
import { Menu, X, Building2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/restaurant/theme-toggle";

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
    { name: "Hotel", href: "/hotel" },
    { name: "Restaurant", href: "/restaurant" },
    { name: "Club", href: "/club" },
    { name: "Lounge", href: "/lounge" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
      data-testid="nav-group"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80" data-testid="group-logo">
              <Building2 className="w-6 h-6 text-primary" />
              <h1 className="font-serif text-xl sm:text-2xl gradient-text font-bold">
                Luxury Group
              </h1>
            </div>
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
            <Link href="/hotel">
              <Button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full pulse-gold"
                data-testid="button-group-mobile-book"
              >
                Book Hotel
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
