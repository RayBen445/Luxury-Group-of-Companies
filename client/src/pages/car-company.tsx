import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, TrendingUp, Zap, Users, MapPin, ChevronRight } from "lucide-react";
import { useState } from "react";
import showroomImage from "@assets/generated_images/luxury_car_dealership_showroom.png";
import vehiclesImage from "@assets/generated_images/multiple_luxury_vehicles_display.png";

type Vehicle = any;

export default function CarCompanyPage() {
  const [filterType, setFilterType] = useState<string>("all");

  const { data: vehicles = [] } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const filteredVehicles = vehicles.filter((v) => {
    if (filterType === "all") return true;
    return v.type === filterType;
  });

  const features = [
    { icon: Car, title: "Premium Vehicles", desc: "Handpicked luxury vehicles from top manufacturers" },
    { icon: Zap, title: "Advanced Technology", desc: "Latest autonomous and electric vehicle technology" },
    { icon: TrendingUp, title: "Flexible Financing", desc: "Competitive rates and flexible payment plans" },
    { icon: Users, title: "Expert Service", desc: "Dedicated concierge and 24/7 support" },
  ];

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "sedan", name: "Sedans" },
    { id: "suv", name: "SUVs" },
    { id: "sports", name: "Sports Cars" },
    { id: "electric", name: "Electric" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Quick Navigation */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="flex gap-2 overflow-x-auto pb-2">
            <Link href="/">
              <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap" data-testid="button-back-home">
                ← Back to Properties
              </Button>
            </Link>
            <Link href="/car-company/inventory">
              <Button variant="outline" size="sm" className="gap-2 whitespace-nowrap" data-testid="button-inventory">
                <Car className="w-4 h-4" />
                Full Inventory
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={showroomImage} 
            alt="Luxury Car Dealership Showroom" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <Badge className="mb-4" data-testid="badge-car-company">
            Royale Luxury Collection
          </Badge>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6 gradient-text" data-testid="text-title">
            Royale Luxury Motors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-subtitle">
            Experience excellence with our premium vehicle collection. Produce, sell, and lease the world's finest luxury automobiles.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12" data-testid="grid-services">
            <Link href="#buy">
              <Button variant="outline" size="lg" className="w-full gap-2" data-testid="button-service-buy">
                <Car className="w-5 h-5" />
                Buy
              </Button>
            </Link>
            <Link href="#lease">
              <Button variant="outline" size="lg" className="w-full gap-2" data-testid="button-service-lease">
                <MapPin className="w-5 h-5" />
                Lease
              </Button>
            </Link>
            <Link href="#service">
              <Button variant="outline" size="lg" className="w-full gap-2" data-testid="button-service-maintenance">
                <Zap className="w-5 h-5" />
                Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-features">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-8 text-center" data-testid="text-features-title">
            Why Choose Royale Motors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-features">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="hover-elevate" data-testid={`card-feature-${idx}`}>
                  <CardContent className="p-6">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-2" data-testid={`text-feature-title-${idx}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-feature-desc-${idx}`}>
                      {feature.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-categories">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-categories-title">
            Our Fleet
          </h2>
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2" data-testid="filter-categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterType(cat.id)}
                className={`px-4 py-2 rounded-lg border transition whitespace-nowrap ${
                  filterType === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-background border-border hover-elevate"
                }`}
                data-testid={`button-filter-${cat.id}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="grid-vehicles">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <div className="col-span-full text-center py-12" data-testid="text-no-vehicles">
                <p className="text-muted-foreground">No vehicles in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-testid="section-cta">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Experience Luxury?
          </h2>
          <p className="text-muted-foreground mb-8" data-testid="text-cta-desc">
            Contact our luxury automotive specialists today to explore our collection or schedule a test drive.
          </p>
          <Button size="lg" data-testid="button-contact">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </main>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="hover-elevate cursor-pointer h-full" data-testid={`card-vehicle-${vehicle.id}`}>
      <CardContent className="p-4">
        <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center text-4xl" data-testid={`img-vehicle-${vehicle.id}`}>
          🏎️
        </div>
        <h3 className="font-semibold mb-1" data-testid={`text-name-${vehicle.id}`}>
          {vehicle.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3" data-testid={`text-model-${vehicle.id}`}>
          {vehicle.year} • {vehicle.type}
        </p>
        <div className="flex items-center justify-between mb-4" data-testid={`container-price-${vehicle.id}`}>
          <span className="text-lg font-bold text-primary" data-testid={`text-price-${vehicle.id}`}>
            ${parseFloat(vehicle.price || "0").toLocaleString()}
          </span>
          {vehicle.isElectric && (
            <Badge variant="outline" data-testid={`badge-electric-${vehicle.id}`}>
              Electric
            </Badge>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs" data-testid={`container-specs-${vehicle.id}`}>
          <div data-testid={`spec-hp-${vehicle.id}`}>
            <p className="text-muted-foreground">{vehicle.horsepower} HP</p>
          </div>
          <div data-testid={`spec-0to60-${vehicle.id}`}>
            <p className="text-muted-foreground">{vehicle.acceleration}s 0-60</p>
          </div>
        </div>
        <Link href={`/car-company/vehicle/${vehicle.id}`}>
          <Button className="w-full" size="sm" data-testid={`button-view-${vehicle.id}`}>
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
