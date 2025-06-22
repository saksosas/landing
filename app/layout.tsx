import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mantas Molotkovas - Finansų konsultantas Lietuvoje",
    template: "%s | Mantas Molotkovas - Finansų konsultantas",
  },
  description:
    "Profesionalus finansų konsultantas Lietuvoje. Investavimo gidas, pinigų valdymas, būsto kredito konsultacijos, draudimo planavimas. Nemokamos konsultacijos Vilniuje ir Kaune.",
  keywords: [
    "finansų konsultantas",
    "investavimas",
    "būsto kreditas",
    "draudimas",
    "pinigų valdymas",
    "finansinis planavimas",
    "Vilnius",
    "Kaunas",
    "Lietuva",
  ],
  authors: [{ name: "Mantas Molotkovas" }],
  creator: "Mantas Molotkovas",
  publisher: "Mantas Molotkovas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mantasmolotkovas.lt"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mantas Molotkovas - Finansų konsultantas Lietuvoje",
    description:
      "Profesionalus finansų konsultantas Lietuvoje. Investavimo gidas, pinigų valdymas, būsto kredito konsultacijos, draudimo planavimas.",
    url: "https://mantasmolotkovas.lt",
    siteName: "Mantas Molotkovas - Finansų konsultantas",
    locale: "lt_LT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantas Molotkovas - Finansų konsultantas Lietuvoje",
    description:
      "Profesionalus finansų konsultantas Lietuvoje. Investavimo gidas, pinigų valdymas, būsto kredito konsultacijos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
