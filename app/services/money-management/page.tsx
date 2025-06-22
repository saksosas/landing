import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinigų valdymas ir biudžeto planavimas",
  description:
    "Pinigų valdymas ir biudžeto planavimas - išsamūs biudžeto strategijos ir finansinio planavimo sprendimai. Padidinkite santaupas ir pasiekite finansinį stabilumą su Mantu Molotkovu.",
  keywords: [
    "pinigų valdymas",
    "biudžeto planavimas",
    "finansinis planavimas",
    "taupymas",
    "santaupos",
    "finansų konsultantas",
  ],
  openGraph: {
    title: "Pinigų valdymas ir biudžeto planavimas | Mantas Molotkovas",
    description:
      "Sukurkite efektyvų biudžetą ir pasiekite finansinį stabilumą. Individualizuoti pinigų valdymo sprendimai.",
  },
};

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PiggyBank,
  Calendar,
  CheckCircle,
  Calculator,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { InternalHeader } from "@/components/internal-header";
import Image from "next/image";

export default function MoneyManagement() {
  const benefits = [
    "Asmeninio biudžeto sudarymas ir optimizavimas",
    "Išlaidų analizė ir taupymo galimybių identifikavimas",
    "Finansinių tikslų nustatymas ir planavimas",
    "Skubių situacijų fondo kūrimas",
    "Skolų valdymo strategijos",
    "Reguliarūs biudžeto peržiūros ir koregavimai",
  ];

  const areas = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Biudžeto planavimas",
      description:
        "Sukuriame detalų mėnesio biudžetą, kuris padės kontroliuoti išlaidas ir didinti santaupas",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Tikslų nustatymas",
      description:
        "Apibrėžiame trumpalaikius ir ilgalaikius finansinius tikslus su konkrečiais terminais",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Santaupų augimas",
      description:
        "Strategijos, kaip efektyviai taupyti ir didinti savo finansinius rezervus",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Finansinis saugumas",
      description:
        "Apsaugos nuo nenumatytų išlaidų ir finansinių sunkumų kūrimas",
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
            <PiggyBank className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pinigų valdymas ir biudžeto planavimas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Išsamūs biudžeto strategijos ir finansinio planavimo sprendimai,
              kad maksimaliai padidintumėte savo santaupas ir pasiektumėte
              finansinį stabilumą.
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
                Kodėl pinigų valdymas yra svarbus?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Geras pinigų valdymas yra finansinio sėkmės pagrindas. Nesvarbu,
                kiek uždirbate - svarbiausia yra mokėti protingai valdyti savo
                finansus, planuoti ateičiai ir kurti stabilų finansinį pagrindą.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kartu sukursime jums tinkamą biudžeto sistemą, kuri padės
                pasiekti jūsų finansinius tikslus ir užtikrins ramybę finansų
                klausimais.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://peu6gs1psdk3eh7n.public.blob.vercel-storage.com/pexels-mikhail-nilov-6962993-kG9QTZnmfnolqqwwFBi4wWYuCd9tHz.jpg"
                alt="Budget Planning"
                className="rounded-2xl shadow-xl w-full"
                width={500}
                height={400}
                priority
              />
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pagrindinės paslaugų sritys
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {areas.map((area, index) => (
                <Card
                  key={index}
                  className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-emerald-600 mb-4">{area.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Ką gausite iš pinigų valdymo konsultacijų?
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

          {/* Process Steps */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-16 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Kaip vyksta biudžeto planavimo procesas?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Dabartinės situacijos analizė
                  </h3>
                  <p className="text-gray-600">
                    Išanalizuojame jūsų dabartinius pajamas, išlaidas ir
                    finansinius įpročius
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Tikslų nustatymas
                  </h3>
                  <p className="text-gray-600">
                    Kartu apibrėžiame jūsų finansinius tikslus ir prioritetus
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Biudžeto kūrimas
                  </h3>
                  <p className="text-gray-600">
                    Sukuriame detalų ir realistišką biudžeto planą
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Stebėjimas ir koregavimas
                  </h3>
                  <p className="text-gray-600">
                    Reguliariai peržiūrime ir koreguojame biudžetą pagal
                    poreikius
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
              Pradėkite valdyti savo finansus protingai
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Užsisakykite nemokamą konsultaciją ir sužinokite, kaip sukurti
              efektyvų biudžetą ir pasiekti finansinį stabilumą. Kartu sukursime
              jums tinkamą pinigų valdymo sistemą.
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
