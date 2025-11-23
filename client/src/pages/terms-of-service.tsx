import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsOfServicePage() {
  return (
    <main className="pt-24 pb-20" data-testid="main-terms">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent" data-testid="section-terms-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4" data-testid="badge-terms">Legal</Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-terms-title">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-terms-intro">
            Please read these terms carefully before using our website and services. By accessing or using Royale Luxury Group services and properties, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-muted-foreground mt-4" data-testid="text-last-updated">
            Effective Date: November 2024
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-terms-content">
        <div className="container mx-auto max-w-4xl space-y-8">
          <Card className="hover-elevate" data-testid="card-section-1">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-1-title">1. Acceptance of Terms</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-1">
                <p>
                  By accessing and using this website or any Royale Luxury Group services and properties, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service or visit our properties.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-2">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-2-title">2. Use License</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-2">
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Royale Luxury Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                  <li>Using automated tools to harvest, collect, or gather data from our website</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-3">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-3-title">3. Disclaimer</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-3">
                <p>
                  The materials on Royale Luxury Group's website are provided on an 'as is' basis. Royale Luxury Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  We do not warrant that the contents of our website will be uninterrupted or error-free. We do not warrant that the website, its server, or emails sent from us are free of viruses or other harmful components. We operate multiple premium properties and services which maintain their own operational standards.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-4">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-4-title">4. Limitations of Liability</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-4">
                <p>
                  In no event shall Royale Luxury Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website or services, even if Royale Luxury Group or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-5">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-5-title">5. Accuracy of Materials</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-5">
                <p>
                  The materials appearing on Royale Luxury Group's website could include technical, typographical, or photographic errors. Royale Luxury Group does not warrant that any of the materials on its website are accurate, complete, or current. Royale Luxury Group may make changes to the materials contained on its website at any time without notice.
                </p>
                <p>
                  Services, menu items, prices, availability, offerings, and property information are subject to change without notice. We strive to provide accurate information but cannot guarantee real-time accuracy at all times across all our properties.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-6-title">6. Materials and Content</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-6">
                <p>
                  Royale Luxury Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Royale Luxury Group of the site. Use of any such linked website is at the user's own risk.
                </p>
                <p>
                  Any content or images you upload or submit to our website remain your property, but you grant Royale Luxury Group a perpetual, worldwide license to use, reproduce, modify, and display such content on our website and property channels.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-7">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-7-title">7. Modifications</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-7">
                <p>
                  Royale Luxury Group may revise these terms of service for its website and properties at any time without notice. By using this website or our services, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-8">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-8-title">8. Governing Law</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-8">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-9">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-9-title">9. Prohibited Conduct</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-9">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                  <li>Post or transmit any unlawful, threatening, abusive, defamatory, obscene, or otherwise objectionable material</li>
                  <li>Disrupt the normal flow of dialogue within our website</li>
                  <li>Harass or cause distress or inconvenience to any person</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use the website to engage in illegal activities or transactions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-10">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-10-title">10. User Accounts</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-10">
                <p>
                  If you create an account on our website, you are responsible for maintaining the confidentiality of your password and account information. You agree to accept responsibility for all activities that occur under your account.
                </p>
                <p>
                  You must notify us immediately of any unauthorized use of your account. We reserve the right to refuse service or terminate accounts at any time for any reason.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-11">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-11-title">11. Payment Terms</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-11">
                <p>
                  Payment for reservations and orders must be provided at the time of booking or as specified during the ordering process. We accept all major credit cards, digital payments, and cash.
                </p>
                <p>
                  Table booking fees are non-refundable but may be applied as food or beverage credits if properly requested within 24 hours of cancellation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-12">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-12-title">12. Intellectual Property Rights</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-12">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of La Tavola Royale or its content suppliers and is protected by international copyright laws.
                </p>
                <p>
                  You may not reproduce, modify, or distribute any content without express permission from La Tavola Royale.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate bg-gradient-to-r from-primary/10 to-transparent border-primary/20" data-testid="card-contact">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold mb-4" data-testid="text-contact-title">Contact for Legal Inquiries</h2>
              <p className="text-muted-foreground mb-4" data-testid="text-contact-intro">
                If you have questions about these terms of service, please contact us:
              </p>
              <div className="space-y-2" data-testid="contact-info">
                <p className="font-semibold" data-testid="text-email">📧 Email: latavoroyale@gmail.com</p>
                <p className="font-semibold" data-testid="text-whatsapp">📱 WhatsApp: +224 807 561 4248</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
