import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" data-testid="icon-preloader" />
        <h2 className="font-serif text-2xl gradient-text">La Tavola Royale</h2>
        <p className="text-muted-foreground text-sm">Loading Excellence...</p>
      </div>
    </div>
  );
}
