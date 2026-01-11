"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Camera, Award, Users, Heart, Phone, Mail, MapPin, Facebook, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingScreen } from "@/components/loading-screen"
import { DesktopMenu } from "@/components/desktop-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ExpandableGallery } from "@/components/expandable-gallery"
import Link from "next/link"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null)
  const [showAllFAQs, setShowAllFAQs] = useState(false)

  const getCurrentYear = () => new Date().getFullYear()

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

  const testimonials = [
    {
      text: "Aditya Chakraborty and his team at 'The Story Writer' did an amazing job with our wedding photos. Usually, they cover weddings in Kolkata and nearby areas, but they happily traveled to Uttar Dinajpur for our special day, and we couldn't be happier with their work.",
      author: "Adrish Sengupta",
      rating: 5,
      image: "/images/review1.png",
    },
    {
      text: "Every step of the journey, from our first shoot to receiving the beautiful album, was magical. We were constantly amazed by the creativity and care poured into every detail. The Story Writer has a true gift for capturing feeling, and the photos are more than images.",
      author: "Rudra Sen",
      rating: 5,
      image: "/images/review2.jpeg",
    },
    {
      text: "    From start to finish, the experience was absolutely seamless. The incredible creativity and eye for detail blew us away! The Story Writer didn't just take photos; they captured our unique story, giving us timeless treasures. Thank you for everything!",
      author: "Oindrila Bhattacharya",
      rating: 5,
      image: "/images/review3.jpeg",
    },
  ]

  const faqItems = [
    {
      question: "What services does The Story Writer offer?",
      answer:
        "We specialize in wedding photography, wedding films, pre-wedding shoots, maternity shoots, baby photography, rice ceremonies, birthdays, anniversaries, and engagements. Each service is customized to capture your unique story with passion and precision.",
    },
    {
      question: "How many years of experience does Aditya Chakraborty have?",
      answer:
        "Aditya Chakraborty has over 10 years of professional experience in wedding photography and videography. He has captured numerous weddings across India and is known for his cinematic approach and attention to detail.",
    },
    {
      question: "What is the booking process and timeline?",
      answer:
        "You can contact us through WhatsApp, email, or phone. We typically require a consultation meeting to discuss your vision. Bookings are confirmed with an advance payment, and we recommend booking 2-3 months in advance for wedding dates.",
    },
    {
      question: "Do you provide pre-wedding shoots?",
      answer:
        "Yes, we offer comprehensive pre-wedding shoot packages. These sessions are designed to capture your chemistry as a couple in beautiful locations. We can arrange shoots at various scenic spots around West Bengal and beyond.",
    },
    {
      question: "What is included in the wedding photography package?",
      answer:
        "Our packages typically include full-day coverage, multiple photographers, candid and posed shots, aerial photography (drone), album design, digital copies in high resolution, and online gallery access. Exact inclusions depend on your chosen package.",
    },
    {
      question: "Do you offer wedding videography services?",
      answer:
        "We create cinematic wedding films that tell your unique love story. Our videography includes pre-wedding films, highlights reels, full ceremony and reception coverage, and professional editing with music and effects.",
    },
    {
      question: "What are your business hours and availability?",
      answer:
        "We are available Monday to Saturday from 9:00 AM to 9:00 PM. On Sundays, we provide 24-hour availability for wedding events and special occasions. You can reach us through WhatsApp, call, or email during these hours.",
    },
    {
      question: "Can you work outside your local area?",
      answer:
        "Yes, we travel across India and internationally for destination weddings. Travel costs and accommodation can be discussed during your consultation. We have experience working at various venues and locations.",
    },
    {
      question: "What is your cancellation and rescheduling policy?",
      answer:
        "Our cancellation policy is flexible and customer-friendly. Depending on the timing and circumstances, refunds or rescheduling options are available. Please discuss specific terms when booking.",
    },
    {
      question: "How can we see your previous work?",
      answer:
        "You can view our complete portfolio on our website's gallery section. We also maintain active social media accounts on Facebook and Instagram where you can see more samples of our work and client testimonials.",
    },
  ]

  const visibleFAQs = showAllFAQs ? faqItems : faqItems.slice(0, 3)

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
    >
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="The Story Writer Aditya Chakraborty Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <DesktopMenu />
            <MobileMenu />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">THE STORY WRITER</h1>
          <p className="text-xl md:text-2xl mb-8 tracking-widest">BY</p>
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wider">ADITYA CHAKRABORTY</h2>
          <div className="animate-bounce">
            <p className="text-sm tracking-widest mb-2">SCROLL</p>
            <div className="w-px h-8 bg-white mx-auto"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Favorites</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {/* Video 1 */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="/videos/photo1.jpg"
                    alt="Wedding photography sample 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video 2 */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="/videos/photo2.jpg"
                    alt="Wedding photography sample 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video 3 */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="/videos/photo3.jpg"
                    alt="Wedding photography sample 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <Link href="https://www.facebook.com/share/17RFmkoxUm/" passHref>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:bg-red-600"
                  >
                    WATCH MORE
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-wedding-gradient dark:bg-wedding-gradient-dark text-white dark:text-black px-4 py-2 inline-block rounded">
                <span className="font-bold">10+ YEARS EXPERIENCE</span>
              </div>
              <h3 className="text-3xl font-bold">About Aditya Chakraborty</h3>
              <p className="text-lg leading-relaxed">
                Welcome to THE STORY WRITER, a creative wedding photography team from INDIA. Our journey began more than a decade ago. In 2018, we formed our company with a passion for capturing the simplicity of people on their special day. We believe every wedding is unique & we tell the story through our photos. Team THE STORY WRITER is a group of passionate and talented individuals who come together to create stunning images and capture beautiful moments on your special day. Each team member brings their unique skill set and perspective to the table, ensuring that every aspect of your wedding photography is covered. Every team member plays a critical role in bringing your vision to life. The team also includes skilled editors who work behind the scenes too.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-6 italic text-xl">
                "you can rest assured that every moment of your special day will be captured flawlessly."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="py-20 bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-950 dark:to-yellow-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-wedding-gradient dark:bg-wedding-gradient-dark text-white dark:text-black px-6 py-2 inline-block rounded-full mb-6">
              <span className="font-bold">10+ YEARS OF EXCELLENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 10 years of experience, we bring unmatched expertise and passion to every celebration we
              capture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Cinematic Excellence",
                description:
                  "We craft visual narratives that feel like Hollywood productions, telling your unique stories with stunning visuals and emotional depth.",
              },
              {
                icon: <Camera className="h-12 w-12" />,
                title: "Latest Technology",
                description:
                  "We use cutting-edge cameras, drones, and editing equipment to deliver breathtaking results that exceed your expectations.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Dedicated Team",
                description:
                  "Our experienced photographers and videographers are committed to capturing every precious moment with creativity and professionalism.",
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Your Vision, Our Passion",
                description:
                  "We listen, understand, and deliver exactly what you envision. Your story is our priority, and we treat it with utmost care.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-red-600 dark:text-red-400 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h2>
            <p className="text-xl text-muted-foreground">
              A collection of our finest work capturing love, joy, and celebration
            </p>
          </div>

          <ExpandableGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-wedding-gradient dark:bg-wedding-gradient-dark"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What our customer's say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 p-8 shadow-lg">
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <p className="font-semibold text-gray-800 dark:text-gray-300">{testimonial.author}</p>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 border-l-4 border-red-600 pl-4 text-gray-800 dark:text-gray-200">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent font-semibold px-8 py-3 rounded-full"
              onClick={() => {
                window.open("https://share.google/vlUm1YmMsHSuULg0O", "_blank")
              }}
            >
              Write a Review
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our diverse event photography and videography services
            </p>
          </div>

          <div className="space-y-4">
            {visibleFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all"
              >
                <button
                  onClick={() => setExpandedFAQIndex(expandedFAQIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-left text-gray-900 dark:text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-red-600 dark:text-red-400 transition-transform ${expandedFAQIndex === index ? "transform rotate-180" : ""
                      }`}
                  />
                </button>
                {expandedFAQIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:border-red-400 dark:text-red-400 bg-transparent"
              onClick={() => setShowAllFAQs(!showAllFAQs)}
            >
              {showAllFAQs ? "View Less" : "View More"}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact</h2>

            <div className="space-y-8">
              <div className="flex items-center justify-center gap-4">
                <Phone className="h-6 w-6 text-red-600 dark:text-red-400" />
                <div>
                  <p className="font-semibold">+91 87774 09074</p>
                  <p className="text-sm text-muted-foreground">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />
                <div>
                  <p className="font-semibold">chakrabortyaditya28@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-4">
                <MapPin className="h-6 w-6 text-red-600 dark:text-red-400 mt-1" />
                <div>
                  <p className="font-semibold mb-2">144, 1, KN Mukherjee Rd</p>
                  <p className="font-semibold mb-2">Talpukur, Math Para, Titagarh</p>
                  <p className="font-semibold">Barrackpore, West Bengal 700123</p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div>
                  <p className="font-semibold mb-2">Business Hours</p>
                  <p className="text-sm text-muted-foreground mb-1">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                  <p className="text-sm text-red-600 dark:text-red-400 font-semibold">Sunday: 24 Hours Available</p>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <a href="https://www.facebook.com/share/17RFmkoxUm/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-red-600 dark:hover:text-red-400">
                    <Facebook className="h-6 w-6" />
                  </Button>
                </a>

                <a href="https://www.instagram.com/thestorywriterbyaditya/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:text-red-600 dark:hover:text-red-400">
                    <Instagram className="h-6 w-6" />
                  </Button>
                </a>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-wedding-gradient hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full dark:bg-wedding-gradient-dark dark:text-black"
                  onClick={() => {
                    const phoneNumber = "8777409074"
                    const message = "Hi! I would like to book an appointment for photography services."
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, "_blank")
                  }}
                >
                  Book Us for Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-red-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-red-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-red-500 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-red-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Rice Ceremonies</li>
                <li>Birthdays</li>
                <li>Anniversaries</li>
                <li>Engagements</li>
                <li>Pre Wedding Shoot</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-500" />
                  <p className="text-sm">+91 87774 09074</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-500" />
                  <p className="text-sm">chakrabortyaditya28@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-red-500 mt-1" />
                  <div className="text-sm">
                    <p>144, 1, KN Mukherjee Rd</p>
                    <p>Talpukur, Math Para, Titagarh</p>
                    <p>Barrackpore, West Bengal 700123</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/share/17RFmkoxUm/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white hover:text-red-500 p-1">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/thestorywriterbyaditya/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white hover:text-red-500 p-1">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              Copyright {getCurrentYear()} © The Story Writer Aditya Chakraborty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Elements */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
