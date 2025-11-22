import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function SpecialRequests() {
  const [submitted, setSubmitted] = useState(false);
  const [request, setRequest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim()) {
      setSubmitted(true);
      setRequest("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-special-requests">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-requests">Personal Touch</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-requests-title">
            Special Requests
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-requests-subtitle">
            Tell us about dietary needs, allergies, or special occasions
          </p>
        </div>

        <Card className="hover-elevate" data-testid="card-request-form">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-special">
              <Textarea
                placeholder="Example: I'm celebrating an anniversary... or I have a shellfish allergy..."
                value={request}
                onChange={(e) => setRequest(e.target.value)}
                rows={6}
                data-testid="textarea-request"
              />
              <Button type="submit" className="w-full" data-testid="button-submit-request">
                Submit Request
              </Button>
              {submitted && (
                <p className="text-green-600 dark:text-green-400 text-sm text-center" data-testid="text-request-submitted">
                  ✓ Your request has been received! Our team will contact you soon.
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
