import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function HospitalPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/hospital">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Hospital
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Hospital - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Patient Privacy (HIPAA Compliance)</h2>
            <p className="text-muted-foreground mb-4">
              We strictly protect all patient health information and medical records.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>HIPAA compliant - all patient data encrypted</li>
              <li>Medical records accessible only to authorized personnel</li>
              <li>Confidentiality maintained in all circumstances</li>
              <li>Patient consent required for information sharing</li>
              <li>Regular privacy audits and compliance checks</li>
            </ul>
          </section>

          <section data-testid="section-admission">
            <h2 className="font-serif text-2xl font-bold mb-4">Admission & Patient Rights</h2>
            <p className="text-muted-foreground mb-4">
              All patients have certain rights and responsibilities.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Right to courteous and respectful treatment</li>
              <li>Right to information about treatment options</li>
              <li>Right to refuse treatment (with liability waiver)</li>
              <li>Right to access medical records</li>
              <li>Right to file complaints</li>
            </ul>
          </section>

          <section data-testid="section-billing">
            <h2 className="font-serif text-2xl font-bold mb-4">Billing & Insurance</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All major insurance accepted</li>
              <li>Payment plans available for uninsured patients</li>
              <li>Financial assistance programs available</li>
              <li>Itemized billing statements provided</li>
              <li>Emergency care covered regardless of payment ability</li>
            </ul>
          </section>

          <section data-testid="section-care">
            <h2 className="font-serif text-2xl font-bold mb-4">Quality of Care Standards</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>State-of-the-art medical equipment</li>
              <li>Board-certified physicians and specialists</li>
              <li>24/7 emergency department</li>
              <li>Intensive care units with full monitoring</li>
              <li>Infection control protocols strictly enforced</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For appointments, call +234 807 561 4248 or email hospital@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
