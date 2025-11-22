import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Cloud, Lock, Users, TrendingUp, Smartphone, Star, Code, Database, Cpu, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import officeImage from "@assets/generated_images/modern_tech_office_workspace.png";
import labImage from "@assets/generated_images/tech_innovation_laboratory.png";
import conferenceImage from "@assets/generated_images/tech_conference_room.png";
import platformImage from "@assets/generated_images/software_management_platform.png";
import loungeImage from "@assets/generated_images/employee_lounge_space.png";
import dataImage from "@assets/generated_images/data_center_infrastructure.png";

export default function TechPage() {
  const solutions = [
    {
      name: "Hospitality Management Suite",
      description: "Complete property management system for luxury hotels and resorts",
      features: ["Room Management", "Guest Services", "Revenue Optimization", "Staff Coordination"],
      image: platformImage
    },
    {
      name: "Reservation & Booking Platform",
      description: "Advanced booking engine powering all group properties",
      features: ["Multi-property Integration", "Real-time Availability", "Payment Processing", "Guest Analytics"],
      image: conferenceImage
    },
    {
      name: "Business Intelligence & Analytics",
      description: "Data-driven insights for hospitality operations",
      features: ["Real-time Dashboard", "Predictive Analytics", "Performance Metrics", "Custom Reports"],
      image: dataImage
    }
  ];

  const services = [
    { icon: Cloud, title: "Cloud Infrastructure", desc: "Scalable, secure cloud hosting for hospitality platforms" },
    { icon: Lock, title: "Security & Compliance", desc: "Enterprise-grade security with PCI DSS and GDPR compliance" },
    { icon: Smartphone, title: "Mobile Apps", desc: "Native iOS and Android apps for guests and staff" },
    { icon: Database, title: "Data Analytics", desc: "Advanced analytics and business intelligence tools" },
    { icon: Users, title: "API Integration", desc: "Seamless integration with third-party systems" },
    { icon: TrendingUp, title: "AI & Automation", desc: "Machine learning for personalized guest experiences" }
  ];

  const stats = [
    { number: "5", label: "Properties Served" },
    { number: "100K+", label: "Daily Transactions" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "150+", label: "Team Members" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={officeImage} 
            alt="Tech Innovation" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-tech-title">
            Royale Technologies
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-tech-desc">
            Powering luxury hospitality with cutting-edge technology solutions, innovative platforms, and world-class digital experiences
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-explore-tech">
            Explore Our Solutions
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-tech-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-solutions">Our Platforms</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-solutions-title">
              Enterprise Solutions for Hospitality
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Innovative technology platforms designed specifically for luxury hospitality operations
            </p>
          </div>
          <div className="space-y-16">
            {solutions.map((solution, idx) => (
              <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid={`card-solution-image-${idx}`}>
                    <img 
                      src={solution.image} 
                      alt={solution.name} 
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>

                <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Badge variant="secondary" className="mb-4">Solution {idx + 1}</Badge>
                  <h3 className="font-serif text-3xl font-bold mb-3">{solution.name}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-primary mb-3">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, fidx) => (
                        <Badge key={fidx} variant="outline" className="text-sm">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button size="lg" data-testid={`button-learn-more-${idx}`}>
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-services">Services</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-services-title">
              Comprehensive Technology Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-service-tech-${idx}`}>
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

      {/* Innovation Lab */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-lab-image">
              <img 
                src={labImage} 
                alt="Innovation Lab" 
                className="w-full h-96 object-cover"
              />
            </Card>
            <div>
              <Badge className="mb-4">Innovation</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Technology Innovation Lab</h2>
              <p className="text-muted-foreground mb-6">
                Our dedicated innovation lab pushes the boundaries of hospitality technology. We develop next-generation solutions including AI-powered guest personalization, advanced revenue management systems, and immersive digital experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Cutting-edge AI and machine learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Real-time data processing and analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Continuous innovation and R&D</span>
                </li>
              </ul>
              <Button size="lg" data-testid="button-innovation-lab">Learn About Innovation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Culture</Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text">Where Innovation Meets Excellence</h2>
              <p className="text-muted-foreground mb-6">
                At Royale Technologies, we foster a culture of innovation, collaboration, and continuous improvement. Our talented team of engineers, designers, and strategists work together to create world-class solutions that transform the hospitality industry.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>150+ talented technology professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>World-class training and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Collaborative and innovative workplace</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" data-testid="button-careers">Explore Careers</Button>
            </div>
            <Card className="border-primary/20 overflow-hidden hover-elevate" data-testid="card-culture-image">
              <img 
                src={loungeImage} 
                alt="Company Culture" 
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-testimonials">Client Success</Badge>
            <h2 className="font-serif text-4xl font-bold gradient-text mb-4" data-testid="text-testimonials-title">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Thompson",
                role: "Hotel General Manager",
                text: "Royale Technologies transformed our operations. Their platform increased our efficiency by 40% and guest satisfaction scores soared.",
                rating: 5
              },
              {
                name: "Isabelle Durand",
                role: "Operations Director",
                text: "The best technology partner we could ask for. Their team understands hospitality and delivers innovative solutions that actually work.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Chief Technology Officer",
                text: "Enterprise-grade solutions with world-class support. Royale Technologies is setting the standard for hospitality tech.",
                rating: 5
              }
            ].map((review, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-testimonial-${idx}`}>
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

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-transparent" data-testid="card-contact-cta">
            <CardContent className="p-12">
              <h2 className="font-serif text-4xl font-bold mb-4 gradient-text text-center">Ready to Transform Your Operations?</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                Let's discuss how Royale Technologies can help your organization achieve new heights of operational excellence and guest satisfaction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-primary/20" data-testid="card-contact-method-1">
                  <CardContent className="p-6">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Chat with our team</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-whatsapp-tech">
                      <a href="https://wa.me/2248075614248" target="_blank" rel="noopener noreferrer">
                        Message Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20" data-testid="card-contact-method-2">
                  <CardContent className="p-6">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-center mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">Send us an inquiry</p>
                    <Button asChild variant="outline" className="w-full" data-testid="button-email-tech">
                      <a href="mailto:latavoroyale@gmail.com">
                        Email Us
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-8 border-t">
                <Button size="lg" className="pulse-gold" data-testid="button-schedule-demo">
                  Schedule a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
