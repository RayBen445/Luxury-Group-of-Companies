import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Clock, Utensils, Users, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    category: "Hours & Location",
    icon: Clock,
    faqs: [
      {
        question: "What are your operating hours?",
        answer: {
          main: "La Tavola Royale operates with extended hours to accommodate your schedule:",
          details: [
            "Monday - Thursday: 11:00 AM - 11:00 PM (Dining ends at 10:30 PM)",
            "Friday - Saturday: 11:00 AM - 12:00 AM (Midnight) (Dining ends at 11:30 PM)",
            "Sunday: CLOSED for weekly rest and staff preparation",
            "Special Hours: We maintain extended hours during holidays. Contact us for specific dates."
          ],
          footer: "We recommend arriving 10-15 minutes early for your reservation to enjoy our welcome service."
        }
      },
      {
        question: "Where is La Tavola Royale located?",
        answer: {
          main: "Our restaurant is conveniently located in the heart of downtown:",
          details: ["123 Gourmet Lane, Downtown, City 12345", "Complimentary valet parking available", "Street parking available nearby", "Wheelchair accessible entrance", "Public transportation: 2 minutes from main station"],
          footer: "Click 'Get Directions' on our Contact page for real-time navigation."
        }
      }
    ]
  },
  {
    category: "Reservations & Bookings",
    icon: Users,
    faqs: [
      {
        question: "How do I make a reservation?",
        answer: {
          main: "Making a reservation at La Tavola Royale is quick and easy. Choose from these convenient methods:",
          details: [
            "Online: Visit our Reservations page to book instantly (24/7 available)",
            "WhatsApp: Message +224 807 561 4248 for personalized assistance",
            "Phone: Call +224 807 561 4248 during business hours (11 AM - 11 PM daily)",
            "Email: latavoroyale@gmail.com (response within 24 hours)"
          ],
          footer: "Minimum 24-hour advance booking required. Instant confirmation sent via email."
        }
      },
      {
        question: "What payment options do you accept?",
        answer: {
          main: "We accept all major payment methods for your convenience:",
          details: [
            "Credit Cards: Visa, Mastercard, American Express, Discover",
            "Digital Payments: Apple Pay, Google Pay, PayPal",
            "Cash: Accepted at the restaurant",
            "Gift Cards: Perfect for any occasion",
            "Installment Plans: Available for private events and large orders"
          ],
          footer: "Your payment is secure and encrypted. A valid card is required to confirm reservations."
        }
      },
      {
        question: "Can I modify or cancel my reservation?",
        answer: {
          main: "We understand plans change. Here are our modification and cancellation terms:",
          details: [
            "24+ Hours Before: Free modification or cancellation with full refund",
            "12-24 Hours: 50% refund available if cancelled",
            "Less than 12 Hours: Full table booking fee applies",
            "Modifications: Change date, time, party size, or table type up to 24 hours before"
          ],
          footer: "For cancellations, contact us via WhatsApp, phone, or email. Visit our Cancellation Policy page for detailed terms."
        }
      }
    ]
  },
  {
    category: "Menu & Dining",
    icon: Utensils,
    faqs: [
      {
        question: "How many menu items do you have?",
        answer: {
          main: "Our extensive menu features over 1,100 carefully curated dishes across multiple categories:",
          details: [
            "Appetizers & Starters: 80+ selections",
            "Soups & Salads: 35+ creations",
            "Main Courses: 300+ options (Beef, Seafood, Poultry, Lamb)",
            "Pasta Dishes: 50+ authentic recipes",
            "Vegetarian & Vegan: 60+ plant-based specialties",
            "Desserts: 40+ sweet creations",
            "Beverages: 80+ wines, spirits, and non-alcoholic drinks"
          ],
          footer: "All menus available on our Menu page. Our Chef is happy to create custom dishes upon request."
        }
      },
      {
        question: "Do you have vegetarian or vegan options?",
        answer: {
          main: "Absolutely! We celebrate plant-based dining with our extensive vegetarian and vegan collections:",
          details: [
            "Vegetarian Menu: 50+ dishes created without meat or fish",
            "Vegan Menu: 30+ fully plant-based creations (no animal products)",
            "Wild Mushroom Risotto, Heirloom Vegetable Tasting, Eggplant Parmesan are customer favorites",
            "Custom Preparations: Our Chef can adapt any dish to meet your preferences",
            "Wine Pairings: Curated selections that complement plant-based dishes"
          ],
          footer: "Mention your dietary preference when booking for optimal table placement and menu preparation."
        }
      },
      {
        question: "Do you accommodate dietary restrictions and allergies?",
        answer: {
          main: "Your health and safety are our top priority. We rigorously accommodate all dietary needs:",
          details: [
            "Gluten-Free: Dedicated preparation area, certified GF ingredients",
            "Dairy-Free: Complete vegan options available",
            "Nut Allergies: Strictly managed with separate prep surfaces",
            "Shellfish Allergies: Can substitute proteins in any dish",
            "Kosher/Halal: Available with advance notice (48 hours)",
            "Other Restrictions: Discuss with our Chef for custom solutions"
          ],
          footer: "IMPORTANT: Always inform us of allergies during booking. We maintain strict cross-contamination protocols."
        }
      }
    ]
  },
  {
    category: "Food Ordering & Delivery",
    icon: MapPin,
    faqs: [
      {
        question: "Can I order food for delivery?",
        answer: {
          main: "Yes! Enjoy La Tavola Royale's exquisite cuisine in the comfort of your home:",
          details: [
            "Browse our full Food Ordering menu on the website",
            "Same-day delivery available within 5-mile radius",
            "Preparation time: 30-45 minutes depending on order complexity",
            "Delivery fees: $5-15 based on distance",
            "Minimum order: $35 before tax"
          ],
          footer: "Place your order on our Food Ordering page. Real-time tracking available after preparation begins."
        }
      },
      {
        question: "What is your refund policy for food orders?",
        answer: {
          main: "We want you completely satisfied. Our refund policy ensures fairness to all:",
          details: [
            "Before Preparation (within 15 min): 100% refund",
            "During Preparation: 50% refund (ingredients and labor costs apply)",
            "After Preparation: No refund (but free rescheduled delivery)",
            "During Delivery: Order cannot be cancelled once in transit"
          ],
          footer: "Contact us immediately if there are quality issues. We will remake or refund any unsatisfactory dish."
        }
      }
    ]
  },
  {
    category: "Private Events",
    icon: Users,
    faqs: [
      {
        question: "Do you offer private dining and event hosting?",
        answer: {
          main: "Perfect for birthdays, anniversaries, corporate events, and celebrations:",
          details: [
            "Private Dining Rooms: Accommodate 12-60 guests",
            "Customized Menus: Work with our Chef to create your perfect menu",
            "Event Planning: Dedicated coordinator assists with every detail",
            "Catering Services: Full-service catering available off-site",
            "Flexible Timing: Custom hours available for group bookings",
            "Pricing: Tiered packages from $120-200+ per person"
          ],
          footer: "50% deposit required to secure your date. Contact us at +224 807 561 4248 or latavoroyale@gmail.com for a custom quote."
        }
      }
    ]
  },
  {
    category: "Policies & Safety",
    icon: Phone,
    faqs: [
      {
        question: "What is your dress code?",
        answer: {
          main: "We maintain an elegant atmosphere while remaining welcoming to all guests:",
          details: [
            "Standard/VIP Tables: Smart casual (collared shirt, dress pants/skirt, closed-toe shoes)",
            "Premium/Luxury Tables: Business casual or formal wear recommended",
            "Chef's Table & Private Dining: Business formal or cocktail attire",
            "Exceptions: Special occasions accommodated with advance notice",
            "What We Don't Allow: Athletic wear, tank tops, flip-flops, torn clothing"
          ],
          footer: "When in doubt, dress nicely! Our staff will kindly suggest changes if needed. See our full Dress Code Policy for details."
        }
      },
      {
        question: "What health and safety measures do you maintain?",
        answer: {
          main: "We follow the highest standards of health, safety, and sanitation:",
          details: [
            "Food Safety: All staff certified in food handling; regular training",
            "Kitchen Standards: Temperature-controlled areas, HACCP protocols",
            "Sanitation: Professional cleaning after every service",
            "Inspections: Regular health department inspections (100% compliance)",
            "COVID-19: Enhanced sanitization and flexible seating arrangements",
            "Emergency Protocols: First aid equipment and AED on-site; staff trained"
          ],
          footer: "Your wellbeing is non-negotiable. Contact us with any health concerns."
        }
      }
    ]
  }
];

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  let globalIndex = 0;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-faq">Frequently Asked Questions</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-faq-title">
            Your Questions Answered
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-faq-subtitle">
            Everything you need to know about dining at La Tavola Royale
          </p>
        </div>

        <div className="space-y-12" data-testid="container-faq-categories">
          {faqCategories.map((categoryData, catIdx) => {
            const CategoryIcon = categoryData.icon;
            return (
              <div key={catIdx} data-testid={`category-${catIdx}`}>
                <div className="flex items-center gap-3 mb-6" data-testid={`category-header-${catIdx}`}>
                  <CategoryIcon className="w-6 h-6 text-primary" data-testid={`icon-category-${catIdx}`} />
                  <h3 className="font-serif text-2xl font-bold" data-testid={`text-category-${catIdx}`}>
                    {categoryData.category}
                  </h3>
                </div>
                <div className="space-y-4" data-testid={`faq-group-${catIdx}`}>
                  {categoryData.faqs.map((faq, faqIdx) => {
                    const itemId = `${catIdx}-${faqIdx}`;
                    const currentIndex = globalIndex++;
                    const isExpanded = expandedId === itemId;

                    return (
                      <Card
                        key={itemId}
                        className="overflow-hidden hover-elevate cursor-pointer transition-all"
                        onClick={() => setExpandedId(isExpanded ? null : itemId)}
                        data-testid={`card-faq-${currentIndex}`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-semibold text-base sm:text-lg flex-1" data-testid={`text-faq-question-${currentIndex}`}>
                              {faq.question}
                            </h4>
                            <ChevronDown
                              className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              data-testid={`icon-faq-expand-${currentIndex}`}
                            />
                          </div>

                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t space-y-4" data-testid={`content-faq-${currentIndex}`}>
                              {typeof faq.answer === "string" ? (
                                <p className="text-muted-foreground leading-relaxed" data-testid={`text-faq-answer-${currentIndex}`}>
                                  {faq.answer}
                                </p>
                              ) : (
                                <>
                                  <p className="text-muted-foreground font-medium" data-testid={`text-faq-main-${currentIndex}`}>
                                    {faq.answer.main}
                                  </p>
                                  <ul className="space-y-2 ml-4" data-testid={`list-faq-details-${currentIndex}`}>
                                    {faq.answer.details.map((detail, detailIdx) => (
                                      <li key={detailIdx} className="text-muted-foreground text-sm flex gap-3" data-testid={`text-faq-detail-${currentIndex}-${detailIdx}`}>
                                        <span className="text-primary font-bold flex-shrink-0">•</span>
                                        <span>{detail}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  {faq.answer.footer && (
                                    <div className="mt-4 pt-4 border-t" data-testid={`footer-faq-${currentIndex}`}>
                                      <p className="text-sm text-muted-foreground italic" data-testid={`text-faq-footer-${currentIndex}`}>
                                        {faq.answer.footer}
                                      </p>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <Card className="mt-16 bg-gradient-to-r from-primary/10 to-transparent border-primary/20" data-testid="card-faq-contact">
          <CardContent className="p-8">
            <h3 className="font-serif text-2xl font-bold mb-4" data-testid="text-still-questions">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-contact-us-msg">
              Our team is ready to help! Reach out through any of these channels:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="contact-methods">
              <Button asChild variant="outline" className="justify-start" data-testid="button-whatsapp-faq">
                <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp: +224 807 561 4248
                </a>
              </Button>
              <Button asChild variant="outline" className="justify-start" data-testid="button-email-faq">
                <a href="mailto:latavoroyale@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  latavoroyale@gmail.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
