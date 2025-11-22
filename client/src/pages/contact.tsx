import { ContactSection } from "@/components/restaurant/contact-section";
import { ComplaintForm } from "@/components/restaurant/complaint-form";

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactSection />
      <ComplaintForm />
    </main>
  );
}
