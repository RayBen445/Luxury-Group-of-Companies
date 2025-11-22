import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Music, Trophy, Briefcase, Heart } from "lucide-react";
import { Link } from "wouter";

export default function ClubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link href="/">
            <Badge variant="outline" className="mb-6 cursor-pointer hover-elevate">
              ← Back to Properties
            </Badge>
          </Link>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4 gradient-text">
            Elite Club
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            An exclusive members-only club where networking, fine dining, and premium experiences converge in an atmosphere of refined elegance
          </p>
          <Button size="lg" className="pulse-gold">
            Apply for Membership
          </Button>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tier: "Silver", price: "$2000/year", features: ["Access to Club", "Monthly Dining Credit", "Guest Passes"] },
              { tier: "Gold", price: "$5000/year", features: ["All Silver + Priority Seating", "Concierge Service", "Event Priority"] },
              { tier: "Platinum", price: "$10000/year", features: ["All Gold + Private Lounge Access", "Suite at Hotel", "Unlimited Guest Passes"] }
            ].map((tier, idx) => (
              <Card key={idx} className={`border-primary/20 hover-elevate ${idx === 1 ? 'ring-2 ring-primary' : ''}`} data-testid={`card-tier-${idx}`}>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">{tier.tier} Member</h3>
                  <div className="text-primary text-2xl font-bold mb-6">{tier.price}</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Join {tier.tier}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Club Amenities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Club Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Utensils, title: "Fine Dining", desc: "Gourmet restaurant with private dining rooms" },
              { icon: Music, title: "Live Entertainment", desc: "Weekly performances and exclusive events" },
              { icon: Users, title: "Networking Events", desc: "Monthly events connecting elite members" },
              { icon: Trophy, title: "Sports Facilities", desc: "Premium gym, pool, and recreational areas" },
              { icon: Briefcase, title: "Business Lounge", desc: "State-of-the-art meeting and conference spaces" },
              { icon: Heart, title: "Wellness", desc: "Spa, massage, and personalized health programs" }
            ].map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-club-amenity-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Join Elite Society</h2>
          <p className="text-muted-foreground mb-8">
            Apply for membership and gain access to exclusive experiences and connections
          </p>
          <Button size="lg" className="pulse-gold">
            Apply Now
          </Button>
        </div>
      </section>
    </main>
  );
}
