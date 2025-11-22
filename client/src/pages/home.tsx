import { HeroSection } from "@/components/restaurant/hero-section";
import { SignatureDishes } from "@/components/restaurant/signature-dishes";
import { ReviewsSection } from "@/components/restaurant/reviews-section";
import { SocialProof } from "@/components/restaurant/social-proof";
import { AwardsSection } from "@/components/restaurant/awards-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <SignatureDishes />
      <ReviewsSection />
      <AwardsSection />
    </main>
  );
}
