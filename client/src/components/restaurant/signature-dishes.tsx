import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import filetMignon from "@assets/generated_images/signature_dish_filet_mignon.png";
import lobster from "@assets/generated_images/signature_dish_lobster_thermidor.png";
import pizza from "@assets/generated_images/signature_dish_truffle_pizza.png";
import seaBass from "@assets/generated_images/signature_dish_sea_bass.png";
import chocolate from "@assets/generated_images/signature_dessert_chocolate_cake.png";
import risotto from "@assets/generated_images/signature_dish_mushroom_risotto.png";
import lamb from "@assets/generated_images/signature_dish_lamb_chops.png";

const dishes = [
  {
    name: "Filet Mignon",
    description: "Prime cut beef with truffle mashed potatoes and red wine reduction",
    price: "$58",
    image: filetMignon,
    category: "Chef's Special",
  },
  {
    name: "Lobster Thermidor",
    description: "Fresh Atlantic lobster with drawn butter and asparagus",
    price: "$72",
    image: lobster,
    category: "Seafood",
  },
  {
    name: "Truffle Pizza",
    description: "Wood-fired pizza with prosciutto, arugula, and truffle oil",
    price: "$34",
    image: pizza,
    category: "Specialty",
  },
  {
    name: "Chilean Sea Bass",
    description: "Pan-seared with lemon butter sauce and capers",
    price: "$64",
    image: seaBass,
    category: "Seafood",
  },
  {
    name: "Chocolate Lava Cake",
    description: "Decadent dessert with vanilla ice cream and gold leaf",
    price: "$18",
    image: chocolate,
    category: "Dessert",
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Creamy arborio rice with truffle shavings and parmesan",
    price: "$38",
    image: risotto,
    category: "Vegetarian",
  },
  {
    name: "Herb Crusted Lamb",
    description: "Grilled lamb chops with rosemary and garlic mashed potatoes",
    price: "$56",
    image: lamb,
    category: "Chef's Special",
  },
];

export function SignatureDishes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-signature">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-signature">Signature Collection</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text" data-testid="text-signature-title">
            Our Signature Dishes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-signature-subtitle">
            Experience culinary excellence with our chef's handpicked specialties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <Card
              key={dish.name}
              className="group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-testid={`card-dish-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  data-testid={`img-dish-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2" data-testid={`badge-category-${index}`}>
                      {dish.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2" data-testid={`text-dish-name-${index}`}>
                  {dish.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-dish-desc-${index}`}>
                  {dish.description}
                </p>
                <p className="text-primary font-bold text-lg" data-testid={`text-dish-price-${index}`}>
                  {dish.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
