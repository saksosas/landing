"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Eye, Lock } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { InternalHeader } from "@/components/internal-header"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <InternalHeader />

      {/* Privacy Policy Content */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Privatumo politika</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jūsų privatumas yra mums svarbus. Čia paaiškinama, kaip tvarkome jūsų pateiktą informaciją.
            </p>
          </div>

          <div className="space-y-8">
            {/* Data Collection */}
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <Eye className="h-6 w-6 text-emerald-600 mr-3" />
                  Kokią informaciją renkame
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Kai užpildote konsultacijos užklausos formą, renkame šią informaciją:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Vardas ir pavardė</li>
                  <li>El. pašto adresas</li>
                  <li>Telefono numeris</li>
                  <li>Miestas (neprivaloma)</li>
                  <li>Amžius (neprivalomas)</li>
                  <li>Jus dominančios finansų temos</li>
                  <li>Papildoma informacija, kurią pateikiate žinutės laukelyje</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <Mail className="h-6 w-6 text-emerald-600 mr-3" />
                  Kaip naudojame jūsų informaciją
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-medium mb-2">
                    ⚡ Svarbu: Mes NESAUGOME jūsų duomenų jokiose duomenų bazėse ar serveriuose.
                  </p>
                  <p className="text-emerald-700">
                    Visa informacija iš formos yra tiesiogiai siunčiama man el. paštu tiesioginiam kontaktui su jumis.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">Jūsų pateiktą informaciją naudojame tik šiais tikslais:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Susisiekti su jumis dėl konsultacijos</li>
                  <li>Pasiruošti konsultacijai pagal jūsų nurodytas temas</li>
                  <li>Suteikti jums finansinius patarimus ir paslaugas</li>
                  <li>Atsakyti į jūsų klausimus</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                  <Lock className="h-6 w-6 text-emerald-600 mr-3" />
                  Duomenų saugumas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Nors mes nesaugome jūsų duomenų sistemose, imamės šių saugumo priemonių:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Formos duomenys siunčiami saugiu SSL šifravimu</li>
                  <li>El. pašto komunikacija vyksta per saugius kanalus</li>
                  <li>Jūsų duomenys niekada nėra perduodami trečiosioms šalims</li>
                  <li>Laikomės griežtų konfidencialumo standartų</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Jūsų teisės ir kontaktai</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">Jūs turite teisę:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Sužinoti, kokią informaciją apie jus turime</li>
                  <li>Prašyti ištaisyti neteisingą informaciją</li>
                  <li>Prašyti ištrinti jūsų duomenis iš mano el. pašto</li>
                  <li>Atšaukti sutikimą dėl duomenų tvarkymo</li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <p className="text-gray-700 mb-2">
                    <strong>Klausimų ar pageidavimų atveju susisiekite:</strong>
                  </p>
                  <p className="text-gray-700">
                    El. paštas: <span className="text-emerald-600">molotkovasmantas@gmail.com</span>
                  </p>
                  <p className="text-gray-700">
                    Telefonas: <span className="text-emerald-600">+370 (644) 28 394</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Privatumo politikos atnaujinimai</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Ši privatumo politika gali būti atnaujinta. Visi pakeitimai bus paskelbti šiame puslapyje. Politika
                  paskutinį kartą atnaujinta: <strong>2025 m. birželio mėn.</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Grįžti į pagrindinį puslapį
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
