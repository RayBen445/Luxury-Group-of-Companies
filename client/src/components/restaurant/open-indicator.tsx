import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function OpenIndicator() {
  const isOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay();
    
    if (day === 0) return false;
    
    return hours >= 11 && hours < 23;
  };

  const open = isOpen();

  return (
    <Badge
      variant={open ? "default" : "secondary"}
      className="gap-2"
      data-testid={`badge-status-${open ? "open" : "closed"}`}
    >
      <Clock className="h-3 w-3" />
      {open ? "Open Now" : "Closed"}
    </Badge>
  );
}
