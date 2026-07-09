import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";
import PoliciesSection from "@/components/PoliciesSection";

export const metadata: Metadata = {
  title: "Booking — Soulena Soul | Phuket",
};

export default function BookingPage() {
  return (
    <>
      <BookingSection />
      <PoliciesSection />
    </>
  );
}
