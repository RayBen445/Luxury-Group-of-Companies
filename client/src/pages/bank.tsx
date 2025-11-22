import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Lock, Users, Globe, CreditCard, Zap, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function BankPage() {
  const services = [
    {
      id: 1,
      name: "Premium Savings",
      desc: "High-yield savings accounts with competitive interest rates",
      features: ["Up to 5% APY", "No minimum balance", "24/7 access", "FDIC insured"]
    },
    {
      id: 2,
      name: "Investment Services",
      desc: "Comprehensive investment solutions for wealth management",
      features: ["Portfolio management", "Market research", "Tax optimization", "Advisor support"]
    },
    {
      id: 3,
      name: "Corporate Banking",
      desc: "Tailored solutions for businesses and enterprises",
      features: ["Payroll services", "Trade financing", "Treasury solutions", "Business loans"]
    },
    {
      id: 4,
      name: "Wealth Management",
      desc: "Expert financial planning and wealth preservation",
      features: ["Financial planning", "Estate planning", "Trust services", "Legacy management"]
    }
  ];

  const features = [
    { icon: Lock, title: "Secure Banking", desc: "Bank-level security with advanced encryption and fraud protection" },
    { icon: TrendingUp, title: "Investment Growth", desc: "Access to diverse investment portfolios and market opportunities" },
    { icon: Users, title: "Expert Advisors", desc: "Dedicated financial advisors to guide your financial journey" },
    { icon: Globe, title: "Global Access", desc: "International banking services and currency exchange solutions" },
    { icon: CreditCard, title: "Premium Cards", desc: "Exclusive credit and debit cards with premium benefits" },
    { icon: Zap, title: "Fast Transactions", desc: "Instant transfers and real-time transaction processing" },
    { icon: BarChart3, title: "Analytics", desc: "Detailed financial insights and spending analytics" },
    { icon: Star, title: "Rewards Program", desc: "Earn points on every transaction and exclusive perks" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 -z-10" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-4" variant="outline">Luxury Banking Excellence</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 gradient-text">
            Premium Banking Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience world-class banking services designed for those who demand excellence. Secure, innovative, and personalized wealth management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-md">
              Open An Account
            </Button>
            <Button size="lg" variant="outline" className="rounded-md">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive banking solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="hover-elevate">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">Industry-leading features and benefits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Banking?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers who trust us with their financial future.
              </p>
              <Button size="lg" className="rounded-md">
                Get Started Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+224 807 561 4248</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@luxurybank.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
