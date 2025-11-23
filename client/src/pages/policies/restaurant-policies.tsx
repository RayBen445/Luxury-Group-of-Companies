import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function RestaurantPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Restaurant
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Restaurant - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              At Royale Luxury Restaurant, we are committed to protecting your privacy. We collect information to provide you with the best dining experience and excellent customer service.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We collect booking information, contact details, and dining preferences</li>
              <li>Your information is used only for reservation management and service improvement</li>
              <li>We never share your personal data with third parties without consent</li>
              <li>Cookies are used to enhance your browsing experience</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              By making a reservation at Royale Luxury Restaurant, you agree to our terms of service.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Reservations are subject to availability</li>
              <li>Dress code: Smart casual to formal attire required</li>
              <li>We accept major payment methods and digital wallets</li>
              <li>All prices are in NGN unless otherwise stated</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation & Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              We have a flexible cancellation policy to accommodate our valued guests.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Cancellations made 48 hours before reservation: Full refund</li>
              <li>Cancellations made 24-48 hours before: 50% refund</li>
              <li>Cancellations made less than 24 hours before: No refund</li>
              <li>No-shows will be charged in full</li>
            </ul>
          </section>

          <section data-testid="section-dining">
            <h2 className="font-serif text-2xl font-bold mb-4">Dining Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Children under 12 welcome at lunch service</li>
              <li>Group reservations (8+) require pre-payment</li>
              <li>Menu modifications available upon request (24-hour notice)</li>
              <li>Our sommelier team can assist with wine pairings</li>
              <li>Special dietary requirements accommodated with advance notice</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For inquiries, contact us at +234 807 561 4248 or email restaurant@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
