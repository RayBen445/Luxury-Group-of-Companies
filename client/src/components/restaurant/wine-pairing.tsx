import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pairings = [
  { dish: "Filet Mignon", wine: "Bordeaux Reserve 2018", pairing: "Bold red with rich beef" },
  { dish: "Sea Bass", wine: "Sauvignon Blanc 2022", pairing: "Crisp white with delicate fish" },
  { dish: "Lobster Thermidor", wine: "Chablis Premier Cru", pairing: "Complex white for shellfish" },
  { dish: "Lamb Chops", wine: "Côtes du Rhône 2019", pairing: "Medium-bodied red with herbs" },
];

export function WinePairingSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-wine-pairing">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-wine">Wine Selection</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-wine-title">
            Wine Pairings
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-wine-subtitle">
            Expert sommelier recommendations for the perfect pairing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairings.map((pair, idx) => (
            <Card key={idx} className="hover-elevate active-elevate-2" data-aos="fade-up" data-aos-delay={idx * 100} data-testid={`card-pairing-${idx}`}>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3" data-testid={`text-pairing-dish-${idx}`}>
                  {pair.dish}
                </h3>
                <p className="text-primary font-bold mb-3" data-testid={`text-pairing-wine-${idx}`}>
                  {pair.wine}
                </p>
                <p className="text-muted-foreground" data-testid={`text-pairing-desc-${idx}`}>
                  {pair.pairing}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
