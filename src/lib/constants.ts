export const SITE = {
  name: "Soulena Soul",
  tagline: "Yoga and Movement Teacher",
  description:
    "I create a soft space to help you move better, build awareness, and reconnect with balance.",
  email: "soulena.soul@gmail.com",
  phone: "+66850350848",
  phoneDisplay: "+66 85 035 0848",
  whatsappUrl: "https://wa.me/66850350848",
  instagram: "https://www.instagram.com/soulena.soul",
  threads: "https://www.threads.net/@soulena.soul",
  instagramHandle: "@soulena.soul",
} as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  classes: "classes",
  gallery: "gallery",
  location: "location",
  booking: "booking",
  pricing: "pricing",
  payment: "payment",
  policies: "policies",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `#${SECTION_IDS.hero}` },
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Classes", href: `#${SECTION_IDS.classes}` },
  { label: "Booking", href: `#${SECTION_IDS.booking}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
] as const;

export const LOCATIONS = [
  "Patong Beach",
  "Kathu",
  "Karon Beach",
  "Kata Beach",
  "Nai Harn Beach",
  "Chalong",
] as const;
