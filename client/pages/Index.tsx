import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Heart,
  Shield,
  Smile,
  Award,
  Users,
  CheckCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="container mx-auto px-4">
          {/* Top bar with contact info */}
          <div className="flex justify-between items-center py-2 text-sm border-b">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 text-dental-blue" />
                <span>(555) SAY-KIDS</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-dental-green" />
                <span>123 Happy Street, Smile City, CA 90210</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-dental-yellow hover:bg-dental-yellow/90 text-white"
              >
                Book Online
              </Button>
              <div className="flex gap-2">
                <Instagram className="h-4 w-4 text-dental-pink hover:scale-110 transition-transform cursor-pointer" />
                <Facebook className="h-4 w-4 text-dental-blue hover:scale-110 transition-transform cursor-pointer" />
                <Twitter className="h-4 w-4 text-dental-blue hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Main navigation */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
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
                href="/services"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                About Us
              </a>
              <a
                href="#reviews"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-dental-blue transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dental-blue/10 via-dental-green/10 to-dental-yellow/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Making Smiles
                <span className="text-dental-yellow block">Brighter</span>
                <span className="text-dental-blue">Every Day!</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive children's dentistry and orthodontics in a fun,
                comfortable environment. We make dental visits something kids
                actually look forward to!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-dental-green">
                  <CheckCircle className="h-5 w-5" />
                  <span>Most Insurance Accepted</span>
                </div>
                <div className="flex items-center gap-2 text-dental-blue">
                  <CheckCircle className="h-5 w-5" />
                  <span>Free Orthodontic Consultations</span>
                </div>
                <div className="flex items-center gap-2 text-dental-yellow">
                  <CheckCircle className="h-5 w-5" />
                  <span>Same-Day Appointments</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-dental-yellow text-dental-yellow"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  5.0 Stars (847 Reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-dental-blue hover:bg-dental-blue/90"
                >
                  Schedule Visit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                >
                  Virtual Tour
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-dental-yellow/20 border-dental-yellow">
                  <CardContent className="p-6">
                    <Smile className="h-8 w-8 text-dental-yellow mb-3" />
                    <h3 className="font-semibold mb-2">Pediatric Dentistry</h3>
                    <p className="text-sm text-muted-foreground">
                      Fun, gentle care for kids of all ages
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-dental-blue/20 border-dental-blue">
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 text-dental-blue mb-3" />
                    <h3 className="font-semibold mb-2">Orthodontics</h3>
                    <p className="text-sm text-muted-foreground">
                      Braces and clear aligners for perfect smiles
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-dental-green/20 border-dental-green">
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 text-dental-green mb-3" />
                    <h3 className="font-semibold mb-2">Preventive Care</h3>
                    <p className="text-sm text-muted-foreground">
                      Cleanings, fluoride, and sealants
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-dental-pink/20 border-dental-pink">
                  <CardContent className="p-6">
                    <Award className="h-8 w-8 text-dental-pink mb-3" />
                    <h3 className="font-semibold mb-2">Gentle Sedation</h3>
                    <p className="text-sm text-muted-foreground">
                      Comfortable options for anxious kids
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-dental-green/5 to-dental-blue/5"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                We Make Dental Visits
                <span className="text-dental-yellow block">
                  Fun & Stress-Free!
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                "At Say Cheese Kids Dental & Orthodontics, our mission is to
                create positive, lifelong associations with dental care. Our
                kid-loving staff provides excellent care in a comfortable,
                engaging environment that makes children excited to visit!"
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <em>- Dr. Sarah Martinez, Pediatric Dentist</em>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-dental-green hover:bg-dental-green/90">
                  Meet Our Team
                </Button>
                <Button
                  variant="outline"
                  className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                >
                  First Visit Guide
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-dental-yellow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-dental-yellow" />
                    <h3 className="font-semibold">Expert Team</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Board-certified pediatric dentists and orthodontists who
                    specialize in children's care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-blue">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Smile className="h-6 w-6 text-dental-blue" />
                    <h3 className="font-semibold">Kid-Friendly Environment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Colorful, interactive spaces designed to make kids feel
                    comfortable and excited about dental care.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-green">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-dental-green" />
                    <h3 className="font-semibold">Advanced Technology</h3>
                  </div>
                  <p className="text-muted-foreground">
                    State-of-the-art equipment and techniques for safer, more
                    comfortable treatments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Comprehensive Care for
              <span className="text-dental-blue block">Growing Smiles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From first teeth to teenage years, we provide complete dental and
              orthodontic care tailored specifically for children and
              adolescents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-yellow/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-yellow/30 transition-colors">
                  <Smile className="h-8 w-8 text-dental-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Pediatric Dentistry
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive dental care including cleanings, fillings,
                  crowns, and preventive treatments designed specifically for
                  children.
                </p>
                <Button
                  variant="link"
                  className="text-dental-yellow p-0 h-auto"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-blue/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-blue/30 transition-colors">
                  <Shield className="h-8 w-8 text-dental-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Orthodontics</h3>
                <p className="text-muted-foreground mb-4">
                  Traditional braces, clear aligners, and early intervention
                  treatments to create beautiful, healthy smiles.
                </p>
                <Button variant="link" className="text-dental-blue p-0 h-auto">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-green/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-green/30 transition-colors">
                  <Heart className="h-8 w-8 text-dental-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Preventive Care</h3>
                <p className="text-muted-foreground mb-4">
                  Regular checkups, fluoride treatments, sealants, and education
                  to prevent dental problems before they start.
                </p>
                <Button variant="link" className="text-dental-green p-0 h-auto">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-pink/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-pink/30 transition-colors">
                  <Clock className="h-8 w-8 text-dental-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emergency Care</h3>
                <p className="text-muted-foreground mb-4">
                  Same-day emergency appointments for dental injuries,
                  toothaches, and urgent dental needs.
                </p>
                <Button variant="link" className="text-dental-pink p-0 h-auto">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-purple/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-purple/30 transition-colors">
                  <Award className="h-8 w-8 text-dental-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sedation Options</h3>
                <p className="text-muted-foreground mb-4">
                  Nitrous oxide (laughing gas) and other safe sedation options
                  for anxious or special needs children.
                </p>
                <Button
                  variant="link"
                  className="text-dental-purple p-0 h-auto"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="bg-dental-orange/20 p-3 rounded-full w-fit mb-4 group-hover:bg-dental-orange/30 transition-colors">
                  <Users className="h-8 w-8 text-dental-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Special Needs Care
                </h3>
                <p className="text-muted-foreground mb-4">
                  Specialized care and accommodations for children with
                  developmental, medical, or behavioral special needs.
                </p>
                <Button
                  variant="link"
                  className="text-dental-orange p-0 h-auto"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="reviews"
        className="py-20 bg-gradient-to-br from-dental-pink/5 via-dental-purple/5 to-dental-blue/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What Families Are
              <span className="text-dental-pink block">Saying About Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-dental-yellow text-dental-yellow"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Amazing experience! My daughter was so nervous about her
                  first visit, but the staff made her feel so comfortable. She's
                  actually excited for her next appointment!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-muted-foreground">
                    Parent of Emma, age 6
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-dental-yellow text-dental-yellow"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Dr. Martinez and her team are incredible. They made my son's
                  orthodontic treatment so easy and stress-free. His smile looks
                  amazing now!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-muted-foreground">
                    Parent of Alex, age 12
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-dental-yellow text-dental-yellow"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best pediatric dental practice in the area! The office is so
                  fun and colorful, and they really know how to work with kids.
                  Highly recommend!"
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Lisa Rodriguez</div>
                  <div className="text-muted-foreground">
                    Parent of twins, age 8
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Child's
              <span className="text-dental-blue block">Dental Journey?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule your child's appointment today and see why families love
              Say Cheese Kids Dental!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-dental-blue" />
                      <div>
                        <div className="font-semibold">(555) SAY-KIDS</div>
                        <div className="text-sm text-muted-foreground">
                          Call or text anytime
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-dental-green" />
                      <div>
                        <div className="font-semibold">123 Happy Street</div>
                        <div className="text-sm text-muted-foreground">
                          Smile City, CA 90210
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-dental-yellow" />
                      <div>
                        <div className="font-semibold">Office Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 8:00 AM - 2:00 PM
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-dental-blue hover:bg-dental-blue/90"
                    >
                      Schedule Online
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-dental-green text-dental-green hover:bg-dental-green hover:text-white"
                    >
                      Call (555) SAY-KIDS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    New Patient Specials
                  </h3>

                  <div className="space-y-6">
                    <div className="border border-dental-yellow rounded-lg p-4 bg-dental-yellow/5">
                      <h4 className="font-semibold text-dental-yellow mb-2">
                        First Visit Special
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive exam, cleaning, and fluoride treatment for
                        just $99 (regularly $200)
                      </p>
                    </div>

                    <div className="border border-dental-blue rounded-lg p-4 bg-dental-blue/5">
                      <h4 className="font-semibold text-dental-blue mb-2">
                        Free Orthodontic Consultation
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Complete orthodontic evaluation and treatment planning
                        at no charge
                      </p>
                    </div>

                    <div className="border border-dental-green rounded-lg p-4 bg-dental-green/5">
                      <h4 className="font-semibold text-dental-green mb-2">
                        Insurance Welcome
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We accept most insurance plans and offer flexible
                        payment options
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-muted-foreground">
                    *New patients only. Cannot be combined with other offers.
                    Some restrictions apply.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-dental-yellow">Say Cheese</span>
                <span className="text-dental-blue ml-2">Kids Dental</span>
                <div className="text-sm font-normal text-dental-green">
                  & Orthodontics
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Creating happy, healthy smiles for children and families in our
                community.
              </p>
              <div className="flex gap-3">
                <Instagram className="h-5 w-5 text-dental-pink hover:scale-110 transition-transform cursor-pointer" />
                <Facebook className="h-5 w-5 text-dental-blue hover:scale-110 transition-transform cursor-pointer" />
                <Twitter className="h-5 w-5 text-dental-blue hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-400">
                <div>Pediatric Dentistry</div>
                <div>Orthodontics</div>
                <div>Preventive Care</div>
                <div>Emergency Care</div>
                <div>Sedation Dentistry</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>New Patients</div>
                <div>Insurance</div>
                <div>Patient Forms</div>
                <div>Contact</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div>
                  <div className="font-semibold text-white">(555) SAY-KIDS</div>
                  <div className="text-sm">Call or text anytime</div>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    123 Happy Street
                  </div>
                  <div className="text-sm">Smile City, CA 90210</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Office Hours</div>
                  <div className="text-sm">
                    Mon-Fri: 8AM-5PM
                    <br />
                    Sat: 8AM-2PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Say Cheese Kids Dental & Orthodontics. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
