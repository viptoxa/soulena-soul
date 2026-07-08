import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";
import PaymentSection from "@/components/PaymentSection";
import PoliciesSection from "@/components/PoliciesSection";
import ContactSection from "@/components/ContactSection";
import { fetchPackages } from "@/lib/notion";

export const revalidate = 3600; // ISR: pricing comes from Notion

export default async function Home() {
  const packages = await fetchPackages();

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <LocationSection />
      <BookingSection />
      <PricingSection packages={packages} />
      <PaymentSection />
      <PoliciesSection />
      <ContactSection />
    </>
  );
}
