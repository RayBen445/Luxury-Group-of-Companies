import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Users, Heart, Dumbbell, Wine, Shield, MapPinIcon, Calendar, Users2, Phone } from "lucide-react";
import { Link } from "wouter";
import lobbyImage from "@assets/generated_images/grand_hotel_lobby_entrance.png";
import deluxeRoomImage from "@assets/generated_images/luxury_hotel_deluxe_bedroom.png";
import executiveSuiteImage from "@assets/generated_images/executive_suite_with_living_area.png";
import spaImage from "@assets/generated_images/luxury_spa_treatment_room.png";
import poolImage from "@assets/generated_images/rooftop_infinity_pool_and_bar.png";
import diningImage from "@assets/generated_images/fine_dining_restaurant_setting.png";

export default function HotelPage() {
  const roomTypes = [
    { 
      id: 1, 
      name: "Deluxe Room", 
      price: "$250", 
      desc: "Spacious rooms with modern amenities and stunning city views",
      features: ["40 sqm", "King Bed", "City View", "Premium Bathroom"],
      image: deluxeRoomImage
    },
    { 
      id: 2, 
      name: "Executive Suite", 
      price: "$450", 
      desc: "Premium suite with separate living area and butler service",
      features: ["80 sqm", "Separate Living", "Butler Service", "Spa Bath"],
      image: executiveSuiteImage
    },
    { 
      id: 3, 
      name: "Presidential Suite", 
      price: "$800", 
      desc: "Ultimate luxury with private spa, dining, and panoramic views",
      features: ["150 sqm", "Private Spa", "Dining Area", "Panoramic Views"],
      image: spaImage
    },
    { 
      id: 4, 
      name: "Penthouse", 
      price: "$1500", 
      desc: "Exclusive top-floor residence with private pool and terrace",
      features: ["250 sqm", "Private Pool", "Rooftop Terrace", "Chef's Kitchen"],
      image: poolImage
    }
  ];

  const amenities = [
    { icon: Star, title: "100+ Luxury Rooms", desc: "Suites with premium bedding, smart technology, and city views" },
    { icon: Heart, title: "World-Class Spa", desc: "Full-service spa with treatments, pool, and wellness programs" },
    { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art gym with personal training services" },
    { icon: Wifi, title: "Business Center", desc: "Complete facilities for conferences and corporate events" },
    { icon: Users, title: "Event Spaces", desc: "Versatile venues for weddings, conferences, and celebrations" },
    { icon: Wine, title: "Fine Dining", desc: "World-class restaurant with Michelin-inspired cuisine" },
    { icon: MapPin, title: "Prime Location", desc: "Centrally located with easy access to attractions and business district" },
    { icon: Users2, title: "Concierge", desc: "24/7 concierge service for all your needs" },
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
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={lobbyImage} 
            alt="Grand Hotel Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <Link href="/">
            <Badge variant="outline" className="mb-6 cursor-pointer hover-elevate backdrop-blur-sm" data-testid="badge-back">
              ← Back to Properties
            </Badge>
          </Link>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-hotel-title">
            Grand Royale Hotel
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-hotel-desc">
            Experience unparalleled luxury in our world-class accommodations with premium amenities, personalized service, and breathtaking views
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-book-stay">
            Book Your Room
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
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-hotel-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.stat}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Categories with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-rooms">Room Categories</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-rooms-title">
              Choose Your Perfect Stay
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each room is meticulously designed with premium furnishings, modern technology, and attention to every detail for your comfort
            </p>
          </div>
          <div className="space-y-16">
            {roomTypes.map((room, idx) => (
              <div key={room.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid={`card-room-image-${room.id}`}>
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Badge variant="secondary" className="mb-4">{room.name}</Badge>
                  <h3 className="font-serif text-3xl font-bold mb-3">{room.name}</h3>
                  <p className="text-muted-foreground mb-6">{room.desc}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold gradient-text">{room.price}</span>
                      <span className="text-muted-foreground">per night</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((feature, fidx) => (
                      <Badge key={fidx} variant="outline" className="text-sm">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button size="lg" className="w-full md:w-auto" data-testid={`button-select-room-${room.id}`}>
                    Book {room.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Amenities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-amenities">World-Class Amenities</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-amenities-title">
              Everything You Need for Perfect Comfort
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate transition-all" data-testid={`card-amenity-hotel-${idx}`}>
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

      {/* Guest Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-services">Premium Services</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4" data-testid="text-services-title">
              Comprehensive Guest Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-service-${idx}`}>
                <CardContent className="p-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-dining-image">
              <img 
                src={diningImage} 
                alt="Fine Dining" 
                className="w-full h-96 object-cover"
              />
            </Card>

            {/* Content */}
            <div>
              <Badge className="mb-4">Fine Dining</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">La Tavola Royale</h2>
              <p className="text-muted-foreground mb-6">
                Indulge in culinary excellence at our signature fine dining restaurant. Our renowned chefs craft exquisite dishes using the finest ingredients, offering a gastronomic journey that complements your stay.
              </p>
              <div className="space-y-3 mb-8">
                <p className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span>Michelin-inspired cuisine</span>
                </p>
                <p className="flex items-center gap-2">
                  <Wine className="w-5 h-5 text-primary" />
                  <span>Curated wine selection from around the world</span>
                </p>
                <p className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Private dining rooms available for special occasions</span>
                </p>
              </div>
              <Button size="lg" data-testid="button-dining-reservations">Make Dining Reservation</Button>
            </div>
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
                name: "James Mitchell",
                rating: 5,
                text: "Exceptional service and luxurious accommodations. The hotel exceeded all my expectations. Highly recommend!",
                title: "Business Executive"
              },
              {
                name: "Sophie Laurent",
                rating: 5,
                text: "The spa was incredible and the rooms are absolutely stunning with amazing views. Perfect getaway!",
                title: "Leisure Traveler"
              },
              {
                name: "David Chen",
                rating: 5,
                text: "Perfect venue for our corporate event. Professional staff, excellent facilities, and impeccable service throughout.",
                title: "Event Coordinator"
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-review-${idx}`}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" data-testid="card-booking-cta">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text text-center">Ready to Book?</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Secure your perfect room at Grand Royale Hotel. Our team is ready to assist with any questions or special requests.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-primary/20" data-testid="card-book-method-1">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Online Booking</h3>
                    <p className="text-sm text-muted-foreground mb-4">Book instantly on our website</p>
                    <Button variant="outline" className="w-full">Book Online</Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-book-method-2">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground mb-4">Chat with our booking team</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-whatsapp-hotel">
                      <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                        WhatsApp Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-book-method-3">
                  <CardContent className="p-6 text-center">
                    <MapPinIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground mb-4">Send us your preferences</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-email-hotel">
                      <a href="mailto:latavoroyale@gmail.com">
                        Email Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8 border-t">
                <p className="text-muted-foreground mb-4">Best Rate Guarantee - We match any lower rate you find</p>
                <Button size="lg" className="pulse-gold" data-testid="button-book-now">
                  Book Your Stay Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-location">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-primary/20" data-testid="card-address">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Address</h3>
                <p className="text-muted-foreground mb-2">123 Gourmet Lane</p>
                <p className="text-muted-foreground mb-6">Downtown, City 12345</p>
                <Button variant="outline" className="w-full">Get Directions</Button>
              </CardContent>
            </Card>
            <Card className="border-primary/20" data-testid="card-contact">
              <CardContent className="p-8">
                <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                <p className="text-muted-foreground mb-2">+234 807 561 4248</p>
                <p className="text-muted-foreground mb-6">latavoroyale@gmail.com</p>
                <Button className="w-full">Contact Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
