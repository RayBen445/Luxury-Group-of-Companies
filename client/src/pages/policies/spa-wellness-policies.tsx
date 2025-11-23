import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function SpaWellnessPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link href="/spa-wellness">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Spa & Wellness
            </Button>
          </Link>

          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">Policies</Badge>
            <h1 className="font-serif text-5xl font-bold mb-4 gradient-text" data-testid="text-title">
              Royale Luxury Spa & Wellness Policies
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
              Important information about our services, bookings, and wellness guidelines
            </p>
          </div>

          <div className="space-y-8">
            <Card data-testid="card-booking-policy">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-booking-title">
                  Booking & Reservations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How to Book</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Book online through our website or call +234 807 561 4248</li>
                    <li>Advance booking of 24 hours is recommended</li>
                    <li>Group bookings require at least 7 days notice</li>
                    <li>Confirmation will be sent via email and SMS</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-cancellation-policy">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-cancellation-title">
                  Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation Terms</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Free cancellation up to 24 hours before appointment</li>
                    <li>50% charge for cancellations within 12-24 hours</li>
                    <li>Full charge for cancellations less than 12 hours before</li>
                    <li>No-shows will be charged in full</li>
                    <li>Rebooking available within 30 days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-health-policy">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-health-title">
                  Health & Safety Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Safety</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>All therapists are certified and trained in latest techniques</li>
                    <li>Sanitization protocols meet international standards</li>
                    <li>Please inform us of any allergies or medical conditions</li>
                    <li>Pregnant clients should notify us in advance</li>
                    <li>Not recommended for clients with certain medical conditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-pricing-policy">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-pricing-title">
                  Pricing & Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>All prices are in USD unless otherwise stated</li>
                    <li>Payment accepted: Card, Bank Transfer, Mobile Payment</li>
                    <li>Deposit required for group bookings</li>
                    <li>Loyalty discounts available for regular clients</li>
                    <li>Package deals available for multiple bookings</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-dress-code">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-dress-title">
                  Dress Code & Facilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">What to Wear</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Comfortable, loose-fitting clothing recommended</li>
                    <li>Spa robes and slippers provided</li>
                    <li>Lockers available for personal belongings</li>
                    <li>Mobile phones should be on silent mode</li>
                    <li>Respect quiet areas and other guests</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-membership">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-membership-title">
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Join Our Wellness Club</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>20% discount on all treatments</li>
                    <li>Priority booking availability</li>
                    <li>Exclusive member events and workshops</li>
                    <li>Birthday specials and anniversary gifts</li>
                    <li>Free consultation with wellness experts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-liability">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-liability-title">
                  Liability & Responsibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Spa treatments are not medical procedures</li>
                    <li>Results vary by individual</li>
                    <li>Consult healthcare provider before treatment if needed</li>
                    <li>Not responsible for lost or stolen items</li>
                    <li>Management reserves right to refuse service</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-contact">
              <CardHeader>
                <CardTitle className="font-serif text-2xl" data-testid="text-contact-title">
                  Contact & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Get Help</h4>
                  <p>For questions about our policies or to arrange a consultation:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                    <li>Phone: +234 807 561 4248</li>
                    <li>Email: wellness@royaleluxury.com</li>
                    <li>Hours: Monday - Sunday, 9 AM - 10 PM</li>
                    <li>24/7 Customer Support Available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/spa-wellness">
              <Button size="lg" data-testid="button-back-to-spa">
                Back to Spa & Wellness
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
