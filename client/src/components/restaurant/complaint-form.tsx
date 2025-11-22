import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";

export function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "quality",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Please describe your complaint";
    if (formData.message.trim().length < 10) newErrors.message = "Please provide at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Simulate API call
    console.log("Complaint submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", subject: "quality", message: "" });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-complaint">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="destructive" data-testid="badge-complaint">Feedback & Complaints</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-complaint-title">
            Report an Issue
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-complaint-subtitle">
            We value your feedback. Please share any concerns so we can improve your experience.
          </p>
        </div>

        <Card className="hover-elevate border border-destructive/20" data-testid="card-complaint-form">
          <CardHeader className="pb-4 border-b flex gap-4 items-start" data-testid="header-complaint">
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" data-testid="icon-alert" />
            <div>
              <h3 className="font-serif text-2xl font-bold" data-testid="text-form-title">Share Your Complaint</h3>
              <p className="text-sm text-muted-foreground mt-1" data-testid="text-form-subtitle">
                Your feedback helps us serve you better. All complaints are handled professionally and confidentially.
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-8" data-testid="content-complaint">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-complaint">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-testid="field-name">
                  <label className="block text-sm font-medium mb-2" data-testid="label-name">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? "border-destructive" : ""}
                    data-testid="input-name"
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1" data-testid="error-name">{errors.name}</p>}
                </div>

                <div data-testid="field-phone">
                  <label className="block text-sm font-medium mb-2" data-testid="label-phone">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+224 807 561 4248"
                    className={errors.phone ? "border-destructive" : ""}
                    data-testid="input-phone"
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1" data-testid="error-phone">{errors.phone}</p>}
                </div>
              </div>

              <div data-testid="field-email">
                <label className="block text-sm font-medium mb-2" data-testid="label-email">
                  Email Address *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={errors.email ? "border-destructive" : ""}
                  data-testid="input-email"
                />
                {errors.email && <p className="text-xs text-destructive mt-1" data-testid="error-email">{errors.email}</p>}
              </div>

              <div data-testid="field-subject">
                <label className="block text-sm font-medium mb-2" data-testid="label-subject">
                  Issue Type
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border bg-background"
                  data-testid="select-subject"
                >
                  <option value="quality">Food Quality</option>
                  <option value="service">Service Issue</option>
                  <option value="cleanliness">Cleanliness</option>
                  <option value="pricing">Pricing Concern</option>
                  <option value="staff">Staff Behavior</option>
                  <option value="reservation">Reservation Problem</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div data-testid="field-message">
                <label className="block text-sm font-medium mb-2" data-testid="label-message">
                  Detailed Description *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe what happened in detail, including date and time if possible..."
                  rows={6}
                  className={errors.message ? "border-destructive" : ""}
                  data-testid="textarea-message"
                />
                {errors.message && <p className="text-xs text-destructive mt-1" data-testid="error-message">{errors.message}</p>}
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800" data-testid="info-box">
                <p className="text-sm text-blue-900 dark:text-blue-200" data-testid="text-info">
                  ℹ️ <strong>Response Time:</strong> We typically respond to complaints within 24-48 hours. For urgent matters, you can also contact us directly at <strong>+224 807 561 4248</strong> or <strong>latavoroyale@gmail.com</strong>
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-complaint">
                Submit Complaint
              </Button>

              {submitted && (
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800" data-testid="success-message">
                  <p className="text-sm text-green-900 dark:text-green-200" data-testid="text-success">
                    ✓ <strong>Thank you for your feedback!</strong> We have received your complaint and will contact you soon. Your reference number is: <strong>#{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
