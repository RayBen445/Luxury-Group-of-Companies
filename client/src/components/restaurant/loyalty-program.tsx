import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Gift, Star, Zap } from "lucide-react";

export function LoyaltyProgram() {
  const userPoints = 850;
  const nextTier = 1000;
  const progress = (userPoints / nextTier) * 100;

  const tiers = [
    { name: "Bronze", points: 0, benefits: ["5% discount", "Birthday special"] },
    { name: "Silver", points: 500, benefits: ["10% discount", "Free appetizer", "Priority booking"] },
    { name: "Gold", points: 1000, benefits: ["15% discount", "Free entree", "VIP access", "Private events discount"] },
    { name: "Platinum", points: 2000, benefits: ["20% discount", "Free tasting menu", "Chef's table", "Complimentary wine"] },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20" data-testid="section-loyalty">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-loyalty">Loyalty Program</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-loyalty-title">
            Earn Rewards
          </h2>
        </div>

        <Card className="mb-12 glass-effect" data-testid="card-loyalty-status">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-lg" data-testid="text-current-tier">Silver Member</h3>
                <p className="text-muted-foreground text-sm" data-testid="text-points-info">{userPoints} points</p>
              </div>
              <Star className="w-8 h-8 text-amber-400" data-testid="icon-star" />
            </div>
            <Progress value={progress} className="mb-3" data-testid="progress-tier" />
            <p className="text-sm text-muted-foreground text-center" data-testid="text-progress-info">
              {nextTier - userPoints} points until Gold tier
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier, idx) => (
            <Card key={idx} className={`${idx === 2 ? "ring-2 ring-primary" : ""}`} data-testid={`card-tier-${tier.name.toLowerCase()}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold" data-testid={`text-tier-${tier.name.toLowerCase()}`}>{tier.name}</h3>
                  <Zap className="w-5 h-5 text-primary" data-testid={`icon-tier-${tier.name.toLowerCase()}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-points-${tier.name.toLowerCase()}`}>
                  {tier.points}+ points
                </p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2" data-testid={`text-benefit-${tier.name.toLowerCase()}-${i}`}>
                      <span>✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
