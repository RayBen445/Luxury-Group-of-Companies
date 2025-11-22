import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Lock, Users, Globe, CreditCard, Zap, BarChart3 } from "lucide-react";
import { Link } from "wouter";

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
            <Link href="/bank/open-account">
              <Button size="lg" className="rounded-md" data-testid="button-open-account-main">
                Open An Account
              </Button>
            </Link>
            <Link href="/bank/dashboard">
              <Button size="lg" variant="outline" className="rounded-md" data-testid="button-dashboard">
                View Dashboard
              </Button>
            </Link>
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Luxury Bank</h2>
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

      {/* Quick Actions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 hover-elevate">
              <CardContent className="p-12 text-center">
                <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h2 className="text-2xl font-bold mb-2">Order a Card</h2>
                <p className="text-muted-foreground mb-6">Get your premium debit or credit card delivered in 5-7 business days</p>
                <Link href="/bank/dashboard">
                  <Button variant="default" data-testid="button-order-card-main">
                    Go to Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 hover-elevate">
              <CardContent className="p-12 text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h2 className="text-2xl font-bold mb-2">Grow Your Wealth</h2>
                <p className="text-muted-foreground mb-6">Access exclusive investment opportunities with competitive rates</p>
                <Button variant="outline" data-testid="button-invest">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">Need Assistance?</h2>
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
