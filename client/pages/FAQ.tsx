import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MapPin, Clock, Star, Heart, Shield } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 pb-[18px] -mb-[3px]">
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
            Frequently Asked
            <span className="text-dental-blue block">Questions</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to common questions about pediatric dental care,
            orthodontics, and what to expect at Say Cheese Kids Dental.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => (window.location.href = "/#contact")}
              className="bg-dental-blue hover:bg-dental-blue/90"
            >
              Still Have Questions? Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Questions */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="h-8 w-8 text-dental-pink" />
                    <h2 className="text-2xl font-bold">General Questions</h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="item-1"
                      className="border border-dental-pink/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What age should my child first visit the dentist?
                      </AccordionTrigger>
                      <AccordionContent>
                        The American Academy of Pediatric Dentistry recommends
                        that children visit the dentist by age 1 or within 6
                        months of their first tooth appearing. Early visits help
                        establish good oral health habits and allow us to
                        monitor your child's dental development.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-2"
                      className="border border-dental-pink/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        How often should my child visit the dentist?
                      </AccordionTrigger>
                      <AccordionContent>
                        Most children should visit the dentist every 6 months
                        for routine cleanings and checkups. However, some
                        children may need more frequent visits based on their
                        individual oral health needs. We'll create a
                        personalized schedule for your child.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-3"
                      className="border border-dental-pink/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What should I expect during my child's first visit?
                      </AccordionTrigger>
                      <AccordionContent>
                        The first visit is usually shorter and focuses on
                        getting your child comfortable with our office. We'll do
                        a gentle examination, count teeth, and may do a simple
                        cleaning depending on your child's comfort level. We'll
                        also discuss home care and answer any questions you
                        have.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-4"
                      className="border border-dental-pink/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What insurance plans do you accept?
                      </AccordionTrigger>
                      <AccordionContent>
                        We accept most major dental insurance plans including
                        Delta Dental, MetLife, Cigna, Aetna, and many others. We
                        also accept Medi-Cal for qualifying patients. Please
                        call our office to verify your specific plan coverage.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="item-5"
                      className="border border-dental-pink/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        Do you offer payment plans or financing?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes! We offer flexible payment plans and work with
                        CareCredit for financing options. We believe cost should
                        never be a barrier to your child's dental health. Our
                        team will work with you to find a payment solution that
                        fits your budget.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Dental Care Questions */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="h-8 w-8 text-dental-blue" />
                    <h2 className="text-2xl font-bold">
                      Dental Care & Treatment
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="care-1"
                      className="border border-dental-blue/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        How can I help my child overcome dental anxiety?
                      </AccordionTrigger>
                      <AccordionContent>
                        We specialize in making dental visits fun and
                        stress-free! Our office is designed with kids in mind,
                        and our team is trained in child psychology. We use
                        positive reinforcement, explain procedures in
                        kid-friendly terms, and offer sedation options when
                        needed. You can help by staying positive about dental
                        visits and reading dental-themed books together.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="care-2"
                      className="border border-dental-blue/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        When do children start losing baby teeth?
                      </AccordionTrigger>
                      <AccordionContent>
                        Children typically start losing baby teeth around age 6,
                        beginning with the front teeth. The process continues
                        until about age 12-13. It's important to maintain good
                        oral hygiene even with loose teeth, and we can guide you
                        through this natural process.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="care-3"
                      className="border border-dental-blue/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        Are dental sealants necessary for children?
                      </AccordionTrigger>
                      <AccordionContent>
                        Dental sealants are highly recommended for children's
                        permanent molars. They provide excellent protection
                        against cavities in the deep grooves of back teeth where
                        brushing can't always reach effectively. Sealants can
                        prevent up to 80% of cavities in treated teeth.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="care-4"
                      className="border border-dental-blue/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What should I do if my child has a dental emergency?
                      </AccordionTrigger>
                      <AccordionContent>
                        Call our office immediately at (555) SAY-KIDS. For
                        knocked-out permanent teeth, try to place the tooth back
                        in the socket or store it in milk. For severe pain, you
                        can give age-appropriate pain medication. We offer
                        same-day emergency appointments and have an after-hours
                        emergency line.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="care-5"
                      className="border border-dental-blue/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        How do I care for my child's teeth at home?
                      </AccordionTrigger>
                      <AccordionContent>
                        Start cleaning your child's mouth even before teeth
                        appear. Once teeth emerge, brush twice daily with
                        fluoride toothpaste (rice-grain size for under 3,
                        pea-size for 3+). Begin flossing when teeth touch. Limit
                        sugary snacks and drinks, and encourage drinking water
                        throughout the day.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Orthodontics Questions */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-8 w-8 text-dental-yellow" />
                  <h2 className="text-2xl font-bold">Orthodontics & Braces</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="ortho-1"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        When should my child see an orthodontist?
                      </AccordionTrigger>
                      <AccordionContent>
                        The American Association of Orthodontists recommends
                        children have their first orthodontic evaluation by age
                        7. Early evaluation allows us to spot problems before
                        they become more serious and may make treatment easier.
                        We offer free orthodontic consultations!
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="ortho-2"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What's the difference between Phase 1 and Phase 2
                        treatment?
                      </AccordionTrigger>
                      <AccordionContent>
                        Phase 1 (early treatment) occurs while children still
                        have baby teeth, usually ages 7-10, and addresses
                        serious problems like crossbites or severe crowding.
                        Phase 2 treatment happens after permanent teeth emerge,
                        typically ages 11-13, and focuses on final tooth
                        alignment.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="ortho-3"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        How long does orthodontic treatment take?
                      </AccordionTrigger>
                      <AccordionContent>
                        Treatment time varies based on the complexity of the
                        case, but typically ranges from 12-24 months. Factors
                        that affect treatment time include age, severity of the
                        problem, patient compliance, and the type of appliance
                        used. We'll give you a personalized timeline during your
                        consultation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem
                      value="ortho-4"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        Do braces hurt?
                      </AccordionTrigger>
                      <AccordionContent>
                        Getting braces doesn't hurt, but teeth may feel sore for
                        a few days after getting braces or after adjustments.
                        This is normal and means the teeth are moving!
                        Over-the-counter pain relievers and soft foods can help.
                        Any discomfort is temporary and manageable.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="ortho-5"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        What are the different types of braces available?
                      </AccordionTrigger>
                      <AccordionContent>
                        We offer traditional metal braces, clear ceramic braces,
                        and clear aligners (like Invisalign Teen). Each option
                        has benefits depending on your child's age, lifestyle,
                        and treatment needs. We'll discuss all options during
                        your consultation to find the best fit.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                      value="ortho-6"
                      className="border border-dental-yellow/20 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left">
                        Can my child play sports with braces?
                      </AccordionTrigger>
                      <AccordionContent>
                        Absolutely! We recommend wearing a mouthguard during
                        sports activities to protect the braces and teeth. We
                        can provide custom mouthguards designed specifically for
                        braces. Most activities can continue normally with
                        proper protection.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-dental-blue/10 to-dental-green/10">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Our friendly team is here to help! Contact us with any
                  questions about your child's dental care.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-dental-blue" />
                    <span className="font-semibold">(555) SAY-KIDS</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-5 w-5 text-dental-green" />
                    <span className="font-semibold">
                      12413 Central Ave, Chino, CA
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="h-5 w-5 text-dental-yellow" />
                    <span className="font-semibold">Mon-Fri: 8AM-5PM</span>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
