import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - simplified version */}
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
              <a href="#" className="text-dental-blue font-semibold">
                Services
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

      {/* Placeholder content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">
            Our <span className="text-dental-blue">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive dental and orthodontic services for children and
            teens. This page is coming soon with detailed information about all
            our services.
          </p>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">
                Page Under Construction
              </h3>
              <p className="text-muted-foreground mb-6">
                We're working on creating a detailed services page with
                information about:
              </p>
              <ul className="text-left text-muted-foreground space-y-2 mb-6">
                <li>• Pediatric Dentistry</li>
                <li>• Orthodontics & Braces</li>
                <li>• Preventive Care</li>
                <li>• Emergency Services</li>
                <li>• Sedation Options</li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/")}
                className="bg-dental-blue hover:bg-dental-blue/90"
              >
                Return to Homepage
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
