import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CarCompanyFooter() {
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
    <footer className="bg-card border-t py-16 px-4 sm:px-6 lg:px-8" data-testid="footer-car-company">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-section-brand">
            <h3 className="font-serif text-2xl font-bold mb-4 gradient-text">Royale Motors</h3>
            <p className="text-muted-foreground text-sm mb-4" data-testid="text-tagline">
              Excellence in Motion.
            </p>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-desc">
              Experience the world's finest luxury automobiles with premium service and financing options.
            </p>
          </div>

          <div data-testid="footer-section-quick-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/car-company">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-home">
                    Our Fleet
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-back">
                    Back to Group
                  </Button>
                </Link>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-about">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-contact">
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          <div data-testid="footer-section-services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-buy">
                  Buy Vehicles
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-lease">
                  Lease Options
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-maintenance">
                  Service & Maintenance
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-financing">
                  Financing
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-test-drive">
                  Schedule Test Drive
                </Button>
              </li>
            </ul>
          </div>

          <div data-testid="footer-section-contact">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-muted-foreground text-sm mb-4" data-testid="text-contact-intro">
              Get in touch with our specialists
            </p>
            <div className="space-y-3">
              <a href="tel:+2348075614248">
                <Button variant="outline" className="w-full text-sm justify-start" data-testid="button-phone-contact">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +234 807 561 4248
                </Button>
              </a>
              <a href="mailto:luxurygroupofcompanies@gmail.com">
                <Button variant="outline" className="w-full text-sm justify-start" data-testid="button-email-contact">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8" data-testid="footer-bottom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div data-testid="footer-newsletter">
              <h4 className="font-semibold mb-3">Subscribe to Updates</h4>
              <p className="text-sm text-muted-foreground mb-4" data-testid="text-newsletter-desc">
                Get notified about new models and exclusive offers
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2" data-testid="form-newsletter">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button type="submit" data-testid="button-subscribe">
                  Subscribe
                </Button>
              </form>
              {subscribed && (
                <p className="text-sm text-primary mt-2" data-testid="text-subscribed">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4 border-t" data-testid="footer-copyright">
            <p data-testid="text-copyright">
              &copy; 2024 Royale Luxury Motors. Part of Royale Luxury Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
