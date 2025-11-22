import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Martini, Music, Lightbulb, Users, Calendar, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function LoungePage() {
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
            Royal Lounge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            A sophisticated haven of elegance where premium beverages, live entertainment, and VIP service create unforgettable evenings
          </p>
          <Button size="lg" className="pulse-gold">
            Reserve Your Table
          </Button>
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Lounge Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Martini,
                title: "Signature Cocktails",
                desc: "Handcrafted cocktails created by world-renowned mixologists"
              },
              {
                icon: Music,
                title: "Live Entertainment",
                desc: "Jazz bands, DJs, and live performances nightly"
              },
              {
                icon: Lightbulb,
                title: "Ambient Lighting",
                desc: "Sophisticated atmosphere with curated lighting and design"
              },
              {
                icon: Users,
                title: "VIP Service",
                desc: "Personalized service and private lounge areas"
              },
              {
                icon: Calendar,
                title: "Private Events",
                desc: "Host intimate gatherings and celebrations"
              },
              {
                icon: Sparkles,
                title: "Premium Spirits",
                desc: "Rare and exclusive selections from around the world"
              }
            ].map((experience, idx) => {
              const Icon = experience.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-lounge-exp-${idx}`}>
                  <CardContent className="p-8">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground">{experience.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">VIP Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Evening Package",
                price: "$150/person",
                includes: ["Welcome cocktail", "Appetizers", "2-hour lounge access"]
              },
              {
                name: "Premium Night",
                price: "$300/person",
                includes: ["Welcome champagne", "Full dining menu", "Private seating", "Live entertainment access"]
              },
              {
                name: "Ultimate Experience",
                price: "$500/person",
                includes: ["VIP private lounge", "Premium spirits tasting", "Chef's special menu", "Dedicated concierge"]
              }
            ].map((pkg, idx) => (
              <Card key={idx} className={`border-primary/20 hover-elevate ${idx === 1 ? 'ring-2 ring-primary' : ''}`} data-testid={`card-pkg-${idx}`}>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-primary text-2xl font-bold mb-6">{pkg.price}</div>
                  <ul className="space-y-2 mb-8">
                    {pkg.includes.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Reservations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Hours & Reservations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="border-primary/20" data-testid="card-hours">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>Tuesday - Thursday: 6 PM - 1 AM</p>
                  <p>Friday - Saturday: 6 PM - 3 AM</p>
                  <p>Sunday: 7 PM - 12 AM</p>
                  <p>Monday: CLOSED</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20" data-testid="card-reserve-info">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Make a Reservation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Book your VIP experience today through our website or contact us directly
                </p>
                <Button className="w-full">Reserve Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
