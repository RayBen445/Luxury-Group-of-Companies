import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-24 pb-20" data-testid="main-privacy">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent" data-testid="section-privacy-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4" data-testid="badge-privacy">Privacy</Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-privacy-intro">
            Your privacy is important to us. This policy explains how Royale Luxury Group collects, uses, and protects your personal information across all our premium properties and services.
          </p>
          <p className="text-sm text-muted-foreground mt-4" data-testid="text-last-updated">
            Last Updated: November 2024
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-privacy-content">
        <div className="container mx-auto max-w-4xl space-y-8">
          <Card className="hover-elevate" data-testid="card-section-1">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-1-title">1. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-1">
                <p>
                  <strong>Personal Information:</strong> When you make a reservation, booking, purchase, or contact us, we collect information such as your name, email address, phone number, and preferences across our properties.
                </p>
                <p>
                  <strong>Payment Information:</strong> We securely process credit card and payment details through encrypted channels. We do not store full credit card numbers on our servers.
                </p>
                <p>
                  <strong>Location Information:</strong> If you use our services' location features, we may collect your location to provide personalized services and recommendations.
                </p>
                <p>
                  <strong>Usage Data:</strong> We collect information about how you interact with our website and services, including IP addresses, browser types, pages visited, and time spent through cookies and analytics tools.
                </p>
                <p>
                  <strong>Communication Data:</strong> Any messages, reviews, feedback, or inquiries you submit to us are collected and stored for service improvement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-2">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-2-title">2. How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-2">
                <p>
                  <strong>Service Delivery:</strong> To process your bookings, reservations, orders, and payments across all Royale Luxury Group properties and services.
                </p>
                <p>
                  <strong>Communication:</strong> To send confirmations, reminders, updates, and notifications about your services, bookings, and account activities.
                </p>
                <p>
                  <strong>Customer Service:</strong> To respond to your inquiries, resolve complaints, and provide support regarding any of our services.
                </p>
                <p>
                  <strong>Marketing Communications:</strong> With your consent, we send promotional offers, newsletters, and updates about new properties or services. You can opt-out at any time.
                </p>
                <p>
                  <strong>Website & Service Improvement:</strong> We analyze usage data to improve our platforms, user experience, and service quality across all divisions.
                </p>
                <p>
                  <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal proceedings.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-3">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-3-title">3. Information Sharing & Disclosure</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-3">
                <p>
                  <strong>Service Providers:</strong> We share information with trusted third-party service providers (payment processors, delivery partners, email services) who are bound by confidentiality agreements.
                </p>
                <p>
                  <strong>Business Partners:</strong> We may share aggregate, anonymized data with our business partners for marketing and analysis purposes.
                </p>
                <p>
                  <strong>Royale Luxury Group Properties:</strong> Your information may be shared across our portfolio of properties to enhance your experience and provide coordinated services.
                </p>
                <p>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law enforcement, court orders, or to protect our legal rights.
                </p>
                <p>
                  <strong>Business Transfers:</strong> If Royale Luxury Group or any of its properties are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-4">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-4-title">4. Data Security</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-4">
                <p>
                  We implement industry-standard security measures including SSL/TLS encryption, secure server infrastructure, and regular security audits to protect your personal information from unauthorized access, alteration, or destruction.
                </p>
                <p>
                  While we strive to protect your data, no security system is completely impenetrable. We cannot guarantee absolute security of information transmitted over the internet.
                </p>
                <p>
                  Employees and service providers with access to your information are bound by strict confidentiality agreements and undergo regular security training.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-5">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-5-title">5. Cookies & Tracking Technologies</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-5">
                <p>
                  <strong>Cookies:</strong> Our website uses cookies to remember your preferences, track your activities, and improve your browsing experience.
                </p>
                <p>
                  <strong>Types of Cookies:</strong> Essential cookies (required for functionality), analytical cookies (to understand usage patterns), and marketing cookies (to deliver targeted content).
                </p>
                <p>
                  <strong>Cookie Control:</strong> You can manage cookie preferences through your browser settings. Disabling cookies may affect website functionality.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-6-title">6. Your Rights & Choices</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-6">
                <p>
                  <strong>Access & Correction:</strong> You have the right to access and correct your personal information. Contact us to request a copy of your data.
                </p>
                <p>
                  <strong>Opt-Out:</strong> You can opt-out of marketing communications and targeted advertising at any time.
                </p>
                <p>
                  <strong>Data Deletion:</strong> You can request deletion of your personal information, subject to legal and contractual obligations.
                </p>
                <p>
                  <strong>Privacy Choices:</strong> Some jurisdictions provide additional privacy rights. Contact us for more information about your specific rights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-7">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-7-title">7. Third-Party Links & External Services</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-7">
                <p>
                  Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing any information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-8">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-8-title">8. Contact Us</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-8">
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Phone: +234 807 561 4248</li>
                  <li>Email: privacy@royaleluxury.com</li>
                  <li>Hours: 24/7 Customer Support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
