import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0d0d0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mongus-sandy.vercel.app"),
  title: {
    default: "Mongus — Sitio Oficial",
    template: "%s | Mongus",
  },
  description: "Artista, guitarrista y productor de la Ciudad de México. Música, archivo visual, diario y fechas en vivo.",
  keywords: ["Mongus", "guitarrista", "música", "rock", "productor", "Ciudad de México", "guitar lab", "cuerdas de guitarra"],
  authors: [{ name: "Mongus" }],
  creator: "Mongus",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://mongus-sandy.vercel.app",
    siteName: "Mongus Oficial",
    title: "Mongus — Sitio Oficial",
    description: "Canciones para los que todavía siguen despiertos. Música, archivo visual y recursos.",
    images: [
      {
        url: "/photos/hero-new.png",
        width: 1200,
        height: 630,
        alt: "Mongus en vivo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mongus — Sitio Oficial",
    description: "Canciones para los que todavía siguen despiertos. Música, archivo visual y recursos.",
    images: ["/photos/hero-new.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
