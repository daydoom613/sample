import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickyHeader from "@/components/header/StickyHeader";
import Footer from "@/components/Footer";
import { getSiteUrl } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nature Guru Creations (NGC)",
    template: "%s | Nature Guru Creations",
  },
  description:
    "Nature Guru Creations is a filmmaking studio creating original films and series for global audiences, with world-class VFX & CG for international productions.",
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Nature Guru Creations",
    title: "Nature Guru Creations — The Science of Storytelling",
    description:
      "Original natural-history cinema, international VFX/CG, and an engineering-driven production pipeline.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature Guru Creations",
    description:
      "Filmmaking studio focused on originals, global VFX/CG, and story-first pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gray-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <header>
          <StickyHeader />
        </header>
        <main id="main-content" className="grow pt-20 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
