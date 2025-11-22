import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Martini, Music, Lightbulb, Users, Calendar, Sparkles, Star, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import loungeEntranceImage from "@assets/generated_images/luxury_lounge_entrance.png";
import cocktailBarImage from "@assets/generated_images/luxury_cocktail_bar_lounge.png";
import vipLoungeImage from "@assets/generated_images/vip_exclusive_lounge_area.png";

export default function LoungePage() {
  const vipPackages = [
    {
      name: "Evening Experience",
      price: "$150",
      period: "/person",
      description: "Perfect for a night out",
      includes: [
        "Welcome signature cocktail",
        "Complimentary appetizers",
        "2-hour lounge access",
        "Live music entertainment",
        "VIP seating guaranteed"
      ]
    },
    {
      name: "Premium Night",
      price: "$300",
      period: "/person",
      description: "Our most popular choice",
      includes: [
        "Welcome champagne",
        "Full dining menu",
        "4-hour premium seating",
        "Live band performance",
        "Dedicated server",
        "Premium spirits access"
      ],
      featured: true
    },
    {
      name: "Ultimate Experience",
      price: "$500",
      period: "/person",
      description: "The ultimate luxury evening",
      includes: [
        "VIP private lounge access",
        "Premium spirits tasting",
        "Chef's special menu",
        "All-evening access",
        "Dedicated concierge",
        "Private seating area",
        "Exclusive merchandise"
      ]
    }
  ];

  const experiences = [
    {
      icon: Martini,
      title: "Signature Cocktails",
      desc: "Handcrafted by world-renowned mixologists using premium spirits and rare ingredients"
    },
    {
      icon: Music,
      title: "Live Entertainment",
      desc: "Jazz bands, DJs, and live performances nightly creating the perfect ambiance"
    },
    {
      icon: Lightbulb,
      title: "Ambient Design",
      desc: "Sophisticated atmosphere with curated lighting and elegant interior design"
    },
    {
      icon: Users,
      title: "VIP Service",
      desc: "Personalized service and exclusive access to private lounge areas"
    },
    {
      icon: Calendar,
      title: "Private Events",
      desc: "Host intimate gatherings, celebrations, and special occasions"
    },
    {
      icon: Sparkles,
      title: "Premium Spirits",
      desc: "Rare and exclusive selections from distilleries around the world"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={loungeEntranceImage} 
            alt="Royal Lounge" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-lounge-title">
            Royal Lounge
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-lounge-desc">
            A sophisticated haven of elegance where premium beverages, live entertainment, and VIP service create unforgettable evenings
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-reserve-lounge">
            Reserve Your Evening
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "365", label: "Nights Open" },
              { stat: "5", label: "Star Rating" },
              { stat: "10000+", label: "Happy Guests" },
              { stat: "7pm-3am", label: "Operating Hours" }
            ].map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-lounge-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-packages">VIP Experiences</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-packages-title">
              Choose Your Perfect Evening
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the experience level that suits your occasion and preferences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vipPackages.map((pkg, idx) => (
              <Card 
                key={idx} 
                className={`border-primary/20 hover-elevate overflow-hidden transition-all ${
                  pkg.featured ? 'ring-2 ring-primary scale-105' : ''
                }`} 
                data-testid={`card-package-${idx}`}
              >
                <CardContent className="p-8">
                  {pkg.featured && (
                    <Badge className="mb-4 w-full justify-center" data-testid={`badge-popular-${idx}`}>
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                    <span className="text-muted-foreground">{pkg.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Martini className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" data-testid={`button-book-package-${idx}`}>
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lounge Experiences */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-experiences">What We Offer</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-experiences-title">
              Lounge Experiences
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((experience, idx) => {
              const Icon = experience.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-experience-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground text-sm">{experience.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cocktail Bar Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-cocktail-image">
              <img 
                src={cocktailBarImage} 
                alt="Cocktail Bar" 
                className="w-full h-96 object-cover"
              />
            </Card>
            <div>
              <Badge className="mb-4">Our Specialty</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Signature Cocktails</h2>
              <p className="text-muted-foreground mb-6">
                Our master mixologists craft exquisite cocktails using premium spirits, rare ingredients, and innovative techniques. Each cocktail is a work of art designed to delight your palate.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Handcrafted by award-winning mixologists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Premium spirits from around the world</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>Innovative flavor combinations</span>
                </li>
              </ul>
              <Button size="lg" data-testid="button-cocktail-menu">View Cocktail Menu</Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Lounge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">VIP Access</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Private VIP Lounge</h2>
              <p className="text-muted-foreground mb-6">
                Escape to our exclusive VIP lounge where privacy meets luxury. Enjoy personalized service, premium seating, and an intimate atmosphere perfect for special occasions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Exclusive private seating area</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Dedicated VIP server and concierge</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Priority reservation guarantee</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" data-testid="button-vip-reserve">Reserve VIP Lounge</Button>
            </div>
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-vip-image">
              <img 
                src={vipLoungeImage} 
                alt="VIP Lounge" 
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-reviews">Guest Reviews</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4" data-testid="text-reviews-title">
              Loved by Our Guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Pierce",
                role: "Socialite",
                text: "An absolutely exquisite evening! The cocktails were divine and the atmosphere was perfect. I'll be back every weekend!",
                rating: 5
              },
              {
                name: "Jonathan Blake",
                role: "Entrepreneur",
                text: "Outstanding service and incredible ambiance. The perfect place to unwind after a long week. Highly recommended!",
                rating: 5
              },
              {
                name: "Sophia Romano",
                role: "Luxury Consultant",
                text: "Simply magnificent. The VIP package exceeded all expectations. This is luxury done right.",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-review-${idx}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-primary/20" data-testid="card-hours">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>Tuesday - Thursday: 7 PM - 1 AM</p>
                  <p>Friday - Saturday: 7 PM - 3 AM</p>
                  <p>Sunday: 7 PM - 12 AM</p>
                  <p>Monday: CLOSED</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20" data-testid="card-location">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="font-serif text-2xl font-bold">Location</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p>123 Gourmet Lane</p>
                  <p>Downtown, City 12345</p>
                  <p className="text-primary font-semibold mt-4">Valet Parking Available</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" data-testid="card-reserve-cta">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text text-center">Ready for an Unforgettable Evening?</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Reserve your table or VIP package today. Our team is ready to make your evening extraordinary.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-primary/20" data-testid="card-reserve-method-1">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Chat to reserve</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-whatsapp-lounge">
                      <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                        Message Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-reserve-method-2">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Send your request</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-email-lounge">
                      <a href="mailto:latavoroyale@gmail.com">
                        Email Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8 border-t">
                <Button size="lg" className="pulse-gold" data-testid="button-reserve-now">
                  Reserve Your Table Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
