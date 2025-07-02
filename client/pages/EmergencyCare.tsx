import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Phone,
  AlertTriangle,
  Heart,
  Shield,
  CheckCircle,
  Users,
  Star,
} from "lucide-react";

export default function EmergencyCare() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6 pb-[22px] -mb-[3px]">
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
              <a href="#" className="text-dental-blue font-semibold">
                Emergency Care
              </a>
              <a
                href="/insurance"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Insurance
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
      <section className="py-20 bg-gradient-to-br from-red-50 via-dental-orange/10 to-dental-yellow/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Emergency
            <span className="text-red-600 block">Dental Care</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Dental emergencies don't wait for convenient times. When your child
            is in pain or has suffered a dental injury, we're here to provide
            prompt, compassionate care when it's needed most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.open("tel:555-SAY-KIDS", "_self")}
              size="lg"
              className="bg-red-600 hover:bg-red-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now: (555) SAY-KIDS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dental-orange text-dental-orange hover:bg-dental-orange hover:text-white"
            >
              Emergency Guidelines
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8" />
              <h2 className="text-2xl font-bold">Dental Emergency?</h2>
            </div>
            <p className="text-lg mb-4">
              Call us immediately for same-day emergency appointments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open("tel:555-SAY-KIDS", "_self")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                (555) SAY-KIDS
              </Button>
              <Button
                onClick={() => (window.location.href = "/#contact")}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                Send Emergency Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Common Dental Emergencies */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Common Dental Emergencies
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Recognizing a dental emergency and knowing what to do can help
                  save your child's tooth and reduce pain and complications.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-l-4 border-l-red-500">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-8 w-8 text-red-500" />
                      <h3 className="text-xl font-bold">Knocked-Out Tooth</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      If a permanent tooth is knocked out, this is a true
                      emergency requiring immediate attention.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Find the tooth and rinse gently
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Try to place back in socket if possible
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Store in milk if can't reinsert
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Call us immediately for emergency care
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-dental-orange">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="h-8 w-8 text-dental-orange" />
                      <h3 className="text-xl font-bold">Severe Toothache</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Persistent, severe tooth pain that interferes with eating,
                      sleeping, or daily activities.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Rinse mouth with warm salt water
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Give age-appropriate pain medication
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Apply cold compress to outside of cheek
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Never apply heat or aspirin directly to tooth
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-dental-purple">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-dental-purple" />
                      <h3 className="text-xl font-bold">Dental Trauma</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Chipped, cracked, or fractured teeth from falls, sports
                      injuries, or accidents.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-dental-yellow mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Collect any broken tooth pieces
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-dental-yellow mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Rinse mouth with warm water
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-dental-yellow mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Control bleeding with gauze
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-dental-yellow mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Apply ice to reduce swelling
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-dental-blue">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="h-8 w-8 text-dental-blue" />
                      <h3 className="text-xl font-bold">Mouth Injury</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Cuts or injuries to lips, tongue, cheeks, or gums that
                      won't stop bleeding.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-dental-pink mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Clean area gently with water
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-dental-pink mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Apply pressure with clean cloth
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-dental-pink mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Use ice to control swelling
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-dental-pink mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Seek medical attention if bleeding persists
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-dental-green">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-8 w-8 text-dental-green" />
                      <h3 className="text-xl font-bold">Lost Filling/Crown</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      When a filling or crown falls out, the tooth becomes
                      vulnerable to damage and sensitivity.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Keep the crown if you can find it
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Avoid chewing on that side
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Use temporary dental cement if available
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Schedule appointment as soon as possible
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-dental-pink">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="h-8 w-8 text-dental-pink" />
                      <h3 className="text-xl font-bold">Swelling/Infection</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Facial swelling, especially around the jaw or cheek, may
                      indicate a serious infection.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Phone className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Call immediately - this can be serious
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-dental-blue mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Apply cold compress to reduce swelling
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="h-4 w-4 text-dental-green mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Give fever reducer if child has temperature
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-dental-orange mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          Do not delay treatment - seek care immediately
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* When to Seek Emergency Care */}
            <Card className="bg-gradient-to-r from-red-50 to-dental-orange/10 border-l-4 border-l-red-500">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    When to Seek Immediate Care
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Don't wait if your child experiences any of these serious
                    symptoms
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Severe Pain
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pain that prevents eating, sleeping, or normal activities
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Significant Bleeding
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Bleeding that won't stop after 15 minutes of pressure
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Facial Swelling
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Swelling of face, jaw, or neck area
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Fever with Toothache
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Signs of infection that could spread
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Knocked-Out Permanent Tooth
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Time is critical for saving the tooth
                    </p>
                  </div>
                  <div className="bg-white/80 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3 text-red-600">
                      Difficulty Swallowing
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      May indicate serious infection or injury
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Emergency Promise */}
            <Card className="bg-gradient-to-r from-dental-blue/10 to-dental-green/10">
              <CardContent className="p-12">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-dental-blue mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-6">
                    Our Emergency Promise
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    When your child is in pain, we're here for you. We
                    understand that dental emergencies are stressful for both
                    children and parents, and we're committed to providing
                    compassionate, prompt care when you need it most.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="bg-dental-blue/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Clock className="h-8 w-8 text-dental-blue" />
                      </div>
                      <h3 className="font-semibold mb-2">Same-Day Care</h3>
                      <p className="text-sm text-muted-foreground">
                        We do our best to see emergency patients the same day
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-green/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Phone className="h-8 w-8 text-dental-green" />
                      </div>
                      <h3 className="font-semibold mb-2">24/7 Response</h3>
                      <p className="text-sm text-muted-foreground">
                        After-hours emergency calls are returned promptly
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-yellow/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Heart className="h-8 w-8 text-dental-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">Compassionate Care</h3>
                      <p className="text-sm text-muted-foreground">
                        We understand your child's pain and fear
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={() => window.open("tel:555-SAY-KIDS", "_self")}
                      size="lg"
                      className="bg-red-600 hover:bg-red-700"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Emergency: (555) SAY-KIDS
                    </Button>
                    <Button
                      onClick={() => (window.location.href = "/#contact")}
                      size="lg"
                      variant="outline"
                      className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                    >
                      Contact Form
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
