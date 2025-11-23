import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function ConstructionPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/construction">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Construction
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Construction - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy & Confidentiality</h2>
            <p className="text-muted-foreground mb-4">
              We maintain strict confidentiality of client projects and specifications.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All project details kept strictly confidential</li>
              <li>Client contact information never shared</li>
              <li>Non-disclosure agreements in effect</li>
              <li>Secure document management systems</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              Standard terms for all construction projects.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Quotes valid for 30 days</li>
              <li>50% deposit required to begin project</li>
              <li>Remaining 50% due upon completion</li>
              <li>Project timelines provided in writing</li>
              <li>Change orders processed within 5 business days</li>
            </ul>
          </section>

          <section data-testid="section-warranty">
            <h2 className="font-serif text-2xl font-bold mb-4">Warranty & Guarantees</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>1-year structural warranty on all work</li>
              <li>5-year warranty on materials</li>
              <li>All work meets building codes and regulations</li>
              <li>FREE maintenance visit within 6 months</li>
              <li>Extended warranty available</li>
            </ul>
          </section>

          <section data-testid="section-cancellation">
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Free cancellation before work begins</li>
              <li>30% cancellation fee if work started</li>
              <li>50% fee if project 50% complete</li>
              <li>Full payment due if 90% complete</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For project inquiries, call +234 807 561 4248 or email construction@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
