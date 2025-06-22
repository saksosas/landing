import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mantas Molotkovas - Finansų konsultantas",
    short_name: "Mantas Molotkovas",
    description:
      "Profesionalus finansų konsultantas Lietuvoje. Investavimo gidas, pinigų valdymas, būsto kredito konsultacijos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    icons: [
      {
        src: "/logo-light.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
