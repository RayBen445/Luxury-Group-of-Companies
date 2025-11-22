import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { insertReservationSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { tablePricing } from "@shared/table-pricing";

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedTableType, setSelectedTableType] = useState("standard");
  const selectedTable = tablePricing.find(t => t.id === selectedTableType);

  const form = useForm({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      guests: 2,
      date: "",
      time: "",
      tableType: "indoor",
      specialRequests: "",
    },
  });

  const guestCount = form.watch("guests");
  const tableCost = selectedTable ? selectedTable.pricePerPerson * guestCount : 0;

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await apiRequest("POST", "/api/reservations", data);
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Reservation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="reservations" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-reservations">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-reservation">Book Your Table</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-reservation-title">
            Reserve a Table
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-reservation-subtitle">
            Join us for an unforgettable dining experience
          </p>
        </div>

        {submitted && (
          <Card className="mb-8 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" data-testid="card-success">
            <CardContent className="p-6">
              <p className="text-green-700 dark:text-green-300 font-semibold" data-testid="text-success-message">
                ✓ Reservation confirmed! We'll send you a confirmation email shortly.
              </p>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8" data-aos="fade-up">
          {tablePricing.map((table) => (
            <Card
              key={table.id}
              className={`cursor-pointer hover-elevate active-elevate-2 transition-all ${
                selectedTableType === table.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedTableType(table.id)}
              data-testid={`card-table-${table.id}`}
            >
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-table-name-${table.id}`}>
                  {table.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-table-desc-${table.id}`}>
                  {table.description}
                </p>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-primary mb-1" data-testid={`text-table-price-${table.id}`}>
                    ${table.pricePerPerson}/person
                  </p>
                  <p className="text-xs text-muted-foreground" data-testid={`text-table-max-${table.id}`}>
                    Up to {table.maxGuests} guests
                  </p>
                </div>
                <ul className="space-y-2 text-xs">
                  {table.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground flex gap-2" data-testid={`text-feature-${table.id}-${idx}`}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-effect mb-8" data-aos="fade-up" data-aos-delay="100" data-testid="card-reservation-pricing">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold mb-1" data-testid="text-pricing-header">Estimated Cost</h4>
                <p className="text-sm text-muted-foreground" data-testid="text-pricing-desc">
                  {selectedTable?.name} × {guestCount} guests
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary" data-testid="text-total-cost">
                  ${tableCost.toFixed(2)}
                </p>
                <p className="text-xs text-muted-foreground" data-testid="text-pricing-note">
                  (Before food charges)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect" data-aos="fade-up" data-aos-delay="200">
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" max="20" {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} data-testid="input-guests" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} data-testid="input-date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} data-testid="input-time" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="tableType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Table Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-table-type">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="indoor">Indoor</SelectItem>
                          <SelectItem value="outdoor">Outdoor</SelectItem>
                          <SelectItem value="vip">VIP</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any dietary restrictions or special occasions?" {...field} data-testid="textarea-requests" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full pulse-gold" disabled={isLoading} size="lg" data-testid="button-submit-reservation">
                  {isLoading ? "Reserving..." : "Reserve Table"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
