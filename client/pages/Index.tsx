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
                <span>(909) 479-6030</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-dental-green" />
                <span>12413 Central Ave, Chino, CA 91710</span>
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
                  5.0 Stars&nbsp;
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
              <div className="flex justify-center mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2F872a2028b3794e81942fb2b1d989434b?format=webp&width=800"
                  alt="Say Cheese Kids Dental - Fun Logo"
                  className="w-64 h-auto"
                />
              </div>
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
                Meet Dr. Joshua Kohan
                <span className="text-dental-yellow block">
                  Your Child's Dental Hero!
                </span>
              </h2>

              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2Fe66ef7bcfcf04553a346cbe484ecc415?format=webp&width=800"
                  alt="Dr. Joshua Kohan - Pediatric Dentist"
                  className="w-48 h-48 rounded-lg object-cover shadow-lg mb-6 lg:hidden"
                />
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                "Dr. Joshua Kohan offers a warm, relatable, and highly
                personalized approach to pediatric dentistry. A California
                native, Dr. Kohan earned his undergraduate degree from the
                esteemed University of California, Los Angeles (UCLA) before
                obtaining his Doctor of Dental Medicine (D.M.D.) degree at Nova
                Southeastern University College of Dental Medicine, where he
                graduated among the top of his class."
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                "With over five years of experience as a lead dentist in a
                prominent pediatric dental clinic, Dr. Kohan has delivered
                compassionate, high-quality dental care to thousands of young
                patients. His own experiences as a father of two young children
                enable him to connect deeply with kids—he understands their
                interests, favorite movies, shows, and characters, allowing him
                to build genuine rapport and trust with each patient."
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                <em>
                  "My philosophy centers around creating enjoyable dental
                  experiences, reducing anxiety, and building a positive
                  foundation for lifelong oral health. I want to make dental
                  visits comfortable, fun, and stress-free for every child."
                </em>
                <br />
                <strong className="text-dental-blue">
                  - Dr. Joshua Kohan, D.M.D.
                </strong>
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-dental-green hover:bg-dental-green/90">
                  Schedule with Dr. Kohan
                </Button>
                <Button
                  variant="outline"
                  className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                >
                  First Visit Guide
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2Fe66ef7bcfcf04553a346cbe484ecc415?format=webp&width=800"
                  alt="Dr. Joshua Kohan - Pediatric Dentist"
                  className="w-full max-w-md rounded-lg object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-dental-yellow/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dental-blue">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-6 rounded-lg shadow-lg border border-dental-green/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-dental-green">
                      1000s
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:hidden">
              <Card className="border-l-4 border-l-dental-yellow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-6 w-6 text-dental-yellow" />
                    <h3 className="font-semibold">UCLA Graduate</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Dr. Kohan earned his undergraduate degree from UCLA and
                    graduated among the top of his class from Nova Southeastern
                    University.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-blue">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="h-6 w-6 text-dental-blue" />
                    <h3 className="font-semibold">Father & Kid Expert</h3>
                  </div>
                  <p className="text-muted-foreground">
                    As a father of two, Dr. Kohan understands children's
                    interests, favorite characters, and how to build genuine
                    trust and rapport.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-green">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-dental-green" />
                    <h3 className="font-semibold">Continuous Learning</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Committed to staying at the forefront of dentistry by
                    studying the latest advancements and technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-dental-pink">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-dental-pink" />
                    <h3 className="font-semibold">Active Lifestyle</h3>
                  </div>
                  <p className="text-muted-foreground">
                    When not at the clinic, Dr. Kohan enjoys family time,
                    basketball, snowboarding, and maintaining an active, healthy
                    lifestyle.
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
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F597fd8da2b4944148d53325a31dd2372%2F01b0e7f7450c44b493ac7b95003cde8c?format=webp&width=800"
                alt="Say Cheese Kids Dental & Orthodontics Banner"
                className="w-96 h-auto"
              />
            </div>
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
              What Parents Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what families in our
              community have to say about their experience at SayCheese Kids
              Dental.
            </p>
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
                  "My kids used to be terrified of the dentist until we found
                  SayCheese! Now they actually look forward to their dental
                  visit because the staff and his team are amazing with
                  children."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-dental-pink rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Sarah M.</div>
                    <div className="text-muted-foreground">Parent of 2</div>
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
                  "The office is so colorful and welcoming. My daughter loves
                  the play area and the friendly staff. They take their time
                  with her in a way she understands."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-dental-orange rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Michael T.</div>
                    <div className="text-muted-foreground">Father</div>
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
                  "Dr. Kohan is patient, kind, and truly cares about my
                  children's dental health. The entire team makes the experience
                  fun and stress-free."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-dental-purple rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">Jennifer L.</div>
                    <div className="text-muted-foreground">Mother of 3</div>
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
                        <div className="font-semibold">(909) 479-6030</div>
                        <div className="text-sm text-muted-foreground">
                          Call or text anytime
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-dental-green" />
                      <div>
                        <div className="font-semibold">12413 Central Ave</div>
                        <div className="text-sm text-muted-foreground">
                          Chino, CA 91710
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
              <Card className="mb-8">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.823419475582!2d-117.68876092346258!3d34.01245261951545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32939b2b1e7a7%3A0x1234567890abcdef!2s12413%20Central%20Ave%2C%20Chino%2C%20CA%2091710!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Our Location</h3>
                        <p className="text-sm text-muted-foreground">
                          12413 Central Ave, Chino, CA 91710
                        </p>
                      </div>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://maps.google.com/maps?q=12413+Central+Ave,+Chino,+CA+91710",
                            "_blank",
                          )
                        }
                        variant="outline"
                        size="sm"
                        className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white"
                      >
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                <a
                  href="/services"
                  className="block hover:text-dental-blue transition-colors cursor-pointer"
                >
                  Pediatric Dentistry
                </a>
                <a
                  href="/orthodontics"
                  className="block hover:text-dental-blue transition-colors cursor-pointer"
                >
                  Orthodontics
                </a>
                <a
                  href="/services"
                  className="block hover:text-dental-blue transition-colors cursor-pointer"
                >
                  Preventive Care
                </a>
                <a
                  href="/emergency-care"
                  className="block hover:text-dental-blue transition-colors cursor-pointer"
                >
                  Emergency Care
                </a>
                <a
                  href="/sedation-dentistry"
                  className="block hover:text-dental-blue transition-colors cursor-pointer"
                >
                  Sedation Dentistry
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#about"
                  className="block hover:text-dental-green transition-colors cursor-pointer"
                >
                  About Us
                </a>
                <a
                  href="/#contact"
                  className="block hover:text-dental-green transition-colors cursor-pointer"
                >
                  New Patients
                </a>
                <a
                  href="/insurance"
                  className="block hover:text-dental-green transition-colors cursor-pointer"
                >
                  Insurance
                </a>
                <a
                  href="/patient-forms"
                  className="block hover:text-dental-green transition-colors cursor-pointer"
                >
                  Patient Forms
                </a>
                <a
                  href="#contact"
                  className="block hover:text-dental-green transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div>
                  <div className="font-semibold text-white">(909) 479-6030</div>
                  <div className="text-sm">Call or text anytime</div>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    12413 Central Ave
                  </div>
                  <div className="text-sm">Chino, CA 91710</div>
                </div>
                <div>
                  <div className="font-semibold text-white">Office Hours</div>
                  <div className="text-sm">Mon-Fri: 8AM-5PM</div>
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
