import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Users, Zap, Award, Shield, TrendingUp, Briefcase, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import constructionSiteImage from "@assets/generated_images/luxury_construction_site_sunset.png";
import blueprintImage from "@assets/generated_images/architectural_design_blueprints.png";
import teamImage from "@assets/generated_images/construction_team_on_site.png";
import towerImage from "@assets/generated_images/luxury_residential_tower.png";

export default function ConstructionPage() {
  const services = [
    { icon: Building2, title: "Luxury Residential Development", desc: "Premium residential complexes with world-class architecture and premium finishes" },
    { icon: Hammer, title: "Custom Construction", desc: "Bespoke construction services tailored to your vision and specifications" },
    { icon: Award, title: "Architectural Design", desc: "Award-winning design team creating iconic structures and innovative spaces" },
    { icon: Shield, title: "Safety & Compliance", desc: "Rigorous safety standards and full regulatory compliance on all projects" },
    { icon: Users, title: "Project Management", desc: "Expert team managing every aspect from planning to completion" },
    { icon: Zap, title: "Sustainable Building", desc: "Green construction practices and energy-efficient solutions" },
  ];

  const projects = [
    {
      name: "Prestige Tower",
      type: "Luxury Residential",
      image: towerImage,
      features: ["52 Floors", "250+ Units", "Prime Location", "5-Star Amenities"],
      status: "Completed"
    },
    {
      name: "Metropolitan Complex",
      type: "Mixed Development",
      image: blueprintImage,
      features: ["Residential", "Commercial", "Retail", "Premium Design"],
      status: "In Progress"
    },
    {
      name: "Executive Heights",
      type: "Luxury Offices",
      image: constructionSiteImage,
      features: ["Modern Design", "Smart Building", "Executive Suites", "Tech Integration"],
      status: "Planning"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50000+", label: "Happy Residents" },
    { number: "25+", label: "Years Experience" },
    { number: "100+", label: "Team Members" }
  ];

  const quickLinks = [
    { label: "View Projects", href: "#projects", icon: Building2 },
    { label: "Our Team", href: "#team", icon: Users },
    { label: "Get Quote", href: "#contact", icon: Briefcase },
    { label: "Contact Us", href: "#contact", icon: Phone },
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
            src={constructionSiteImage} 
            alt="Luxury Construction Site" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-construction-title">
            Royale Construction
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-construction-desc">
            Building luxury, creating dreams. Premium construction services crafting iconic structures and exceptional living spaces worldwide.
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-explore-construction">
            Explore Our Projects
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-construction-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-services">Our Services</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-services-title">
              Premium Construction Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction services from design to completion, delivering luxury and excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-service-construction-${idx}`}>
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

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-projects">Portfolio</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing our most prestigious developments and landmark structures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover-elevate flex flex-col" data-testid={`card-project-${idx}`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge variant="secondary" className="absolute top-4 right-4">{project.status}</Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1" data-testid={`text-project-name-${idx}`}>{project.name}</h3>
                  <p className="text-primary text-sm mb-4">{project.type}</p>
                  <div className="flex flex-wrap gap-2 mb-6 flex-1">
                    {project.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" data-testid={`button-project-details-${idx}`}>
                    Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Why Choose Royale Construction</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
                Excellence in Every Project
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 25 years of experience, Royale Construction has established itself as the premier builder of luxury properties worldwide. Our commitment to quality, innovation, and client satisfaction sets us apart.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Award-winning architectural designs",
                  "Rigorous quality control and safety standards",
                  "Experienced team of professionals",
                  "On-time, on-budget project delivery",
                  "Sustainable and eco-friendly practices",
                  "Custom solutions for unique visions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" data-testid="button-learn-more-construction">
                Learn More About Us
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={teamImage} 
                alt="Construction Team" 
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
              Have a project in mind? Contact our team to discuss your construction needs and vision.
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
                  data-testid="link-email-construction"
                >
                  luxurygroupofcompanies@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available 24/7 for consultations</p>
                <a 
                  href="tel:+2248075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-phone-construction"
                >
                  +224 807 561 4248
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="pulse-gold" data-testid="button-request-quote">
              Request A Quote
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
