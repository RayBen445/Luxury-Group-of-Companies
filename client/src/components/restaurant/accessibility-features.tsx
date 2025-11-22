import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Type, Eye, Volume2 } from "lucide-react";

export function AccessibilityFeatures() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReaderMode, setScreenReaderMode] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-accessibility">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-accessibility">Accessibility</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-accessibility-title">
            Accessible Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-testid="container-accessibility-options">
          <Card className="hover-elevate" data-testid="card-font-size">
            <CardContent className="p-6 text-center">
              <Type className="w-8 h-8 mx-auto mb-4 text-primary" data-testid="icon-font" />
              <h3 className="font-semibold mb-4" data-testid="text-font-title">Text Size</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full"
                  data-testid="slider-font-size"
                />
                <p className="text-sm text-muted-foreground" data-testid="text-current-size">{fontSize}px</p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-contrast">
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 mx-auto mb-4 text-primary" data-testid="icon-contrast" />
              <h3 className="font-semibold mb-4" data-testid="text-contrast-title">High Contrast</h3>
              <Button
                variant={highContrast ? "default" : "outline"}
                onClick={() => setHighContrast(!highContrast)}
                className="w-full"
                data-testid="button-contrast-toggle"
              >
                {highContrast ? "Enabled" : "Disabled"}
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-elevate" data-testid="card-reader">
            <CardContent className="p-6 text-center">
              <Volume2 className="w-8 h-8 mx-auto mb-4 text-primary" data-testid="icon-reader" />
              <h3 className="font-semibold mb-4" data-testid="text-reader-title">Screen Reader</h3>
              <Button
                variant={screenReaderMode ? "default" : "outline"}
                onClick={() => setScreenReaderMode(!screenReaderMode)}
                className="w-full"
                data-testid="button-reader-toggle"
              >
                {screenReaderMode ? "Enabled" : "Disabled"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
