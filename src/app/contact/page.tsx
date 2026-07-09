import type { Metadata } from "next";
import ContactMapSection from "@/components/ContactMapSection";
import LocationSection from "@/components/LocationSection";

export const metadata: Metadata = {
  title: "Contact — Soulena Soul | Phuket, Thailand",
};

export default function ContactPage() {
  return (
    <>
      <ContactMapSection />
      <LocationSection />
    </>
  );
}
