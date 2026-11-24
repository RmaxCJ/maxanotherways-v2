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
  title: "MaxAnotherWays | Rogelio M. Núñez Sánchez - Full Stack Developer",
  description:
    "Portafolio profesional de Rogelio M. Núñez Sánchez. Desarrollo Full Stack, arquitectura de soluciones y aplicaciones web a medida.",
  // Opcional: si guardaste tu logo/isotipo en /public/img/logo.png
  icons: {
    icon: "/img/logo.png",
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
