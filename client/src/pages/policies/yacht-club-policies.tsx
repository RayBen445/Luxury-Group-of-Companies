import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function YachtClubPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/yacht-club">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Yacht Club
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Yacht Club - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-membership">
            <h2 className="font-serif text-2xl font-bold mb-4">Membership Policy</h2>
            <p className="text-muted-foreground mb-4">
              Exclusive membership to our prestigious yacht club.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Annual membership: NGN 2,000,000</li>
              <li>Lifetime membership: NGN 15,000,000</li>
              <li>Guest privileges: 4 guests per month</li>
              <li>Boat mooring available</li>
              <li>Access to all club facilities</li>
            </ul>
          </section>

          <section data-testid="section-safety">
            <h2 className="font-serif text-2xl font-bold mb-4">Safety & Maritime Regulations</h2>
            <p className="text-muted-foreground mb-4">
              All activities comply with maritime safety regulations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Coast Guard regulations strictly enforced</li>
              <li>Mandatory life jacket usage</li>
              <li>Professional crew required for certain activities</li>
              <li>Weather-based operational restrictions</li>
              <li>Insurance required for all vessels</li>
            </ul>
          </section>

          <section data-testid="section-conduct">
            <h2 className="font-serif text-2xl font-bold mb-4">Member Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Respectful interaction with all members and staff</li>
              <li>No excessive noise or disruptive behavior</li>
              <li>Environmental protection mandatory</li>
              <li>No discharge of pollutants</li>
              <li>Violations may result in suspension</li>
            </ul>
          </section>

          <section data-testid="section-services">
            <h2 className="font-serif text-2xl font-bold mb-4">Club Services & Amenities</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Full-service marina with 24/7 security</li>
              <li>Professional maintenance and repair services</li>
              <li>Fine dining restaurant</li>
              <li>Spa and fitness facilities</li>
              <li>Event hosting and private functions</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For membership inquiries, call +234 807 561 4248 or email yachtclub@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
