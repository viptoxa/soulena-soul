import type { Metadata } from "next";
import SanctuaryHero from "@/components/SanctuaryHero";
import SanctuaryMindBody from "@/components/SanctuaryMindBody";
import SanctuaryExperiences from "@/components/SanctuaryExperiences";

export const metadata: Metadata = {
  title: "Soul & Sound Sanctuary — Curated Private Wellness | Soulena Soul",
  description:
    "A curated private wellness experience for your special day and special person — yoga, meditation, and sound healing for weddings, birthdays, and meaningful celebrations in Phuket.",
};

export default function SanctuaryPage() {
  return (
    <>
      <SanctuaryHero />
      <SanctuaryMindBody />
      <SanctuaryExperiences />
    </>
  );
}
