// v2 pricing — sourced from Soulena's finalized Canva ("FIND THE PACKAGE THAT FITS YOUR FLOW").
// Kept as a typed local structure for now so the section matches the design exactly.
// The shape mirrors a future Notion schema (Family / Tier / features / THB / validity)
// so pricing can migrate to Notion for self-service editing once numbers are locked.
//
// Prices are THB only: Soulena asked to drop the USD approximations (2026-08-13) —
// they cluttered the card and a hard-coded rate drifts. Stripe already shows each
// visitor the converted amount in their own currency at checkout.

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  priceTHB: number;
  highlight?: boolean; // gentle default emphasis (best value)
  /**
   * Stripe Payment Link for this exact package. Soulena creates them one at a
   * time in her Stripe dashboard and sends each over; a tier without a link
   * simply shows no card button (the other payment options still apply).
   */
  stripeUrl?: string;
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
        stripeUrl: "https://buy.stripe.com/aFa5kwga05bX6Vuffx6Na00",
      },
      {
        id: "beach-3",
        title: "3 Times Pack",
        subtitle: "A mini journey to move, breathe, and reconnect",
        features: ["Ideal for short stays", "Valid for 30 days"],
        priceTHB: 1100,
        stripeUrl: "https://buy.stripe.com/14A7sEcXOawh0x6ffx6Na02",
      },
      {
        id: "beach-5",
        title: "5 Times Pack",
        subtitle: "Build consistency and deepen your practice",
        features: ["10% off regular price!", "Valid for 60 days"],
        priceTHB: 1800,
        stripeUrl: "https://buy.stripe.com/3cIeV6cXOfQB7Zy5EX6Na03",
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
        stripeUrl: "https://buy.stripe.com/cNi9AMe1SfQB3Ji9Vd6Na04",
      },
      {
        id: "private-10",
        title: "10 Times Private Pack",
        subtitle: "For dedicated souls who want it all!",
        features: ["Designed for deeper transformation", "Build a consistent practice", "Valid for 90 days"],
        priceTHB: 10000,
        stripeUrl: "https://buy.stripe.com/7sY3co6zq6g10x60kD6Na05",
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
        stripeUrl: "https://buy.stripe.com/fZufZa9LCcEp0x69Vd6Na06",
      },
      {
        id: "duo-10",
        title: "10 Times Duo Pack",
        subtitle: "Grow together through practice",
        features: ["Designed for consistency & growth", "Personalized guidance for two", "Valid for 90 days"],
        priceTHB: 17000,
        stripeUrl: "https://buy.stripe.com/6oU7sEe1S5bXdjSffx6Na07",
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
        stripeUrl: "https://buy.stripe.com/7sY28k4rigUF0x6c3l6Na08",
      },
      {
        id: "online-5",
        title: "5-Class Pack",
        subtitle: "Build consistency at your own pace",
        features: ["Personalized coaching", "Flexible scheduling", "Valid for 45 days"],
        priceTHB: 5200,
        stripeUrl: "https://buy.stripe.com/00weV6cXO5bXenW9Vd6Na09",
      },
      {
        id: "online-10",
        title: "10-Class Pack",
        subtitle: "Deepen your practice and progress",
        features: ["Long-term guidance", "Tailored to your goals", "Valid for 75 days"],
        priceTHB: 9500,
        stripeUrl: "https://buy.stripe.com/00w9AM5vmfQBfs00kD6Na0a",
        highlight: true,
      },
    ],
  },
];

/** True once at least one package has a live Stripe Payment Link. */
export const HAS_STRIPE_LINKS = PRICING.some((f) => f.tiers.some((t) => t.stripeUrl));
