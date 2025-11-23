import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function BankPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/bank">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Bank
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury Bank - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Privacy & Data Security</h2>
            <p className="text-muted-foreground mb-4">
              At Royale Luxury Bank, we maintain the highest standards of data security and privacy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All customer data is encrypted with military-grade security</li>
              <li>Compliance with international banking regulations (GDPR, PCI-DSS)</li>
              <li>Regular security audits and penetration testing</li>
              <li>Two-factor authentication on all accounts</li>
              <li>We never sell or share your financial information</li>
            </ul>
          </section>

          <section data-testid="section-terms">
            <h2 className="font-serif text-2xl font-bold mb-4">Terms of Service</h2>
            <p className="text-muted-foreground mb-4">
              By opening an account with us, you agree to the following terms.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Minimum account balance: NGN 5,000</li>
              <li>Monthly maintenance fee: NGN 500 (waived if balance exceeds NGN 100,000)</li>
              <li>Interest rates vary based on account type and balance</li>
              <li>Transactions are processed within 24 business hours</li>
              <li>Overdraft facilities available for eligible customers</li>
            </ul>
          </section>

          <section data-testid="section-security">
            <h2 className="font-serif text-2xl font-bold mb-4">Account Security</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Never share your PIN or password with anyone</li>
              <li>Change your password every 90 days</li>
              <li>Report unauthorized transactions within 30 days</li>
              <li>Use only secure networks when accessing your account</li>
              <li>We will never ask for your password via email or phone</li>
            </ul>
          </section>

          <section data-testid="section-fees">
            <h2 className="font-serif text-2xl font-bold mb-4">Banking Fees</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Wire transfer: NGN 1,000</li>
              <li>ATM withdrawal (out-of-network): NGN 500</li>
              <li>Card replacement: NGN 2,500</li>
              <li>Statement printing: NGN 200</li>
              <li>Account closure: No fee</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For banking inquiries, contact us at +234 807 561 4248 or email bank@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
