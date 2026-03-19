import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Clock, Shield } from "lucide-react";
import dashboardImage from "@assets/generated_images/digital_banking_dashboard.png";

const openAccountSchema = z.object({
  email: z.string().email("Invalid email address"),
  accountType: z.enum(["checking", "savings", "money_market"]),
});

type OpenAccountFormData = z.infer<typeof openAccountSchema>;

export default function BankOpenAccountPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<OpenAccountFormData>({
    resolver: zodResolver(openAccountSchema),
    defaultValues: {
      email: "",
      accountType: "checking",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: OpenAccountFormData) => {
      const response = await fetch("/api/bank/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to create account");
      return response.json();
    },
    onSuccess: (account) => {
      setSubmitted(true);
      toast({
        title: "Account Created Successfully!",
        description: `Your ${account.accountType} account has been opened with number ${account.accountNumber}`,
      });
      form.reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: OpenAccountFormData) => {
    mutation.mutate(data);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link href="/bank">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to Bank
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Open Your Luxury Bank Account</CardTitle>
                <CardDescription>Choose your account type and provide your information</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-600 font-medium">Account successfully created! You can now order a card.</p>
                  </div>
                )}
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="accountType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Account Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-account-type">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="checking">Checking Account</SelectItem>
                              <SelectItem value="savings">Savings Account</SelectItem>
                              <SelectItem value="money_market">Money Market Account</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full" 
                      disabled={mutation.isPending}
                      data-testid="button-submit"
                    >
                      {mutation.isPending ? "Creating Account..." : "Open Account"}
                    </Button>
                  </form>
                </Form>

                <div className="mt-6 pt-6 border-t">
                  <div className="text-sm text-muted-foreground mb-4">Quick Links:</div>
                  <div className="flex flex-col gap-2">
                    <Link href="/bank/dashboard">
                      <Button variant="outline" className="w-full justify-start" data-testid="button-view-accounts">
                        View My Accounts
                      </Button>
                    </Link>
                    <Link href="/bank">
                      <Button variant="ghost" className="w-full justify-start" data-testid="button-learn-more">
                        Learn About Our Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Section with Image */}
          <div className="space-y-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img 
                src={dashboardImage} 
                alt="Banking Dashboard" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Zero Fees</h3>
                  <p className="text-sm text-muted-foreground">No monthly maintenance fees or minimum balance requirements</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Instant Access</h3>
                  <p className="text-sm text-muted-foreground">Access your account immediately after opening</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Premium Support</h3>
                  <p className="text-sm text-muted-foreground">24/7 dedicated customer support team</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4">Frequently Asked Questions</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">How long does account opening take?</p>
                    <p className="text-muted-foreground">Your account opens instantly and is ready to use.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">When will I receive my card?</p>
                    <p className="text-muted-foreground">Cards are delivered within 5-7 business days.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Is my money secure?</p>
                    <p className="text-muted-foreground">Yes, all accounts are FDIC insured up to $250,000.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
