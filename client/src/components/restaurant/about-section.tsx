import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import kitchenImg from "@assets/generated_images/professional_kitchen_interior.png";
import interiorImg from "@assets/generated_images/luxury_bar_area.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-about">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-about">Our Story</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-about-title">
            About La Tavola Royale
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="font-serif text-3xl font-bold mb-4" data-testid="text-about-heading">
              A Legacy of Excellence
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-about-p1">
              La Tavola Royale was established in 2008 with a singular vision: to create a dining experience that transcends the ordinary. Our name, meaning "The Royal Table," reflects our commitment to treating every guest like royalty.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-p2">
              Founded by Chef Antoine Beaumont, a protégé of renowned Michelin-starred chefs, our restaurant has become synonymous with culinary excellence and impeccable service. We believe that fine dining is not just about food—it's about creating memories.
            </p>
            <div className="space-y-3">
              <p className="font-semibold" data-testid="text-about-philosophy">
                <span className="text-primary">Our Philosophy:</span> Fresh ingredients, timeless techniques, and innovative presentation.
              </p>
              <p className="font-semibold" data-testid="text-about-mission">
                <span className="text-primary">Our Mission:</span> To provide guests with an unforgettable journey through French and international cuisines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="overflow-hidden h-64" data-aos="fade-up">
              <img src={kitchenImg} alt="Kitchen" className="w-full h-full object-cover" loading="lazy" data-testid="img-about-kitchen" />
            </Card>
            <Card className="overflow-hidden h-64" data-aos="fade-up" data-aos-delay="100">
              <img src={interiorImg} alt="Interior" className="w-full h-full object-cover" loading="lazy" data-testid="img-about-interior" />
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-16 border-t">
          <div className="text-center" data-aos="fade-up">
            <div className="text-4xl font-serif font-bold text-primary mb-2" data-testid="text-about-years">
              15+
            </div>
            <p className="text-muted-foreground" data-testid="text-about-years-label">Years of Excellence</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-serif font-bold text-primary mb-2" data-testid="text-about-chefs">
              8
            </div>
            <p className="text-muted-foreground" data-testid="text-about-chefs-label">Expert Chefs</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-serif font-bold text-primary mb-2" data-testid="text-about-awards">
              12
            </div>
            <p className="text-muted-foreground" data-testid="text-about-awards-label">Awards & Recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
}
