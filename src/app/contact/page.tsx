import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Soulena Soul | Phuket, Thailand",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
