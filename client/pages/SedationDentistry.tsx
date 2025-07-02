import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Users,
  Smile,
  Award,
} from "lucide-react";

export default function SedationDentistry() {
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
                Sedation
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
      <section className="py-20 bg-gradient-to-br from-dental-pink/10 via-dental-purple/10 to-dental-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Sedation Dentistry
            <span className="text-dental-pink block">for Kids</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Making dental visits comfortable and stress-free for anxious
            children. Our safe, child-friendly sedation options help your child
            relax and receive the care they need in a positive environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => (window.location.href = "/#contact")}
              size="lg"
              className="bg-dental-pink hover:bg-dental-pink/90"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dental-purple text-dental-purple hover:bg-dental-purple hover:text-white"
            >
              Learn About Options
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Why Sedation Dentistry */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Heart className="h-8 w-8 text-dental-pink" />
                      <h2 className="text-3xl font-bold">
                        Why Choose Sedation Dentistry?
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      We understand that dental visits can be stressful for
                      children, especially if they're anxious or require more
                      complex procedures. Sedation dentistry helps create a
                      calm, comfortable experience that builds positive
                      associations with dental care.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Reduces anxiety and fear</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Helps children stay still during treatment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Allows for more comprehensive care</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Creates positive dental experiences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-dental-green" />
                        <span>Safe and monitored by trained professionals</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-dental-pink/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Smile className="h-24 w-24 text-dental-pink mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Comfortable Care
                      </h3>
                      <p className="text-muted-foreground">
                        Helping anxious children receive necessary dental
                        treatment in a relaxed state
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sedation Options */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Safe Sedation Options
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer different levels of sedation tailored to each child's
                  individual needs, anxiety level, and the complexity of their
                  treatment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="h-8 w-8 text-dental-yellow" />
                      <h3 className="text-xl font-bold">
                        Nitrous Oxide (Laughing Gas)
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The most common and mildest form of sedation. Nitrous
                      oxide helps children relax while staying fully awake and
                      responsive. It has a pleasant scent and wears off quickly
                      after treatment.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Child remains awake</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Wears off quickly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">No needles required</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Pleasant scent</span>
                      </div>
                    </div>
                    <div className="bg-dental-yellow/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-dental-yellow">
                        Perfect for: Mild anxiety, routine procedures
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-8 w-8 text-dental-blue" />
                      <h3 className="text-xl font-bold">Oral Sedation</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      A mild sedative medication taken by mouth before the
                      appointment. This helps children feel drowsy and relaxed
                      while still being able to respond to instructions.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Deeper relaxation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Child may sleep</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Still responsive</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Given as liquid or pill</span>
                      </div>
                    </div>
                    <div className="bg-dental-blue/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-dental-blue">
                        Perfect for: Moderate anxiety, longer procedures
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="h-8 w-8 text-dental-purple" />
                      <h3 className="text-xl font-bold">IV Sedation</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The deepest level of sedation we offer, administered
                      intravenously by trained professionals. Used for very
                      anxious children or extensive dental work.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">
                          Deepest level of sedation
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Closely monitored</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">For extensive work</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-dental-green" />
                        <span className="text-sm">Specialist administered</span>
                      </div>
                    </div>
                    <div className="bg-dental-purple/10 p-4 rounded-lg">
                      <p className="text-sm font-semibold text-dental-purple">
                        Perfect for: High anxiety, complex procedures
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Safety & Monitoring */}
            <Card className="bg-gradient-to-r from-dental-green/10 to-dental-blue/10">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <Shield className="h-16 w-16 text-dental-green mx-auto mb-4" />
                  <h2 className="text-3xl font-bold mb-4">
                    Safety is Our Top Priority
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our sedation protocols follow strict safety guidelines. Dr.
                    Kohan and our team are specially trained in pediatric
                    sedation and continuously monitor your child throughout the
                    entire procedure.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="bg-dental-blue/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Users className="h-8 w-8 text-dental-blue" />
                    </div>
                    <h3 className="font-semibold mb-2">Trained Staff</h3>
                    <p className="text-sm text-muted-foreground">
                      All team members are certified in pediatric sedation
                      protocols
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-green/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Heart className="h-8 w-8 text-dental-green" />
                    </div>
                    <h3 className="font-semibold mb-2">
                      Continuous Monitoring
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vital signs monitored throughout the entire procedure
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-yellow/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Clock className="h-8 w-8 text-dental-yellow" />
                    </div>
                    <h3 className="font-semibold mb-2">Quick Recovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Most children recover quickly with minimal side effects
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-dental-pink/20 p-4 rounded-full w-fit mx-auto mb-3">
                      <Award className="h-8 w-8 text-dental-pink" />
                    </div>
                    <h3 className="font-semibold mb-2">Accredited Facility</h3>
                    <p className="text-sm text-muted-foreground">
                      Our facility meets all safety standards and regulations
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold mb-3 text-dental-blue">
                    Pre-Sedation Guidelines:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <p>• Follow fasting instructions carefully</p>
                      <p>• Arrive on time for your appointment</p>
                      <p>• Bring a comfort item for your child</p>
                    </div>
                    <div className="space-y-2">
                      <p>• Wear comfortable, loose clothing</p>
                      <p>• Plan for recovery time after treatment</p>
                      <p>• Have questions ready for our team</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => (window.location.href = "/#contact")}
                    size="lg"
                    className="bg-dental-green hover:bg-dental-green/90"
                  >
                    Discuss Sedation Options
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">
                  Sedation Dentistry FAQs
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        Is sedation dentistry safe for children?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, when administered by trained professionals
                        following strict protocols. We continuously monitor your
                        child's vital signs and use age-appropriate dosages.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        Will my child remember the procedure?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        With nitrous oxide, children usually remember the visit
                        but feel relaxed. With deeper sedation, they may have
                        little to no memory of the procedure.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        How long does sedation last?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Nitrous oxide wears off within minutes. Oral sedation
                        may last several hours. We'll provide specific recovery
                        instructions based on the type used.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        What are the side effects?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Side effects are rare and usually mild, such as slight
                        drowsiness or nausea. Most children feel completely
                        normal within a few hours.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        Can I stay with my child?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, parents are welcome to stay during most sedation
                        procedures. Your presence can provide additional comfort
                        and reassurance.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-dental-pink">
                        Do you still get a prize?
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Absolutely! Every child still gets to pick a prize from
                        our treasure box after their visit, sedation or not!
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
