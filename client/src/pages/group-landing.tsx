import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Wine, Star, Zap, CreditCard, Building2, BookOpen, Heart, Anchor, Plane, ShoppingCart, Car, Spa } from "lucide-react";
import restaurantImage from "@assets/generated_images/luxury_restaurant_exterior_-_la_tavola_royale.png";

export default function GroupLandingPage() {
  const properties = [
    {
      id: "restaurant",
      name: "La Tavola Royale",
      type: "Fine Dining Restaurant",
      icon: Wine,
      description: "Michelin-inspired cuisine with 1100+ dishes, private dining, and world-class service",
      features: ["Fine Dining", "Private Events", "1100+ Menu Items", "Wine Pairing"],
      href: "/restaurant",
      color: "from-amber-500/20 to-transparent"
    },
    {
      id: "hotel",
      name: "Grand Royale Hotel",
      type: "5-Star Luxury Hotel",
      icon: MapPin,
      description: "World-class accommodations with premium suites, spa, and concierge services",
      features: ["100+ Rooms", "Premium Spa", "Rooftop Restaurant", "24/7 Concierge"],
      href: "/hotel",
      color: "from-blue-500/20 to-transparent"
    },
    {
      id: "club",
      name: "Elite Club",
      type: "5-Star Private Club",
      icon: Users,
      description: "Exclusive membership club with premium amenities, networking events, and gourmet dining",
      features: ["Members Only", "Networking Events", "Premium Lounge", "Fine Dining"],
      href: "/club",
      color: "from-purple-500/20 to-transparent"
    },
    {
      id: "lounge",
      name: "Royal Lounge",
      type: "5-Star Luxury Lounge",
      icon: Star,
      description: "Sophisticated lounge offering premium beverages, live entertainment, and VIP experiences",
      features: ["Live Entertainment", "Premium Cocktails", "VIP Service", "Private Events"],
      href: "/lounge",
      color: "from-rose-500/20 to-transparent"
    },
    {
      id: "tech",
      name: "Royale Technologies",
      type: "Enterprise Technology Solutions",
      icon: Zap,
      description: "Cutting-edge technology platforms powering luxury hospitality operations worldwide",
      features: ["Cloud Solutions", "AI Analytics", "Property Management", "Mobile Apps"],
      href: "/tech",
      color: "from-cyan-500/20 to-transparent"
    },
    {
      id: "bank",
      name: "Luxury Bank",
      type: "Premium Banking Services",
      icon: CreditCard,
      description: "Exclusive financial solutions with wealth management, investments, and corporate banking",
      features: ["Wealth Management", "Investment Services", "Corporate Banking", "Premium Cards"],
      href: "/bank",
      color: "from-green-500/20 to-transparent"
    },
    {
      id: "construction",
      name: "Royale Luxury Construction",
      type: "Luxury Development Company",
      icon: Building2,
      description: "Premium construction and real estate development creating iconic structures and luxury residences",
      features: ["Luxury Developments", "Custom Construction", "Architectural Design", "Project Management"],
      href: "/construction",
      color: "from-orange-500/20 to-transparent"
    },
    {
      id: "university",
      name: "Royale Luxury University",
      type: "Premium Educational Institution",
      icon: BookOpen,
      description: "World-class education with four prestigious colleges offering advanced programs and research opportunities",
      features: ["Four Colleges", "Advanced Research", "Global Faculty", "200+ Programs"],
      href: "/university",
      color: "from-indigo-500/20 to-transparent"
    },
    {
      id: "hospital",
      name: "Royale Luxury Hospital",
      type: "Premium Healthcare Center",
      icon: Heart,
      description: "State-of-the-art medical facility with specialized departments, advanced technology, and expert care",
      features: ["500+ Beds", "Specialist Doctors", "24/7 Emergency", "Advanced Diagnostics"],
      href: "/hospital",
      color: "from-red-500/20 to-transparent"
    },
    {
      id: "yacht-club",
      name: "Royale Luxury Yacht Club",
      type: "Exclusive Maritime Club",
      icon: Anchor,
      description: "Prestigious waterfront club offering luxury yacht experiences, fine dining, and exclusive membership",
      features: ["200+ Yachts", "Premium Marina", "Fine Dining", "Water Sports"],
      href: "/yacht-club",
      color: "from-blue-400/20 to-transparent"
    },
    {
      id: "airline",
      name: "Royale Luxury Airways",
      type: "Luxury Private Aviation",
      icon: Plane,
      description: "Premium private jet charter services offering luxury air travel with personalized service to global destinations",
      features: ["50+ Aircraft", "Global Coverage", "Gourmet Catering", "24/7 Booking"],
      href: "/airline",
      color: "from-sky-500/20 to-transparent"
    },
    {
      id: "spa-wellness",
      name: "Royale Spa & Wellness",
      type: "Premium Wellness Retreat",
      icon: Spa,
      description: "Exclusive spa and wellness center offering luxury treatments, holistic therapies, and rejuvenation services in a serene environment",
      features: ["Luxury Spa", "Wellness Retreats", "Expert Therapies", "Premium Treatments"],
      href: "/spa-wellness",
      color: "from-pink-500/20 to-transparent"
    },
    {
      id: "supermarket",
      name: "Royale Luxury Supermarket",
      type: "Premium Retail & Grocery",
      icon: ShoppingCart,
      description: "World-class supermarket offering premium products, organic selections, and fresh produce with express delivery service",
      features: ["10+ Categories", "Organic Selection", "Express Delivery", "Premium Quality"],
      href: "/supermarket",
      color: "from-green-500/20 to-transparent"
    },
    {
      id: "car-company",
      name: "Royale Luxury Motors",
      type: "Premium Automotive",
      icon: Car,
      description: "Luxury automotive group producing, selling, and leasing the world's finest premium vehicles with expert service",
      features: ["Produce", "Buy & Lease", "Service & Maintenance", "Test Drive Available"],
      href: "/car-company",
      color: "from-slate-500/20 to-transparent"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={restaurantImage} 
            alt="La Tavola Royale - Main Company Headquarters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 backdrop-blur-sm">Luxury Hospitality Group</Badge>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Experience Luxury
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
              Discover our curated collection of premium establishments, each designed to deliver exceptional experiences in fine dining, hospitality, and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/restaurant">
                <Button size="lg" className="pulse-gold">
                  Explore Restaurant
                </Button>
              </Link>
              <Link href="/hotel">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm">
                  Book Hotel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => {
              const PropertyIcon = property.icon;
              return (
                <Link key={property.id} href={property.href}>
                  <Card className={`overflow-hidden hover-elevate cursor-pointer transition-all h-full bg-gradient-to-br ${property.color} border-primary/20`} data-testid={`card-property-${property.id}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <PropertyIcon className="w-12 h-12 text-primary" />
                        <Badge variant="secondary">{property.type}</Badge>
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2" data-testid={`text-property-name-${property.id}`}>
                        {property.name}
                      </h3>
                      <p className="text-muted-foreground mb-6" data-testid={`text-property-desc-${property.id}`}>
                        {property.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {property.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full" data-testid={`button-explore-${property.id}`}>
                        Explore {property.name}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Group Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">About Our Group</Badge>
            <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">
              Luxury Hospitality Group
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "11",
                label: "World-Class Properties",
                desc: "Luxury hospitality, technology, banking, construction, education, healthcare, and aviation solutions"
              },
              {
                number: "2000+",
                label: "Premium Rooms & Spaces",
                desc: "Curated accommodations and venues for every occasion"
              },
              {
                number: "10000+",
                label: "Satisfied Clients",
                desc: "Trusted by discerning guests and businesses worldwide"
              }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center border-primary/20" data-testid={`card-stat-${idx}`}>
                <CardContent className="p-8">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <h4 className="font-semibold mb-2">{stat.label}</h4>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Group */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-muted-foreground mb-8">
            Contact our concierge team for reservations, inquiries, or special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                WhatsApp: +234 807 561 4248
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:latavoroyale@gmail.com">
                Email: latavoroyale@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
