import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "About Soulena — Yoga & Movement Teacher | Phuket, Thailand",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <GallerySection />
    </>
  );
}
