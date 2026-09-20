import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";

import { Aurora } from "@/components/Aurora";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

/* Las mismas dos familias que usa la app. */
const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Tu cuaderno de entrenamiento`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "registro de entrenamiento",
    "app de gimnasio",
    "rutinas",
    "récords personales",
    "correr",
    "offline",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    title: `${site.name} · Tu cuaderno de entrenamiento`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Tu cuaderno de entrenamiento`,
    description: site.description,
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0A0E0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${body.variable} ${condensed.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
        >
          Ir al contenido
        </a>
        <Aurora />
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
