import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Users, Globe, Zap, Award, Utensils, Wifi, Shield, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import jetImage from "@assets/generated_images/luxury_private_jet.png";
import loungeImage from "@assets/generated_images/premium_airport_lounge.png";

export default function AirlinePage() {
  const services = [
    { icon: Plane, title: "Private Jet Charter", desc: "On-demand luxury air travel with personalized service and flexible scheduling" },
    { icon: Utensils, title: "Gourmet Catering", desc: "Michelin-inspired cuisine prepared onboard by professional chefs" },
    { icon: Wifi, title: "Connectivity", desc: "High-speed internet and entertainment systems throughout the flight" },
    { icon: Users, title: "Concierge Service", desc: "Dedicated flight attendants and ground services for ultimate convenience" },
    { icon: Shield, title: "Safety & Luxury", desc: "Industry-leading safety standards with premium comfort and privacy" },
    { icon: Globe, title: "Global Coverage", desc: "Access to 5000+ airports worldwide with seamless international service" },
  ];

  const fleetTypes = [
    {
      name: "Light Jet",
      capacity: "4-6 Passengers",
      features: ["Perfect for Quick Trips", "Cost Efficient", "High Speed", "Flexible Scheduling"],
      range: "2000 miles"
    },
    {
      name: "Mid-Size Jet",
      capacity: "6-8 Passengers",
      features: ["Optimal Comfort", "Intercontinental Range", "Premium Cabin", "Advanced Avionics"],
      range: "3500 miles"
    },
    {
      name: "Heavy Jet",
      capacity: "10-16 Passengers",
      features: ["Maximum Luxury", "Transcontinental Range", "Full Amenities", "Premium Suites"],
      range: "5500 miles"
    }
  ];

  const stats = [
    { number: "50+", label: "Aircraft Fleet" },
    { number: "5000+", label: "Destinations" },
    { number: "100K+", label: "Satisfied Passengers" },
    { number: "24/7", label: "Booking & Support" }
  ];

  const quickLinks = [
    { label: "Fleet", href: "#fleet", icon: Plane },
    { label: "Services", href: "#services", icon: Utensils },
    { label: "Membership", href: "#membership", icon: Users },
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
            src={jetImage} 
            alt="Luxury Private Jet" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-airline-title">
            Royale Airways
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-airline-desc">
            Experience luxury aviation with our premium private jet charter services, featuring world-class comfort, personalized service, and exclusive access to global destinations.
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-book-flight">
            Book Your Flight
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-airline-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-fleet">Our Fleet</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-fleet-title">
              Premium Aircraft Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse fleet of luxury jets tailored to your travel needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetTypes.map((fleet, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate flex flex-col" data-testid={`card-fleet-${idx}`}>
                <CardContent className="p-6 flex flex-col flex-1">
                  <Plane className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">{fleet.name}</h3>
                  <p className="text-primary font-bold text-lg mb-2">{fleet.capacity}</p>
                  <p className="text-sm text-muted-foreground mb-4">Range: {fleet.range}</p>
                  <div className="space-y-2 mb-8 flex-1">
                    {fleet.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="block text-left">
                        ✓ {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" data-testid={`button-fleet-${idx}`}>
                    Select Aircraft
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-services">Services</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-services-title">
              Premium In-Flight Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-service-airline-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Membership Programs</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
                Frequent Flyer Rewards
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our exclusive membership program and enjoy premium benefits, priority booking, and exclusive rewards on every flight. Earn points towards free flights, upgrades, and premium services.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Priority booking and scheduling",
                  "Exclusive member discounts",
                  "Free aircraft upgrades",
                  "Lounge access worldwide",
                  "Points on every flight",
                  "Dedicated account manager"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" data-testid="button-join-program">
                Join Membership Program
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={loungeImage} 
                alt="Premium Lounge" 
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
              Ready to experience luxury aviation? Contact our booking team today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-email">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Mail className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get in touch via email</p>
                <a 
                  href="mailto:luxurygroupofcompanies@gmail.com"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-email-airline"
                >
                  luxurygroupofcompanies@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available 24/7 for bookings</p>
                <a 
                  href="tel:+2248075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-phone-airline"
                >
                  +224 807 561 4248
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
