import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function HotelFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setSubscribed(true);
          setEmail("");
          setTimeout(() => setSubscribed(false), 3000);
        }
      } catch (error) {
        console.error("Newsletter subscription failed:", error);
      }
    }
  };

  return (
    <footer className="bg-card border-t py-16 px-4 sm:px-6 lg:px-8" data-testid="footer-hotel">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-section-brand">
            <h3 className="font-serif text-2xl font-bold mb-4 gradient-text">Luxury Hotel</h3>
            <p className="text-muted-foreground text-sm mb-4" data-testid="text-tagline">
              Your Home Away From Home.
            </p>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-desc">
              Experience unparalleled luxury and comfort in our world-class accommodations.
            </p>
          </div>

          <div data-testid="footer-section-quick-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hotel">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-home">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/group">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-back">
                    Back to Group
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-about">
                    About
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-contact">
                    Contact
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div data-testid="footer-section-services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-rooms">
                  Room Booking
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-concierge">
                  Concierge Services
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-spa">
                  Spa & Wellness
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-dining">
                  Fine Dining
                </Button>
              </li>
            </ul>
          </div>

          <div data-testid="footer-section-newsletter">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-3" data-testid="text-newsletter-desc">
              Exclusive hotel offers
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2" data-testid="form-newsletter">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full text-sm" data-testid="button-newsletter">
                Subscribe
              </Button>
              {subscribed && (
                <p className="text-green-600 dark:text-green-400 text-xs" data-testid="text-subscribed">
                  ✓ Subscribed!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © 2024 Luxury Hotel. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" data-testid="link-facebook">
                Facebook
              </Button>
              <Button variant="ghost" size="sm" data-testid="link-instagram">
                Instagram
              </Button>
              <Button variant="ghost" size="sm" data-testid="link-twitter">
                Twitter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
