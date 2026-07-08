// v2 pricing — sourced from Soulena's finalized Canva ("FIND THE PACKAGE THAT FITS YOUR FLOW").
// Kept as a typed local structure for now so the section matches the design exactly.
// The shape mirrors a future Notion schema (Family / Tier / features / THB / USD / validity)
// so pricing can migrate to Notion for self-service editing once numbers are locked.

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  priceTHB: number;
  priceUSD: string; // string keeps values like "35.8" exact
  highlight?: boolean; // gentle default emphasis (best value)
}

export interface PricingFamily {
  id: string;
  name: string;
  blurb?: string;
  tiers: PricingTier[];
}

export const PRICING: PricingFamily[] = [
  {
    id: "beach",
    name: "Beach Yoga & Movement Class",
    tiers: [
      {
        id: "beach-dropin",
        title: "Drop-in Class",
        subtitle: "Perfect for first-time visitors and mindful island stays",
        features: ["Mat included", "Suitable for all levels"],
        priceTHB: 400,
        priceUSD: "12",
      },
      {
        id: "beach-3",
        title: "3 Times Pack",
        subtitle: "A mini journey to move, breath, and reconnect",
        features: ["Ideal for short stays", "Valid for 30 days"],
        priceTHB: 1100,
        priceUSD: "33",
      },
      {
        id: "beach-5",
        title: "5 Times Pack",
        subtitle: "Build consistency and deepen your practice",
        features: ["10% off regular price!", "Valid for 60 days"],
        priceTHB: 1800,
        priceUSD: "55",
        highlight: true,
      },
    ],
  },
  {
    id: "private",
    name: "Private Session Pack",
    tiers: [
      {
        id: "private-5",
        title: "5 Times Private Pack",
        subtitle: "Stay consistent and build your practice",
        features: ["Personalized private sessions", "Flexible time & location", "Valid for 60 days"],
        priceTHB: 5500,
        priceUSD: "168",
      },
      {
        id: "private-10",
        title: "10 Times Private Pack",
        subtitle: "For dedicated souls who want it all!",
        features: ["Designed for deeper transformation", "Build a consistent practice", "Valid for 90 days"],
        priceTHB: 10000,
        priceUSD: "306",
        highlight: true,
      },
    ],
  },
  {
    id: "duo",
    name: "Private Duo Pack",
    tiers: [
      {
        id: "duo-5",
        title: "5 Times Duo Pack",
        subtitle: "A supportive practice for two",
        features: ["Shared private sessions", "Flexible time & location", "Valid for 60 days"],
        priceTHB: 9000,
        priceUSD: "275",
      },
      {
        id: "duo-10",
        title: "10 Times Duo Pack",
        subtitle: "Grow together through practice",
        features: ["Designed for consistency & growth", "Personalized guidance for two", "Valid for 90 days"],
        priceTHB: 17000,
        priceUSD: "520",
        highlight: true,
      },
    ],
  },
  {
    id: "online",
    name: "1:1 Online Yoga & Movement",
    tiers: [
      {
        id: "online-single",
        title: "Single Class",
        subtitle: "A great place to start",
        features: ["Personalized guidance", "Yoga, mobility & strength", "Connect via Google Meet"],
        priceTHB: 1200,
        priceUSD: "35.8",
      },
      {
        id: "online-5",
        title: "5-Class Pack",
        subtitle: "Build consistency at your own pace",
        features: ["Personalized coaching", "Flexible scheduling", "Valid for 45 days"],
        priceTHB: 5200,
        priceUSD: "155",
      },
      {
        id: "online-10",
        title: "10-Class Pack",
        subtitle: "Deepen your practice and progress",
        features: ["Long-term guidance", "Tailored to your goals", "Valid for 75 days"],
        priceTHB: 9500,
        priceUSD: "284",
        highlight: true,
      },
    ],
  },
];
