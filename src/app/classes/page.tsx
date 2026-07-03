import type { Metadata } from "next";
import PricingSection from "@/components/PricingSection";
import { fetchPackages } from "@/lib/notion";

export const revalidate = 3600; // ISR: pricing comes from Notion

export const metadata: Metadata = {
  title: "Classes & Pricing — Soulena Soul | Phuket, Thailand",
};

export default async function ClassesPage() {
  const packages = await fetchPackages();

  return (
    <>
      <PricingSection packages={packages} />
    </>
  );
}
