import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Shield, Zap, Award, Stethoscope, Pill, Smile, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import operatingRoomImage from "@assets/generated_images/premium_hospital_operating_room.png";
import spaImage from "@assets/generated_images/hospital_wellness_spa.png";

export default function HospitalPage() {
  const departments = [
    {
      name: "Cardiology",
      description: "Advanced heart and cardiovascular care with cutting-edge diagnostic equipment",
      services: ["Heart Surgery", "Interventional Cardiology", "Cardiac Rehabilitation"]
    },
    {
      name: "Orthopedic Surgery",
      description: "Comprehensive bone, joint, and sports medicine services",
      services: ["Joint Replacement", "Sports Medicine", "Trauma Care"]
    },
    {
      name: "Oncology",
      description: "Comprehensive cancer treatment and support services",
      services: ["Cancer Treatment", "Radiation Therapy", "Support Programs"]
    },
    {
      name: "Neurology",
      description: "Specialized care for neurological conditions and disorders",
      services: ["Brain Surgery", "Stroke Treatment", "Neurosurgery"]
    }
  ];

  const facilities = [
    { icon: Heart, title: "Emergency Department", desc: "24/7 emergency care with trauma specialists and life-saving equipment" },
    { icon: Pill, title: "Pharmacy Services", desc: "Advanced pharmaceutical services and medication management" },
    { icon: Stethoscope, title: "Diagnostic Center", desc: "MRI, CT, X-ray and advanced imaging technologies" },
    { icon: Shield, title: "Infection Control", desc: "World-class sterilization and infection prevention protocols" },
    { icon: Users, title: "Wellness Programs", desc: "Preventive care and wellness initiatives for community health" },
    { icon: Smile, title: "Patient Comfort", desc: "Luxury accommodations and personalized patient care" },
  ];

  const stats = [
    { number: "500+", label: "Beds Available" },
    { number: "200+", label: "Doctors & Specialists" },
    { number: "100K+", label: "Patients Treated Annually" },
    { number: "24/7", label: "Emergency Care" }
  ];

  const quickLinks = [
    { label: "Departments", href: "#departments", icon: Stethoscope },
    { label: "Services", href: "#services", icon: Heart },
    { label: "Facilities", href: "#facilities", icon: Shield },
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
            src={operatingRoomImage} 
            alt="Premium Hospital" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-hospital-title">
            Royale Luxury Hospital
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-hospital-desc">
            Premium healthcare excellence with advanced medical technology, world-class specialists, and compassionate patient care in a luxury environment.
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-schedule-appointment">
            Schedule Appointment
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-hospital-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-departments">Departments</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-departments-title">
              Specialized Medical Departments
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert care across multiple medical specialties with renowned physicians
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, idx) => (
              <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-department-${idx}`}>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-muted-foreground mb-4">{dept.description}</p>
                  <div className="space-y-2 mb-6">
                    {dept.services.map((service) => (
                      <Badge key={service} variant="outline">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" data-testid={`button-department-${idx}`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-facilities">Our Services</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-facilities-title">
              Comprehensive Healthcare Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-facility-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{facility.title}</h3>
                    <p className="text-muted-foreground text-sm">{facility.desc}</p>
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
              <Badge className="mb-4" variant="outline">About Royale Hospital</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
                Healthcare Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Royale Hospital is a beacon of medical excellence, combining advanced technology with compassionate care. Our commitment to patient wellness, innovative treatments, and medical research ensures the highest standards of healthcare.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Board-certified physicians and specialists",
                  "Advanced surgical and diagnostic equipment",
                  "Patient-centered care approach",
                  "24/7 emergency and critical care",
                  "Luxury patient accommodations",
                  "Ongoing medical research and training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" data-testid="button-learn-more-hospital">
                Learn More About Us
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={spaImage} 
                alt="Hospital Wellness" 
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
              Need medical services? Contact our hospital for appointments and inquiries.
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
                  data-testid="link-email-hospital"
                >
                  luxurygroupofcompanies@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Emergency line available 24/7</p>
                <a 
                  href="tel:+2248075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-phone-hospital"
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
