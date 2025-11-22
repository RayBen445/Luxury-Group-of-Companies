import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "James Richardson", rating: 5, text: "An unforgettable culinary journey. Every dish was perfection." },
  { name: "Sophie Laurent", rating: 5, text: "The ambiance, service, and food exceeded all expectations. Magnifique!" },
  { name: "Marco Rossi", rating: 5, text: "This is fine dining at its absolute finest. Worth every penny." },
  { name: "Elena Dubois", rating: 5, text: "The Chef's Table experience was absolutely transcendent. A culinary masterpiece." },
  { name: "David Chen", rating: 5, text: "Exceptional service paired with outstanding cuisine. Highly recommended." },
  { name: "Isabella Moretti", rating: 5, text: "Every element was flawless. The wine pairings were inspired." },
  { name: "Thomas Anderson", rating: 5, text: "Truly the best dining experience of my life. Worth traveling for." },
  { name: "Victoria Hartley", rating: 5, text: "Elegant, sophisticated, and absolutely delicious. Pure elegance on a plate." },
  { name: "Antoine Leclerc", rating: 5, text: "A symphony of flavors. The attention to detail is remarkable." },
  { name: "Cristina Santos", rating: 5, text: "The best restaurant I've ever visited. Everything was perfect." },
  { name: "Michael Johnson", rating: 5, text: "Outstanding food, impeccable service, beautiful ambiance. Five stars all the way." },
  { name: "Natasha Volkov", rating: 5, text: "An elegant dining experience from start to finish. Absolutely divine." },
  { name: "Patrick O'Neill", rating: 5, text: "The presentation is as impressive as the taste. Bravo!" },
  { name: "Francesca Rosetti", rating: 5, text: "A culinary temple. Every visit is an event to remember." },
  { name: "Sebastian Mueller", rating: 5, text: "Perfectly executed dishes with stunning presentation. Masterful." },
  { name: "Alejandra Garcia", rating: 5, text: "The chef's creativity and skill shine through in every course." },
  { name: "Lucas Oliveira", rating: 5, text: "A feast for all the senses. Incredibly memorable experience." },
  { name: "Charlotte Blanc", rating: 5, text: "Refined elegance meets culinary excellence. Simply extraordinary." },
  { name: "Dmitri Ivanov", rating: 5, text: "The service was attentive without being intrusive. Perfection." },
  { name: "Olivia Thompson", rating: 5, text: "Worth every penny and every minute. A true gem." },
  { name: "Rafael Hernandez", rating: 5, text: "The food speaks for itself. Absolutely phenomenal." },
  { name: "Margot Fontaine", rating: 5, text: "Such an elegant and refined experience. Highly impressed." },
  { name: "Giuseppe Ricci", rating: 5, text: "Traditional excellence combined with modern innovation. Superb." },
  { name: "Amelia Windsor", rating: 5, text: "The attention to every detail makes this place special." },
  { name: "Viktor Petrov", rating: 5, text: "Fine dining at its absolute peak. Exceptional all around." },
  { name: "Camille Rousseau", rating: 5, text: "A beautiful presentation paired with exquisite flavors." },
  { name: "Antonio Santoro", rating: 5, text: "This restaurant is a true culinary destination." },
  { name: "Eleanor Ashford", rating: 5, text: "The ambiance and food create an unforgettable night." },
  { name: "Adrian Kowalski", rating: 5, text: "Exceptional quality in every single dish. Truly outstanding." },
  { name: "Beatrice Medici", rating: 5, text: "A taste of luxury and sophistication. Highly recommend." },
  { name: "Constantine Papadopoulos", rating: 5, text: "The best dining investment I've made. Absolutely worth it." },
  { name: "Dominique Laurent", rating: 5, text: "Elegant service paired with innovative cuisine. Magnifique!" },
  { name: "Emilia Bergström", rating: 5, text: "Every bite is a journey. Simply divine." },
  { name: "Fabien Roussard", rating: 5, text: "The chef clearly cares about perfection. It shows." },
  { name: "Gabriella Moretti", rating: 5, text: "A refined culinary experience. Nothing short of magnificent." },
  { name: "Henri Bisset", rating: 5, text: "The sommelier's recommendations were spot on. Excellent." },
  { name: "Iris Cunningham", rating: 5, text: "Pure culinary artistry. I was thoroughly impressed." },
  { name: "Julian Ashworth", rating: 5, text: "Fine dining redefined. An experience I'll never forget." },
  { name: "Katerina Volkova", rating: 5, text: "The plating is as beautiful as the taste is delicious." },
  { name: "Leopold Hartmann", rating: 5, text: "A restaurant that truly deserves all the accolades." },
  { name: "Marlene von Steinberg", rating: 5, text: "Absolutely flawless. The best meal I've had in years." },
  { name: "Nikolai Alexandrov", rating: 5, text: "The food here is pure poetry. Utterly exquisite." },
  { name: "Ophelia Sterling", rating: 5, text: "An oasis of culinary perfection. Heartily recommend." },
  { name: "Philippe Descartes", rating: 5, text: "Every detail demonstrates the chef's expertise and passion." },
  { name: "Quintessa Noir", rating: 5, text: "The most elegant and sophisticated dining I've experienced." },
  { name: "Renato Gucci", rating: 5, text: "A truly memorable meal from beginning to end." },
  { name: "Simone Bianchi", rating: 5, text: "The food is not just good - it's transformative." },
  { name: "Toulouse Fontaine", rating: 5, text: "A masterclass in fine dining. Absolutely phenomenal." },
  { name: "Vivienne Lacroix", rating: 5, text: "Stunning food, impeccable service, perfect atmosphere." },
  { name: "Wolfgang Schneider", rating: 5, text: "This is the gold standard for fine dining restaurants." },
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
