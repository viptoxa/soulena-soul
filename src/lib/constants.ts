export const SITE = {
  name: "Soulena Soul",
  tagline: "Yoga and Movement Teacher",
  description:
    "I create a soft space to help you move better, build awareness, and reconnect with balance.",
  email: "soulena.soul@gmail.com",
  phone: "+66850350848",
  phoneDisplay: "+66 85 035 0848",
  whatsappUrl: "https://wa.me/66850350848",
  instagram: "https://www.instagram.com/soulena_soul/",
  threads: "https://www.threads.com/@soulena_soul",
  instagramHandle: "@soulena_soul",
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
] as const;

// Multi-page routes (mirrors Soulena's Canva page structure).
export const ROUTES = {
  home: "/",
  about: "/about",
  classes: "/classes",
  booking: "/booking",
  pricing: "/pricing",
  payment: "/payment",
  contact: "/contact",
  sanctuary: "/sanctuary",
  inquiry: "/sanctuary/inquiry",
} as const;

export const LOCATIONS = [
  { name: "Patong Beach", lat: 7.8966, lng: 98.2963 },
  { name: "Kathu", lat: 7.9107, lng: 98.3348 },
  { name: "Karon Beach", lat: 7.846, lng: 98.2946 },
  { name: "Kata Beach", lat: 7.8206, lng: 98.2977 },
  { name: "Nai Harn Beach", lat: 7.7745, lng: 98.304 },
  { name: "Chalong", lat: 7.827, lng: 98.337 },
] as const;

// Map view centered on Phuket island
export const PHUKET_CENTER = { lat: 7.855, lng: 98.318, zoom: 11 } as const;
