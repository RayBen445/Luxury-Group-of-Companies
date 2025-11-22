import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Clock } from "lucide-react";

const bookings = [
  { id: 1, date: "2024-11-25", time: "19:30", guests: 4, table: "Premium", status: "Confirmed", reference: "LTR-2024-11-001" },
  { id: 2, date: "2024-10-30", time: "20:00", guests: 2, table: "VIP", status: "Completed", reference: "LTR-2024-10-002" },
  { id: 3, date: "2024-09-15", time: "18:30", guests: 6, table: "Private Dining", status: "Completed", reference: "LTR-2024-09-001" },
];

export function BookingHistory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-booking-history">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-history">Your Reservations</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-history-title">
            Booking History
          </h2>
        </div>

        <div className="space-y-4" data-testid="container-bookings">
          {bookings.map((booking) => (
            <Card key={booking.id} className="hover-elevate" data-testid={`card-booking-${booking.id}`}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3" data-testid={`item-date-${booking.id}`}>
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground" data-testid={`text-date-label-${booking.id}`}>Date</p>
                        <p className="font-semibold" data-testid={`text-date-value-${booking.id}`}>{booking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3" data-testid={`item-time-${booking.id}`}>
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground" data-testid={`text-time-label-${booking.id}`}>Time</p>
                        <p className="font-semibold" data-testid={`text-time-value-${booking.id}`}>{booking.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3" data-testid={`item-guests-${booking.id}`}>
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground" data-testid={`text-guests-label-${booking.id}`}>Guests</p>
                        <p className="font-semibold" data-testid={`text-guests-value-${booking.id}`}>{booking.guests} people</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3" data-testid={`item-table-${booking.id}`}>
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground" data-testid={`text-table-label-${booking.id}`}>Table</p>
                        <p className="font-semibold" data-testid={`text-table-value-${booking.id}`}>{booking.table}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t flex items-center justify-between">
                  <div>
                    <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"} data-testid={`badge-status-${booking.id}`}>
                      {booking.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2" data-testid={`text-reference-${booking.id}`}>
                      Ref: {booking.reference}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {booking.status === "Confirmed" && (
                      <>
                        <Button variant="outline" size="sm" data-testid={`button-modify-${booking.id}`}>Modify</Button>
                        <Button variant="outline" size="sm" data-testid={`button-cancel-${booking.id}`}>Cancel</Button>
                      </>
                    )}
                    <Button size="sm" data-testid={`button-view-${booking.id}`}>View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
