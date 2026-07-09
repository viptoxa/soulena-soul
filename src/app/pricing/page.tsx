import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";
import PoliciesSection from "@/components/PoliciesSection";

export const metadata: Metadata = {
  title: "Pricing & Packages — Soulena Soul | Phuket",
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <PoliciesSection />
    </>
  );
}
