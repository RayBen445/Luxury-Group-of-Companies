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
            Your privacy is important to us. This policy explains how La Tavola Royale collects, uses, and protects your personal information.
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
                  <strong>Personal Information:</strong> When you make a reservation, place an order, or contact us, we collect information such as your name, email address, phone number, and dining preferences.
                </p>
                <p>
                  <strong>Payment Information:</strong> We securely process credit card and payment details through encrypted channels. We do not store full credit card numbers on our servers.
                </p>
                <p>
                  <strong>Location Information:</strong> If you use our website's location services, we may collect your location to provide delivery services or personalized recommendations.
                </p>
                <p>
                  <strong>Usage Data:</strong> We collect information about how you interact with our website, including IP addresses, browser types, pages visited, and time spent on our site through cookies and analytics tools.
                </p>
                <p>
                  <strong>Communication Data:</strong> Any messages, reviews, or feedback you submit to us are collected and stored.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-2">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-2-title">2. How We Use Your Information</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-2">
                <p>
                  <strong>Reservation Management:</strong> To confirm your booking, send confirmations, reminders, and updates about your reservation status.
                </p>
                <p>
                  <strong>Food Ordering:</strong> To process your order, arrange delivery, and track your food preparation and shipping.
                </p>
                <p>
                  <strong>Customer Service:</strong> To respond to your inquiries, complaints, and provide support regarding your dining experience.
                </p>
                <p>
                  <strong>Marketing Communications:</strong> With your consent, we send promotional offers, newsletters, and updates about new dishes or services. You can opt-out at any time.
                </p>
                <p>
                  <strong>Website Improvement:</strong> We analyze usage data to improve our website functionality, user experience, and service quality.
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
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law enforcement, court orders, or to protect our legal rights.
                </p>
                <p>
                  <strong>Business Transfers:</strong> If La Tavola Royale is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
                </p>
                <p>
                  <strong>Your Consent:</strong> We only share information with third parties when you explicitly consent or as described in this policy.
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
                  Employees and service providers with access to your information are bound by strict confidentiality agreements.
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
                <p>
                  <strong>Analytics:</strong> We use Google Analytics and similar tools to analyze website traffic and user behavior.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-6-title">6. Your Privacy Rights</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-6">
                <p>
                  <strong>Access:</strong> You have the right to request access to your personal information and receive a copy of the data we hold.
                </p>
                <p>
                  <strong>Correction:</strong> You can request that we update or correct any inaccurate information.
                </p>
                <p>
                  <strong>Deletion:</strong> You can request deletion of your personal data, subject to legal obligations.
                </p>
                <p>
                  <strong>Opt-Out:</strong> You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.
                </p>
                <p>
                  <strong>Data Portability:</strong> You can request your data in a portable format.
                </p>
                <p>
                  To exercise these rights, contact us at latavoroyale@gmail.com with your request.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-7">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-7-title">7. Children's Privacy</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-7">
                <p>
                  Our website is not directed to children under 13 years old. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it immediately.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-8">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-8-title">8. International Data Transfers</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-8">
                <p>
                  Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have different data protection laws. By using our website, you consent to such transfers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-9">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-9-title">9. Third-Party Links</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-9">
                <p>
                  Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-10">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-10-title">10. Policy Changes</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-10">
                <p>
                  We may update this privacy policy periodically. Changes will be effective immediately upon posting. Continued use of our website following the posting of revised privacy policy means you accept and agree to the changes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate bg-gradient-to-r from-primary/10 to-transparent border-primary/20" data-testid="card-contact">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold mb-4" data-testid="text-contact-title">Contact Us</h2>
              <p className="text-muted-foreground mb-4" data-testid="text-contact-intro">
                If you have questions about this privacy policy or your personal information, please contact us:
              </p>
              <div className="space-y-2" data-testid="contact-info">
                <p className="font-semibold" data-testid="text-email">📧 Email: latavoroyale@gmail.com</p>
                <p className="font-semibold" data-testid="text-whatsapp">📱 WhatsApp: +224 807 561 4248</p>
                <p className="font-semibold" data-testid="text-address">📍 Address: 123 Gourmet Lane, Downtown, City 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
