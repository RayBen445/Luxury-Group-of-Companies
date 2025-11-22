import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: "assistant", text: "Hello! How can I help you today? Ask about our menu, reservations, or special requests!" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { role: "user", text: inputValue }]);
      setInputValue("");
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", text: "Thanks for your message! A chef will respond shortly." }]);
      }, 500);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="default"
        className="fixed bottom-40 right-6 z-40 h-14 w-14 rounded-full shadow-lg"
        data-testid="button-open-chat"
        aria-label="Open live chat"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-24 right-6 z-50 w-80 shadow-xl" data-testid="card-live-chat">
      <CardHeader className="flex flex-row items-center justify-between pb-4" data-testid="header-chat">
        <h3 className="font-semibold" data-testid="text-chat-title">Chat with Chef</h3>
        <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)} data-testid="button-close-chat">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4" data-testid="container-messages">
        <div className="h-64 overflow-y-auto space-y-3 bg-muted/50 p-4 rounded" data-testid="messages-area">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              data-testid={`message-${idx}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border"
                }`}
                data-testid={`text-message-${idx}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2" data-testid="input-area">
          <Input
            placeholder="Ask anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            data-testid="input-message"
          />
          <Button onClick={handleSendMessage} data-testid="button-send-message">Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}
