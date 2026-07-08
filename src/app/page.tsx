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

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <LocationSection />
      <BookingSection />
      <PricingSection />
      <PaymentSection />
      <PoliciesSection />
      <ContactSection />
    </>
  );
}
