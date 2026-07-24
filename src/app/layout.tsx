import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Lamonyx — Cibersegurança, Observabilidade e Continuidade de Negócios",
  description:
    "A Lamonyx integra tecnologias líderes (Fortinet, Cisco, Veeam) com Inteligência Artificial e Cloud Native para monitorar, proteger, automatizar e antecipar riscos em operações críticas.",
  keywords: [
    "Lamonyx",
    "Cibersegurança",
    "Observabilidade",
    "Continuidade de Negócios",
    "Fortinet",
    "Cisco",
    "Veeam",
    "Cloud Computing",
    "Containers",
    "Inteligência Artificial",
    "NOC/SOC",
  ],
  authors: [{ name: "Lamonyx Technologies" }],
  openGraph: {
    title: "Lamonyx — Ecossistemas Inteligentes de Cibersegurança & Continuidade",
    description:
      "Soluções integradas com Fortinet, Cisco e Veeam, impulsionadas por IA e Cloud Native para operações ultra-resilientes.",
    url: "https://lamonyx.com.br",
    siteName: "Lamonyx",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col bg-[#0a1420] text-[#e8eef4] font-body selection:bg-[#38C6D8] selection:text-[#0a1420]">
        {children}
      </body>
    </html>
  );
}
