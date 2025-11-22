import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Heart } from "lucide-react";

export function BirthdaySpecial() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20" data-testid="section-birthday">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 mx-auto mb-4 text-red-500" data-testid="icon-heart" />
          <Badge className="mb-4" variant="destructive" data-testid="badge-birthday">Birthday Month</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-birthday-title">
            Birthday Celebration
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-birthday-subtitle">
            Register your birthday and get special perks!
          </p>
        </div>

        <Card className="hover-elevate" data-testid="card-birthday">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" data-testid="text-perks-title">
                  <Gift className="w-5 h-5" />
                  Birthday Month Perks
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2" data-testid="perk-1">
                    <span>🎉</span> Free appetizer on your birthday
                  </li>
                  <li className="flex gap-2" data-testid="perk-2">
                    <span>🍰</span> Complimentary dessert with candle service
                  </li>
                  <li className="flex gap-2" data-testid="perk-3">
                    <span>🥂</span> Glass of champagne on us
                  </li>
                  <li className="flex gap-2" data-testid="perk-4">
                    <span>🎁</span> 20% discount throughout your birthday month
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t space-y-4" data-testid="form-area">
                <Input
                  type="date"
                  placeholder="Select your birthday"
                  data-testid="input-birthday"
                />
                <Input
                  type="email"
                  placeholder="Your email address"
                  data-testid="input-email"
                />
                <Button className="w-full" data-testid="button-register-birthday">
                  Register for Birthday Benefits
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
