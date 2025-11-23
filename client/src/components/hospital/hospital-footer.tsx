import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function HospitalFooter() {
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
    <footer className="bg-card border-t py-16 px-4 sm:px-6 lg:px-8" data-testid="footer-hospital">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-testid="footer-section-brand">
            <h3 className="font-serif text-2xl font-bold mb-4 gradient-text">Luxury Hospital</h3>
            <p className="text-muted-foreground text-sm mb-4" data-testid="text-tagline">
              Healing with Excellence.
            </p>
            <p className="text-muted-foreground text-sm" data-testid="text-footer-desc">
              State-of-the-art medical facility providing premium healthcare services.
            </p>
          </div>

          <div data-testid="footer-section-quick-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hospital">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-footer-home">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/">
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
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-emergency">
                  Emergency Care
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-surgery">
                  Surgery
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-diagnostics">
                  Diagnostics
                </Button>
              </li>
              <li>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground" data-testid="link-wellness">
                  Wellness
                </Button>
              </li>
            </ul>
          </div>

          <div data-testid="footer-section-contact">
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-muted-foreground text-sm mb-4" data-testid="text-contact-intro">
              Reach out to us
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
              <a href="https://wa.me/2348075614248" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full text-sm justify-start" data-testid="button-whatsapp-contact">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.577 0-3.084.235-4.555.704l-.32.094-.33.1-3.228 10.62 2.194.904.527 1.566H7.28l.02-.005c1.338 0 2.631-.257 3.84-.745l.424-.195 8.82-5.07c2.468-1.423 4.053-4.071 4.053-7.07 0-4.396-3.582-7.978-7.978-7.978z" />
                  </svg>
                  WhatsApp
                </Button>
              </a>
              <a href="mailto:luxuryhospital@gmail.com">
                <Button variant="outline" className="w-full text-sm justify-start" data-testid="button-email-contact">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  luxuryhospital@gmail.com
                </Button>
              </a>
            </div>
          </div>

          <div data-testid="footer-section-newsletter">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-3" data-testid="text-newsletter-desc">
              Health & wellness tips
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
              © 2024 Luxury Hospital. All rights reserved.
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
