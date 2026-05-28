import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soulena Soul — Yoga & Movement Teacher | Phuket, Thailand",
  description:
    "Beach yoga classes, private sessions, sound healing, and mindful movement in Phuket, Thailand. Book your class with Soulena Soul.",
  keywords: [
    "yoga Phuket",
    "beach yoga Thailand",
    "private yoga class Phuket",
    "sound healing Phuket",
    "movement teacher Thailand",
    "Soulena Soul",
  ],
  openGraph: {
    title: "Soulena Soul — Yoga & Movement Teacher",
    description:
      "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand.",
    locale: "en_US",
    type: "website",
    siteName: "Soulena Soul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulena Soul — Yoga & Movement Teacher | Phuket",
    description:
      "Beach yoga, private sessions, and sound healing in Phuket, Thailand.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Soulena Soul — Yoga & Movement",
  description:
    "Beach yoga classes, private sessions, sound healing, and mindful movement in Phuket, Thailand.",
  email: "soulena.soul@gmail.com",
  telephone: "+66850350848",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },
  areaServed: {
    "@type": "Place",
    name: "Phuket, Thailand",
  },
  priceRange: "400-7500 THB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
