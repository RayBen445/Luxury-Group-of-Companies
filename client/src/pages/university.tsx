import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Globe, Award, Microscope, Zap, Heart, GraduationCap, Mail, Phone } from "lucide-react";
import { Link } from "wouter";
import campusImage from "@assets/generated_images/luxury_university_campus.png";
import libraryImage from "@assets/generated_images/luxury_university_library.png";

export default function UniversityPage() {
  const colleges = [
    {
      name: "College of Engineering",
      programs: ["Civil Engineering", "Software Engineering", "Mechanical Engineering", "Architecture"],
      icon: Zap
    },
    {
      name: "College of Business",
      programs: ["MBA", "Finance", "Entrepreneurship", "International Business"],
      icon: Globe
    },
    {
      name: "College of Medicine",
      programs: ["Medicine", "Surgery", "Research", "Public Health"],
      icon: Heart
    },
    {
      name: "College of Arts & Sciences",
      programs: ["Literature", "Philosophy", "History", "Sciences"],
      icon: BookOpen
    }
  ];

  const facilities = [
    { icon: Microscope, title: "Advanced Research Labs", desc: "State-of-the-art laboratories for cutting-edge research and innovation" },
    { icon: BookOpen, title: "Premium Library", desc: "World-class library with millions of volumes and digital resources" },
    { icon: Users, title: "Student Life", desc: "Vibrant campus culture with clubs, events, and community engagement" },
    { icon: Award, title: "Renowned Faculty", desc: "Award-winning professors and industry experts leading education" },
    { icon: Globe, title: "International Programs", desc: "Study abroad opportunities and global partnerships" },
    { icon: GraduationCap, title: "Career Services", desc: "Comprehensive career guidance and placement support" },
  ];

  const stats = [
    { number: "150+", label: "Years of Excellence" },
    { number: "50000+", label: "Alumni Worldwide" },
    { number: "4", label: "Prestigious Colleges" },
    { number: "200+", label: "Academic Programs" }
  ];

  const quickLinks = [
    { label: "Admissions", href: "#admissions", icon: Users },
    { label: "Programs", href: "#programs", icon: BookOpen },
    { label: "Campus", href: "#campus", icon: Globe },
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
            src={campusImage} 
            alt="Luxury University Campus" 
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
          <h1 className="font-serif text-5xl sm:text-7xl font-bold mb-6 text-white drop-shadow-lg" data-testid="text-university-title">
            Royale University
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8 drop-shadow-md" data-testid="text-university-desc">
            A beacon of academic excellence with world-class education, innovative research, and transformative student experiences across four prestigious colleges.
          </p>
          <Button size="lg" className="pulse-gold" data-testid="button-explore-university">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((item, idx) => (
              <Card key={idx} className="border-primary/20 text-center hover-elevate" data-testid={`card-stat-university-${idx}`}>
                <CardContent className="p-4">
                  <div className="text-3xl font-bold gradient-text">{item.number}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-colleges">Our Colleges</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-colleges-title">
              Four Prestigious Colleges
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence across engineering, business, medicine, and arts & sciences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {colleges.map((college, idx) => {
              const Icon = college.icon;
              return (
                <Card key={idx} className="border-primary/20 hover-elevate" data-testid={`card-college-${idx}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <h3 className="font-serif text-2xl font-bold">{college.name}</h3>
                    </div>
                    <div className="space-y-2">
                      {college.programs.map((program) => (
                        <Badge key={program} variant="outline" className="mr-2 mb-2">
                          {program}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-6" data-testid={`button-college-${idx}`}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4" data-testid="badge-facilities">Campus Life</Badge>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-4" data-testid="text-facilities-title">
              World-Class Facilities
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
              <Badge className="mb-4" variant="outline">About Royale University</Badge>
              <h2 className="font-serif text-4xl font-bold mb-6 gradient-text">
                Shaping Global Leaders
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Royale University stands as a beacon of academic excellence and innovation. With over 150 years of tradition and a commitment to advancing knowledge, we educate leaders, innovators, and changemakers who shape our world.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Internationally recognized academic programs",
                  "Award-winning faculty and researchers",
                  "State-of-the-art research facilities",
                  "Strong alumni network across the globe",
                  "Comprehensive student support services",
                  "Commitment to diversity and inclusion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" data-testid="button-learn-more-university">
                Learn More About Us
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={libraryImage} 
                alt="University Library" 
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
              Have questions about admissions or programs? Contact our admissions team.
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
                  data-testid="link-email-university"
                >
                  luxurygroupofcompanies@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover-elevate" data-testid="card-contact-phone">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available for admissions inquiries</p>
                <a 
                  href="tel:+2248075614248"
                  className="text-primary hover:text-primary/80 font-semibold"
                  data-testid="link-phone-university"
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
