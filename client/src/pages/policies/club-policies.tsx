import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ClubPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/club">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Club
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Club - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-membership">
            <h2 className="font-serif text-2xl font-bold mb-4">Membership Policy</h2>
            <p className="text-muted-foreground mb-4">
              Our membership program is designed to provide exclusive benefits to our valued members.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Annual membership fee: NGN 500,000</li>
              <li>Gold tier: NGN 1,000,000 with additional benefits</li>
              <li>Platinum tier: NGN 2,000,000 with VIP privileges</li>
              <li>Members receive priority event access</li>
              <li>Family membership available (up to 4 members)</li>
            </ul>
          </section>

          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              Member information is kept strictly confidential and secure.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal data is never shared with third parties</li>
              <li>We use secure systems to protect member records</li>
              <li>Opt-out options available for communications</li>
              <li>CCTV systems for security purposes only</li>
            </ul>
          </section>

          <section data-testid="section-conduct">
            <h2 className="font-serif text-2xl font-bold mb-4">Code of Conduct</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Respect for all members and staff required</li>
              <li>Smart casual attire in public areas</li>
              <li>No smoking in designated areas</li>
              <li>Photography policy respected</li>
              <li>Violations may result in suspension or termination</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation & Termination</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Annual membership: Cancellable with 30 days notice</li>
              <li>Prorated refund after first 3 months</li>
              <li>No refund within first 3 months of membership</li>
              <li>Management reserve right to terminate membership for violations</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For membership inquiries, call +234 807 561 4248 or email club@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
