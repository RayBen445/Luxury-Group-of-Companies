import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { OpenIndicator } from "./open-indicator";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" data-testid="section-contact">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <Badge className="mb-4" data-testid="badge-contact">Get In Touch</Badge>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4 gradient-text" data-testid="text-contact-title">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="hover-elevate active-elevate-2" data-aos="fade-up" data-testid="card-contact-info">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex gap-4" data-testid="item-phone">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary" data-testid="link-phone">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4" data-testid="item-email">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:info@tavolaroyale.com" className="text-muted-foreground hover:text-primary" data-testid="link-email">
                      info@tavolaroyale.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4" data-testid="item-address">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">123 Gourmet Lane<br />Downtown, City 12345</p>
                  </div>
                </div>

                <div className="flex gap-4" data-testid="item-hours">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <p className="text-muted-foreground text-sm mb-3">Mon-Thu: 11am - 11pm</p>
                    <p className="text-muted-foreground text-sm mb-3">Fri-Sat: 11am - 12am</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                    <div className="mt-3">
                      <OpenIndicator />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate active-elevate-2" data-aos="fade-up" data-aos-delay="100" data-testid="card-contact-actions">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-4">Quick Actions</h4>
                  <Button
                    onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full mb-3"
                    data-testid="button-contact-reserve"
                  >
                    Make a Reservation
                  </Button>
                  <Button
                    variant="secondary"
                    className="w-full mb-3"
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                    data-testid="button-contact-whatsapp"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" data-testid="button-contact-map">
                      Get Directions
                    </Button>
                  </a>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Parking Information</h4>
                  <p className="text-muted-foreground text-sm mb-3" data-testid="text-parking">
                    Complimentary valet parking available for all guests. Street parking also available nearby.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Private Events</h4>
                  <p className="text-muted-foreground text-sm" data-testid="text-events">
                    Interested in hosting a private event? Contact us for our exclusive packages.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden h-96 bg-muted" data-aos="fade-up" data-testid="section-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.154509485689!2d-74.00601!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ3LjAiTiA3NMKwMDAnMDEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="map-iframe"
          />
        </div>
      </div>
    </section>
  );
}
