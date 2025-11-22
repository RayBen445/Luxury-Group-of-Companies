import { AccessibilityFeatures } from "@/components/restaurant/accessibility-features";
import { LanguageSelector } from "@/components/restaurant/language-selector";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SettingsPage() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-settings">Settings</Badge>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-settings-title">
            Preferences
          </h1>
        </div>
      </div>
      <AccessibilityFeatures />
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-language">
        <div className="container mx-auto max-w-3xl">
          <Card className="hover-elevate" data-testid="card-language">
            <CardHeader data-testid="header-language">
              <h2 className="font-serif text-2xl font-bold" data-testid="text-lang-title">Language Preferences</h2>
            </CardHeader>
            <CardContent className="p-6" data-testid="content-language">
              <LanguageSelector />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
