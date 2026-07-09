import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import BookingInquiry from "@/components/BookingInquiry";
import PoliciesSection from "@/components/PoliciesSection";

export const metadata: Metadata = {
  title: "Booking — Soulena Soul | Phuket",
};

export default function BookingPage() {
  return (
    <>
      {/* View available dates (Cal.com) */}
      <BookingSection />
      {/* Inquiry-based booking form -> WhatsApp */}
      <BookingInquiry />
      <PoliciesSection />
    </>
  );
}
