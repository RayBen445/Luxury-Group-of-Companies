import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Wind, Heart, Leaf, Users, Zap, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function SpaWellnessPage() {
  const services = [
    { 
      id: 1, 
      name: "Swedish Massage", 
      price: "$120", 
      duration: "60 min",
      desc: "Traditional massage to relieve tension and improve circulation"
    },
    { 
      id: 2, 
      name: "Hot Stone Therapy", 
      price: "$150", 
      duration: "75 min",
      desc: "Therapeutic massage using heated basalt stones"
    },
    { 
      id: 3, 
      name: "Facial Treatment", 
      price: "$100", 
      duration: "60 min",
      desc: "Premium facial rejuvenation with organic products"
    },
    { 
      id: 4, 
      name: "Aromatherapy Spa", 
      price: "$180", 
      duration: "90 min",
      desc: "Complete wellness experience with essential oils"
    },
    { 
      id: 5, 
      name: "Couples Package", 
      price: "$400", 
      duration: "120 min",
      desc: "Luxurious treatment for two with romantic ambiance"
    },
    { 
      id: 6, 
      name: "Wellness Retreat", 
      price: "$500", 
      duration: "Full Day",
      desc: "Complete spa experience with yoga, meditation, and therapy"
    }
  ];

  const amenities = [
    { icon: Wind, title: "Luxury Spa", desc: "10+ treatment rooms with premium facilities" },
    { icon: Heart, title: "Wellness Programs", desc: "Personalized health and wellness consultation" },
    { icon: Leaf, title: "Organic Products", desc: "100% natural and eco-friendly treatments" },
    { icon: Zap, title: "Modern Facilities", desc: "State-of-the-art equipment and technology" },
    { icon: Users, title: "Expert Therapists", desc: "Internationally certified wellness professionals" },
    { icon: Star, title: "Steam & Sauna", desc: "Traditional and modern wellness spaces" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-3xl" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <Badge className="mb-4" variant="outline">Wellness & Relaxation</Badge>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 gradient-text" data-testid="text-title">
            Royale Luxury Spa & Wellness
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8" data-testid="text-subtitle">
            Discover ultimate relaxation and rejuvenation at our world-class spa and wellness center. Experience holistic treatments designed to restore balance and vitality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" data-testid="button-book-treatment">
              Book a Treatment
            </Button>
            <Button variant="outline" size="lg" data-testid="button-learn-more">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-services">
            Our Premium Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover-elevate" data-testid={`card-service-${service.id}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold" data-testid={`text-service-name-${service.id}`}>
                        {service.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{service.duration}</p>
                    </div>
                    <Badge variant="secondary" data-testid={`badge-price-${service.id}`}>{service.price}</Badge>
                  </div>
                  <p className="text-muted-foreground" data-testid={`text-service-desc-${service.id}`}>
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center" data-testid="text-amenities">
            World-Class Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, idx) => (
              <Card key={idx} className="hover-elevate" data-testid={`card-amenity-${idx}`}>
                <CardContent className="p-6">
                  <amenity.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg font-bold mb-2" data-testid={`text-amenity-${idx}`}>
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{amenity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-about-title">
                Wellness Philosophy
              </h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-desc">
                At Royale Luxury Spa & Wellness, we believe in the power of holistic wellness. Our expert therapists combine traditional healing techniques with modern wellness science to create transformative experiences.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert certified therapists from around the world</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>100% organic and eco-friendly products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Personalized wellness programs tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Serene and luxurious environment for ultimate relaxation</span>
                </li>
              </ul>
            </div>
            <Card className="hover-elevate" data-testid="card-wellness-info">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6" data-testid="text-contact-title">
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3" data-testid="info-phone">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Call Us</p>
                      <p className="text-muted-foreground">+234 807 561 4248</p>
                    </div>
                  </div>
                  <div className="flex gap-3" data-testid="info-location">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Visit Us</p>
                      <p className="text-muted-foreground">Premium Spa District, Luxury Zone</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Relax?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-desc">
            Book your wellness experience today and discover the perfect treatment for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" data-testid="button-book-now">
              Book Now
            </Button>
            <Link href="/spa-wellness/policies">
              <Button variant="outline" size="lg" data-testid="button-policies">
                View Policies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
