"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Camera, Award, Users, Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingScreen } from "@/components/loading-screen"
import { DesktopMenu } from "@/components/desktop-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ExpandableGallery } from "@/components/expandable-gallery"
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const getCurrentYear = () => new Date().getFullYear()

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 100)
  }

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
                src="/images/logo.png"
                alt="Indus Wedding Films Logo"
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">INDUS</h1>
          <p className="text-xl md:text-2xl mb-8 tracking-widest">WEDDING FILMS</p>
          <h2 className="text-3xl md:text-5xl font-light mb-12 tracking-wider">CAPTURING MOMENTS</h2>
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
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video 2 */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="/videos/photo2.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video 3 */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <img
                    src="/videos/photo3.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <Link href="https://www.facebook.com/indusweddingfilms" passHref>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    WATCH MORE
                  </Button>
                </Link>
              </div>

            </div>
            <div className="space-y-6">
              <div className="bg-amber-500 text-black px-4 py-2 inline-block rounded">
                <span className="font-bold">10+ YEARS EXPERIENCE</span>
              </div>
              <h3 className="text-3xl font-bold">About Indus Wedding Films</h3>
              <p className="text-lg leading-relaxed">
                With over 10 years of experience in capturing life's most precious moments, Indus Wedding Films has been
                the trusted choice for couples across India. We specialize in creating cinematic wedding films that tell
                your unique love story.
              </p>
              <p className="text-lg leading-relaxed">
                Our team of skilled photographers and videographers combine traditional techniques with modern
                technology to deliver stunning visuals that you'll treasure forever. Every frame is crafted with passion
                and precision.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-6 italic text-xl">
                "The day-of experience was enjoyable, and the final video truly captured the essence of our wedding. We
                couldn't be happier!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        id="why-us"
        className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="bg-amber-500 text-black px-6 py-2 inline-block rounded-full mb-6">
              <span className="font-bold">10+ YEARS OF EXCELLENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 10 years of experience, we bring unmatched expertise and passion to every wedding we capture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "10+ Years Experience",
                description: "Over 10 years of capturing precious moments with expertise and passion.",
              },
              {
                icon: <Camera className="h-12 w-12" />,
                title: "Professional Equipment",
                description: "State-of-the-art cameras and equipment for stunning high-quality results.",
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Expert Team",
                description: "Skilled photographers and videographers dedicated to your special day.",
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Personalized Service",
                description: "Tailored approach to capture your unique love story perfectly.",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-amber-500 mb-4 flex justify-center">{feature.icon}</div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What our customer's say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                text: "Indus Wedding Films captured our wedding day like a dream! Every photo is filled with emotion, love, and joy. Their team was professional, friendly, and knew exactly how to make us feel comfortable. We’re so grateful for these memories – truly the best decision we made for our big day!",
                author: "Priyanka Dutta",
                rating: 5,
              },
              {
                text: "From the pre-wedding shoot to the final album, everything was flawless. The creativity and attention to detail were amazing. Indus Wedding Films told our story through their lens, and now we have photos that we’ll treasure forever. Thank you for making our moments timeless!",
                author: "Ritika & Rudra",
                rating: 5,
              },
              {
                text: "The Indus Wedding Films team was incredibly professional and always on time. They understood our vision and delivered more than we hoped for. Every guest praised our wedding film and photos – it felt like a movie! Highly recommended to anyone looking for top-tier wedding photography.",
                author: "Oindrila Bhattacharya",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 p-8 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 border-l-4 border-amber-500 pl-4 text-gray-800 dark:text-gray-200">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-semibold text-gray-800 dark:text-gray-300">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-900 bg-transparent font-semibold px-8 py-3 rounded-full"
              onClick={() => {
                window.open("https://g.co/kgs/a2Wi39p", "_blank")
              }}
            >
              Write a Review
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
                <Phone className="h-6 w-6 text-amber-500" />
                <div>
                  <p className="font-semibold">+91 89104 45607</p>
                  <p className="text-sm text-muted-foreground">Call us anytime</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Mail className="h-6 w-6 text-amber-500" />
                <div>
                  <p className="font-semibold">indusweddingfilms@gmail.com</p>
                  <p className="text-sm text-muted-foreground">Send us an email</p>
                </div>
              </div>

              <div className="flex items-start justify-center gap-4">
                <MapPin className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <p className="font-semibold mb-2">39 Municipal Office Lane</p>
                  <p className="font-semibold mb-2">Narasingha Avenue, Dumdum</p>
                  <p className="font-semibold">Nager Bazar, Kolkata - 700074</p>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="https://www.facebook.com/indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:text-amber-500">
                    <Facebook className="h-6 w-6" />
                  </Button>
                </a>

                <a
                  href="https://instagram.com/indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:text-amber-500">
                    <Instagram className="h-6 w-6" />
                  </Button>
                </a>

                <a
                  href="https://youtube.com/@indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="hover:text-amber-500">
                    <Youtube className="h-6 w-6" />
                  </Button>
                </a>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-full"
                  onClick={() => {
                    const phoneNumber = "+918910445607"
                    const message = "Hi! I would like to book an appointment for photography services."
                    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
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
                  <a href="#home" className="hover:text-amber-500 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-500 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-amber-500 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-500 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>Wedding Photography</li>
                <li>Wedding Film</li>
                <li>Pre Wedding Shoot</li>
                <li>Maternity Shoot</li>
                <li>Baby Shoot</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <p className="text-sm">+91 89104 45607</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-amber-500" />
                  <p className="text-sm">indusweddingfilms@gmail.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-amber-500 mt-1" />
                  <div className="text-sm">
                    <p>39 Municipal Office Lane</p>
                    <p>Narasingha Avenue, Dumdum</p>
                    <p>Nager Bazar, Kolkata - 700074</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-amber-500 p-1">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://instagram.com/indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-amber-500 p-1">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://youtube.com/@indusweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:text-amber-500 p-1">
                    <Youtube className="h-5 w-5" />
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
    </div >
  )
}
