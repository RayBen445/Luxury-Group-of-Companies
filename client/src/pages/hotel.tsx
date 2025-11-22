import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Users, Utensils, Sparkles, Heart, Dumbbell, Wine, Shield, MapPinIcon, Award } from "lucide-react";
import { Link } from "wouter";

export default function HotelPage() {
  const roomTypes = [
    { 
      id: 1, 
      name: "Deluxe Room", 
      price: "$250", 
      desc: "Spacious rooms with modern amenities and city views",
      features: ["40 sqm", "King Bed", "City View", "Premium Bathroom"]
    },
    { 
      id: 2, 
      name: "Executive Suite", 
      price: "$450", 
      desc: "Premium suite with separate living area and butler service",
      features: ["80 sqm", "Separate Living", "Butler Service", "Bath & Shower"]
    },
    { 
      id: 3, 
      name: "Presidential Suite", 
      price: "$800", 
      desc: "Ultimate luxury with private spa, dining, and panoramic views",
      features: ["150 sqm", "Private Spa", "Dining Area", "Panoramic Views"]
    },
    { 
      id: 4, 
      name: "Penthouse", 
      price: "$1500", 
      desc: "Exclusive top-floor residence with private pool and terrace",
      features: ["250 sqm", "Private Pool", "Rooftop Terrace", "Chef's Kitchen"]
    }
  ];

  const amenities = [
    { icon: Star, title: "100+ Luxury Rooms", desc: "Suites with premium bedding, smart technology, and city views" },
    { icon: Sparkles, title: "World-Class Spa", desc: "Full-service spa with treatments, pool, and wellness programs" },
    { icon: Utensils, title: "Gourmet Dining", desc: "Multiple restaurants and room service from our chef's collection" },
    { icon: Wifi, title: "Business Center", desc: "Complete facilities for conferences and corporate events" },
    { icon: Users, title: "Event Spaces", desc: "Versatile venues for weddings, conferences, and celebrations" },
    { icon: MapPin, title: "Prime Location", desc: "Centrally located with easy access to attractions and business district" },
    { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art gym with personal training services" },
    { icon: Wine, title: "Wine Bar", desc: "Curated selection of wines from around the world" },
    { icon: Heart, title: "Wellness Program", desc: "Holistic health and fitness programs for guests" },
  ];

  const services = [
    "24/7 Room Service",
    "Concierge Service",
    "Laundry & Dry Cleaning",
    "Valet Parking",
    "Airport Transfers",
    "Pet-Friendly Rooms",
    "Business Services",
    "Travel Assistance"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link href="/">
            <Badge variant="outline" className="mb-6 cursor-pointer hover-elevate" data-testid="badge-back">
              ← Back to Properties
            </Badge>
          </Link>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-hotel-title">
            Grand Royale Hotel
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8" data-testid="text-hotel-desc">
            A sanctuary of elegance and comfort, offering world-class accommodations with premium amenities and personalized service
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-book-stay">
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "100+", label: "Luxury Rooms" },
              { stat: "4-Star", label: "Rating" },
              { stat: "5000+", label: "Happy Guests" },
              { stat: "24/7", label: "Concierge" }
            ].map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center" data-testid={`card-stat-hotel-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-rooms">Room Categories</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text" data-testid="text-rooms-title">
              Choose Your Perfect Stay
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room) => (
              <Card key={room.id} className="border-primary/20 hover-elevate overflow-hidden" data-testid={`card-room-type-${room.id}`}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-2">{room.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{room.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-primary text-2xl font-bold">{room.price}</div>
                      <div className="text-xs text-muted-foreground">per night</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" data-testid={`button-select-room-${room.id}`}>Select Room</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-amenities">Amenities</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text" data-testid="text-amenities-title">
              Premium Facilities & Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-amenity-hotel-${idx}`}>
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

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-services">Services</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text" data-testid="text-services-title">
              Guest Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-service-${idx}`}>
                <CardContent className="p-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-dining">Dining</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text" data-testid="text-dining-title">
              Culinary Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "La Tavola Royale",
                desc: "Fine dining with Michelin-inspired cuisine",
                icon: "🍽️"
              },
              {
                name: "Breakfast Lounge",
                desc: "International breakfast and all-day dining",
                icon: "☕"
              },
              {
                name: "Sky Bar",
                desc: "Cocktails and premium spirits with skyline views",
                icon: "🍷"
              }
            ].map((restaurant, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-restaurant-${idx}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{restaurant.icon}</div>
                  <h3 className="font-serif text-xl font-bold mb-2">{restaurant.name}</h3>
                  <p className="text-muted-foreground text-sm">{restaurant.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" data-testid="badge-reviews">Guest Reviews</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text" data-testid="text-reviews-title">
              Loved by Our Guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "James Mitchell",
                rating: 5,
                text: "Exceptional service and luxurious accommodations. A truly world-class experience!",
                title: "Business Executive"
              },
              {
                name: "Sophie Laurent",
                rating: 5,
                text: "The spa was incredible and the dining at La Tavola Royale exceeded expectations.",
                title: "Leisure Traveler"
              },
              {
                name: "David Chen",
                rating: 5,
                text: "Perfect for corporate events. The venue and service were impeccable.",
                title: "Event Coordinator"
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-review-${idx}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{review.text}</p>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4" data-testid="text-location-title">Location & Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20" data-testid="card-address">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Address</h3>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>123 Gourmet Lane</p>
                  <p>Downtown, City 12345</p>
                  <p className="flex items-center gap-2 mt-4">
                    <MapPinIcon className="w-4 h-4" />
                    <a href="#" className="hover:text-primary">Get Directions</a>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20" data-testid="card-contact-info">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start" data-testid="button-whatsapp-hotel">
                    <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                      WhatsApp: +224 807 561 4248
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start" data-testid="button-email-hotel">
                    <a href="mailto:latavoroyale@gmail.com">
                      Email: latavoroyale@gmail.com
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-ready-title">Ready for a Luxury Experience?</h2>
          <p className="text-muted-foreground text-lg mb-8" data-testid="text-ready-desc">
            Book your stay at Grand Royale Hotel and experience world-class hospitality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="pulse-gold" data-testid="button-book-final">
              Book Now
            </Button>
            <Button asChild size="lg" variant="outline" data-testid="button-learn-more">
              <Link href="/">Learn More About Our Group</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
