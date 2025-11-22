import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";

const tips = [
  { title: "Pairing Wine with Fish", tip: "Always choose crisp whites with delicate white fish, but fuller-bodied wines work well with salmon." },
  { title: "Perfect Steak Temperature", tip: "Rare: 125°F, Medium-rare: 135°F, Medium: 145°F. Use a meat thermometer for precision." },
  { title: "Knife Skills Matter", tip: "A sharp knife is safer and creates cleaner cuts. Always slice against the grain for tenderness." },
  { title: "Seasoning at the Right Time", tip: "Season at the beginning for better flavor development, and taste as you cook to adjust." },
];

export function ChefTips() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-chef-tips">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-tips">Chef's Wisdom</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-tips-title">
            Culinary Tips
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((item, idx) => (
            <Card key={idx} className="hover-elevate active-elevate-2" data-aos="fade-up" data-aos-delay={idx * 100} data-testid={`card-tip-${idx}`}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" data-testid={`icon-tip-${idx}`} />
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-2" data-testid={`text-tip-title-${idx}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-tip-content-${idx}`}>
                      {item.tip}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
