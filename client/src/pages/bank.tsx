import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Lock, Users, Globe, CreditCard, Zap, BarChart3, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import luxuryBankImage from "@assets/generated_images/luxury_bank_interior.png";
import cardDesignImage from "@assets/generated_images/premium_luxury_card_design.png";
import advisorImage from "@assets/generated_images/financial_advisory_meeting.png";

export default function BankPage() {
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

  const accountTypes = [
    {
      name: "Checking Account",
      features: ["Unlimited transactions", "Free ATM access", "Online banking", "Direct deposit"],
      rate: "0.5% APY",
    },
    {
      name: "Savings Account",
      features: ["High-yield interest", "Automatic transfers", "Goal tracking", "No minimum balance"],
      rate: "5.0% APY",
    },
    {
      name: "Money Market Account",
      features: ["Premium interest rates", "Check writing", "Tiered rates", "VIP support"],
      rate: "6.5% APY",
    },
  ];

  const quickLinks = [
    { label: "Open Account", href: "/bank/open-account", icon: Plus },
    { label: "My Dashboard", href: "/bank/dashboard", icon: BarChart3 },
    { label: "Order Card", href: "/bank/dashboard", icon: CreditCard },
    { label: "Support", href: "#contact", icon: Users },
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
                <Link key={link.label} href={link.href}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 whitespace-nowrap"
                    data-testid={`button-quick-${link.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="outline">Luxury Banking Excellence</Badge>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 gradient-text">
                Premium Banking Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience world-class banking services designed for those who demand excellence. Secure, innovative, and personalized wealth management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bank/open-account">
                  <Button size="lg" className="rounded-md w-full sm:w-auto" data-testid="button-open-account-main">
                    Open An Account
                  </Button>
                </Link>
                <Link href="/bank/dashboard">
                  <Button size="lg" variant="outline" className="rounded-md w-full sm:w-auto" data-testid="button-dashboard">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img 
                src={luxuryBankImage} 
                alt="Luxury Bank Interior" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Account Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Account Types</h2>
            <p className="text-lg text-muted-foreground">Choose the account that fits your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accountTypes.map((account, idx) => (
              <Card key={idx} className="hover-elevate flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{account.name}</h3>
                  <p className="text-primary font-bold mb-6">{account.rate}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {account.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/bank/open-account">
                    <Button className="w-full" data-testid={`button-account-${idx}`}>
                      Open {account.name}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Cards Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-full rounded-lg overflow-hidden">
              <img 
                src={cardDesignImage} 
                alt="Premium Card Design" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4" variant="secondary">Premium Cards</Badge>
              <h2 className="text-4xl font-serif font-bold mb-6">Exclusive Luxury Cards</h2>
              <p className="text-muted-foreground mb-6">
                Get your premium debit or credit card with exclusive benefits, rewards, and VIP privileges. Delivered within 5-7 business days with lifetime validity.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Premium Materials</p>
                    <p className="text-sm text-muted-foreground">Embossed and metallic finishes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Instant Activation</p>
                    <p className="text-sm text-muted-foreground">Start using immediately upon receipt</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Global Acceptance</p>
                    <p className="text-sm text-muted-foreground">Use anywhere in the world</p>
                  </div>
                </div>
              </div>
              <Link href="/bank/dashboard">
                <Button size="lg" className="gap-2" data-testid="button-order-card-main">
                  Order Your Card <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Luxury Bank</h2>
            <p className="text-lg text-muted-foreground">Industry-leading features and benefits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center hover-elevate p-6 rounded-lg transition-all">
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img 
                src={advisorImage} 
                alt="Financial Advisor Meeting" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Badge className="mb-4">Expert Support</Badge>
              <h2 className="text-4xl font-serif font-bold mb-6">Dedicated Financial Advisors</h2>
              <p className="text-muted-foreground mb-6">
                Our team of expert financial advisors is available 24/7 to help you make the best financial decisions. Schedule a consultation today.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Personal Advisor</p>
                    <p className="text-sm text-muted-foreground">Dedicated to your financial goals</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Wealth Planning</p>
                    <p className="text-sm text-muted-foreground">Customized investment strategies</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Complete Confidentiality</p>
                    <p className="text-sm text-muted-foreground">Your privacy is our priority</p>
                  </div>
                </div>
              </div>
              <Button size="lg" variant="outline" data-testid="button-schedule-advisor">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+224 807 561 4248</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@luxurybank.com</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon - Fri: 9AM - 6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

// Import Plus icon at the top
import { Plus } from "lucide-react";
