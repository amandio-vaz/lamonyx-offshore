import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lamonyx Technologies - Cibersegurança & NOC/SOC 24x7",
    short_name: "Lamonyx",
    description:
      "Integração de soluções de Cibersegurança, Observabilidade Inteligente e Continuidade de Negócios.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1420",
    theme_color: "#38C6D8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
