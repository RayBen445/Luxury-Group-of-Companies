import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check } from "lucide-react";

const promoCodes = [
  { code: "WELCOME20", discount: "20%", description: "First-time customers", valid: "30 days" },
  { code: "LOYALTY15", discount: "15%", description: "For loyalty members", valid: "Ongoing" },
  { code: "HOLIDAY25", discount: "25%", description: "Holiday special", valid: "Limited time" },
  { code: "REFERRAL10", discount: "10%", description: "Refer a friend", valid: "Ongoing" },
];

export function PromoCodes() {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const applyCode = (code: string) => {
    setAppliedCode(code);
    setPromoCode(code);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-promo">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4" data-testid="badge-promo">Save Money</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-promo-title">
            Promotional Codes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-4" data-testid="container-promo-codes">
            {promoCodes.map((promo, idx) => (
              <Card key={idx} className={`cursor-pointer hover-elevate ${appliedCode === promo.code ? "ring-2 ring-primary" : ""}`} data-testid={`card-promo-${idx}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-primary mb-1" data-testid={`text-promo-code-${idx}`}>
                        {promo.code}
                      </h3>
                      <p className="font-semibold text-lg mb-1" data-testid={`text-discount-${idx}`}>{promo.discount} OFF</p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-promo-desc-${idx}`}>{promo.description}</p>
                      <p className="text-xs text-muted-foreground mt-2" data-testid={`text-valid-${idx}`}>Valid: {promo.valid}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyCode(promo.code)}
                        data-testid={`button-copy-${idx}`}
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => applyCode(promo.code)}
                        data-testid={`button-apply-${idx}`}
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="h-fit" data-testid="card-promo-input">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4" data-testid="text-apply-code">Have a code?</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  data-testid="input-promo-code"
                />
                <Button className="w-full" data-testid="button-validate-code">
                  Validate Code
                </Button>
                {appliedCode && (
                  <p className="text-green-600 dark:text-green-400 text-sm text-center" data-testid="text-code-applied">
                    ✓ {appliedCode} applied!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
