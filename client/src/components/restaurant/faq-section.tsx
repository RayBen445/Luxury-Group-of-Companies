import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your operating hours?",
    answer: "We're open Mon-Thu 11am-11pm, Fri-Sat 11am-12am. Closed Sundays. Special hours during holidays."
  },
  {
    question: "Do you have vegetarian options?",
    answer: "Yes! We have extensive vegetarian and vegan menus with 50+ dishes specifically crafted for plant-based diets."
  },
  {
    question: "Can I make a reservation?",
    answer: "Absolutely! You can reserve a table on our Reservations page or contact us via WhatsApp at +224 807 561 4248."
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes, we accommodate all dietary restrictions including gluten-free, dairy-free, nut allergies, and more. Please mention when booking."
  },
  {
    question: "Is there a dress code?",
    answer: "Smart casual is recommended. Our full dress code policy is available on the Policies page."
  },
  {
    question: "Do you offer private dining?",
    answer: "Yes! We have private dining rooms available for special events and group bookings. Contact us for details."
  },
  {
    question: "Can I order food for delivery?",
    answer: "Yes! Check our Food Ordering page to browse and order for home delivery in your area."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancellations made 24 hours in advance receive a full refund. Late cancellations may incur charges. See Policies for details."
  },
];

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-faq">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-faq">Frequently Asked Questions</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-faq-title">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-faq-subtitle">
            Find answers to questions about our restaurant, reservations, and services
          </p>
        </div>

        <div className="space-y-4" data-testid="container-faq-items">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate cursor-pointer"
              onClick={() => setExpandedId(expandedId === index ? null : index)}
              data-testid={`card-faq-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-lg flex-1" data-testid={`text-faq-question-${index}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      expandedId === index ? "rotate-180" : ""
                    }`}
                    data-testid={`icon-faq-expand-${index}`}
                  />
                </div>
                {expandedId === index && (
                  <p className="mt-4 text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
                    {faq.answer}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
