import type { Metadata } from "next";
import ClassPricingIntro from "@/components/ClassPricingIntro";
import ClassDetailBlock, { type ClassDetailData } from "@/components/ClassDetailBlock";
import GroupWellnessSection from "@/components/GroupWellnessSection";
import SanctuaryTeaser from "@/components/SanctuaryTeaser";
import LocationSection from "@/components/LocationSection";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Classes — Weekend Beach, Private & Wellness Events | Soulena Soul",
};

const WEEKEND_BEACH: ClassDetailData = {
  title: (
    <>
      Weekend Beach
      <br />
      Yoga &amp; Movement
    </>
  ),
  session: "60 minutes group session",
  includes: ["Yoga mat", "Yoga block", "1 bottle of water", "Session photos included"],
  about: [
    "Suitable for all levels with plenty of modifications offered.",
    "Movement-inspired sessions blending yoga, mobility & mindful flow.",
    "Taught in simple, easy-to-follow English.",
  ],
  sideBlocks: [
    { heading: "Available Areas", items: ["Karon Beach", "Nai Harn Beach"] },
    {
      heading: "Class Schedules",
      items: ["Saturday sunset yoga | 17:00 — 18:00", "Sunday morning yoga | 07:00 — 08:00"],
    },
    { heading: "Price", items: ["400 THB per person"] },
  ],
  note: (
    <>
      You&apos;re welcome to book your spot anytime.
      <br />— Class will be confirmed once minimum participants are reached.
    </>
  ),
  primaryCta: { label: "Reserve Your Spot", href: ROUTES.booking },
  secondaryCta: { label: "Explore Packages", href: ROUTES.pricing },
};

const PRIVATE_SESSION: ClassDetailData = {
  title: "Private Session",
  session: "60 minutes",
  includes: ["Yoga mat", "Yoga block", "1 bottle of water", "Session photos included"],
  about: [
    "Fully private and personalized sessions with supportive guidance and hands-on adjustments.",
    "Limited to 3 participants for a more personal experience.",
    "Available at your home, hotel, or the beach.",
  ],
  sideBlocks: [
    {
      heading: "Flexible time and location available in these areas:",
      items: [
        "Karon Beach",
        "Kata Beach",
        "Patong Beach",
        "Nai Harn Beach (+200 THB travel fee)",
        "Kathu",
        "Chalong",
      ],
    },
    {
      heading: "Price",
      items: [
        "1 person — 1,400 THB",
        "2 people — 2,200 THB",
        "3 people — 3,000 THB",
      ],
      footnote: "*Maximum 3 people",
    },
  ],
  primaryCta: { label: "Book a Private Session", href: ROUTES.booking },
  secondaryCta: { label: "Explore Packages", href: ROUTES.pricing },
};

export default function ClassesPage() {
  return (
    <>
      <ClassPricingIntro />
      <ClassDetailBlock data={WEEKEND_BEACH} className="bg-brand-cream" />
      <ClassDetailBlock data={PRIVATE_SESSION} className="bg-brand-olive/5" />
      <GroupWellnessSection />
      <SanctuaryTeaser />
      <LocationSection tone="olive" />
    </>
  );
}
