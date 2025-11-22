import { Badge } from "@/components/ui/badge";

const features = [
  { icon: "🏆", label: "5-Star Rated Restaurant", value: "1000+ Reviews" },
  { icon: "👨‍🍳", label: "Michelin Trained Chefs", value: "Award Winning" },
  { icon: "🍇", label: "Premium Wine Selection", value: "500+ Bottles" },
  { icon: "📍", label: "Prime Location", value: "City Center" },
];

export function SocialProof() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-b border-border" data-testid="section-social-proof">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center" data-aos="fade-up" data-aos-delay={idx * 100} data-testid={`card-proof-${idx}`}>
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-serif text-lg font-bold mb-1" data-testid={`text-proof-label-${idx}`}>
                {feature.label}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-proof-value-${idx}`}>
                {feature.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
