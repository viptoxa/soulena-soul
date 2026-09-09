import type { Metadata } from "next";
import PaymentSection from "@/components/PaymentSection";

export const metadata: Metadata = {
  title: "Payment — Soulena Soul | Phuket",
};

export default function PaymentPage() {
  return (
    <>
      <PaymentSection />
    </>
  );
}
