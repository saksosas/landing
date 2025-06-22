"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { InternalHeader } from "@/components/internal-header"

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    age: "",
    interestedTopics: [] as string[],
    otherTopic: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const topics = [
    "Taupymas/pinigų skirstymas",
    "Investavimas/pasyvios pajamos",
    "Būsto kreditas",
    "Mokesčių lengvatos",
    "Investicinis kaupiamasis gyvybės draudimas",
    "Turimų investavimo instrumentų peržiūra: II pakopa/III pakopa/Kaupiamasis gyvybės draudimas",
    "Skolų refinansavimas",
    "Nuo ko pradėti investuoti?",
    "Kaip susikurti ilgalaikę investavimo strategiją",
    "Finansinių rezervų ir draudimų klausimai",
  ]

  const handleTopicChange = (topic: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interestedTopics: [...prev.interestedTopics, topic],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interestedTopics: prev.interestedTopics.filter((t) => t !== topic),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <Card className="w-full max-w-md mx-4 bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl relative z-10">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ačiū už užklausą!</h2>
            <p className="text-gray-600 mb-6">
              Jūsų konsultacijos užklausa sėkmingai pateikta. Susisieksiu su jumis per 24 valandas.
            </p>
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Grįžti į pagrindinį puslapį</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <InternalHeader />

      {/* Form Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Užsisakyti nemokamą konsultaciją</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Užpildykite formą ir susisieksiu su jumis per 24 valandas, kad aptartume jūsų finansinius tikslus ir
              galimybes.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 min-w-0">
              <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Kontaktai</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <a
                      href="tel:+37064428394"
                      className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      +370 (644) 28 394
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <a
                      href="mailto:molotkovasmantas@gmail.com"
                      className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer break-all"
                    >
                      molotkovasmantas@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <a
                      href="https://maps.app.goo.gl/ZpRotbbq8nzwELdV8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer"
                    >
                      Jonavos g. 254, Kaunas, 44132 Kauno m. sav.
                    </a>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Konsultacijos trukmė:</h4>
                    <p className="text-gray-600 text-sm">45-60 minučių</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Konsultacijos formatas:</h4>
                    <p className="text-gray-600 text-sm">Gyvai arba nuotoliniu būdu</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white/30 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          Vardas *
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                          className="mt-1"
                          placeholder="Jūsų vardas"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Pavardė *
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                          className="mt-1"
                          placeholder="Jūsų pavardė"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          El. paštas *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          className="mt-1"
                          placeholder="jusu@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Telefono numeris *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="mt-1"
                          placeholder="+370 123 456 789"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-sm font-medium text-gray-700">
                          Miestas
                        </Label>
                        <Input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                          className="mt-1"
                          placeholder="Jūsų miestas"
                        />
                      </div>
                      <div>
                        <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                          Amžius
                        </Label>
                        <Input
                          id="age"
                          type="number"
                          min="18"
                          max="100"
                          value={formData.age}
                          onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                          className="mt-1"
                          placeholder="Jūsų amžius"
                        />
                      </div>
                    </div>

                    {/* Interested Topics */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-4 block">
                        Jus dominančios temos (pasirinkite visas tinkamas):
                      </Label>
                      <div className="space-y-3 max-h-64 overflow-y-auto border border-gray-200 rounded-md p-4">
                        {topics.map((topic, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Checkbox
                              id={`topic-${index}`}
                              checked={formData.interestedTopics.includes(topic)}
                              onCheckedChange={(checked) => handleTopicChange(topic, checked as boolean)}
                              className="mt-1"
                            />
                            <Label
                              htmlFor={`topic-${index}`}
                              className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                            >
                              {topic}
                            </Label>
                          </div>
                        ))}
                        <div className="flex items-start space-x-3 pt-2 border-t border-gray-200">
                          <Checkbox
                            id="other-topic"
                            checked={formData.otherTopic !== ""}
                            onCheckedChange={(checked) => {
                              if (!checked) {
                                setFormData((prev) => ({ ...prev, otherTopic: "" }))
                              }
                            }}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <Label htmlFor="other-topic" className="text-sm text-gray-700 cursor-pointer">
                              Kita:
                            </Label>
                            <Input
                              type="text"
                              value={formData.otherTopic}
                              onChange={(e) => setFormData((prev) => ({ ...prev, otherTopic: e.target.value }))}
                              className="mt-1"
                              placeholder="Nurodykite kitą temą..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Papildoma informacija (neprivaloma)
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                        className="mt-1"
                        rows={4}
                        placeholder="Parašykite apie savo finansinius tikslus, klausimus ar bet kokią kitą informaciją, kuri padėtų geriau pasiruošti konsultacijai..."
                      />
                    </div>

                    {/* Privacy Policy Notice */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Pateikdami šią formą sutinkate su mūsų{" "}
                        <Link href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 underline">
                          privatumo politika
                        </Link>
                        . Jūsų duomenys bus naudojami tik konsultacijos tikslais ir nebus saugomi sistemose.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Pateikti užklausą
                      </Button>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Pateikę užklausą sutinkate su mūsų{" "}
                        <Link href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 underline">
                          privatumo politika
                        </Link>
                        .
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
