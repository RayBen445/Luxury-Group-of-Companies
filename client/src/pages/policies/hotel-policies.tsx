import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function HotelPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/hotel">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Hotel
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Hotel - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We prioritize guest privacy and data security at Royale Luxury Hotel.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal information collected during booking is securely stored</li>
              <li>We comply with international data protection standards</li>
              <li>Your payment information is processed securely</li>
              <li>We do not share guest information with unauthorized parties</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              When you book a room at our hotel, you agree to our terms and conditions.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Check-in: 3:00 PM | Check-out: 11:00 AM</li>
              <li>Valid ID required at check-in</li>
              <li>All guests must be 18 years or older</li>
              <li>Rates are per room, per night</li>
              <li>Complimentary Wi-Fi available in all rooms</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation & Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              Our flexible cancellation policy is designed for your convenience.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free cancellation up to 7 days before arrival</li>
              <li>Cancellations 3-7 days before: 50% charge</li>
              <li>Cancellations less than 3 days: Full charge</li>
              <li>No-shows will be charged the full booking amount</li>
            </ul>
          </section>

          <section data-testid="section-services">
            <h2 className="font-serif text-2xl font-bold mb-4">Hotel Amenities & Services</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>24/7 concierge service</li>
              <li>Spa and wellness facilities</li>
              <li>Fine dining restaurant and lounge</li>
              <li>Business center and meeting rooms</li>
              <li>Airport transfer services available</li>
              <li>Housekeeping service twice daily</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For reservations and inquiries, call +234 807 561 4248 or email hotel@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
