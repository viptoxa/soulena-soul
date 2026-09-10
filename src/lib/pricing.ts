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
  /** Newlines are honoured — she marks where a subtitle should break. */
  subtitle: string;
  /** Optional emphasis line, e.g. the 10% saving on the 5-times pack. */
  note?: string;
  /** Rendered inside parentheses under the subtitle. */
  validity?: string;
  priceTHB: number;
  /** Overrides the rendered price, for the tier that quotes three at once. */
  priceLabel?: string;
  /** Line-art illustration sitting under the subtitle, inside the card. */
  illustration?: { src: string; alt: string; maxWidthPx?: number };
  /**
   * Stripe Payment Link for this exact package. A tier without one simply shows
   * no card button; the other payment options on /payment still apply.
   */
  stripeUrl?: string;
  /**
   * Several Stripe links behind one button, for a tier priced per group size.
   * Takes precedence over stripeUrl.
   */
  cardOptions?: { label: string; url: string }[];
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
        illustration: {
          src: "/images/pkg-palm.png",
          alt: "Line drawing of palms on a beach with the sun over the water",
          // Squarer than the laptop drawing, so capped narrower to keep the
          // two cards' illustrations the same visual height.
          maxWidthPx: 84,
        },
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
    // "PACK" dropped 2026-09-09: the family now holds the single session too.
    name: "Private Session",
    blurb: "Personalized guidance | Deeper transformation | Flexible time & location",
    icon: "person",
    iconTone: "gold",
    tiers: [
      {
        id: "private-single",
        title: "Single Private Session",
        subtitle: "Your personalized\none-time session",
        validity: "1 person / 2 people / 3 people",
        // The card quotes all three rates, so the button opens the popup with
        // one Stripe link per group size rather than a single amount.
        priceTHB: 1400,
        priceLabel: "1,400 | 2,200 | 3,000 THB",
        cardOptions: [
          { label: "1 person", url: "https://buy.stripe.com/4gM5kwga07k53Ji2sL6Na0b" },
          { label: "2 people", url: "https://buy.stripe.com/bJe28k4ridItcfO0kD6Na0c" },
          { label: "3 people", url: "https://buy.stripe.com/00w28k4rieMxfs04AT6Na0d" },
        ],
      },
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
        subtitle: "For dedicated souls\nwho want it all!",
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
          src: "/images/pkg-online-laptop.png",
          alt: "Line drawing of a laptop showing someone seated in meditation, with a botanical sprig beside it",
        },
        priceTHB: 1200,
        stripeUrl: "https://buy.stripe.com/7sY28k4rigUF0x6c3l6Na08",
      },
      {
        id: "online-5",
        title: "5 Sessions Pack",
        subtitle: "Build consistency\nat your own pace",
        validity: "Valid for 45 days",
        priceTHB: 5200,
        stripeUrl: "https://buy.stripe.com/00weV6cXO5bXenW9Vd6Na09",
      },
      {
        id: "online-10",
        title: "10 Sessions Pack",
        subtitle: "Deepen your practice\nand progress",
        validity: "Valid for 75 days",
        priceTHB: 9500,
        stripeUrl: "https://buy.stripe.com/00w9AM5vmfQBfs00kD6Na0a",
      },
    ],
  },
];

/** True once at least one package has a live Stripe Payment Link. */
export const HAS_STRIPE_LINKS = PRICING.some((f) =>
  f.tiers.some((t) => t.stripeUrl || t.cardOptions?.length)
);
