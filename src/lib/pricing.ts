// v2 pricing — mirrors Soulena's Canva "Find the Package That Fits Your Flow"
// (page 8), which she redesigned on 2026-08-19: the per-card feature bullets
// were replaced by a single validity line, each family gained a one-line blurb
// and an icon, and the online tiers were renamed from "Class" to "Session".
//
// Prices are THB only — she asked to drop the USD approximations (2026-08-13)
// and Stripe shows each visitor the converted amount at checkout anyway.
//
// Two of her strings are typed differently here on purpose: "balace" and "BUID"
// are typos in the design.

export type FamilyIcon = "wave" | "person" | "duo" | "laptop";

/**
 * Badge colour. Soulena asked for the families to alternate green-yellow down
 * the page; the yellow is the exact gold of her lotus mark (#d69e30).
 */
export type IconTone = "green" | "gold";

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  /** Optional emphasis line, e.g. the 10% saving on the 5-times pack. */
  note?: string;
  /** Rendered inside parentheses under the subtitle. */
  validity?: string;
  priceTHB: number;
  /** Line-art illustration sitting under the subtitle, inside the card. */
  illustration?: { src: string; alt: string };
  /**
   * Stripe Payment Link for this exact package. A tier without one simply shows
   * no card button; the other payment options on /payment still apply.
   */
  stripeUrl?: string;
}

export interface PricingFamily {
  id: string;
  name: string;
  blurb: string;
  icon: FamilyIcon;
  iconTone: IconTone;
  tiers: PricingTier[];
}

export const PRICING: PricingFamily[] = [
  {
    id: "beach",
    name: "Beach Yoga & Movement Class",
    blurb: "Breathe in the ocean air | Move with ease | Suitable for all levels",
    icon: "wave",
    iconTone: "green",
    tiers: [
      {
        id: "beach-dropin",
        title: "Drop-in Class",
        subtitle: "Perfect for first-time visitors and mindful island stays",
        priceTHB: 400,
        stripeUrl: "https://buy.stripe.com/aFa5kwga05bX6Vuffx6Na00",
      },
      {
        id: "beach-3",
        title: "3 Times Pack",
        subtitle: "A mini journey to move, breathe, and reconnect",
        validity: "Valid for 30 days",
        priceTHB: 1100,
        stripeUrl: "https://buy.stripe.com/14A7sEcXOawh0x6ffx6Na02",
      },
      {
        id: "beach-5",
        title: "5 Times Pack",
        subtitle: "Build consistency and deepen your practice",
        note: "10% off regular price!",
        validity: "Valid for 60 days",
        priceTHB: 1800,
        stripeUrl: "https://buy.stripe.com/3cIeV6cXOfQB7Zy5EX6Na03",
      },
    ],
  },
  {
    id: "private",
    name: "Private Session Pack",
    blurb: "Personalized guidance | Deeper transformation | Flexible time & location",
    icon: "person",
    iconTone: "gold",
    tiers: [
      {
        id: "private-5",
        title: "5 Times Private Pack",
        subtitle: "Stay consistent and build your practice",
        validity: "Valid for 60 days",
        priceTHB: 5500,
        stripeUrl: "https://buy.stripe.com/cNi9AMe1SfQB3Ji9Vd6Na04",
      },
      {
        id: "private-10",
        title: "10 Times Private Pack",
        subtitle: "For dedicated souls who want it all!",
        validity: "Valid for 90 days",
        priceTHB: 10000,
        stripeUrl: "https://buy.stripe.com/7sY3co6zq6g10x60kD6Na05",
      },
    ],
  },
  {
    id: "duo",
    name: "Private Duo Pack",
    blurb: "Share the experience | Inspire each other | Flexible time & location",
    icon: "duo",
    iconTone: "green",
    tiers: [
      {
        id: "duo-5",
        title: "5 Times Duo Pack",
        subtitle: "A supportive practice for two",
        validity: "Valid for 60 days",
        priceTHB: 9000,
        stripeUrl: "https://buy.stripe.com/fZufZa9LCcEp0x69Vd6Na06",
      },
      {
        id: "duo-10",
        title: "10 Times Duo Pack",
        subtitle: "A shared journey of growth and balance",
        validity: "Valid for 90 days",
        priceTHB: 17000,
        stripeUrl: "https://buy.stripe.com/6oU7sEe1S5bXdjSffx6Na07",
      },
    ],
  },
  {
    id: "online",
    name: "1:1 Online Yoga & Movement",
    blurb: "Personalized practice from anywhere in the world!",
    icon: "laptop",
    iconTone: "gold",
    tiers: [
      {
        id: "online-single",
        title: "Single Session",
        subtitle: "A great place to start",
        illustration: {
          src: "/images/pkg-online-illustration.png",
          alt: "Line drawing of a laptop showing someone seated in meditation, with a botanical sprig beside it",
        },
        priceTHB: 1200,
        stripeUrl: "https://buy.stripe.com/7sY28k4rigUF0x6c3l6Na08",
      },
      {
        id: "online-5",
        title: "5 Sessions Pack",
        subtitle: "Build consistency at your own pace",
        validity: "Valid for 45 days",
        priceTHB: 5200,
        stripeUrl: "https://buy.stripe.com/00weV6cXO5bXenW9Vd6Na09",
      },
      {
        id: "online-10",
        title: "10 Sessions Pack",
        subtitle: "Deepen your practice and progress",
        validity: "Valid for 75 days",
        priceTHB: 9500,
        stripeUrl: "https://buy.stripe.com/00w9AM5vmfQBfs00kD6Na0a",
      },
    ],
  },
];

/** True once at least one package has a live Stripe Payment Link. */
export const HAS_STRIPE_LINKS = PRICING.some((f) => f.tiers.some((t) => t.stripeUrl));
