import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function LoungePoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/lounge">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Lounge
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Lounge - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              Your privacy and comfort are paramount at Royale Luxury Lounge.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Guest information is kept confidential</li>
              <li>CCTV for security purposes only</li>
              <li>No photography without permission</li>
              <li>We comply with all privacy regulations</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              When you visit our lounge, you agree to our policies.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Smart casual attire required</li>
              <li>Minimum spending not required but encouraged</li>
              <li>Reservations recommended on weekends</li>
              <li>Walk-ins welcome subject to capacity</li>
              <li>All major payment methods accepted</li>
            </ul>
          </section>

          <section data-testid="section-conduct">
            <h2 className="font-serif text-2xl font-bold mb-4">Guest Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Respectful behavior toward staff and guests</li>
              <li>No loud disruptions or aggressive conduct</li>
              <li>Smoking permitted in designated areas only</li>
              <li>Zero tolerance for harassment or discrimination</li>
              <li>Management reserves right to refuse service</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Reservation Policy</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free cancellation up to 24 hours before</li>
              <li>Late cancellations subject to cover charge</li>
              <li>Private events require deposit of 30%</li>
              <li>Group reservations (10+) must pre-order</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For reservations, call +234 807 561 4248 or email lounge@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
