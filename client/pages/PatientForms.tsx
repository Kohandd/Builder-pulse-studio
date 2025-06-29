import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Download,
  Clock,
  CheckCircle,
  User,
  Heart,
} from "lucide-react";

export default function PatientForms() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2F85c43e7e8f834bbfba6c1da74de3c233?format=webp&width=800"
                alt="Say Cheese Kids Dental Logo"
                className="h-16 w-auto"
              />
              <div className="text-2xl font-bold">
                <span className="text-dental-yellow">Say Cheese</span>
                <span className="text-dental-blue ml-2">Kids Dental</span>
                <div className="text-sm font-normal text-dental-green">
                  & Orthodontics
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Services
              </a>
              <a
                href="/insurance"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Insurance
              </a>
              <a href="#" className="text-dental-blue font-semibold">
                Patient Forms
              </a>
              <a
                href="/faq"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                FAQs
              </a>
              <a
                href="/#contact"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dental-blue/10 via-dental-green/10 to-dental-yellow/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Patient Forms &
            <span className="text-dental-blue block">Assessments</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete your paperwork before your visit to save time and ensure we
            have all the information needed to provide the best care for your
            child.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Oral Assessment Form */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <FileText className="h-8 w-8 text-dental-blue" />
                      <h2 className="text-3xl font-bold">
                        Oral Health Assessment Form
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      This comprehensive form helps us understand your child's
                      oral health history, current concerns, and any special
                      needs or considerations for their dental care.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Medical and dental history</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Current symptoms and concerns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Dietary and oral hygiene habits</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Insurance and emergency contact information</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/o/assets%2F597fd8da2b4944148d53325a31dd2372%2F5d690b8ab62d41eab74475f75dea5e3e?alt=media&token=acd04573-ba80-411d-99b2-9f59857ceeb1&apiKey=597fd8da2b4944148d53325a31dd2372",
                            "_blank",
                          )
                        }
                        className="bg-dental-blue hover:bg-dental-blue/90"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Form
                      </Button>
                      <Button
                        variant="outline"
                        className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                        onClick={() =>
                          window.open(
                            "https://cdn.builder.io/o/assets%2F597fd8da2b4944148d53325a31dd2372%2F5d690b8ab62d41eab74475f75dea5e3e?alt=media&token=acd04573-ba80-411d-99b2-9f59857ceeb1&apiKey=597fd8da2b4944148d53325a31dd2372",
                            "_blank",
                          )
                        }
                      >
                        View Form
                      </Button>
                    </div>
                  </div>
                  <div className="bg-dental-blue/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src="https://cdn.builder.io/o/assets%2F597fd8da2b4944148d53325a31dd2372%2F5d690b8ab62d41eab74475f75dea5e3e?alt=media&token=acd04573-ba80-411d-99b2-9f59857ceeb1&apiKey=597fd8da2b4944148d53325a31dd2372"
                        alt="Oral Health Assessment Form"
                        className="w-full max-w-md rounded-lg shadow-lg mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        Complete Before Your Visit
                      </h3>
                      <p className="text-muted-foreground">
                        Save time at your appointment by completing this form in
                        advance
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Forms Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <User className="h-8 w-8 text-dental-yellow" />
                    <h3 className="text-xl font-bold">New Patient Form</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Complete registration and contact information for first-time
                    patients visiting our practice.
                  </p>
                  <Button
                    className="w-full bg-dental-yellow hover:bg-dental-yellow/90"
                    onClick={() => (window.location.href = "/#contact")}
                  >
                    Request Form
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-dental-pink" />
                    <h3 className="text-xl font-bold">Medical History</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Important medical information that helps us provide safe and
                    effective dental care for your child.
                  </p>
                  <Button
                    className="w-full bg-dental-pink hover:bg-dental-pink/90"
                    onClick={() => (window.location.href = "/#contact")}
                  >
                    Request Form
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-8 w-8 text-dental-green" />
                    <h3 className="text-xl font-bold">Emergency Contact</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Emergency contact information and authorization for urgent
                    dental care when needed.
                  </p>
                  <Button
                    className="w-full bg-dental-green hover:bg-dental-green/90"
                    onClick={() => (window.location.href = "/#contact")}
                  >
                    Request Form
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Instructions Section */}
            <Card className="bg-gradient-to-r from-dental-green/10 to-dental-blue/10">
              <CardContent className="p-12">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-dental-blue mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-6">
                    How to Complete Your Forms
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="bg-dental-blue/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Download className="h-8 w-8 text-dental-blue" />
                      </div>
                      <h3 className="font-semibold mb-2">1. Download</h3>
                      <p className="text-sm text-muted-foreground">
                        Click the download button to get the PDF form
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-green/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <FileText className="h-8 w-8 text-dental-green" />
                      </div>
                      <h3 className="font-semibold mb-2">2. Complete</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out all sections completely and accurately
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-yellow/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <CheckCircle className="h-8 w-8 text-dental-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">3. Bring</h3>
                      <p className="text-sm text-muted-foreground">
                        Bring the completed form to your appointment
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/50 p-6 rounded-lg mb-8">
                    <h3 className="font-semibold mb-3 text-dental-blue">
                      Important Notes:
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground text-left max-w-2xl mx-auto">
                      <p>
                        • Please complete forms at least 24 hours before your
                        appointment
                      </p>
                      <p>• Bring a valid ID and insurance card to your visit</p>
                      <p>
                        • If you have questions about any form, call us at (555)
                        SAY-KIDS
                      </p>
                      <p>• All information is kept confidential and secure</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={() => (window.location.href = "/#contact")}
                      size="lg"
                      className="bg-dental-blue hover:bg-dental-blue/90"
                    >
                      Schedule Appointment
                    </Button>
                    <Button
                      onClick={() => (window.location.href = "/")}
                      size="lg"
                      variant="outline"
                      className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                    >
                      Back to Homepage
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
