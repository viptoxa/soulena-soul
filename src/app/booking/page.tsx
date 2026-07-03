import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import PaymentSection from "@/components/PaymentSection";
import PoliciesSection from "@/components/PoliciesSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Booking, Payment & Policies — Soulena Soul | Phuket",
};

export default function BookingPage() {
  return (
    <>
      <BookingSection />
      <PaymentSection />
      <PoliciesSection />
      <ContactSection />
    </>
  );
}
