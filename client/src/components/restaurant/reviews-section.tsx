import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "James Richardson",
    rating: 5,
    text: "An unforgettable culinary journey. Every dish was perfection.",
  },
  {
    name: "Sophie Laurent",
    rating: 5,
    text: "The ambiance, service, and food exceeded all expectations. Magnifique!",
  },
  {
    name: "Marco Rossi",
    rating: 5,
    text: "This is fine dining at its absolute finest. Worth every penny.",
  },
];

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-reviews">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-reviews-title">
            Guest Reviews
          </h2>
        </div>

        <Card className="overflow-hidden" data-testid="card-review-featured">
          <CardContent className="p-8">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[current].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" data-testid={`icon-star-${i}`} />
              ))}
            </div>
            <p className="text-lg text-center mb-6 italic" data-testid="text-review-content">
              "{reviews[current].text}"
            </p>
            <p className="text-center font-serif text-xl font-bold" data-testid="text-reviewer-name">
              {reviews[current].name}
            </p>
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-muted-foreground"
                  }`}
                  data-testid={`button-review-dot-${index}`}
                  aria-label={`Review ${index + 1}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
