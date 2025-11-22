import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  { year: 2023, title: "Michelin Star", description: "Recognized for culinary excellence" },
  { year: 2022, title: "Best Fine Dining", description: "City Dining Awards" },
  { year: 2021, title: "Chef's Table Award", description: "International recognition" },
  { year: 2020, title: "Innovation Award", description: "Culinary techniques" },
];

export function AwardsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-awards">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-awards">Recognition</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-awards-title">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <Card key={idx} className="hover-elevate active-elevate-2" data-aos="fade-up" data-aos-delay={idx * 100} data-testid={`card-award-${idx}`}>
              <CardContent className="p-6">
                <div className="text-4xl font-serif font-bold text-primary mb-2" data-testid={`text-year-${idx}`}>
                  {award.year}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-award-title-${idx}`}>
                  {award.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-award-desc-${idx}`}>
                  {award.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
