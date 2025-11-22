import { HeroSection } from "@/components/restaurant/hero-section";
import { SignatureDishes } from "@/components/restaurant/signature-dishes";
import { ReviewsSection } from "@/components/restaurant/reviews-section";
import { SocialProof } from "@/components/restaurant/social-proof";
import { AwardsSection } from "@/components/restaurant/awards-section";
import { SpecialFeaturesSection } from "@/components/restaurant/special-features";
import { RatingsSection } from "@/components/restaurant/ratings-section";
import { FAQSection } from "@/components/restaurant/faq-section";
import { SeasonalSpecials } from "@/components/restaurant/seasonal-specials";
import { BirthdaySpecial } from "@/components/restaurant/birthday-special";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <SignatureDishes />
      <SpecialFeaturesSection />
      <ReviewsSection />
      <RatingsSection />
      <SeasonalSpecials />
      <AwardsSection />
      <BirthdaySpecial />
      <FAQSection />
    </main>
  );
}
