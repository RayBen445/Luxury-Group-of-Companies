import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Utensils, Music, Trophy, Briefcase, Heart, Star, Wine, Zap, Phone, Mail, CreditCard } from "lucide-react";
import { Link } from "wouter";
import clubLoungeImage from "@assets/generated_images/exclusive_club_lounge.png";
import clubDiningImage from "@assets/generated_images/club_private_dining.png";
import wineCellarImage from "@assets/generated_images/premium_wine_cellar.png";

export default function ClubPage() {
  const membershipTiers = [
    { 
      tier: "Silver", 
      price: "$2000", 
      period: "/year",
      description: "Perfect for casual members",
      features: [
        "Full club access",
        "5x monthly dining credit",
        "4 guest passes annually",
        "Newsletter & events",
        "Basic concierge"
      ] 
    },
    { 
      tier: "Gold", 
      price: "$5000", 
      period: "/year",
      description: "Our most popular tier",
      features: [
        "All Silver benefits",
        "Priority table seating",
        "Complimentary concierge",
        "12 guest passes annually",
        "Monthly networking events",
        "Private meeting room access"
      ],
      featured: true
    },
    { 
      tier: "Platinum", 
      price: "$10000", 
      period: "/year",
      description: "Ultimate luxury membership",
      features: [
        "All Gold benefits",
        "Private executive lounge",
        "Suite at Grand Royale Hotel (10 nights/year)",
        "Unlimited guest passes",
        "Priority event invitations",
        "Personal account manager",
        "Exclusive experiences & tastings"
      ] 
    }
  ];

  const amenities = [
    { icon: Utensils, title: "Fine Dining", desc: "Gourmet restaurant with private dining rooms and wine pairings" },
    { icon: Music, title: "Live Entertainment", desc: "Weekly performances and exclusive cultural events" },
    { icon: Users, title: "Networking Events", desc: "Monthly elite gatherings connecting influential members" },
    { icon: Trophy, title: "Sports Facilities", desc: "Premium gym, pool, tennis court, and recreational areas" },
    { icon: Briefcase, title: "Business Lounge", desc: "State-of-the-art meeting and conference facilities" },
    { icon: Heart, title: "Wellness & Spa", desc: "Full spa, massage therapy, and personalized wellness programs" },
    { icon: Wine, title: "Wine Cellar", desc: "Curated collection of rare wines and exclusive tastings" },
    { icon: Zap, title: "Member Privileges", desc: "Exclusive discounts and priority access to special events" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={clubLoungeImage} 
            alt="Elite Club Lounge" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/">
            <Badge variant="outline" className="mb-6 cursor-pointer hover-elevate backdrop-blur-sm" data-testid="badge-back">
              ← Back to Properties
            </Badge>
          </Link>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-club-title">
            Elite Club
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-club-desc">
            An exclusive members-only sanctuary where networking, fine dining, and premium experiences converge in an atmosphere of refined elegance
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-apply-membership">
            Apply for Membership
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "500+", label: "Elite Members" },
              { stat: "25+", label: "Years Heritage" },
              { stat: "98%", label: "Satisfaction" },
              { stat: "365", label: "Event Days/Year" }
            ].map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-club-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-membership">Membership Levels</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-membership-title">
              Choose Your Membership Tier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the membership level that best suits your lifestyle and networking needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, idx) => (
              <Card 
                key={idx} 
                className={`border-primary/20 hover-elevate overflow-hidden transition-all ${
                  tier.featured ? 'ring-2 ring-primary scale-105' : ''
                }`} 
                data-testid={`card-tier-${idx}`}
              >
                <CardContent className="p-8">
                  {tier.featured && (
                    <Badge className="mb-4 w-full justify-center" data-testid={`badge-featured-${idx}`}>
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="font-serif text-3xl font-bold mb-2">{tier.tier}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fidx) => (
                      <li key={fidx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" data-testid={`button-join-${tier.tier.toLowerCase()}`}>
                    Join {tier.tier}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-cards">Membership Cards</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-cards-title">
              Exclusive Member Cards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium metal membership cards with exclusive perks, priority access, and concierge services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                tier: "Silver Card",
                color: "from-slate-400 to-slate-600",
                benefits: [
                  "Priority club access",
                  "Dining discounts (10%)",
                  "Concierge hotline",
                  "Digital + Physical card",
                  "Member directory access"
                ],
                icon: CreditCard
              },
              {
                tier: "Gold Card",
                color: "from-yellow-400 to-yellow-600",
                benefits: [
                  "VIP priority access",
                  "Dining discounts (20%)",
                  "24/7 premium concierge",
                  "Luxury leather case",
                  "Exclusive events access",
                  "Personal member liaison"
                ],
                icon: CreditCard,
                featured: true
              },
              {
                tier: "Platinum Card",
                color: "from-cyan-300 to-blue-600",
                benefits: [
                  "Absolute VIP access",
                  "Unlimited dining credits",
                  "Dedicated concierge",
                  "Platinum leather case",
                  "All exclusive events",
                  "Personal account manager",
                  "Lifetime membership option"
                ],
                icon: CreditCard
              }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="flex flex-col items-center" data-testid={`card-membership-${idx}`}>
                  {/* Card Visual */}
                  <div className={`w-full h-48 rounded-lg bg-gradient-to-br ${card.color} p-6 mb-6 flex flex-col justify-between shadow-2xl border border-white/10 hover-elevate transition-all ${card.featured ? 'ring-2 ring-primary scale-105' : ''}`}>
                    <div className="flex justify-between items-start">
                      <Icon className="w-8 h-8 text-white/80" />
                      <Badge className="bg-white/20 text-white border-white/30">{card.tier}</Badge>
                    </div>
                    <div className="text-white">
                      <p className="font-serif text-2xl font-bold">ELITE CLUB</p>
                      <p className="text-sm text-white/70">Member Card</p>
                    </div>
                  </div>

                  {/* Card Details */}
                  <Card className={`w-full border-primary/20 ${card.featured ? 'ring-2 ring-primary' : ''}`}>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold mb-4">{card.tier}</h3>
                      <ul className="space-y-2 mb-6">
                        {card.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Star className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={card.featured ? "default" : "outline"} data-testid={`button-card-${idx}`}>
                        Get {card.tier}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Club Amenities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-amenities">Club Experience</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-amenities-title">
              Premium Club Amenities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-amenity-club-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dining & Wine Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-dining-image">
              <img 
                src={clubDiningImage} 
                alt="Private Dining" 
                className="w-full h-96 object-cover"
              />
            </Card>
            <div>
              <Badge className="mb-4">Fine Dining</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Private Dining Rooms</h2>
              <p className="text-muted-foreground mb-6">
                Host intimate gatherings, business dinners, or celebrations in our elegantly appointed private dining rooms. Our executive chef creates bespoke menus tailored to your preferences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-primary" />
                  <span>Customized multi-course menus</span>
                </li>
                <li className="flex items-center gap-2">
                  <Wine className="w-5 h-5 text-primary" />
                  <span>Wine pairings from our cellar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Room for 10-50 guests</span>
                </li>
              </ul>
              <Button size="lg" data-testid="button-reserve-dining">Reserve Private Dining</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Exclusive Collection</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Premium Wine Cellar</h2>
              <p className="text-muted-foreground mb-6">
                Explore our meticulously curated wine collection featuring rare vintages from prestigious vineyards worldwide. Members enjoy exclusive tasting events and sommelier guidance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>500+ wine selections</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Monthly tasting events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Expert sommeliers on staff</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" data-testid="button-wine-tasting">Explore Wine Collection</Button>
            </div>
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-wine-image">
              <img 
                src={wineCellarImage} 
                alt="Wine Cellar" 
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Member Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-reviews">Member Testimonials</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4" data-testid="text-reviews-title">
              What Members Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Roberts",
                role: "CEO, Tech Enterprises",
                text: "The Elite Club has transformed my professional network. Invaluable connections and world-class amenities.",
                rating: 5
              },
              {
                name: "Victoria Sterling",
                role: "Investment Manager",
                text: "Exceptional service, unparalleled discretion, and the finest dining. This is luxury at its finest.",
                rating: 5
              },
              {
                name: "Thomas Ashford",
                role: "Corporate Executive",
                text: "A true gem. The private dining events and networking opportunities are incomparable.",
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

      {/* Application Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" data-testid="card-apply-cta">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text text-center">Join Elite Club Today</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Experience exclusive membership privileges and become part of our prestigious community of accomplished individuals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-primary/20" data-testid="card-apply-method-1">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Chat with membership team</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-whatsapp-club">
                      <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                        Message Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-apply-method-2">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Send your application</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-email-club">
                      <a href="mailto:latavoroyale@gmail.com">
                        Apply via Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8 border-t">
                <Button size="lg" className="pulse-gold" data-testid="button-apply-now">
                  Apply for Membership Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
