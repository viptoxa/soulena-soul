import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Availability — Soulena Soul | Phuket",
  description:
    "See when Soulena's beach, private and online sessions are open, and book a time that suits you.",
};

/*
 * Stripped back to the calendar on 2026-09-09. Soulena removed the inquiry
 * form ("customers can always message us on WhatsApp or Instagram if they have
 * any questions") and the page title block with it, and moved Pricing +
 * Policies to the Packages page. The route stays /booking so links already
 * shared keep working; only the nav label reads Availability.
 */
export default function BookingPage() {
  return <BookingSection />;
}
