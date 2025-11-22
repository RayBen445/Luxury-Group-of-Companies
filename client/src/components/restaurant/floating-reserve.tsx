import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingReserveButton() {
  const scrollToReservation = () => {
    const element = document.getElementById("reservations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToReservation}
      className="fixed bottom-6 left-6 z-40 pulse-gold hidden md:flex gap-2"
      data-testid="button-floating-reserve"
    >
      <Calendar className="h-5 w-5" />
      Reserve Table
    </Button>
  );
}
