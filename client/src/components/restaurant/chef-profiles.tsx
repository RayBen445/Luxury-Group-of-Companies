import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chef1 from "@assets/generated_images/executive_chef_portrait_male.png";
import chef2 from "@assets/generated_images/pastry_chef_portrait_female.png";

const chefs = [
  {
    name: "Chef Antoine Beaumont",
    title: "Executive Chef",
    expertise: "French Cuisine",
    signature: "Filet Mignon with Truffle Reduction",
    image: chef1,
  },
  {
    name: "Chef Isabella Romano",
    title: "Pastry Chef",
    expertise: "Desserts & Confectionery",
    signature: "Chocolate Lava Cake with Gold Leaf",
    image: chef2,
  },
];

export function ChefProfiles() {
  return (
    <section id="chefs" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-chefs">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-chefs">Our Team</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-chefs-title">
            Meet Our Chefs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chefs.map((chef, idx) => (
            <Card key={idx} className="overflow-hidden hover-elevate active-elevate-2" data-aos="fade-up" data-aos-delay={idx * 200} data-testid={`card-chef-${idx}`}>
              <div className="h-96 overflow-hidden">
                <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" loading="lazy" data-testid={`img-chef-${idx}`} />
              </div>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-2" data-testid={`text-chef-name-${idx}`}>
                  {chef.name}
                </h3>
                <p className="text-primary font-bold mb-4" data-testid={`text-chef-title-${idx}`}>
                  {chef.title}
                </p>
                <div className="space-y-3 mb-4">
                  <p className="text-muted-foreground" data-testid={`text-chef-expertise-${idx}`}>
                    <span className="font-semibold text-foreground">Expertise:</span> {chef.expertise}
                  </p>
                  <p className="text-muted-foreground" data-testid={`text-chef-signature-${idx}`}>
                    <span className="font-semibold text-foreground">Signature Dish:</span> {chef.signature}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
