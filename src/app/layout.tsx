import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-source-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: site.title,
  description: `Nikah invitation for ${site.groom.name} & ${site.bride.name}`,
  openGraph: {
    title: site.title,
    description: `You are cordially invited to the Nikah of ${site.groom.name} & ${site.bride.name}`,
    url: site.siteUrl,
    siteName: site.title,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: `You are cordially invited to the Nikah of ${site.groom.name} & ${site.bride.name}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${amiri.variable} ${cormorant.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
