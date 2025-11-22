import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kitchen from "@assets/generated_images/professional_kitchen_interior.png";
import wine from "@assets/generated_images/wine_cellar_interior.png";
import bar from "@assets/generated_images/luxury_bar_area.png";
import dining from "@assets/generated_images/private_dining_room.png";
import terrace from "@assets/generated_images/outdoor_terrace_dining.png";
import wineService from "@assets/generated_images/wine_service_photography.png";

const galleryImages = [
  { category: "Kitchen", image: kitchen },
  { category: "Wine Cellar", image: wine },
  { category: "Bar", image: bar },
  { category: "Dining", image: dining },
  { category: "Terrace", image: terrace },
  { category: "Wine Service", image: wineService },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-gallery">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-gallery-title">
            Restaurant Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, idx) => (
            <Card key={idx} className="overflow-hidden cursor-pointer hover-elevate active-elevate-2 group" onClick={() => setSelectedImage(item.image)} data-testid={`card-gallery-${idx}`}>
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  data-testid={`img-gallery-${idx}`}
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-center" data-testid={`text-gallery-cat-${idx}`}>{item.category}</p>
              </div>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelectedImage(null)} data-testid="modal-lightbox">
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Gallery" className="w-full h-auto rounded-lg" data-testid="img-lightbox" />
              <Button variant="outline" className="mt-4 w-full" onClick={() => setSelectedImage(null)} data-testid="button-close-lightbox">
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
