import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface PolicySection {
  title: string;
  icon: string;
  content: string[];
}

const policies: PolicySection[] = [
  {
    title: "Cancellation Policy",
    icon: "📅",
    content: [
      "Reservations can be cancelled or modified up to 24 hours before your booked time with no penalty.",
      "Cancellations made less than 24 hours before reservation time may incur a cancellation fee equal to the table booking charge.",
      "No-shows will be charged the full table booking rate for your selected service level.",
      "In case of emergency, please contact us immediately at +1 (555) 123-4567.",
      "Group reservations (8+ guests) require 48 hours notice for cancellation.",
    ],
  },
  {
    title: "Dress Code",
    icon: "👔",
    content: [
      "We maintain an elegant dress code to preserve the sophistication of our dining experience.",
      "Smart casual attire is required: collared shirts, dress pants or skirts, closed-toe shoes.",
      "For VIP and Premium tables, business casual or formal wear is recommended.",
      "Chef's Table and Private Dining experiences require business formal or cocktail attire.",
      "We reserve the right to request changes to attire that doesn't meet our standards.",
      "Special occasions may have relaxed dress code upon prior arrangement.",
    ],
  },
  {
    title: "House Rules",
    icon: "🏠",
    content: [
      "We are a smoke-free establishment. Smoking is not permitted inside or on the premises.",
      "Please silence mobile devices during your meal to enhance everyone's dining experience.",
      "Guests are welcome to stay for up to 2.5 hours for standard reservations and 3 hours for premium experiences.",
      "Outside food and beverages are not permitted. Our wine corkage fee is $40 per bottle.",
      "We reserve the right to refuse service to guests who are disruptive or intoxicated.",
      "Children are welcome; high chairs and booster seats are available upon request.",
    ],
  },
  {
    title: "Payment Policy",
    icon: "💳",
    content: [
      "We accept all major credit cards, digital payments, and cash.",
      "Table booking charges are non-refundable but can be applied as food/beverage credits.",
      "A valid credit card is required to confirm all reservations.",
      "Final bill includes food, beverages, and applicable service charges.",
      "18% gratuity is automatically added for parties of 6 or more guests.",
      "Checks are only accepted for reservations with prior approval from management.",
    ],
  },
  {
    title: "Dietary Accommodations",
    icon: "🥗",
    content: [
      "We accommodate vegetarian, vegan, gluten-free, and other dietary restrictions.",
      "Please inform us of dietary requirements when making your reservation.",
      "Our Chef can customize any menu item to accommodate allergies and preferences.",
      "We maintain separate preparation areas to prevent cross-contamination.",
      "Please note: We work with common ingredients and may have traces of allergens.",
      "For severe allergies, please discuss with our staff before ordering.",
    ],
  },
  {
    title: "Private Events",
    icon: "🎉",
    content: [
      "Private dining rooms are available for parties of 12-40 guests.",
      "A deposit of 50% of estimated total is required to secure your private event.",
      "Customized menus and wine pairings can be arranged with our Chef.",
      "An event coordinator will work with you to plan the perfect occasion.",
      "Decorations are welcome; please consult with management regarding outside vendors.",
      "Minimum spend requirements apply based on group size and time of event.",
    ],
  },
  {
    title: "Photography & Social Media",
    icon: "📸",
    content: [
      "Personal photography for non-commercial use is permitted and encouraged.",
      "Please be respectful of other guests' privacy when taking photographs.",
      "Professional photography requires prior approval and may incur additional fees.",
      "We love seeing our food on social media! Tag us @latavolaroyale.",
      "Please do not photograph other guests without their consent.",
      "Flash photography during service is discouraged to maintain ambiance.",
    ],
  },
  {
    title: "Gift Cards & Vouchers",
    icon: "🎁",
    content: [
      "Gift cards never expire and can be used for any dining experience.",
      "Gift cards are non-transferable and cannot be exchanged for cash.",
      "Promotional vouchers and coupons cannot be combined with other offers.",
      "Gift card balance can be checked on our website or by calling the restaurant.",
      "Lost or stolen gift cards can be replaced with proof of purchase.",
      "Gift cards can be purchased online or by calling +1 (555) 123-4567.",
    ],
  },
  {
    title: "Reservation Terms",
    icon: "📝",
    content: [
      "All reservations must be made at least 24 hours in advance.",
      "A confirmation email will be sent within 1 hour of booking.",
      "Please arrive 10-15 minutes before your reservation time.",
      "Late arrivals may result in reduced seating time or table reassignment.",
      "Reservation times are based on estimated dining duration for your service level.",
      "Walk-in guests are welcome based on table availability (subject to wait times).",
    ],
  },
  {
    title: "Health & Safety",
    icon: "🏥",
    content: [
      "We follow all local and federal health and safety regulations.",
      "All staff are trained in food safety and hygiene practices.",
      "Our kitchen maintains strict sanitation standards and regular inspections.",
      "COVID-19 protocols are followed in accordance with current guidelines.",
      "If you have health concerns, please inform our staff immediately.",
      "First aid and AED facilities are available on premises.",
    ],
  },
  {
    title: "Accessibility",
    icon: "♿",
    content: [
      "Our restaurant is wheelchair accessible with accessible restrooms available.",
      "Service animals are welcome in all dining areas.",
      "Accessible parking is available in our designated lot.",
      "Staff can assist with seating accommodations upon request.",
      "Large print menus are available; please request at your reservation.",
      "Please contact us in advance for specific accessibility needs.",
    ],
  },
  {
    title: "Complaint Resolution",
    icon: "⚖️",
    content: [
      "Your satisfaction is our priority. If you have concerns, please speak with management immediately.",
      "We will address any complaints discreetly and professionally.",
      "For post-visit concerns, contact us within 48 hours for resolution.",
      "All feedback is reviewed and used to improve our service.",
      "Complaints regarding billing will be investigated and resolved promptly.",
      "We stand behind our food and service quality with a complete satisfaction guarantee.",
    ],
  },
];

export default function PoliciesPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <main className="pt-24 pb-20" data-testid="main-policies">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent" data-testid="section-policies-hero">
        <div className="container mx-auto max-w-4xl text-center" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-policies">Our Policies</Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-policies-title">
            Policies & Guidelines
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-policies-intro">
            We strive to provide an exceptional dining experience for all our guests. Please review our policies to ensure a smooth and enjoyable visit.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-policies-content">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <Card
                key={policy.title}
                className="hover-elevate active-elevate-2 transition-all overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={Math.min(index * 50, 400)}
                data-testid={`card-policy-${index}`}
              >
                <button
                  onClick={() => toggleSection(policy.title)}
                  className="w-full text-left"
                  data-testid={`button-policy-expand-${index}`}
                >
                  <CardContent className="p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-4xl">{policy.icon}</span>
                      <h2 className="font-serif text-xl font-bold" data-testid={`text-policy-title-${index}`}>
                        {policy.title}
                      </h2>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        expandedSections[policy.title] ? "rotate-180" : ""
                      }`}
                      data-testid={`icon-chevron-${index}`}
                    />
                  </CardContent>
                </button>

                {expandedSections[policy.title] && (
                  <div className="border-t px-6 py-6 bg-muted/30" data-testid={`content-policy-${index}`}>
                    <ul className="space-y-3">
                      {policy.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex gap-3 text-muted-foreground"
                          data-testid={`text-policy-item-${index}-${itemIndex}`}
                        >
                          <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-transparent border-primary/20" data-testid="card-policies-contact">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-contact-header">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-contact-message">
                If you have any questions about our policies or need clarification on any items, please don't hesitate to contact us. Our team is here to help ensure you have the best possible dining experience.
              </p>
              <div className="space-y-2" data-testid="contact-info">
                <p className="font-semibold" data-testid="text-contact-phone">
                  📞 Phone: +1 (555) 123-4567
                </p>
                <p className="font-semibold" data-testid="text-contact-email">
                  📧 Email: reservations@latavolaroyale.com
                </p>
                <p className="font-semibold" data-testid="text-contact-hours">
                  🕐 Hours: Dinner 5 PM - 11 PM Daily
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
