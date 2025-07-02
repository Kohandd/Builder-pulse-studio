import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smile,
  Shield,
  Heart,
  Clock,
  Award,
  Users,
  CheckCircle,
  Star,
  Sparkles,
} from "lucide-react";

export default function Services() {
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
              <a href="#" className="text-dental-blue font-semibold">
                Services
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
            Our Comprehensive
            <span className="text-dental-blue block">Dental Services</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From your child's first visit to specialized treatments, we provide
            complete dental care in a fun, comfortable environment designed just
            for kids.
          </p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Comprehensive Oral Exam */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Heart className="h-8 w-8 text-dental-pink" />
                      <h2 className="text-3xl font-bold">
                        Comprehensive Oral Exam
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Your child's first visit at Say Cheese Kids Dental is all
                      about creating a positive, stress-free introduction to
                      dental care. During this initial appointment, our skilled
                      pediatric dental team performs a thorough oral
                      examination, takes necessary X-rays, and provides a gentle
                      cleaning.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Our dentists look beyond just cavities—they assess gum
                      health, jaw alignment, missing or extra teeth, bite
                      issues, and other early signs that may affect future
                      dental development. We also talk with parents about habits
                      that may impact oral health, such as thumb sucking or diet
                      choices, and offer guidance on proper nutrition.
                    </p>
                    <p className="text-muted-foreground font-semibold text-dental-blue">
                      Our number one goal is to help your child feel safe, calm,
                      and happy to visit the dentist.
                    </p>
                  </div>
                  <div className="bg-dental-pink/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-24 w-24 text-dental-pink mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        First Visit Special
                      </h3>
                      <p className="text-muted-foreground">
                        Creating positive associations with dental care from day
                        one
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dental Cleanings */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-dental-blue/10 p-8 flex items-center justify-center order-2 lg:order-1">
                    <div className="text-center">
                      <Sparkles className="h-24 w-24 text-dental-blue mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        Fun Flavors Available
                      </h3>
                      <p className="text-muted-foreground">
                        Kids can choose their favorite polishing paste flavor
                      </p>
                    </div>
                  </div>
                  <div className="p-8 order-1 lg:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="h-8 w-8 text-dental-blue" />
                      <h2 className="text-3xl font-bold">Dental Cleanings</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Regular professional cleanings are key to keeping your
                      child's smile healthy. Plaque builds up daily from
                      leftover food and bacteria, and if not removed, it hardens
                      into tartar that can cause gum disease, bad breath, and
                      even lead to infection or tooth loss.
                    </p>
                    <p className="text-muted-foreground">
                      At Say Cheese Kids Dental, our friendly hygienists use
                      gentle techniques and advanced tools to remove plaque and
                      tartar from all areas of the mouth. We also make cleanings
                      fun—kids can choose their favorite flavor of polishing
                      paste from a wide selection, and our patient team makes
                      sure every child feels at ease during the visit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Dental Sealants */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-dental-green" />
                    <h2 className="text-2xl font-bold">Dental Sealants</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Sealants are a quick and painless way to help prevent
                    cavities on your child's back teeth. This thin, protective
                    coating is applied to the grooves of molars, sealing out
                    bacteria and food particles.
                  </p>
                  <p className="text-muted-foreground">
                    Sealants can last for years and are often covered by dental
                    insurance. They're a simple but powerful step in protecting
                    your child's smile long-term.
                  </p>
                </CardContent>
              </Card>

              {/* Tooth-Colored Fillings */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Smile className="h-8 w-8 text-dental-yellow" />
                    <h2 className="text-2xl font-bold">
                      Tooth-Colored Fillings
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Even with great brushing, cavities can still happen. In the
                    early stages, some may reverse with good oral hygiene. But
                    if a cavity progresses, we may recommend a filling.
                  </p>
                  <p className="text-muted-foreground">
                    We use natural-looking composite (white) fillings that blend
                    beautifully with your child's tooth. Our compassionate
                    dental team takes time to explain every step and keeps your
                    child relaxed throughout the process.
                  </p>
                </CardContent>
              </Card>

              {/* Crowns & Pulpotomies */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-8 w-8 text-dental-purple" />
                    <h2 className="text-2xl font-bold">Crowns & Pulpotomies</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    When a cavity gets too large for a filling or reaches the
                    nerve of the tooth, a baby root canal (pulpotomy) followed
                    by a crown may be needed.
                  </p>
                  <p className="text-muted-foreground">
                    Our crowns are durable and designed to restore the tooth
                    while keeping your child comfortable. Parents are welcome in
                    the room during treatment—we believe in partnering with you
                    to make every step reassuring and positive for your child.
                  </p>
                </CardContent>
              </Card>

              {/* Sedation Dentistry */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-8 w-8 text-dental-pink" />
                    <h2 className="text-2xl font-bold">Sedation Dentistry</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We understand that dental visits can be stressful for
                    children, especially if they're anxious or require more
                    complex procedures. That's why we offer safe, child-friendly
                    sedation options tailored to each child's individual needs.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Nitrous oxide, also known as laughing gas, is a mild and
                    commonly used sedative that helps kids relax while staying
                    fully awake. It has a pleasant scent, wears off quickly
                    after the visit, and makes the experience much smoother for
                    everyone.
                  </p>
                  <p className="text-muted-foreground">
                    Our caring team will work closely with you to choose the
                    best option, always putting your child's comfort and safety
                    first. And don't worry—they still get to pick a prize from
                    our famous toy wall after every visit!
                  </p>
                </CardContent>
              </Card>

              {/* Emergency Dental Care */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-8 w-8 text-dental-orange" />
                    <h2 className="text-2xl font-bold">
                      Emergency Dental Care
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Toothaches and accidents don't wait for convenient times—
                    that's why we treat dental emergencies with urgency. If your
                    child is in pain or has suffered a dental injury, we do our
                    best to offer same-day appointments.
                  </p>
                  <p className="text-muted-foreground">
                    For after-hours concerns, we respond quickly to messages
                    sent through our website's contact form. You can count on us
                    to provide prompt, compassionate care when it's needed most.
                  </p>
                </CardContent>
              </Card>

              {/* Special Needs Care */}
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-8 w-8 text-dental-blue" />
                    <h2 className="text-2xl font-bold">
                      Care for Children with Special Needs
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Every child deserves quality dental care in a setting where
                    they feel safe and understood. At Say Cheese Kids Dental, we
                    welcome children of all abilities, including those with
                    special needs.
                  </p>
                  <p className="text-muted-foreground">
                    We've designed our office with private rooms and calming
                    accommodations to help your child feel at ease. Our
                    experienced and patient team is trained to work with a
                    variety of unique needs, and we're here to support you every
                    step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us Section */}
            <Card className="bg-gradient-to-r from-dental-green/10 to-dental-blue/10">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Why Families Choose Us
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    At Say Cheese Kids Dental & Orthodontics, we're more than
                    just a dental office—we're your partner in your child's
                    lifelong oral health journey. From routine exams to more
                    involved treatments, we provide compassionate, high-quality
                    care in a warm and welcoming environment.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-green" />
                    <span>
                      Sedation options (including nitrous oxide/laughing gas)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-yellow" />
                    <span>Toys, prizes, and a fun atmosphere</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-blue" />
                    <span>Flexible payment options</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-pink" />
                    <span>PPO insurance and Medi-Cal accepted</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-purple" />
                    <span>
                      A strong emphasis on parent involvement during
                      appointments
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-dental-orange" />
                    <span>Same-day emergency appointments available</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl font-semibold text-dental-blue mb-6">
                    Let us turn your child's dental visit into something to
                    smile about!
                  </p>
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
