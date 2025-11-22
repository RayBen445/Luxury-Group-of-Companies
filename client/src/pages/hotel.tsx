import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Users, Utensils, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function HotelPage() {
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
            Grand Royale Hotel
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            A sanctuary of elegance and comfort, offering world-class accommodations with premium amenities and personalized service
          </p>
          <Button size="lg" className="pulse-gold">
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Our Premium Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "100+ Luxury Rooms", desc: "Suites with premium bedding, smart technology, and city views" },
              { icon: Sparkles, title: "World-Class Spa", desc: "Full-service spa with treatments, pool, and wellness programs" },
              { icon: Utensils, title: "Gourmet Dining", desc: "Multiple restaurants and room service from our chef's collection" },
              { icon: Wifi, title: "Business Center", desc: "Complete facilities for conferences and corporate events" },
              { icon: Users, title: "Event Spaces", desc: "Versatile venues for weddings, conferences, and celebrations" },
              { icon: MapPin, title: "Prime Location", desc: "Centrally located with easy access to attractions and business district" }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-amenity-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Room Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Deluxe Room", price: "$250/night", desc: "Spacious rooms with modern amenities and city views" },
              { name: "Executive Suite", price: "$450/night", desc: "Premium suite with separate living area and butler service" },
              { name: "Presidential Suite", price: "$800/night", desc: "Ultimate luxury with private spa, dining, and panoramic views" },
              { name: "Penthouse", price: "$1500/night", desc: "Exclusive top-floor residence with private pool and terrace" }
            ].map((room, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-room-${idx}`}>
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">{room.name}</h3>
                  <div className="text-primary text-2xl font-bold mb-4">{room.price}</div>
                  <p className="text-muted-foreground mb-6">{room.desc}</p>
                  <Button className="w-full">Select Room</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Ready for a Luxury Experience?</h2>
          <p className="text-muted-foreground mb-8">
            Book your stay at Grand Royale Hotel and experience hospitality excellence
          </p>
          <Button size="lg" className="pulse-gold">
            Book Now
          </Button>
        </div>
      </section>
    </main>
  );
}
