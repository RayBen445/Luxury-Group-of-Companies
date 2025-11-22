import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function CancellationPolicyPage() {
  return (
    <main className="pt-24 pb-20" data-testid="main-cancellation">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent" data-testid="section-cancellation-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4" data-testid="badge-cancellation">Policy</Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-cancellation-title">
            Cancellation Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-cancellation-intro">
            We understand that plans change. Our cancellation policy is designed to be fair to both our guests and our restaurant.
          </p>
          <p className="text-sm text-muted-foreground mt-4" data-testid="text-last-updated">
            Effective Date: November 2024
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-cancellation-content">
        <div className="container mx-auto max-w-4xl space-y-8">
          <Card className="hover-elevate border-l-4 border-l-primary" data-testid="card-quick-summary">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center gap-3" data-testid="text-quick-summary">
                <Clock className="w-8 h-8 text-primary" />
                Quick Reference
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg" data-testid="item-24hours">
                  <p className="text-4xl font-bold text-green-600 dark:text-green-400" data-testid="text-hours-24">24+ Hours</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-24hours-desc">Full Refund</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg" data-testid="item-12hours">
                  <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400" data-testid="text-hours-12">12-24 Hours</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-12hours-desc">50% Refund</p>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-950/20 rounded-lg" data-testid="item-under12">
                  <p className="text-4xl font-bold text-red-600 dark:text-red-400" data-testid="text-hours-under12">Under 12 Hours</p>
                  <p className="text-sm text-muted-foreground mt-2" data-testid="text-under12-desc">No Refund</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-1">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-2" data-testid="text-section-1-title">
                <CheckCircle className="w-6 h-6 text-primary" />
                Dining Reservations
              </h2>
              <div className="space-y-4 text-muted-foreground" data-testid="content-section-1">
                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-standard">
                  <h4 className="font-semibold mb-2" data-testid="text-standard-tables">Standard & VIP Tables</h4>
                  <ul className="space-y-2 ml-4">
                    <li data-testid="item-standard-1">
                      <strong>24+ hours before:</strong> Full refund of table booking fee
                    </li>
                    <li data-testid="item-standard-2">
                      <strong>12-24 hours before:</strong> 50% of table booking fee will be charged (50% refund)
                    </li>
                    <li data-testid="item-standard-3">
                      <strong>Less than 12 hours:</strong> Full table booking fee will be charged (no refund)
                    </li>
                    <li data-testid="item-standard-4">
                      <strong>No-show:</strong> Full table booking fee will be charged plus applicable cancellation fees
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-premium">
                  <h4 className="font-semibold mb-2" data-testid="text-premium-tables">Premium & Luxury Tables</h4>
                  <ul className="space-y-2 ml-4">
                    <li data-testid="item-premium-1">
                      <strong>48+ hours before:</strong> Full refund of table booking fee
                    </li>
                    <li data-testid="item-premium-2">
                      <strong>24-48 hours before:</strong> 50% of table booking fee will be charged
                    </li>
                    <li data-testid="item-premium-3">
                      <strong>Less than 24 hours:</strong> Full table booking fee will be charged (no refund)
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-private">
                  <h4 className="font-semibold mb-2" data-testid="text-private-dining">Private Dining & Chef's Table</h4>
                  <ul className="space-y-2 ml-4">
                    <li data-testid="item-private-1">
                      <strong>7+ days before:</strong> Full refund of deposit and fees
                    </li>
                    <li data-testid="item-private-2">
                      <strong>3-7 days before:</strong> 25% of total event cost will be charged
                    </li>
                    <li data-testid="item-private-3">
                      <strong>Less than 3 days:</strong> 50% of total estimated event cost will be charged
                    </li>
                    <li data-testid="item-private-4">
                      <strong>Less than 24 hours:</strong> 100% of deposit will be charged (non-refundable)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-2">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-2" data-testid="text-section-2-title">
                <CheckCircle className="w-6 h-6 text-primary" />
                Food Ordering & Delivery
              </h2>
              <div className="space-y-4 text-muted-foreground" data-testid="content-section-2">
                <p data-testid="text-order-intro">
                  Cancellations for food orders and deliveries have different terms based on preparation status:
                </p>
                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-pre-prep">
                  <h4 className="font-semibold mb-2" data-testid="text-pre-prep">Before Food Preparation Begins</h4>
                  <p className="ml-4" data-testid="text-pre-prep-desc">
                    <strong>100% refund:</strong> If you cancel within 15 minutes of placing your order and before we begin food preparation.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-during-prep">
                  <h4 className="font-semibold mb-2" data-testid="text-during-prep">During Food Preparation</h4>
                  <p className="ml-4" data-testid="text-during-prep-desc">
                    <strong>50% refund:</strong> If food preparation has begun, you will receive a 50% refund. The remaining 50% covers ingredients and labor already invested.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-after-prep">
                  <h4 className="font-semibold mb-2" data-testid="text-after-prep">After Food is Ready</h4>
                  <p className="ml-4" data-testid="text-after-prep-desc">
                    <strong>No refund:</strong> Once food is prepared and ready for delivery, no refund will be issued. However, delivery can be rescheduled at no additional cost.
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg" data-testid="subsection-out-for-delivery">
                  <h4 className="font-semibold mb-2" data-testid="text-out-for-delivery">Out for Delivery</h4>
                  <p className="ml-4" data-testid="text-out-for-delivery-desc">
                    <strong>No refund:</strong> Once the delivery driver is en route, cancellation is not available. The order cannot be stopped once in transit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-3">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-3-title">Special Circumstances & Exceptions</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-3">
                <p data-testid="text-exceptions-intro">
                  We understand that unexpected situations occur. The following may qualify for exceptions:
                </p>
                <ul className="space-y-2 ml-4">
                  <li data-testid="item-medical">
                    <strong>Medical Emergency:</strong> Documentation may be required. Contact us immediately at +224 807 561 4248.
                  </li>
                  <li data-testid="item-weather">
                    <strong>Severe Weather or Natural Disasters:</strong> Full refund or rescheduling without penalty.
                  </li>
                  <li data-testid="item-restaurant-error">
                    <strong>Restaurant Error:</strong> If we make an error in confirming your reservation or order, we will fully accommodate.
                  </li>
                  <li data-testid="item-vip-customer">
                    <strong>VIP or Loyalty Members:</strong> Premium members may receive more flexible cancellation terms. Check your membership details.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-4">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-4-title">How to Cancel</h2>
              <div className="space-y-4 text-muted-foreground" data-testid="content-section-4">
                <p data-testid="text-how-to-intro">To cancel your reservation or order, please contact us through one of these methods:</p>
                <div className="space-y-3">
                  <div className="p-4 bg-muted/50 rounded-lg" data-testid="item-method-whatsapp">
                    <h4 className="font-semibold mb-2" data-testid="text-method-whatsapp">WhatsApp (Fastest)</h4>
                    <p className="text-sm" data-testid="text-whatsapp-number">+224 807 561 4248</p>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-whatsapp-note">Response time: Less than 5 minutes during business hours</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg" data-testid="item-method-phone">
                    <h4 className="font-semibold mb-2" data-testid="text-method-phone">Phone Call</h4>
                    <p className="text-sm" data-testid="text-phone-number">+224 807 561 4248</p>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-phone-note">Hours: Daily 11 AM - 11 PM</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg" data-testid="item-method-email">
                    <h4 className="font-semibold mb-2" data-testid="text-method-email">Email</h4>
                    <p className="text-sm" data-testid="text-email-address">latavoroyale@gmail.com</p>
                    <p className="text-xs text-muted-foreground mt-1" data-testid="text-email-note">Response time: Within 24 hours</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg" data-testid="item-method-website">
                    <h4 className="font-semibold mb-2" data-testid="text-method-website">Website Contact Form</h4>
                    <p className="text-sm" data-testid="text-website-note">Visit our Contact page to submit a cancellation request</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-5">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-5-title">Refund Processing</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-5">
                <p data-testid="text-refund-timeline">
                  <strong>Timeline:</strong> Approved refunds are processed within 5-7 business days to your original payment method.
                </p>
                <p data-testid="text-refund-bank">
                  <strong>Bank Processing:</strong> Depending on your bank, the refund may take an additional 3-5 business days to appear in your account.
                </p>
                <p data-testid="text-refund-credit">
                  <strong>Credit Card Refunds:</strong> Refunds will appear as credits on your credit card statement within 1-2 billing cycles.
                </p>
                <p data-testid="text-refund-credit-alternative">
                  <strong>Restaurant Credit:</strong> We offer the option of receiving your refund as a dining credit (valid for 12 months) instead of a cash refund, with an additional 10% bonus applied.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate border-l-4 border-l-destructive" data-testid="card-section-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4 flex items-center gap-2" data-testid="text-section-6-title">
                <AlertCircle className="w-6 h-6 text-destructive" />
                No-Show Policy
              </h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-6">
                <p data-testid="text-noshow-def">
                  <strong>Definition:</strong> A no-show occurs when you fail to arrive for your reservation or order pickup without canceling at least 12 hours in advance.
                </p>
                <p data-testid="text-noshow-penalty">
                  <strong>Penalty:</strong> Full table booking fee or order amount will be charged to your registered payment method.
                </p>
                <p data-testid="text-noshow-notification">
                  <strong>Notification:</strong> We will attempt to reach you via phone or email. If you believe there was a misunderstanding, contact us within 48 hours.
                </p>
                <p data-testid="text-noshow-appeal">
                  <strong>Appeals:</strong> Legitimate reasons (medical emergency, family emergency) may be reviewed for refund consideration. Documentation may be required.
                </p>
                <p data-testid="text-noshow-multiple">
                  <strong>Multiple No-Shows:</strong> Customers with 2+ no-shows may have their booking privileges suspended.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-section-7">
            <CardContent className="p-8">
              <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-section-7-title">Modifications vs. Cancellations</h2>
              <div className="space-y-3 text-muted-foreground" data-testid="content-section-7">
                <p data-testid="text-modification-intro">
                  You can modify your reservation instead of canceling without penalty, subject to availability:
                </p>
                <ul className="space-y-2 ml-4">
                  <li data-testid="item-modify-date">
                    <strong>Change Date/Time:</strong> Modify up to 24 hours before with no fees (subject to availability)
                  </li>
                  <li data-testid="item-modify-guests">
                    <strong>Change Party Size:</strong> Modify up to 24 hours before (adjustments to fees may apply)
                  </li>
                  <li data-testid="item-modify-table">
                    <strong>Change Table Type:</strong> Modify up to 48 hours before with applicable fee adjustments
                  </li>
                  <li data-testid="item-modify-special">
                    <strong>Special Requests:</strong> Add or modify special requests up to 24 hours before
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate bg-gradient-to-r from-primary/10 to-transparent border-primary/20" data-testid="card-contact">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold mb-4" data-testid="text-contact-title">Questions About Our Cancellation Policy?</h2>
              <p className="text-muted-foreground mb-6" data-testid="text-contact-intro">
                We're here to help. If you have questions or need to discuss your specific situation, please reach out:
              </p>
              <div className="space-y-2" data-testid="contact-info">
                <p className="font-semibold" data-testid="text-whatsapp">📱 WhatsApp: +224 807 561 4248</p>
                <p className="font-semibold" data-testid="text-phone">☎️ Phone: +224 807 561 4248</p>
                <p className="font-semibold" data-testid="text-email">📧 Email: latavoroyale@gmail.com</p>
                <p className="font-semibold" data-testid="text-hours">🕐 Hours: Daily 11 AM - 11 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
