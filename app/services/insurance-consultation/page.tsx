import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Draudimo konsultacijos",
  description:
    "Draudimo konsultacijos - išsamus draudimo planavimas saugumui. Apsaugokite turtą, šeimą ir finansinę ateitį nuo nenumatytų aplinkybių su Mantu Molotkovu.",
  keywords: [
    "draudimas",
    "gyvybės draudimas",
    "draudimo konsultacija",
    "finansų konsultantas",
    "draudimo planavimas",
  ],
  openGraph: {
    title: "Draudimo konsultacijos | Mantas Molotkovas",
    description:
      "Apsaugokite save ir savo šeimą. Profesionalios draudimo konsultacijos su individualizuotu požiūriu.",
  },
};
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Calendar,
  CheckCircle,
  Heart,
  Car,
  Home,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { InternalHeader } from "@/components/internal-header";
import Image from "next/image";

export default function InsuranceConsultation() {
  const benefits = [
    "Draudimo poreikių analizė ir vertinimas",
    "Skirtingų draudimo produktų palyginimas",
    "Optimalių draudimo sumų nustatymas",
    "Draudimo išmokų optimizavimas",
    "Draudimo polisų peržiūra ir atnaujinimas",
    "Žalos atveju pagalba ir konsultacijos",
  ];

  const insuranceTypes = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Gyvybės draudimas",
      description:
        "Apsaugokite savo šeimos finansinę ateitį nenumatytų situacijų atveju",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Verslo draudimas",
      description: "Kompleksinis verslo veiklos ir atsakomybės draudimas",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <InternalHeader />

      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white/30 to-blue-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Draudimo konsultacijos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Išsamus draudimo planavimas, kad apsaugotumėte savo turtą, šeimą
              ir finansinę ateitį nuo nenumatytų aplinkybių. Rasime jums
              tinkamiausius draudimo sprendimus.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kodėl draudimas yra svarbus?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Draudimas yra finansinio saugumo pagrindas. Teisingai parinktas
                draudimas apsaugo jus ir jūsų šeimą nuo finansinių sunkumų
                nelaimės ar nenumatytų situacijų atveju.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Padėsiu jums išanalizuoti draudimo poreikius, palyginti
                skirtingus pasiūlymus ir parinkti optimalius draudimo sprendimus
                jūsų situacijai ir biudžetui.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://peu6gs1psdk3eh7n.public.blob.vercel-storage.com/pexels-mikhail-nilov-7731330-hZTzG6tNrCbVM89KR7Mii4EBwdErCH.jpg"
                alt="Insurance Protection"
                className="rounded-2xl shadow-xl w-full"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>

          {/* Insurance Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Draudimo rūšys
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {insuranceTypes.map((type, index) => (
                <Card
                  key={index}
                  className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-emerald-600 mb-4">{type.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Ką gausite iš draudimo konsultacijų?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-16 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Draudimo konsultacijos procesas
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Poreikių analizė
                  </h3>
                  <p className="text-gray-600">
                    Išanalizuojame jūsų gyvenimo situaciją ir draudimo poreikius
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Rinkos tyrimai
                  </h3>
                  <p className="text-gray-600">
                    Palyginame skirtingų draudimo bendrovių pasiūlymus ir
                    sąlygas
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Sprendimų pristatymas
                  </h3>
                  <p className="text-gray-600">
                    Pateikiame optimalius draudimo sprendimus su detaliais
                    paaiškinimais
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Palaikymas
                  </h3>
                  <p className="text-gray-600">
                    Teikiame nuolatinį palaikymą ir pagalbą draudimo klausimais
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90"></div>
        <div className="absolute inset-0 bg-emerald-600/20 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Apsaugokite savo ateitį šiandien
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Užsisakykite nemokamą draudimo konsultaciją ir sužinokite, kaip
              galite apsaugoti save, savo šeimą ir turtą nuo nenumatytų
              situacijų. Kartu rasime jums tinkamiausius sprendimus.
            </p>
            <Link href="/consultation">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Užsisakyti nemokamą konsultaciją
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
