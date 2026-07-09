import type { Metadata } from "next";
import MoreAboutMeSection from "@/components/MoreAboutMeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";

export const metadata: Metadata = {
  title: "About Soulena — Yoga & Movement Teacher | Phuket, Thailand",
};

export default function AboutPage() {
  return (
    <>
      <MoreAboutMeSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}
