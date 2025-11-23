import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Globe, Users, Award, TrendingUp } from "lucide-react";

export default function AboutGroupPage() {
  const properties = [
    { name: "Restaurant", href: "/restaurant", icon: "🍽️" },
    { name: "Hotel", href: "/hotel", icon: "🏨" },
    { name: "Club", href: "/club", icon: "🎭" },
    { name: "Lounge", href: "/lounge", icon: "🍸" },
    { name: "Tech", href: "/tech", icon: "💻" },
    { name: "Bank", href: "/bank", icon: "🏦" },
    { name: "Construction", href: "/construction", icon: "🏗️" },
    { name: "University", href: "/university", icon: "🎓" },
    { name: "Hospital", href: "/hospital", icon: "🏥" },
    { name: "Yacht Club", href: "/yacht-club", icon: "⛵" },
    { name: "Airline", href: "/airline", icon: "✈️" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">About Us</Badge>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-title">
              Royale Luxury Group
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-tagline">
              Where Elegance Meets Excellence across 11 premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="hover-elevate" data-testid="card-mission">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start mb-4">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide unparalleled luxury experiences and services across hospitality, finance, technology, education, and lifestyle sectors. We are committed to excellence in every aspect of our operations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-vision">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start mb-4">
                  <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become the world's most trusted luxury brand portfolio, delivering premium experiences that exceed expectations while maintaining the highest standards of quality and service.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-values">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start mb-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Our Values</h3>
                    <p className="text-muted-foreground">
                      Excellence, Integrity, Innovation, and Customer-First approach. We believe in creating lasting relationships built on trust, quality, and exceptional service delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-legacy">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start mb-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Our Legacy</h3>
                    <p className="text-muted-foreground">
                      With years of experience in luxury hospitality and services, we have established ourselves as leaders in our respective industries, serving clientele who demand nothing less than perfection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-4xl font-bold mb-8 text-center" data-testid="text-properties">Our 11 Premium Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((prop) => (
                <Link key={prop.name} href={prop.href}>
                  <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-property-${prop.name.toLowerCase()}`}>
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{prop.icon}</div>
                      <h3 className="font-serif text-xl font-bold mb-2">{prop.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        Discover luxury at its finest with Royale Luxury {prop.name}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <Card className="hover-elevate bg-primary/10" data-testid="card-cta">
            <CardContent className="p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Ready to Experience Luxury?</h3>
              <p className="text-muted-foreground mb-6">
                Explore any of our premium properties or contact us for more information about our services.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/">
                  <Button className="px-8" data-testid="button-explore">
                    Explore Properties
                  </Button>
                </Link>
                <a href="tel:+2348075614248">
                  <Button variant="outline" className="px-8" data-testid="button-contact">
                    Contact Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
