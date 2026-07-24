import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lamonyx-offshore.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0a1420",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lamonyx — Cibersegurança, Observabilidade e Continuidade de Negócios",
    template: "%s | Lamonyx Technologies",
  },
  description:
    "A Lamonyx constrói ecossistemas inteligentes integrando Cibersegurança Perimetral, Redes Enterprise, Backup Imutável e Inteligência Artificial preditiva para garantir alta disponibilidade em operações críticas.",
  keywords: [
    "Lamonyx",
    "Cibersegurança",
    "Observabilidade",
    "Continuidade de Negócios",
    "Segurança Perimetral",
    "Firewall NGFW",
    "Redes Enterprise",
    "Backup Imutável WORM",
    "Disaster Recovery",
    "Cloud Computing",
    "Containers Kubernetes",
    "Inteligência Artificial Preditiva",
    "NOC SOC 24x7",
    "Rio de Janeiro",
    "Macaé",
    "Campos dos Goytacazes",
    "Espírito Santo",
  ],
  authors: [{ name: "Lamonyx Technologies", url: siteUrl }],
  creator: "Lamonyx Technologies",
  publisher: "Lamonyx Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Lamonyx — Ecossistemas Inteligentes de Cibersegurança & Continuidade",
    description:
      "Soluções de alta resiliência integrando Segurança Perimetral, Redes Enterprise e Backup Imutável com Inteligência Artificial e Cloud Native.",
    url: siteUrl,
    siteName: "Lamonyx Technologies",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamonyx — Cibersegurança, Observabilidade & IA Preditiva",
    description:
      "Ecossistemas inteligentes que monitoram, protegem, automatizam e antecipam riscos em operações críticas.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
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
  // Structured Data (JSON-LD) for Search Engines
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lamonyx Technologies",
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
    description:
      "Integração de soluções de Cibersegurança Perimetral, Redes Enterprise, Backup Imutável e Inteligência Artificial para alta disponibilidade e resiliência operacional.",
    email: "contato@lamonyx.com.br",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Rio de Janeiro" },
      { "@type": "AdministrativeArea", name: "Macaé" },
      { "@type": "AdministrativeArea", name: "Campos dos Goytacazes" },
      { "@type": "AdministrativeArea", name: "Espírito Santo" },
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: [
      "Cibersegurança Perimetral",
      "Observabilidade & IA Preditiva",
      "Disaster Recovery & Backup Imutável",
      "Cloud Native & Kubernetes",
      "NOC/SOC Operação 24x7",
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lamonyx — NOC/SOC & Ecossistemas de Cibersegurança",
    url: siteUrl,
    serviceType: [
      "Cibersegurança Integrada",
      "Observabilidade Preditiva",
      "Continuidade de Negócios & DR",
      "Monitoramento NOC/SOC 24x7",
    ],
    provider: {
      "@type": "Organization",
      name: "Lamonyx Technologies",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
      data-theme="dark"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a1420] text-[#e8eef4] font-body selection:bg-[#38C6D8] selection:text-[#0a1420]">
        {children}
      </body>
    </html>
  );
}
