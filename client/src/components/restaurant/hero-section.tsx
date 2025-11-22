import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/premium_restaurant_hero_background.png";
import AOS from "aos";
import "aos/dist/aos.css";

export function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text"
          data-aos="fade-up"
          data-testid="text-hero-headline"
        >
          Experience Fine Dining Redefined
        </h2>

        <p
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
          data-testid="text-hero-subtext"
        >
          Where flavor meets luxury
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 pulse-gold"
            onClick={() => scrollToSection("reservations")}
            data-testid="button-hero-reserve"
          >
            Reserve a Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 glass-effect text-white border-white/30 hover:bg-white/10"
            onClick={() => scrollToSection("menu")}
            data-testid="button-hero-menu"
          >
            View Menu
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
