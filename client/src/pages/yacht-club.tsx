import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Anchor, Users, Wine, Zap, Award, Utensils, Waves, Compass, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import marinaImage from "@assets/generated_images/exclusive_yacht_club_marina.png";
import yachtImage from "@assets/generated_images/luxury_yacht_interior.png";

export default function YachtClubPage() {
  const membershipTiers = [
    {
      name: "Silver Membership",
      features: ["Marina Access", "Boat Maintenance", "Social Events", "Lounge Access"],
      price: "$50K/Year",
      icon: Waves
    },
    {
      name: "Gold Membership",
      features: ["All Silver Benefits", "Yacht Rental", "Private Events", "Fine Dining"],
      price: "$150K/Year",
      icon: Award
    },
    {
      name: "Platinum Membership",
      features: ["All Gold Benefits", "Dedicated Yacht", "Exclusive Events", "Concierge Service"],
      price: "$500K/Year",
      icon: Anchor
    }
  ];

  const amenities = [
    { icon: Anchor, title: "World-Class Marina", desc: "Secure mooring for luxury yachts with 24/7 maintenance and concierge" },
    { icon: Utensils, title: "Fine Dining", desc: "Michelin-inspired restaurants with waterfront views and premium cuisine" },
    { icon: Wine, title: "Premium Bar", desc: "Curated wine selection and craft cocktails with expert mixologists" },
    { icon: Users, title: "Networking Events", desc: "Exclusive social gatherings and business events for elite members" },
    { icon: Zap, title: "Water Sports", desc: "Sailing, diving, fishing, and water activities led by certified instructors" },
    { icon: Compass, title: "Travel Services", desc: "Trip planning, charter services, and yacht rental assistance" },
  ];

  const stats = [
    { number: "500+", label: "Members Worldwide" },
    { number: "200+", label: "Luxury Yachts" },
    { number: "50+", label: "Berthing Spaces" },
    { number: "24/7", label: "Concierge Service" }
  ];

  const quickLinks = [
    { label: "Membership", href: "#membership", icon: Users },
    { label: "Amenities", href: "#amenities", icon: Utensils },
    { label: "Services", href: "#services", icon: Anchor },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Quick Links Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 whitespace-nowrap"
                    data-testid={`button-quick-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={marinaImage} 
            alt="Exclusive Yacht Club Marina" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/">
            <Badge variant="outline" className="mb-6 cursor-pointer hover-elevate backdrop-blur-sm" data-testid="badge-back">
              ← Back to Properties
            </Badge>
          </Link>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-yacht-club-title">
            Royale Luxury Yacht Club
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-yacht-club-desc">
            An exclusive maritime sanctuary offering premium yachting experiences, world-class amenities, and unparalleled luxury on the water.
          </p>
          <a href="tel:+2348075614248">
            <Button size="lg" className="pulse-gold" data-testid="button-join-club">
              Join the Club
            </Button>
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-yacht-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-membership">Membership Tiers</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-membership-title">
              Choose Your Membership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive membership options tailored to your lifestyle and yachting aspirations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, idx) => {
              const Icon = tier.icon;
              return (
                <Card key={idx} className={`border-primary/20 hover-elevate flex flex-col ${idx === 1 ? 'md:scale-105' : ''}`} data-testid={`card-membership-${idx}`}>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-serif text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-primary font-bold text-lg mb-6">{tier.price}</p>
                    <div className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="block text-left">
                          ✓ {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full" data-testid={`button-membership-${idx}`}>
                      Select Plan
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-amenities">Amenities</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-amenities-title">
              Premium Facilities & Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-amenity-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">About Royale Yacht Club</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
                Maritime Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Royale Yacht Club represents the pinnacle of nautical luxury. Our exclusive marina, world-class facilities, and exceptional service create an unparalleled yachting community for discerning members who appreciate the finer things in maritime life.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Elite membership of industry leaders and innovators",
                  "Secure, state-of-the-art marina facilities",
                  "Personalized concierge and yacht services",
                  "Michelin-inspired dining experiences",
                  "Curated social and networking events",
                  "Global yacht charter partnerships"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" data-testid="button-learn-more-yacht">
                Learn More
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={yachtImage} 
                alt="Luxury Yacht Interior" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in joining Royale Yacht Club? Contact our membership team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-email">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get in touch via email</p>
                <a 
                  href="tel:+2348075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-email-yacht"
                >
                  +234 807 561 4248
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available for membership inquiries</p>
                <a 
                  href="tel:+2348075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-phone-yacht"
                >
                  +234 807 561 4248
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
