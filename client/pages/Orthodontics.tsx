import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smile,
  Star,
  Clock,
  Shield,
  CheckCircle,
  Award,
  Heart,
  Users,
} from "lucide-react";

export default function Orthodontics() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8 pb-[26px] -mb-[4px]">
            <div className="flex items-center gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2Fcc9196d4a3ee480c97bce67e08951f07?format=webp&width=800"
                alt="Say Cheese Kids Dental Logo"
                className="h-20 w-auto"
              />
              <div className="text-3xl font-bold">
                <span className="text-dental-yellow">Say Cheese</span>
                <span className="text-dental-blue ml-2">Kids Dental</span>
                <div className="text-base font-normal text-dental-green">
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
                Orthodontics
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
      <section className="py-20 bg-gradient-to-br from-dental-blue/10 via-dental-green/10 to-dental-yellow/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Orthodontics for
            <span className="text-dental-blue block">Kids & Teens</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creating beautiful, healthy smiles through early intervention and
            comprehensive orthodontic care. From traditional braces to clear
            aligners, we offer solutions for every child.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => (window.location.href = "/#contact")}
              size="lg"
              className="bg-dental-blue hover:bg-dental-blue/90"
            >
              Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dental-yellow text-dental-yellow hover:bg-dental-yellow hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Why Choose Orthodontics */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Star className="h-8 w-8 text-dental-yellow" />
                      <h2 className="text-3xl font-bold">
                        Why Choose Orthodontic Treatment?
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      Orthodontic treatment does more than create beautiful
                      smiles. It improves oral health, boosts self-confidence,
                      and can prevent future dental problems. Early intervention
                      often leads to shorter treatment times and better results.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Improved oral hygiene and health</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Enhanced self-esteem and confidence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Better chewing and speaking function</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Prevention of future dental complications</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dental-yellow/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Smile className="h-24 w-24 text-dental-yellow mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Beautiful Results
                      </h3>
                      <p className="text-muted-foreground">
                        Straightened teeth and improved bite function for
                        lifelong benefits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Options */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Orthodontic Treatment Options
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer a variety of orthodontic solutions to meet each
                  child's unique needs, lifestyle, and preferences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-dental-blue" />
                      <h3 className="text-xl font-bold">Traditional Braces</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Metal braces are the most common and effective treatment
                      for complex orthodontic issues. Modern braces are smaller,
                      more comfortable, and more efficient than ever before.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">
                          Most cost-effective option
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">
                          Treats complex alignment issues
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Colorful band options</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="h-8 w-8 text-dental-pink" />
                      <h3 className="text-xl font-bold">Clear Braces</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Ceramic braces work just like traditional braces but use
                      clear or tooth-colored brackets that blend with your
                      child's natural tooth color for a more discreet
                      appearance.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">
                          Less noticeable appearance
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">
                          Same effectiveness as metal
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Great for teens</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-dental-pink text-dental-pink hover:bg-dental-pink hover:text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="h-8 w-8 text-dental-purple" />
                      <h3 className="text-xl font-bold">Clear Aligners</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Clear, removable aligners (like Invisalign Teen) offer a
                      nearly invisible way to straighten teeth. Perfect for
                      responsible teens who want discretion.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Nearly invisible</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Removable for eating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Easier oral hygiene</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-dental-purple text-dental-purple hover:bg-dental-purple hover:text-white"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Early Treatment */}
            <Card className="bg-gradient-to-r from-dental-green/10 to-dental-blue/10">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Clock className="h-16 w-16 text-dental-green mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    Early Orthodontic Treatment (Phase 1)
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The American Association of Orthodontists recommends that
                    children have their first orthodontic evaluation by age 7.
                    Early treatment can prevent more serious problems and may
                    make future treatment shorter and less complicated.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-dental-blue/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Users className="h-8 w-8 text-dental-blue" />
                    </div>
                    <h3 className="font-semibold mb-2">Ages 7-10</h3>
                    <p className="text-sm text-muted-foreground">
                      Early intervention while jaw is still growing
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-green/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Shield className="h-8 w-8 text-dental-green" />
                    </div>
                    <h3 className="font-semibold mb-2">Prevention</h3>
                    <p className="text-sm text-muted-foreground">
                      Prevents more serious problems from developing
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-yellow/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Clock className="h-8 w-8 text-dental-yellow" />
                    </div>
                    <h3 className="font-semibold mb-2">Shorter Treatment</h3>
                    <p className="text-sm text-muted-foreground">
                      May reduce overall treatment time later
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-pink/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Heart className="h-8 w-8 text-dental-pink" />
                    </div>
                    <h3 className="font-semibold mb-2">Better Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Improved outcomes with early intervention
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => (window.location.href = "/#contact")}
                    size="lg"
                    className="bg-dental-green hover:bg-dental-green/90"
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Frequently Asked Orthodontic Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        How long does treatment take?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Treatment time varies but typically ranges from 12-24
                        months depending on the complexity of the case and
                        patient compliance.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        Do braces hurt?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Getting braces doesn't hurt, but teeth may feel sore for
                        a few days after placement or adjustments. This is
                        normal and temporary.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        Can my child play sports?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes! We recommend a protective mouthguard during sports
                        activities. We can provide custom guards designed for
                        braces.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        How often are appointments?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Most patients visit every 6-8 weeks for adjustments and
                        progress monitoring. Appointments typically last 30-45
                        minutes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        What about oral hygiene?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Good oral hygiene is crucial during treatment. We'll
                        teach proper brushing and flossing techniques and may
                        recommend special tools.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-blue">
                        Is treatment covered by insurance?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Many insurance plans cover orthodontic treatment. We'll
                        help verify your benefits and work with your insurance
                        company.
                      </p>
                    </div>
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
