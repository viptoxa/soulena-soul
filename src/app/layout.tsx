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
    "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand. Book your class with Soulena Soul.",
  openGraph: {
    title: "Soulena Soul — Yoga & Movement Teacher",
    description:
      "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
