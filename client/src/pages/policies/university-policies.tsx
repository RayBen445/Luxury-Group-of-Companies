import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function UniversityPoliciesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/university">
          <Button variant="ghost" className="mb-8 gap-2" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            Back to University
          </Button>
        </Link>

        <h1 className="font-serif text-4xl font-bold mb-8 gradient-text" data-testid="text-title">Royale Luxury University - Policies</h1>

        <div className="space-y-8">
          <section data-testid="section-privacy">
            <h2 className="font-serif text-2xl font-bold mb-4">Student Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We are committed to protecting student privacy and academic records.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Student records are kept confidential and secure</li>
              <li>FERPA compliance for all student data</li>
              <li>Grades and transcripts available only to authorized persons</li>
              <li>Research data anonymized and protected</li>
            </ul>
          </section>

          <section data-testid="section-admission">
            <h2 className="font-serif text-2xl font-bold mb-4">Admission & Enrollment</h2>
            <p className="text-muted-foreground mb-4">
              Standard policies for student enrollment and program participation.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Admission based on merit and application requirements</li>
              <li>Tuition payment plans available</li>
              <li>Scholarships for exceptional candidates</li>
              <li>Financial aid options available</li>
              <li>Deferment options for admitted students</li>
            </ul>
          </section>

          <section data-testid="section-academic">
            <h2 className="font-serif text-2xl font-bold mb-4">Academic Standards</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Minimum GPA: 2.0 to remain in good standing</li>
              <li>Academic probation for GPA below 2.0</li>
              <li>Dismissal possible for repeated violations</li>
              <li>Grade appeals within 30 days</li>
              <li>Attendance policy: 80% minimum</li>
            </ul>
          </section>

          <section data-testid="section-conduct">
            <h2 className="font-serif text-2xl font-bold mb-4">Student Conduct Code</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Academic integrity strictly enforced</li>
              <li>Zero tolerance for plagiarism</li>
              <li>Cheating results in course failure</li>
              <li>Harassment and discrimination prohibited</li>
              <li>Respectful conduct expected at all times</li>
            </ul>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            For admissions, call +234 807 561 4248 or email admissions@luxurygroupofcompanies.com
          </p>
        </div>
      </div>
    </main>
  );
}
