import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function AirlinePoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/airline">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Airline
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Airline - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-booking">
            <h2 className="font-serif text-2xl font-bold mb-4">Booking Policy</h2>
            <p className="text-muted-foreground mb-4">
              Book your luxury flights with confidence.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Booking confirmation sent immediately</li>
              <li>Valid ID required for all passengers</li>
              <li>Check-in opens 24 hours before flight</li>
              <li>Gate closes 30 minutes before departure</li>
              <li>Electronic and printed tickets accepted</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation & Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              Flexible cancellation options for our valued passengers.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free cancellation up to 7 days before flight</li>
              <li>50% refund if cancelled 3-7 days before</li>
              <li>Non-refundable if cancelled less than 3 days before</li>
              <li>Changes allowed up to 24 hours before flight</li>
              <li>Unused tickets valid for 1 year</li>
            </ul>
          </section>

          <section data-testid="section-baggage">
            <h2 className="font-serif text-2xl font-bold mb-4">Baggage Policy</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>First class: 2 checked bags (70 lbs each)</li>
              <li>Business class: 2 checked bags (50 lbs each)</li>
              <li>Economy class: 1 checked bag (50 lbs)</li>
              <li>Carry-on allowance: 1 bag + 1 personal item</li>
              <li>Excess baggage fee: NGN 5,000 per kg</li>
            </ul>
          </section>

          <section data-testid="section-services">
            <h2 className="font-serif text-2xl font-bold mb-4">In-Flight Services</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Complimentary meal service on all flights</li>
              <li>Premium beverage selection</li>
              <li>WiFi available on all routes</li>
              <li>Entertainment system on modern aircraft</li>
              <li>Flat-bed seats on international flights (First/Business)</li>
            </ul>
          </section>

          <section data-testid="section-liability">
            <h2 className="font-serif text-2xl font-bold mb-4">Liability & Compensation</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Airline liable for delays exceeding 3 hours</li>
              <li>Compensation: NGN 50,000 for domestic flights</li>
              <li>Compensation: NGN 100,000 for international flights</li>
              <li>Lost baggage compensation up to NGN 500,000</li>
              <li>Overbooking compensation as per regulations</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For reservations, call +234 807 561 4248 or email reservations@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
