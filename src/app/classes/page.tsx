import type { Metadata } from "next";
import ClassPricingIntro from "@/components/ClassPricingIntro";
import ClassDetailBlock, { type ClassDetailData } from "@/components/ClassDetailBlock";
import GroupWellnessSection from "@/components/GroupWellnessSection";
import SanctuaryTeaser from "@/components/SanctuaryTeaser";
import LocationSection from "@/components/LocationSection";
import { ROUTES } from "@/lib/constants";
import {
  PersonIcon,
  ChatIcon,
  CameraIcon,
  GroupIcon,
  VillaIcon,
  PinIcon,
  CalendarGridIcon,
  TagIcon,
} from "@/components/icons/ClassIcons";

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
  tagline: (
    <>
      Move with the ocean. Breathe with the breeze.
      <br />
      Reconnect with yourself by the sea.
    </>
  ),
  chips: [
    { label: "All levels welcome", Icon: PersonIcon },
    { label: "English-friendly", Icon: ChatIcon },
    { label: "Photo included", Icon: CameraIcon },
  ],
  photos: [
    {
      src: "/images/class-beach-v3.jpg",
      alt: "A group practising yoga on the sand at sunset, facing the sea",
    },
  ],
  session: (
    <>
      60 minutes
      <br />
      group session
    </>
  ),
  includes: ["Yoga mat", "Yoga block", "1 bottle of water", "Session photos included"],
  about: [
    "Suitable for all levels with plenty of modifications offered.",
    "Movement-inspired sessions blending yoga, mobility & flow.",
    "Taught in simple, easy-to-follow English.",
  ],
  sideBlocks: [
    { heading: "Available Areas", Icon: PinIcon, items: ["Karon Beach", "Nai Harn Beach"] },
    {
      heading: "Class Schedules",
      Icon: CalendarGridIcon,
      items: ["Saturday sunset yoga | 17:00 — 18:00", "Sunday morning yoga | 07:00 — 08:00"],
    },
    {
      heading: "Price",
      Icon: TagIcon,
      items: ["400 THB per person"],
    },
  ],
  note: (
    <>
      You&apos;re welcome to book your spot anytime.
      <br />— Class will be confirmed once minimum participants are reached.
    </>
  ),
  primaryCta: { label: "Explore Packages", href: ROUTES.pricing },
  secondaryCta: { label: "Check Availability", href: ROUTES.booking },
};

const PRIVATE_SESSION: ClassDetailData = {
  title: "Private Session",
  tagline: (
    <>
      Your practice, your space, your time.
      <br />A fully private yoga experience just for you.
    </>
  ),
  chips: [
    { label: "Personalized guidance", Icon: PersonIcon },
    { label: "Up to 3 people", Icon: GroupIcon },
    { label: "Home / Hotel / Beach", Icon: VillaIcon },
  ],
  photos: [
    {
      src: "/images/class-private-v3-1.jpg",
      alt: "Soulena guiding two students through a forward fold on a terrace",
    },
    { src: "/images/class-private-v3-2.jpg", alt: "Three students seated on mats on a terrace" },
  ],
  session: (
    <>
      60 minutes
      <br />
      private session
    </>
  ),
  includes: ["Yoga mat", "Yoga block", "1 bottle of water", "Session photos included"],
  about: [
    "Fully private and personalized sessions with supportive guidance and hands-on adjustments.",
    "Limited to 3 participants for a more personal experience.",
    "Available at your home, hotel, or the beach.",
  ],
  sideLayout: "pair",
  sideBlocks: [
    {
      heading: (
        <>
          Flexible time &amp; location
          <br />
          available in these areas:
        </>
      ),
      Icon: PinIcon,
      // Listed row-major so the two rendered columns read the way she set them
      // out: Kathu / Karon / Kata on the left, Patong / Nai Harn / Chalong on
      // the right. The Nai Harn travel fee is gone at her request (2026-09-09)
      // — "I'm okay with covering the travel costs to Nai Harn myself for now".
      columns: 2,
      items: ["Kathu", "Patong", "Karon", "Nai Harn", "Kata", "Chalong"],
    },
    {
      heading: "Price",
      Icon: TagIcon,
      items: ["1 person — 1,400 THB", "2 people — 2,200 THB", "3 people — 3,000 THB"],
      footnote: "*Maximum 3 people",
    },
  ],
  primaryCta: { label: "Explore Packages", href: ROUTES.pricing },
  secondaryCta: { label: "Check Availability", href: ROUTES.booking },
};

export default function ClassesPage() {
  return (
    <>
      <ClassPricingIntro />
      <ClassDetailBlock data={WEEKEND_BEACH} />
      <ClassDetailBlock data={PRIVATE_SESSION} />
      <GroupWellnessSection />
      <SanctuaryTeaser />
      <LocationSection tone="olive" />
    </>
  );
}
