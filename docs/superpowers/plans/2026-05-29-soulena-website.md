# Soulena Soul Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page yoga website for Soulena Soul with Cal.com booking, Notion-powered pricing, and a warm earthy design.

**Architecture:** Next.js 15 App Router with static generation for most content and ISR for Notion-powered pricing section. Cal.com embedded for booking. Notion API for dynamic package data. All static sections use placeholder images until real photos arrive.

**Tech Stack:** Next.js 15, Tailwind CSS 4, @notionhq/client, @calcom/embed-react, next/image

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, global styles
│   ├── page.tsx                # Main page: composes all sections, fetches Notion data
│   ├── globals.css             # Tailwind directives + custom CSS variables
│   └── api/
│       └── revalidate/
│           └── route.ts        # On-demand ISR revalidation endpoint
├── components/
│   ├── Header.tsx              # Sticky header: WhatsApp, email, social icons
│   ├── HeroSlider.tsx          # Hero section: background slider, avatar, CTAs
│   ├── AboutSection.tsx        # About / Move section
│   ├── ClassesSection.tsx      # Classes overview section
│   ├── GallerySection.tsx      # Working space photo gallery
│   ├── LocationSection.tsx     # Phuket map + beach locations
│   ├── BookingSection.tsx      # Cal.com embed wrapper
│   ├── PricingSection.tsx      # Packages & Pricing (Notion data)
│   ├── PaymentSection.tsx      # Payment methods info
│   ├── PoliciesSection.tsx     # Pricing & Policies
│   ├── ContactSection.tsx      # Contact + Google Maps
│   ├── Footer.tsx              # Footer nav + social + copyright
│   └── icons/
│       └── SocialIcons.tsx     # WhatsApp, Instagram, Threads, Email, Flower SVGs
├── lib/
│   ├── notion.ts               # Notion client + fetchPackages()
│   └── constants.ts            # Site-wide constants (contact info, section IDs, etc.)
├── types/
│   └── index.ts                # Package type definition
public/
├── images/
│   ├── hero-1.jpg              # Placeholder hero images (replace with real photos)
│   ├── hero-2.jpg
│   ├── hero-3.jpg
│   ├── avatar.jpg              # Soulena's circular avatar
│   ├── about.jpg               # About section photo
│   ├── gallery-1.jpg           # Gallery placeholder images
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   ├── gallery-4.jpg
│   ├── phuket-map.jpg          # Phuket location map
│   └── flower-icon.svg         # ✿ brand element
tailwind.config.ts              # Tailwind config: custom colors, fonts
next.config.ts                  # Next.js config: images, env
.env.local                      # NOTION_API_KEY, NOTION_PACKAGES_DB_ID
package.json
tsconfig.json
```

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Initialize Next.js project**

Run from `/Users/anton/Desktop/Soulena project`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

When prompted, accept defaults. This creates the full Next.js scaffold with Tailwind CSS.

- [ ] **Step 2: Verify the scaffold runs**

```bash
npm run dev
```

Expected: dev server starts on http://localhost:3000, shows default Next.js page.

Stop the dev server (Ctrl+C).

- [ ] **Step 3: Configure Tailwind with custom design tokens**

Replace `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          olive: "#8b7355",
          "olive-dark": "#6b5b3e",
          cream: "#f5f0e8",
          "cream-dark": "#e8e0d0",
          charcoal: "#2d2a26",
          sage: "#7a8b6f",
          "sage-light": "#9aab8f",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Set up global styles and fonts**

Replace `src/app/globals.css` with:

```css
@import "tailwindcss";

@theme {
  --color-brand-olive: #8b7355;
  --color-brand-olive-dark: #6b5b3e;
  --color-brand-cream: #f5f0e8;
  --color-brand-cream-dark: #e8e0d0;
  --color-brand-charcoal: #2d2a26;
  --color-brand-sage: #7a8b6f;
  --color-brand-sage-light: #9aab8f;

  --font-serif: "Playfair Display", Georgia, serif;
  --font-sans: "Inter", system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  color: var(--color-brand-charcoal);
  background-color: var(--color-brand-cream);
}
```

- [ ] **Step 5: Set up root layout with Google Fonts**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soulena Soul — Yoga & Movement Teacher | Phuket, Thailand",
  description:
    "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand. Book your class with Soulena Soul.",
  openGraph: {
    title: "Soulena Soul — Yoga & Movement Teacher",
    description:
      "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Create placeholder page**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main>
      <p className="p-8 font-serif text-2xl text-brand-olive">
        Soulena Soul — coming soon
      </p>
    </main>
  );
}
```

- [ ] **Step 7: Verify fonts and colors work**

```bash
npm run dev
```

Expected: http://localhost:3000 shows "Soulena Soul — coming soon" in Playfair Display serif font, olive color, on cream background.

Stop the dev server.

- [ ] **Step 8: Commit scaffold**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 project with Tailwind and design tokens"
```

---

### Task 2: Constants, Types, and Icon Components

**Files:**
- Create: `src/lib/constants.ts`
- Create: `src/types/index.ts`
- Create: `src/components/icons/SocialIcons.tsx`
- Create: `public/images/flower-icon.svg`

- [ ] **Step 1: Create site constants**

Create `src/lib/constants.ts`:

```ts
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
```

- [ ] **Step 2: Create type definitions**

Create `src/types/index.ts`:

```ts
export interface Package {
  id: string;
  name: string;
  category: "Group" | "Private";
  priceTHB: number;
  priceUSD: number;
  description: string;
  features: string[];
  order: number;
  active: boolean;
}
```

- [ ] **Step 3: Create SVG icon components**

Create `src/components/icons/SocialIcons.tsx`:

```tsx
import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function ThreadsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.34-.775-.95-1.416-1.755-1.88-.254 1.794-.939 3.2-2.046 4.156-1.243 1.074-2.89 1.554-4.644 1.485-1.378-.06-2.574-.535-3.456-1.384-.941-.904-1.476-2.149-1.505-3.505-.032-1.49.545-2.8 1.626-3.688 1.042-.855 2.483-1.32 4.056-1.308 1.267.009 2.395.268 3.362.772.02-1.047-.177-1.863-.59-2.435-.494-.685-1.31-1.04-2.428-1.058-1.59.008-2.626.605-3.079 1.083l-1.39-1.498C8.028 4.548 9.681 3.762 12 3.741c1.785.014 3.162.58 4.09 1.685.888 1.053 1.335 2.554 1.326 4.463v.142c1.063.593 1.893 1.46 2.385 2.578.752 1.713.806 4.46-1.248 6.474-1.82 1.787-4.07 2.66-7.363 2.688l-.004-.001zm-.628-7.872c-1.725-.065-3.387.589-3.357 2.345.015.884.376 1.6.985 2.066.625.479 1.456.681 2.3.717 1.266.048 2.382-.29 3.21-1.005.757-.653 1.26-1.621 1.472-2.895-.864-.476-1.89-.726-3.065-.735-.518-.003-1.033.034-1.545.108v-.601z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

export function FlowerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" {...props}>
      <circle cx="20" cy="20" r="4" />
      <ellipse cx="20" cy="10" rx="4" ry="7" />
      <ellipse cx="20" cy="30" rx="4" ry="7" />
      <ellipse cx="10" cy="20" rx="7" ry="4" />
      <ellipse cx="30" cy="20" rx="7" ry="4" />
      <ellipse cx="12.93" cy="12.93" rx="4" ry="7" transform="rotate(45 12.93 12.93)" />
      <ellipse cx="27.07" cy="27.07" rx="4" ry="7" transform="rotate(45 27.07 27.07)" />
      <ellipse cx="27.07" cy="12.93" rx="4" ry="7" transform="rotate(-45 27.07 12.93)" />
      <ellipse cx="12.93" cy="27.07" rx="4" ry="7" transform="rotate(-45 12.93 27.07)" />
    </svg>
  );
}
```

- [ ] **Step 4: Create flower SVG for public assets**

Create `public/images/flower-icon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#f5f0e8">
  <circle cx="20" cy="20" r="4"/>
  <ellipse cx="20" cy="10" rx="4" ry="7"/>
  <ellipse cx="20" cy="30" rx="4" ry="7"/>
  <ellipse cx="10" cy="20" rx="7" ry="4"/>
  <ellipse cx="30" cy="20" rx="7" ry="4"/>
  <ellipse cx="12.93" cy="12.93" rx="4" ry="7" transform="rotate(45 12.93 12.93)"/>
  <ellipse cx="27.07" cy="27.07" rx="4" ry="7" transform="rotate(45 27.07 27.07)"/>
  <ellipse cx="27.07" cy="12.93" rx="4" ry="7" transform="rotate(-45 27.07 12.93)"/>
  <ellipse cx="12.93" cy="27.07" rx="4" ry="7" transform="rotate(-45 12.93 27.07)"/>
</svg>
```

- [ ] **Step 5: Commit constants, types, and icons**

```bash
git add src/lib/constants.ts src/types/index.ts src/components/icons/SocialIcons.tsx public/images/flower-icon.svg
git commit -m "feat: add site constants, types, and SVG icon components"
```

---

### Task 3: Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build the sticky header**

Create `src/components/Header.tsx`:

```tsx
"use client";

import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { WhatsAppIcon, MailIcon, InstagramIcon, ThreadsIcon } from "@/components/icons/SocialIcons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-cream-dark">
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
        {/* Contact info */}
        <div className="flex items-center gap-4">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 text-sm text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE.email}</span>
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-charcoal hover:text-brand-olive transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href={SITE.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-brand-charcoal hover:text-brand-olive transition-colors">
            <ThreadsIcon className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 md:hidden text-brand-charcoal"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-brand-cream-dark bg-brand-cream px-4 py-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1.5 text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Wire header into the page**

Replace `src/app/page.tsx` with:

```tsx
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <p className="p-8 font-serif text-2xl text-brand-olive">
          Sections coming soon...
        </p>
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify header renders**

```bash
npm run dev
```

Expected: Sticky header with WhatsApp, email, Instagram, Threads icons. On mobile viewport, hamburger menu shows navigation links. Stop dev server.

- [ ] **Step 4: Commit header**

```bash
git add src/components/Header.tsx src/app/page.tsx
git commit -m "feat: add sticky header with contact info and mobile nav"
```

---

### Task 4: Hero Slider Section

**Files:**
- Create: `src/components/HeroSlider.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Generate placeholder hero images**

```bash
mkdir -p "/Users/anton/Desktop/Soulena project/public/images"
```

Create 3 placeholder gradient images using a simple script. We'll create them as inline data for now — they'll be replaced with real photos tomorrow.

Create `scripts/generate-placeholders.mjs`:

```js
import { writeFileSync, mkdirSync } from "fs";

mkdirSync("public/images", { recursive: true });

// Generate simple SVG placeholders for hero images
const placeholders = [
  { name: "hero-1.svg", gradient: ["#c9a96e", "#8b7355"], label: "Sunset Yoga" },
  { name: "hero-2.svg", gradient: ["#6b7b6e", "#4a5a4e"], label: "Ocean Calm" },
  { name: "hero-3.svg", gradient: ["#a08060", "#7a6050"], label: "Beach Rocks" },
  { name: "avatar.svg", gradient: ["#d4c5b0", "#b0a090"], label: "Avatar" },
  { name: "about.svg", gradient: ["#8b9b7e", "#6b7b5e"], label: "About" },
  { name: "gallery-1.svg", gradient: ["#c9a96e", "#a08060"], label: "Gallery 1" },
  { name: "gallery-2.svg", gradient: ["#6b7b6e", "#8b9b7e"], label: "Gallery 2" },
  { name: "gallery-3.svg", gradient: ["#a08060", "#c9a96e"], label: "Gallery 3" },
  { name: "gallery-4.svg", gradient: ["#8b7355", "#6b5b3e"], label: "Gallery 4" },
  { name: "phuket-map.svg", gradient: ["#d4c5b0", "#c9a96e"], label: "Phuket Map" },
];

for (const p of placeholders) {
  const isAvatar = p.name === "avatar.svg";
  const w = isAvatar ? 200 : 1200;
  const h = isAvatar ? 200 : 800;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" style="stop-color:${p.gradient[0]}"/>
    <stop offset="100%" style="stop-color:${p.gradient[1]}"/>
  </linearGradient></defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="${isAvatar ? 16 : 32}" fill="rgba(255,255,255,0.6)">${p.label}</text>
</svg>`;
  writeFileSync(`public/images/${p.name}`, svg);
}

console.log("Placeholder images generated.");
```

Run:

```bash
node scripts/generate-placeholders.mjs
```

Expected: "Placeholder images generated." and SVG files in `public/images/`.

- [ ] **Step 2: Build the hero slider component**

Create `src/components/HeroSlider.tsx`:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const HERO_IMAGES = [
  { src: "/images/hero-1.svg", alt: "Sunset yoga session on the beach" },
  { src: "/images/hero-2.svg", alt: "Calm ocean waves during practice" },
  { src: "/images/hero-3.svg", alt: "Yoga on beach rocks at golden hour" },
];

const CLASS_TYPES = [
  { label: "BEACH YOGA CLASS", type: "beach-yoga" },
  { label: "PRIVATE CLASS", type: "private" },
  { label: "PRIVATE EVENT", type: "event" },
  { label: "SOUL & SOUND", type: "soul-sound" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id={SECTION_IDS.hero} className="relative w-full h-[100svh] min-h-[600px] overflow-hidden">
      {/* Background slides */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-brand-olive/40" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Avatar */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 mb-4">
          <Image
            src="/images/avatar.svg"
            alt="Soulena Soul"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Flower icon */}
        <FlowerIcon className="w-8 h-8 mb-4 opacity-80" />

        {/* Heading */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wider mb-2">
          HELLO, I&apos;M SOULENA SOUL
        </h1>

        {/* Divider line */}
        <div className="w-px h-8 bg-white/50 my-4" />

        {/* Subtitle */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-2">
          {SITE.tagline}
        </p>
        <p className="text-sm md:text-lg max-w-2xl opacity-90 mb-8">
          {SITE.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {CLASS_TYPES.map((ct) => (
            <a
              key={ct.type}
              href={`#${SECTION_IDS.booking}`}
              className="border border-white/60 rounded-full px-5 py-2 text-xs md:text-sm tracking-wider uppercase hover:bg-white/20 transition-colors"
            >
              {ct.label}
            </a>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add hero to the page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify hero slider**

```bash
npm run dev
```

Expected: Full-screen hero with gradient placeholder background, avatar circle, "HELLO, I'M SOULENA SOUL" heading, 4 CTA pill buttons, dot indicators. Background auto-rotates every 6 seconds with crossfade. Stop dev server.

- [ ] **Step 5: Commit hero slider**

```bash
git add scripts/generate-placeholders.mjs public/images/ src/components/HeroSlider.tsx src/app/page.tsx
git commit -m "feat: add hero slider with auto-rotating backgrounds and CTA buttons"
```

---

### Task 5: About and Classes Sections

**Files:**
- Create: `src/components/AboutSection.tsx`
- Create: `src/components/ClassesSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build the About section**

Create `src/components/AboutSection.tsx`:

```tsx
import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-2 uppercase tracking-wider">
            Move
          </h2>
          <p className="font-serif text-lg text-brand-olive italic mb-6">
            where island breeze and ocean calm meet
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Are you looking for a way to reconnect with yourself through movement, breath,
            fresh air, and the rhythm of nature?
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            I&apos;m Soulena Soul, a yoga and movement teacher based in Phuket, Thailand,
            helping people build strength, mobility, and deeper body awareness through
            mindful movement.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            Still evolving in her teaching journey, Soulena brings a gentle and intentional
            approach to every class — creating a soft space inspired by island life in Phuket
            where students can breathe, move, explore, and simply be.
          </p>
          <a
            href={`#${SECTION_IDS.booking}`}
            className="inline-block border-2 border-brand-olive text-brand-olive rounded-full px-8 py-3 text-sm uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
          >
            Join My Classes
          </a>
        </div>

        {/* Image column */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/about.svg"
            alt="Soulena practicing yoga on the beach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build the Classes section**

Create `src/components/ClassesSection.tsx`:

```tsx
import { SECTION_IDS } from "@/lib/constants";

const CLASS_OFFERINGS = [
  {
    title: "Yoga & Mobility",
    description: "Mindful movement to improve flexibility, strength, and body awareness.",
  },
  {
    title: "Strength Training",
    description: "Build functional strength through intentional, guided exercises.",
  },
  {
    title: "Guided Meditation",
    description: "Calm your mind and find stillness through breath and meditation.",
  },
  {
    title: "Sound Healing",
    description: "Immersive sound experiences to restore balance and inner peace.",
  },
];

export default function ClassesSection() {
  return (
    <section id={SECTION_IDS.classes} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider mb-4">
            Let&apos;s Practice Together
          </h2>
          <p className="text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            A calming and immersive wellness experience blending yoga, meditation,
            and sound healing — thoughtfully curated for weddings, birthdays, retreats,
            and meaningful celebrations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASS_OFFERINGS.map((offering) => (
            <div
              key={offering.title}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <h3 className="font-serif text-lg text-brand-olive mb-2">
                {offering.title}
              </h3>
              <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`#${SECTION_IDS.about}`}
            className="text-sm text-brand-olive underline underline-offset-4 hover:text-brand-olive-dark transition-colors uppercase tracking-wider"
          >
            Read More About Soulena →
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add both sections to page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ClassesSection />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify sections render**

```bash
npm run dev
```

Expected: After hero, the About section shows two-column layout (text + placeholder image), then Classes section shows 4-card grid. Scroll navigation works. Stop dev server.

- [ ] **Step 5: Commit About and Classes sections**

```bash
git add src/components/AboutSection.tsx src/components/ClassesSection.tsx src/app/page.tsx
git commit -m "feat: add About and Classes sections with content from Canva"
```

---

### Task 6: Gallery and Location Sections

**Files:**
- Create: `src/components/GallerySection.tsx`
- Create: `src/components/LocationSection.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build the gallery section**

Create `src/components/GallerySection.tsx`:

```tsx
import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.svg", alt: "Beach yoga session at sunset" },
  { src: "/images/gallery-2.svg", alt: "Peaceful morning practice by the sea" },
  { src: "/images/gallery-3.svg", alt: "Group yoga on Phuket beach" },
  { src: "/images/gallery-4.svg", alt: "Meditation by the ocean" },
];

export default function GallerySection() {
  return (
    <section id={SECTION_IDS.gallery} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-12">
          A Glimpse Into My Working Space
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build the location section**

Create `src/components/LocationSection.tsx`:

```tsx
import Image from "next/image";
import { SECTION_IDS, LOCATIONS } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section id={SECTION_IDS.location} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider mb-2">
            Based in Phuket, Thailand
          </h2>
          <p className="text-brand-charcoal/70 mb-8 leading-relaxed">
            Classes take place at beautiful beach locations across Phuket island.
          </p>
          <ul className="space-y-3">
            {LOCATIONS.map((location) => (
              <li key={location} className="flex items-center gap-3 text-brand-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-sage flex-shrink-0" />
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Map image column */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-cream-dark">
          <Image
            src="/images/phuket-map.svg"
            alt="Map of Phuket showing yoga class locations"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ClassesSection />
        <GallerySection />
        <LocationSection />
      </main>
    </>
  );
}
```

- [ ] **Step 4: Verify gallery and location**

```bash
npm run dev
```

Expected: Gallery shows a masonry-style grid (first image large, rest smaller). Location section shows list of beaches beside a map placeholder. Stop dev server.

- [ ] **Step 5: Commit gallery and location**

```bash
git add src/components/GallerySection.tsx src/components/LocationSection.tsx src/app/page.tsx
git commit -m "feat: add gallery and location sections"
```

---

### Task 7: Booking Section (Cal.com Embed)

**Files:**
- Create: `src/components/BookingSection.tsx`
- Modify: `src/app/page.tsx`
- Modify: `package.json` (install @calcom/embed-react)

- [ ] **Step 1: Install Cal.com embed package**

```bash
npm install @calcom/embed-react
```

- [ ] **Step 2: Build the booking section**

Create `src/components/BookingSection.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export default function BookingSection() {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load Cal.com embed script
    // Cal.com username will be configured via env var
    const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;
    if (!calUsername) {
      setCalLoaded(true); // Show placeholder
      return;
    }

    import("@calcom/embed-react").then(() => {
      setCalLoaded(true);
    });
  }, []);

  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;

  return (
    <section id={SECTION_IDS.booking} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider mb-4">
            View Available Dates
          </h2>
          <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
            Whether you&apos;re joining a beach yoga class, booking a private session,
            or planning a special wellness gathering, each experience is thoughtfully
            designed with care and attention to your needs.
          </p>
        </div>

        {/* Cal.com embed or placeholder */}
        <div className="rounded-2xl overflow-hidden bg-white/60 min-h-[500px] flex items-center justify-center">
          {calUsername ? (
            <iframe
              src={`https://cal.com/${calUsername}?embed=true&theme=light`}
              className="w-full h-[600px] border-0"
              title="Book a class with Soulena Soul"
            />
          ) : (
            <div className="text-center p-12">
              <p className="font-serif text-xl text-brand-olive mb-4">
                Booking Calendar
              </p>
              <p className="text-brand-charcoal/60 text-sm mb-6">
                Cal.com calendar will appear here once configured.
              </p>
              <p className="text-brand-charcoal/40 text-xs">
                Set <code className="bg-brand-cream-dark px-1 rounded">NEXT_PUBLIC_CAL_USERNAME</code> in .env.local
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-brand-charcoal/60">
            Simply fill out the booking form and I&apos;ll get back to you as soon as possible.
          </p>
          <p className="text-sm text-brand-charcoal/40 mt-1 italic">
            With love, Soulena Soul
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create .env.local template**

Create `.env.local.example`:

```
# Cal.com
NEXT_PUBLIC_CAL_USERNAME=

# Notion
NOTION_API_KEY=
NOTION_PACKAGES_DB_ID=
```

- [ ] **Step 4: Add to page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ClassesSection />
        <GallerySection />
        <LocationSection />
        <BookingSection />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify booking placeholder**

```bash
npm run dev
```

Expected: Booking section shows placeholder text ("Cal.com calendar will appear here once configured") since no env var is set. Stop dev server.

- [ ] **Step 6: Commit booking section**

```bash
git add src/components/BookingSection.tsx .env.local.example src/app/page.tsx
git commit -m "feat: add booking section with Cal.com embed placeholder"
```

---

### Task 8: Notion Integration + Pricing Section

**Files:**
- Create: `src/lib/notion.ts`
- Create: `src/components/PricingSection.tsx`
- Modify: `src/app/page.tsx`
- Modify: `package.json` (install @notionhq/client)

- [ ] **Step 1: Install Notion client**

```bash
npm install @notionhq/client
```

- [ ] **Step 2: Build Notion data fetcher**

Create `src/lib/notion.ts`:

```ts
import { Client } from "@notionhq/client";
import type { Package } from "@/types";

const notion = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null;

// Fallback data used when Notion is not configured
const FALLBACK_PACKAGES: Package[] = [
  {
    id: "fallback-1",
    name: "Drop-in Class",
    category: "Group",
    priceTHB: 400,
    priceUSD: 12,
    description: "Perfect for first-time visitors or slow island mornings",
    features: ["Single session", "Suitable for all levels"],
    order: 1,
    active: true,
  },
  {
    id: "fallback-2",
    name: "5 Times Pack",
    category: "Group",
    priceTHB: 1800,
    priceUSD: 50,
    description: "Build consistency and deepen your practice",
    features: ["5 group sessions", "Valid for 2 months"],
    order: 2,
    active: true,
  },
  {
    id: "fallback-3",
    name: "5 Times Private Pack",
    category: "Private",
    priceTHB: 4200,
    priceUSD: 126,
    description: "Stay consistent and build your practice",
    features: ["5 private sessions", "Flexible time & location"],
    order: 3,
    active: true,
  },
  {
    id: "fallback-4",
    name: "10 Times Private Pack",
    category: "Private",
    priceTHB: 7500,
    priceUSD: 230,
    description: "For dedicated yogis who want it all",
    features: ["10 private sessions", "Priority scheduling", "Best per-session value"],
    order: 4,
    active: true,
  },
];

export async function fetchPackages(): Promise<Package[]> {
  if (!notion || !process.env.NOTION_PACKAGES_DB_ID) {
    return FALLBACK_PACKAGES;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PACKAGES_DB_ID,
      filter: {
        property: "Active",
        checkbox: { equals: true },
      },
      sorts: [{ property: "Order", direction: "ascending" }],
    });

    return response.results.map((page) => {
      const props = (page as any).properties;
      return {
        id: page.id,
        name: props.Name?.title?.[0]?.plain_text ?? "Unnamed",
        category: props.Category?.select?.name === "Private" ? "Private" : "Group",
        priceTHB: props["Price THB"]?.number ?? 0,
        priceUSD: props["Price USD"]?.number ?? 0,
        description: props.Description?.rich_text?.[0]?.plain_text ?? "",
        features: (props.Features?.rich_text?.[0]?.plain_text ?? "")
          .split("\n")
          .filter(Boolean),
        order: props.Order?.number ?? 0,
        active: props.Active?.checkbox ?? true,
      };
    });
  } catch (error) {
    console.error("Failed to fetch from Notion, using fallback:", error);
    return FALLBACK_PACKAGES;
  }
}
```

- [ ] **Step 3: Build the pricing section**

Create `src/components/PricingSection.tsx`:

```tsx
import { SECTION_IDS } from "@/lib/constants";
import type { Package } from "@/types";

interface PricingSectionProps {
  packages: Package[];
}

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 flex flex-col">
      <h3 className="font-serif text-xl text-brand-charcoal mb-1">{pkg.name}</h3>
      <p className="text-sm text-brand-charcoal/60 mb-4">{pkg.description}</p>
      <div className="mb-4">
        <span className="text-2xl font-serif text-brand-olive">
          {pkg.priceTHB.toLocaleString()} THB
        </span>
        <span className="text-sm text-brand-charcoal/50 ml-2">
          (~USD {pkg.priceUSD})
        </span>
      </div>
      <ul className="space-y-2 mt-auto">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sage mt-1.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSection({ packages }: PricingSectionProps) {
  const groupPackages = packages.filter((p) => p.category === "Group");
  const privatePackages = packages.filter((p) => p.category === "Private");

  return (
    <section id={SECTION_IDS.pricing} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Find the Package That Fits Your Flow
        </h2>

        {/* Group packages */}
        <div className="mb-12">
          <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider mb-6 text-center">
            Group Yoga Class
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {groupPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        {/* Private packages */}
        <div>
          <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider mb-6 text-center">
            Private Session Pack
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {privatePackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Wire Notion data fetching into the page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";
import { fetchPackages } from "@/lib/notion";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const packages = await fetchPackages();

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ClassesSection />
        <GallerySection />
        <LocationSection />
        <BookingSection />
        <PricingSection packages={packages} />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify pricing section with fallback data**

```bash
npm run dev
```

Expected: Pricing section shows 4 package cards (2 Group, 2 Private) with fallback data. Prices display as "400 THB (~USD 12)" format. Stop dev server.

- [ ] **Step 6: Commit Notion integration and pricing**

```bash
git add src/lib/notion.ts src/components/PricingSection.tsx src/app/page.tsx
git commit -m "feat: add Notion-powered pricing section with fallback data"
```

---

### Task 9: Payment, Policies, Contact, and Footer

**Files:**
- Create: `src/components/PaymentSection.tsx`
- Create: `src/components/PoliciesSection.tsx`
- Create: `src/components/ContactSection.tsx`
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build the payment section**

Create `src/components/PaymentSection.tsx`:

```tsx
import { SECTION_IDS, SITE } from "@/lib/constants";

const PAYMENT_METHODS = [
  {
    icon: "📱",
    title: "Thai QR Code (PromptPay)",
    description: "Scan the QR code with any Thai banking app for instant payment.",
  },
  {
    icon: "💵",
    title: "Cash",
    description: "Pay cash on arrival at the class location.",
  },
  {
    icon: "🏦",
    title: "Bank Transfer",
    description: "Direct transfer to Soulena's Thai bank account.",
  },
];

export default function PaymentSection() {
  return (
    <section id={SECTION_IDS.payment} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-12">
          Payment
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.title} className="bg-white/60 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{method.icon}</div>
              <h3 className="font-serif text-base text-brand-charcoal mb-2">{method.title}</h3>
              <p className="text-sm text-brand-charcoal/60">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-olive/5 rounded-xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            After booking confirmation → choose payment option → if pay by QR code →
            send screenshot via{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-olive underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build the policies section**

Create `src/components/PoliciesSection.tsx`:

```tsx
import { SECTION_IDS, SITE } from "@/lib/constants";

const POLICIES = [
  "All purchases are final and non-refundable.",
  "If you purchase a beach group yoga class and are unable to attend that day, I'm happy to offer you a one-time courtesy rescheduling to another date.",
  "If a beach group yoga class needs to be cancelled due to weather conditions, your class credit can be used anytime within one year of the original class date.",
  "Private sessions are non-transferable and non-refundable. If an unexpected circumstance arises, please don't hesitate to reach out, and I will do my best to support you.",
];

export default function PoliciesSection() {
  return (
    <section id={SECTION_IDS.policies} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[800px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Pricing + Policies
        </h2>
        <p className="text-center text-brand-charcoal/60 mb-10 leading-relaxed">
          To help sustain this outdoor wellness space in a place where the weather can
          often be unpredictable, I kindly ask for your understanding of the following policies.
          Thank you for helping to sustain what I love to share and create with you.
        </p>

        <ul className="space-y-4">
          {POLICIES.map((policy, i) => (
            <li key={i} className="flex items-start gap-3 text-brand-charcoal/80 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sage mt-2 flex-shrink-0" />
              {policy}
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-brand-charcoal/50 mt-8">
          For any questions, feel free to contact me at{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-olive underline">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Build the contact section**

Create `src/components/ContactSection.tsx`:

```tsx
import { SECTION_IDS, SITE } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Let&apos;s Practice Together
        </h2>
        <p className="text-center text-brand-charcoal/60 mb-12">
          Explore · Follow Along
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <MailIcon className="w-6 h-6" />
                <span>{SITE.email}</span>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
                <span>@soulena.soul</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider">
              Map
            </h3>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253025.09399692596!2d98.2470379!3d7.8804363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9f077eb0d1e7b9c!2sPhuket!5e0!3m2!1sen!2sth!4v1706000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phuket location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Build the footer**

Create `src/components/Footer.tsx`:

```tsx
import { NAV_LINKS, SITE } from "@/lib/constants";
import { InstagramIcon, ThreadsIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-olive text-white py-12 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href={SITE.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white/70 hover:text-white transition-colors">
            <ThreadsIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-white/50">
          © {new Date().getFullYear()} Soulena Soul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: Add all remaining sections to page**

Update `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import PricingSection from "@/components/PricingSection";
import PaymentSection from "@/components/PaymentSection";
import PoliciesSection from "@/components/PoliciesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { fetchPackages } from "@/lib/notion";

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Home() {
  const packages = await fetchPackages();

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <AboutSection />
        <ClassesSection />
        <GallerySection />
        <LocationSection />
        <BookingSection />
        <PricingSection packages={packages} />
        <PaymentSection />
        <PoliciesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 6: Verify complete page**

```bash
npm run dev
```

Expected: Complete single-page website with all 10 sections scrolling top to bottom. Header navigation scrolls to correct sections. Footer shows navigation + social icons. Stop dev server.

- [ ] **Step 7: Commit all remaining sections**

```bash
git add src/components/PaymentSection.tsx src/components/PoliciesSection.tsx src/components/ContactSection.tsx src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: add payment, policies, contact, and footer sections — complete page"
```

---

### Task 10: Revalidation API Route + Next.js Config

**Files:**
- Create: `src/app/api/revalidate/route.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Create on-demand revalidation endpoint**

Create `src/app/api/revalidate/route.ts`:

```ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = process.env.REVALIDATION_TOKEN;

  if (!token || authHeader !== `Bearer ${token}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

- [ ] **Step 2: Update Next.js config for images**

Replace `next.config.ts` with:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

- [ ] **Step 3: Update .env.local.example with all env vars**

Replace `.env.local.example` with:

```
# Cal.com
NEXT_PUBLIC_CAL_USERNAME=

# Notion
NOTION_API_KEY=
NOTION_PACKAGES_DB_ID=

# Revalidation
REVALIDATION_TOKEN=
```

- [ ] **Step 4: Verify build succeeds**

```bash
npm run build
```

Expected: Build completes successfully with all pages statically generated. Zero errors.

- [ ] **Step 5: Commit config and API route**

```bash
git add src/app/api/revalidate/route.ts next.config.ts .env.local.example
git commit -m "feat: add revalidation API route and finalize Next.js config"
```

---

### Task 11: SEO, Metadata, and Schema.org

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add comprehensive metadata and JSON-LD**

Update `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soulena Soul — Yoga & Movement Teacher | Phuket, Thailand",
  description:
    "Beach yoga classes, private sessions, sound healing, and mindful movement in Phuket, Thailand. Book your class with Soulena Soul.",
  keywords: [
    "yoga Phuket",
    "beach yoga Thailand",
    "private yoga class Phuket",
    "sound healing Phuket",
    "movement teacher Thailand",
    "Soulena Soul",
  ],
  openGraph: {
    title: "Soulena Soul — Yoga & Movement Teacher",
    description:
      "Beach yoga classes, private sessions, and sound healing in Phuket, Thailand.",
    locale: "en_US",
    type: "website",
    siteName: "Soulena Soul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soulena Soul — Yoga & Movement Teacher | Phuket",
    description:
      "Beach yoga, private sessions, and sound healing in Phuket, Thailand.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Soulena Soul — Yoga & Movement",
  description:
    "Beach yoga classes, private sessions, sound healing, and mindful movement in Phuket, Thailand.",
  email: "soulena.soul@gmail.com",
  telephone: "+66850350848",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phuket",
    addressCountry: "TH",
  },
  areaServed: {
    "@type": "Place",
    name: "Phuket, Thailand",
  },
  priceRange: "400-7500 THB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify build with metadata**

```bash
npm run build
```

Expected: Build succeeds. Check the output HTML includes JSON-LD script tag and meta tags.

- [ ] **Step 3: Commit SEO enhancements**

```bash
git add src/app/layout.tsx
git commit -m "feat: add comprehensive SEO metadata and Schema.org local business markup"
```

---

### Task 12: Final Verification and Production Build

**Files:** None new — verification only.

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. Output shows static page generation for `/`.

- [ ] **Step 2: Run production server and verify**

```bash
npm start
```

Visit http://localhost:3000 and verify:
- Header is sticky with WhatsApp, email, Instagram, Threads
- Hero slider auto-rotates every 6 seconds
- All 10 sections render in order
- CTA buttons scroll to correct sections
- Pricing shows fallback data (4 packages)
- Booking shows placeholder ("Cal.com calendar will appear here")
- Google Maps embed loads in Contact section
- Footer navigation works
- Mobile responsive (resize browser to check)

Stop the server.

- [ ] **Step 3: Run linter**

```bash
npm run lint
```

Expected: No errors. Fix any issues found.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: final verification — production build passes, all sections complete"
```
