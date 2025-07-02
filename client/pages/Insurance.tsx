import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Heart,
  CheckCircle,
  DollarSign,
  Users,
  Phone,
  FileText,
} from "lucide-react";

export default function Insurance() {
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
            Insurance &
            <span className="text-dental-blue block">Payment Options</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            At Say Cheese Kids Dental, we believe every child should have access
            to high-quality dental care. That's why we proudly accept a wide
            range of insurance plans and offer flexible payment solutions to
            make dental care as affordable and stress-free as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Dental Insurance Section */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="h-8 w-8 text-dental-blue" />
                      <h2 className="text-3xl font-bold">Dental Insurance</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      We are happy to accept Medi-Cal, Denti-Cal, and most PPO
                      dental insurance plans. If you don't see your plan listed,
                      feel free to contact us — we may still accept it!
                    </p>
                    <div className="flex gap-4">
                      <Button
                        onClick={() => (window.location.href = "/#contact")}
                        className="bg-dental-blue hover:bg-dental-blue/90"
                      >
                        Verify Benefits
                      </Button>
                      <Button
                        variant="outline"
                        className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Us
                      </Button>
                    </div>
                  </div>
                  <div className="bg-dental-blue/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="h-24 w-24 text-dental-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Most Plans Accepted
                      </h3>
                      <p className="text-muted-foreground">
                        We work with your insurance to maximize your benefits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PPO Insurance Plans */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  PPO Insurance Plans We Accept Include:
                </h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[
                    "Delta Dental",
                    "Cigna",
                    "MetLife",
                    "United Concordia",
                    "Guardian",
                    "Principal Financial",
                    "Humana",
                    "First Dental Health",
                    "United Healthcare",
                    "Anthem Blue Cross",
                    "Anthem Blue Shield",
                    "Aetna",
                    "Ameritas",
                    "GEHA / Connection Dental",
                    "Assurant / DHA",
                    "Careington",
                  ].map((plan) => (
                    <div
                      key={plan}
                      className="flex items-center gap-2 p-3 rounded-lg bg-dental-green/10 border border-dental-green/20"
                    >
                      <CheckCircle className="h-4 w-4 text-dental-green flex-shrink-0" />
                      <span className="font-medium text-sm">{plan}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    If you're unsure about your coverage, our friendly team is
                    here to help verify your benefits and answer any questions
                    you may have.
                  </p>
                  <Button
                    onClick={() => (window.location.href = "/#contact")}
                    variant="outline"
                    className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                  >
                    Contact Us About Your Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* No Insurance Section */}
            <Card className="bg-gradient-to-r from-dental-yellow/10 to-dental-orange/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-dental-yellow mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    No Insurance? No Problem.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We offer CareCredit, a flexible healthcare financing option
                    that allows you to pay for treatments over time with
                    convenient monthly payments. It's a great alternative if you
                    don't currently have dental insurance.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      className="bg-dental-yellow hover:bg-dental-yellow/90"
                      onClick={() =>
                        window.open("https://www.carecredit.com", "_blank")
                      }
                    >
                      Learn About CareCredit
                    </Button>
                    <Button
                      variant="outline"
                      className="border-dental-orange text-dental-orange hover:bg-dental-orange hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <Card>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <CreditCard className="h-16 w-16 text-dental-blue mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Payment Options</h2>
                  <p className="text-lg text-muted-foreground">
                    To make every visit as simple as possible, we accept
                    multiple forms of payment, including:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="border-2 border-dental-blue/20 hover:border-dental-blue/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <DollarSign className="h-12 w-12 text-dental-green mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Cash</h3>
                      <p className="text-sm text-muted-foreground">
                        Traditional payment method
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dental-blue/20 hover:border-dental-blue/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <CreditCard className="h-12 w-12 text-dental-blue mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Debit Cards</h3>
                      <p className="text-sm text-muted-foreground">
                        Direct bank account payment
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dental-blue/20 hover:border-dental-blue/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <CreditCard className="h-12 w-12 text-dental-purple mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Credit Cards</h3>
                      <p className="text-sm text-muted-foreground">
                        Visa, MasterCard, Discover, American Express
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-dental-blue/20 hover:border-dental-blue/40 transition-colors">
                    <CardContent className="p-6 text-center">
                      <Heart className="h-12 w-12 text-dental-pink mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">CareCredit</h3>
                      <p className="text-sm text-muted-foreground">
                        Flexible financing options
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Commitment Section */}
            <Card className="bg-gradient-to-r from-dental-green/10 to-dental-blue/10">
              <CardContent className="p-12">
                <div className="text-center">
                  <Users className="h-16 w-16 text-dental-green mx-auto mb-6" />
                  <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                    We're committed to working with your family to ensure your
                    child gets the care they need, without added financial
                    stress.
                  </p>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="bg-dental-blue/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Shield className="h-8 w-8 text-dental-blue" />
                      </div>
                      <h3 className="font-semibold mb-2">
                        Insurance Verification
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        We check your benefits before treatment
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-green/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <FileText className="h-8 w-8 text-dental-green" />
                      </div>
                      <h3 className="font-semibold mb-2">Treatment Plans</h3>
                      <p className="text-sm text-muted-foreground">
                        Clear cost estimates before we begin
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-dental-yellow/20 p-4 rounded-full w-fit mx-auto mb-3">
                        <Heart className="h-8 w-8 text-dental-yellow" />
                      </div>
                      <h3 className="font-semibold mb-2">Flexible Solutions</h3>
                      <p className="text-sm text-muted-foreground">
                        Payment plans that work for your budget
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={() => (window.location.href = "/#contact")}
                      size="lg"
                      className="bg-dental-blue hover:bg-dental-blue/90"
                    >
                      Schedule Consultation
                    </Button>
                    <Button
                      onClick={() => (window.location.href = "/")}
                      size="lg"
                      variant="outline"
                      className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                    >
                      Learn More About Us
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
