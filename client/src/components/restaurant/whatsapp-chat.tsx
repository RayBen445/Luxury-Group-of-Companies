import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppChat() {
  const phoneNumber = "1234567890";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Button
      onClick={openWhatsApp}
      size="icon"
      variant="secondary"
      className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full shadow-lg"
      data-testid="button-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
