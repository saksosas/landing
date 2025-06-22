import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Užsisakyti konsultaciją",
  description:
    "Užsisakykite nemokamą finansų konsultaciją su Mantu Molotkovu. 45-60 minučių trukmės konsultacija gyvai arba nuotoliniu būdu. Individualus požiūris į kiekvieno kliento poreikius.",
  keywords: [
    "finansų konsultacija",
    "nemokama konsultacija",
    "investavimo konsultacija",
    "finansinis planavimas",
    "Vilnius",
    "Kaunas",
  ],
  openGraph: {
    title: "Užsisakyti nemokamą finansų konsultaciją",
    description:
      "Užsisakykite nemokamą finansų konsultaciją su Mantu Molotkovu. Individualizuotos konsultacijos investavimo, taupymo ir finansinio planavimo klausimais.",
  },
};

import { Footer } from "@/components/footer";
import { InternalHeader } from "@/components/internal-header";
import { ConsultationForm } from "@/components/consultation-form";

export default function ConsultationBooking() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <InternalHeader />

      {/* Form Section */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
