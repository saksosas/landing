"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, CheckCircle, Calculator, FileText, TrendingDown, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { InternalHeader } from "@/components/internal-header"

export default function MortgageConsultation() {
  const benefits = [
    "Būsto kredito galimybių analizė ir palyginimas",
    "Palūkanų normų ir sąlygų derybos su bankais",
    "Refinansavimo galimybių įvertinimas",
    "Dokumentų paruošimo pagalba",
    "Nekilnojamojo turto investicijų konsultacijos",
    "Ilgalaikio finansinio planavimo patarimai",
  ]

  const services = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Kredito skaičiuoklė",
      description: "Apskaičiuojame tikslų mėnesio įmoką ir bendrą kredito kainą skirtingais scenariais",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Dokumentų paruošimas",
      description: "Padedame surinkti ir paruošti visus reikalingus dokumentus kredito paraiškai",
    },
    {
      icon: <TrendingDown className="h-8 w-8" />,
      title: "Refinansavimas",
      description: "Įvertiname refinansavimo galimybes ir padedame sumažinti kredito kaštus",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Derybos su bankais",
      description: "Atstovaujame jūsų interesams derybose su kredito įstaigomis",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <InternalHeader />

      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white/30 to-blue-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Home className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Būsto kredito konsultacijos</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ekspertų patarimai dėl būsto kredito galimybių, refinansavimo strategijų ir nekilnojamojo turto
              investicijų. Padėsime rasti geriausias sąlygas jūsų situacijai.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kodėl svarbu turėti būsto kredito konsultantą?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Būsto kreditas dažnai yra didžiausia finansinė prievolė gyvenime. Teisingas sprendimas gali sutaupyti
                tūkstančius eurų ir užtikrinti finansinį stabilumą ateityje.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Padėsiu jums surasti geriausias kredito sąlygas, išderėti palankesnes palūkanas ir išvengti dažniausių
                klaidų būsto kredito procese.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Mortgage Consultation"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Mūsų paslaugos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-emerald-600 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Ką gausite iš būsto kredito konsultacijų?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-16 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Būsto kredito konsultacijos procesas</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Finansinės situacijos įvertinimas</h3>
                  <p className="text-gray-600">Išanalizuojame jūsų pajamas, išlaidas ir kredito galimybes</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rinkos analizė</h3>
                  <p className="text-gray-600">Palyginame skirtingų bankų pasiūlymus ir sąlygas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategijos kūrimas</h3>
                  <p className="text-gray-600">Sukuriame optimalų kredito planą jūsų situacijai</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Palaikymas procese</h3>
                  <p className="text-gray-600">Lydime visą kredito gavimo procesą iki pat pabaigos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-700/90"></div>
        <div className="absolute inset-0 bg-emerald-600/20 backdrop-blur-xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ar esate pasiruošę žengti pirmą žingsnį link savo svajonių būsto?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Susisiekite su mumis šiandien ir gaukite nemokamą konsultaciją. Padėsime jums rasti geriausią būsto
              kredito sprendimą.
            </p>
            <Button variant="secondary" className="text-lg">
              Gauti nemokamą konsultaciją
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
