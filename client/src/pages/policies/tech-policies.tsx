import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function TechPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/tech">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Tech
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Tech - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to protecting your privacy in the digital realm.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>We collect minimal personal data necessary for service delivery</li>
              <li>Your data is encrypted and stored securely</li>
              <li>We comply with data protection regulations</li>
              <li>No third-party tracking or data selling</li>
              <li>Regular privacy audits and updates</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              By using our services, you agree to these terms.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Services are provided on an "as-is" basis</li>
              <li>99.9% uptime guarantee with SLA</li>
              <li>Free tier and premium subscription options available</li>
              <li>Monthly billing for premium services</li>
              <li>Cancellation possible anytime without penalties</li>
            </ul>
          </section>

          <section data-testid="section-intellectual">
            <h2 className="font-serif text-2xl font-bold mb-4">Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All software and designs are proprietary</li>
              <li>Users may not reverse engineer or modify our products</li>
              <li>Unauthorized copying or distribution is prohibited</li>
              <li>We respect your intellectual property rights</li>
            </ul>
          </section>

          <section data-testid="section-support">
            <h2 className="font-serif text-2xl font-bold mb-4">Support & Maintenance</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>24/7 technical support for premium subscribers</li>
              <li>Regular system maintenance with advance notice</li>
              <li>Bug fixes and security patches deployed regularly</li>
              <li>Free training and onboarding for enterprise clients</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For technical support, contact +234 807 561 4248 or email tech@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
