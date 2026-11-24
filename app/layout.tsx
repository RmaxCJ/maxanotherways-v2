import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxanotherways.vercel.app"),
  title: "MaxAnotherWays | Rogelio M. Núñez Sánchez - Full Stack Developer",
  description:
    "Desarrollo web a medida, sistemas escalables y presencia digital profesional en Lima y México.",
  openGraph: {
    title: "MaxAnotherWays | Desarrollo Web & Soluciones Digitales",
    description:
      "Creamos páginas web rápidas, modernas y orientadas a resultados para negocios y empresas.",
    url: "https://maxanotherways.vercel.app",
    siteName: "MaxAnotherWays",
    images: [
      {
        url: "/opengraph-image.png", // O la ruta en /public/img/og-preview.png
        width: 1200,
        height: 630,
        alt: "MaxAnotherWays - Desarrollo Web",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxAnotherWays | Desarrollo Web",
    description:
      "Páginas web rápidas y profesionales para negocios y empresas.",
    images: ["/opengraph-image.png"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
