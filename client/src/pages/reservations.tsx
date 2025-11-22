import { ReservationForm } from "@/components/restaurant/reservation-form";
import { BookingHistory } from "@/components/restaurant/booking-history";
import { SpecialRequests } from "@/components/restaurant/special-requests";
import { LoyaltyProgram } from "@/components/restaurant/loyalty-program";

export default function ReservationsPage() {
  return (
    <main className="pt-24">
      <ReservationForm />
      <BookingHistory />
      <SpecialRequests />
      <LoyaltyProgram />
    </main>
  );
}
