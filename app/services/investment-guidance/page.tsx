"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, CheckCircle, TrendingUp, Target, Users, Shield } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { InternalHeader } from "@/components/internal-header"

export default function InvestmentGuidance() {
  const benefits = [
    "Suprantami investavimo pagrindai be sudėtingų terminų",
    "Individualizuotas investavimo planas pagal jūsų tikslus",
    "Rizikos valdymo strategijos pradedantiesiems",
    "Praktiniai patarimai dėl pirmųjų investicijų",
    "Nuolatinis palaikymas ir konsultacijos",
    "Mokymasis iš realių rinkos pavyzdžių",
  ]

  const process = [
    {
      step: "1",
      title: "Situacijos įvertinimas",
      description: "Išanalizuojame jūsų dabartinę finansinę situaciją ir investavimo tikslus",
    },
    {
      step: "2",
      title: "Mokymai ir švietimas",
      description: "Supažindiname su investavimo pagrindais ir galimybėmis",
    },
    {
      step: "3",
      title: "Strategijos kūrimas",
      description: "Kuriame jums tinkamą investavimo strategiją ir veiksmų planą",
    },
    {
      step: "4",
      title: "Palaikymas",
      description: "Teikiame nuolatinį palaikymą ir konsultacijas visame procese",
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
            <BookOpen className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investavimo gidas pradedantiesiems</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Žingsnis po žingsnio vedimas pirmą kartą investuojantiems. Išmoksite investavimo pagrindus ir įgysite
              pasitikėjimo savo investavimo kelyje.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kodėl investavimo gidas yra svarbus?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Investavimas gali atrodyti sudėtingas ir bauginantis, ypač pradedantiesiems. Mano tikslas - padaryti šį
                procesą suprantamą, saugų ir efektyvų. Kartu sukursime tvirtą pagrindą jūsų finansinei ateičiai.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nesvarbu, ar turite 100 ar 10,000 eurų - kiekvienas gali pradėti investuoti protingai. Svarbiausia yra
                turėti teisingą strategiją ir patikimą vadovą.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Investment Planning"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ką gausite iš investavimo gido?</h2>
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Kaip vyksta procesas?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ilgalaikis augimas</h3>
                <p className="text-gray-600 text-sm">Strategijos, orientuotos į ilgalaikį turto augimą</p>
              </CardContent>
            </Card>
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tikslų siekimas</h3>
                <p className="text-gray-600 text-sm">Investavimo planas, pritaikytas jūsų tikslams</p>
              </CardContent>
            </Card>
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Individualus požiūris</h3>
                <p className="text-gray-600 text-sm">Kiekvienas klientas gauna unikalų sprendimą</p>
              </CardContent>
            </Card>
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rizikos valdymas</h3>
                <p className="text-gray-600 text-sm">Mokymasis valdyti rizikas ir apsisaugoti</p>
              </CardContent>
            </Card>
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
              Pradėkite savo investavimo kelionę šiandien
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Užsisakykite nemokamą konsultaciją ir sužinokite, kaip galite pradėti investuoti protingai ir saugiai.
              Kartu sukursime jums tinkamą investavimo strategiją.
            </p>
            <Link href="/consultation">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4">
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
  )
}
