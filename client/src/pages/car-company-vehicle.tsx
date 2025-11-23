import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Users, Gauge } from "lucide-react";
import vehicleShowroomImage from "@assets/generated_images/luxury_vehicle_in_showroom.png";

type Vehicle = any;

export default function CarCompanyVehiclePage() {
  const { id } = useParams();

  const { data: vehicle, isLoading } = useQuery<Vehicle>({
    queryKey: ["/api/vehicles", id],
  });

  if (isLoading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (!vehicle) {
    return <div className="py-20 text-center">Vehicle not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-8">
      <div className="container mx-auto max-w-4xl px-4" data-testid="container-vehicle-detail">
        <Link href="/car-company">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Fleet
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="grid-vehicle">
          {/* Vehicle Image */}
          <Card className="hover-elevate" data-testid="card-image">
            <CardContent className="p-8">
              <img 
                src={vehicleShowroomImage}
                alt={vehicle.name}
                className="w-full h-full object-cover rounded-lg"
                data-testid="img-vehicle"
              />
              <p className="text-center text-sm text-muted-foreground mt-4" data-testid="text-image-note">
                Official vehicle imagery
              </p>
            </CardContent>
          </Card>

          {/* Vehicle Details */}
          <div data-testid="container-details">
            <h1 className="font-serif text-4xl font-bold mb-2" data-testid="text-name">
              {vehicle.name}
            </h1>
            <p className="text-muted-foreground mb-6" data-testid="text-model-year">
              {vehicle.year} • {vehicle.type}
            </p>

            <div className="flex gap-2 mb-6" data-testid="container-badges">
              {vehicle.isElectric && (
                <Badge data-testid="badge-electric">Electric</Badge>
              )}
              {vehicle.isNew && (
                <Badge variant="secondary" data-testid="badge-new">
                  New
                </Badge>
              )}
              <Badge variant="outline" data-testid="badge-stock">
                In Stock
              </Badge>
            </div>

            {/* Pricing */}
            <div className="mb-8 p-6 bg-muted rounded-lg" data-testid="container-pricing">
              <p className="text-sm text-muted-foreground mb-2" data-testid="text-price-label">
                Starting Price
              </p>
              <p className="text-4xl font-bold text-primary mb-4" data-testid="text-price">
                ${parseFloat(vehicle.price || "0").toLocaleString()}
              </p>
              <div className="space-y-2" data-testid="container-financing">
                <p className="text-sm" data-testid="text-monthly-lease">
                  Monthly Lease: ${Math.round(parseFloat(vehicle.price || "0") / 60).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-financing-available">
                  Flexible financing available
                </p>
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 mb-8" data-testid="container-specs">
              <div className="grid grid-cols-2 gap-4">
                <Card data-testid="card-spec-hp">
                  <CardContent className="p-4">
                    <Zap className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground" data-testid="text-hp-label">
                      Horsepower
                    </p>
                    <p className="text-lg font-bold" data-testid="text-hp">
                      {vehicle.horsepower} HP
                    </p>
                  </CardContent>
                </Card>
                <Card data-testid="card-spec-0to60">
                  <CardContent className="p-4">
                    <Gauge className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground" data-testid="text-0to60-label">
                      0-60 mph
                    </p>
                    <p className="text-lg font-bold" data-testid="text-0to60">
                      {vehicle.acceleration}s
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card data-testid="card-spec-range">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-range-label">
                    Range / Fuel Economy
                  </p>
                  <p className="font-bold" data-testid="text-range">
                    {vehicle.range || vehicle.mpg}
                  </p>
                </CardContent>
              </Card>

              <Card data-testid="card-spec-transmission">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-transmission-label">
                    Transmission
                  </p>
                  <p className="font-bold" data-testid="text-transmission">
                    {vehicle.transmission}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-3" data-testid="container-actions">
              <Button size="lg" data-testid="button-buy">
                Buy Now
              </Button>
              <Button variant="outline" size="lg" data-testid="button-lease">
                Lease
              </Button>
              <Button variant="outline" size="lg" data-testid="button-test-drive">
                Test Drive
              </Button>
            </div>
          </div>
        </div>

        {/* Features & Options */}
        <div className="mt-16 pt-16 border-t" data-testid="section-features">
          <h2 className="font-serif text-3xl font-bold mb-8" data-testid="text-features-title">
            Premium Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="grid-features">
            {[
              "Advanced Autonomous Driving",
              "Premium Leather Interior",
              "Panoramic Sunroof",
              "16-Speaker Sound System",
              "Air Suspension",
              "Heated & Cooled Seats",
              "Full LED Lighting",
              "Adaptive Cruise Control",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-muted rounded-lg" data-testid={`feature-${idx}`}>
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span data-testid={`text-feature-${idx}`}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
