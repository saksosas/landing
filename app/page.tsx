"use client";

import { Button } from "@/components/ui/button";
import {
  PiggyBank,
  Home,
  Shield,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/footer";

export default function FinancialAdvisorLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Investavimo gidas pradedantiesiems",
      description:
        "Žingsnis po žingsnio vedimas pirmą kartą investuojantiems, apimantis pagrindus ir pasitikėjimo kūrimą investavimo kelyje.",
      slug: "investment-guidance",
    },
    {
      icon: <PiggyBank className="h-8 w-8" />,
      title: "Pinigų valdymas ir biudžeto planavimas",
      description:
        "Išsamūs biudžeto strategijos ir finansinio planavimo sprendimai, kad maksimaliai padidintumėte savo santaupas ir pasiektumėte finansinį stabilumą.",
      slug: "money-management",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Būsto kredito konsultacijos",
      description:
        "Ekspertų patarimai dėl būsto kredito galimybių, refinansavimo strategijų ir nekilnojamojo turto investicijų.",
      slug: "mortgage-consultation",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Draudimo konsultacijos",
      description:
        "Išsamus draudimo planavimas, kad apsaugotumėte savo turtą, šeimą ir finansinę ateitį nuo nenumatytų aplinkybių.",
      slug: "insurance-consultation",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "The investment strategy created for me has exceeded all expectations. My portfolio has grown by 35% in just 18 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "As a complete beginner, the guidance I received was invaluable. Now I'm confidently managing my own investments.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director",
      content:
        "The mortgage consultation saved me thousands on my home purchase. Professional, knowledgeable, and trustworthy.",
      rating: 5,
    },
  ];

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation with Glassmorphism */}
      <nav className="fixed top-0 w-full z-50">
        <div className="bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 border border-white/20">
                  <Image
                    src="/logo-light.png"
                    alt="Mantas Molotkovas - Finansų konsultantas"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 ml-3">
                  {"Mantas Molotkovas"}
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => {
                    const servicesSection = document.getElementById("services");
                    servicesSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Paslaugos
                </button>
                <button
                  onClick={() => {
                    const aboutSection = document.getElementById("about");
                    aboutSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Apie mane
                </button>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                >
                  Kontaktai
                </button>
                <Link href="/consultation">
                  <Button className="bg-emerald-600/90 backdrop-blur-sm hover:bg-emerald-700/90 border border-emerald-500/20 shadow-lg">
                    Užsisakyti konsultaciją
                  </Button>
                </Link>
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 bg-white/20 backdrop-blur-sm border border-white/20"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 max-w-[85vw]">
            <div className="bg-white/90 backdrop-blur-xl border-l border-white/20 shadow-2xl h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20 flex-shrink-0">
                <div className="flex items-center">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full p-2 border border-white/20">
                    <Image
                      src="/logo-light.png"
                      alt="Mantas Molotkovas - Finansų konsultantas"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-base font-bold text-gray-900 ml-2">
                    Mantas Molotkovas
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 bg-white/20 backdrop-blur-sm border border-white/20 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Menu Navigation - Flex-grow with even spacing */}
              <div className="flex-1 flex flex-col justify-center px-4 py-6 min-h-0">
                <div className="flex flex-col justify-evenly h-full max-h-96 space-y-4">
                  <button
                    onClick={() => handleMobileNavClick("services")}
                    className="block w-full text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-4 px-4 rounded-lg hover:bg-white/30 backdrop-blur-sm"
                  >
                    Paslaugos
                  </button>
                  <button
                    onClick={() => handleMobileNavClick("about")}
                    className="block w-full text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-4 px-4 rounded-lg hover:bg-white/30 backdrop-blur-sm"
                  >
                    Apie mane
                  </button>
                  <button
                    onClick={() => handleMobileNavClick("contact")}
                    className="block w-full text-left text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-4 px-4 rounded-lg hover:bg-white/30 backdrop-blur-sm"
                  >
                    Kontaktai
                  </button>
                  <Link
                    href="/consultation"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full bg-emerald-600/90 backdrop-blur-sm hover:bg-emerald-700/90 border border-emerald-500/20 shadow-lg text-base py-3 mt-4">
                      Užsisakyti konsultaciją
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Contact Info - Fixed height, scrollable if needed */}
              <div className="px-4 py-4 border-t border-white/20 flex-shrink-0 bg-white/20 backdrop-blur-sm">
                <h3 className="text-xs font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Kontaktai
                </h3>
                <div className="space-y-3 max-h-32 overflow-y-auto">
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100/50 backdrop-blur-sm rounded-full p-1.5 flex-shrink-0">
                      <Phone className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-900">
                        Telefonas
                      </p>
                      <a
                        href="tel:+37064428394"
                        className="text-xs text-gray-600 break-all hover:text-emerald-600 transition-colors"
                      >
                        +370 (644) 28 394
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100/50 backdrop-blur-sm rounded-full p-1.5 flex-shrink-0">
                      <Mail className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-900">
                        El. paštas
                      </p>
                      <a
                        href="mailto:molotkovasmantas@gmail.com"
                        className="text-xs text-gray-600 break-all hover:text-emerald-600 transition-colors"
                      >
                        molotkovasmantas@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-100/50 backdrop-blur-sm rounded-full p-1.5 flex-shrink-0">
                      <MapPin className="h-3 w-3 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-gray-900">
                        Biuras
                      </p>
                      <a
                        href="https://www.google.com/maps/search/Vilnius,+Lithuania"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        Vilnius, Lithuania
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white/30 to-blue-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center lg:text-left">
            {/* Mobile-first content layout */}
            <div className="space-y-6 mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kurkite savo
                <span className="text-emerald-600"> finansinę ateitį </span>
                su pasitikėjimu
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Paversk savo finansinius tikslus realybe su individualizuotomis
                investavimo strategijomis, ekspertų patarimus ir įrodytais turto
                kūrimo metodais, pritaikytais būtent tau.
              </p>
            </div>

            {/* Call-to-action buttons with glassmorphism */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-emerald-600/90 backdrop-blur-sm hover:bg-emerald-700/90 border border-emerald-500/20 shadow-xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Užsisakyti nemokamą konsultaciją
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/30 backdrop-blur-sm text-gray-900 border-white/40 hover:bg-white/40 shadow-lg"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  servicesSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sužinoti daugiau
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Hero Image with Glassmorphism - Mobile version */}
            <div className="mt-8 lg:hidden">
              <div className="max-w-sm mx-auto">
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 border border-white/30 shadow-2xl">
                    <Image
                      src="https://peu6gs1psdk3eh7n.public.blob.vercel-storage.com/1666081341644-YRRuglwAbMpC0DRHTAJFQ1xkASb1LG.jpg"
                      alt="Mantas Molotkovas - Finansų konsultantas"
                      className="rounded-2xl w-full"
                      width={250}
                      height={300}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-full h-full bg-gradient-to-br from-emerald-200/40 to-blue-200/40 rounded-3xl -z-10 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image with Glassmorphism - Desktop version */}
          <div className="hidden lg:block lg:absolute lg:right-8 lg:top-24 lg:w-96">
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-2xl">
                <Image
                  src="https://peu6gs1psdk3eh7n.public.blob.vercel-storage.com/1666081341644-YRRuglwAbMpC0DRHTAJFQ1xkASb1LG.jpg"
                  alt="Mantas Molotkovas - Finansų konsultantas"
                  className="rounded-2xl w-full"
                  width={400}
                  height={300}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-emerald-200/40 to-blue-200/40 rounded-3xl -z-10 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Išsamios finansų paslaugos
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nuo investavimo planavimo iki būsto kredito konsultacijų -
                teikiu visapusiškus finansinius sprendimus, kad padėčiau jums
                pasiekti finansinius tikslus ir užtikrinti ateitį.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-300 h-full"
              >
                <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      className="text-emerald-600 border-emerald-500/30 hover:bg-emerald-50/50 backdrop-blur-sm mt-auto bg-white/20"
                    >
                      Skaityti daugiau
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-blue-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Kodėl rinktis mano pagalbą?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aš esu čia tam, kad padėčiau jums pasiekti jūsų finansinius
                  tikslus. Kartu išanalizuosime jūsų dabartinę situaciją,
                  nustatysime prioritetus ir sukursime veiksmų planą, kuris
                  atitiks jūsų poreikius ir galimybes.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Individualus požiūris į kiekvieno kliento situaciją",
                    "Aiškūs ir suprantami sprendimai be sudėtingų terminų",
                    "Nuolatinis palaikymas ir konsultacijos visame procese",
                    "Praktiniai patarimai, pritaikyti jūsų gyvenimo situacijai",
                    "Skaidrus bendravimas ir atviras dialogas",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/consultation">
                  <Button
                    size="lg"
                    className="bg-emerald-600/90 backdrop-blur-sm hover:bg-emerald-700/90 border border-emerald-500/20 shadow-lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Pradėkime kartu
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 shadow-2xl">
                <Image
                  src="https://peu6gs1psdk3eh7n.public.blob.vercel-storage.com/1666081341481-mmAedBric9oopBeeelrn84wnZO4olH.jpg"
                  alt="Financial Analysis"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-200/30 to-emerald-200/30 rounded-3xl -z-10 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-emerald-600/20 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pasiruošę keisti savo finansinę ateitį?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Ženkite pirmą žingsnį link finansinės laisvės su nemokama
              konsultacija. Aptarkime jūsų tikslus ir sukurkime individualizuotą
              strategiją jūsų sėkmei.
            </p>
            <div className="flex justify-center">
              <Link href="/consultation">
                <Button
                  size="lg"
                  className="bg-white/90 backdrop-blur-sm text-emerald-600 hover:bg-white border border-white/30 shadow-xl text-lg px-8 py-4"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Registracija į konsultaciją
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Susisiekite su manimi
            </h2>
            <p className="text-xl text-gray-700">
              Pasiruošę pradėti savo finansinę kelionę? Susisiekite su manimi
              šiandien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Telefonas",
                content: "+370 (644) 28 394",
                href: "tel:+37064428394",
                isExternal: false,
              },
              {
                icon: Mail,
                title: "El. paštas",
                content: "molotkovasmantas@gmail.com",
                href: "mailto:molotkovasmantas@gmail.com",
                isExternal: false,
              },
              {
                icon: MapPin,
                title: "Biuras",
                content: "Jonavos g. 254, Kaunas, 44132 Kauno m. sav.",
                href: "https://maps.app.goo.gl/ZpRotbbq8nzwELdV8",
                isExternal: true,
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <contact.icon className="h-8 w-8 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.href}
                    target={contact.isExternal ? "_blank" : undefined}
                    rel={contact.isExternal ? "noopener noreferrer" : undefined}
                    className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    {contact.content}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
