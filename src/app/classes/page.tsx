import type { Metadata } from "next";
import LocationSection from "@/components/LocationSection";

export const metadata: Metadata = {
  title: "Classes — Weekend Beach, Private & Wellness Events | Soulena Soul",
};

export default function ClassesPage() {
  return (
    <>
      {/* TODO(v2): class detail blocks (Weekend Beach / Private / Group Hotel & Wellness) + Sanctuary teaser */}
      <LocationSection />
    </>
  );
}
