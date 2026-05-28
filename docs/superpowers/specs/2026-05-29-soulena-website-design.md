# Soulena Soul — Yoga Website Design Spec

## Overview

A simple, clean, single-page website for Soulena Soul, a yoga and movement teacher based in Phuket, Thailand. The site serves as her professional online presence with class booking, pricing info, and contact details. No membership system, no e-commerce — just booking and information.

**Client:** Soulena Soul (soulena.soul@gmail.com, WhatsApp +66 85 035 0848)
**Developer:** Anton
**Target audience:** Tourists and residents in Phuket looking for yoga classes

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | Full design control, fast SSG, great DX |
| Hosting | Vercel (free tier) | Zero-config deploys, custom domain, edge CDN |
| Styling | Tailwind CSS 4 | Rapid UI development, matches warm/earthy design |
| Booking | Cal.com (free, open-source) | Calendar scheduling, embeddable, mobile management |
| CRM | Notion (free) | Client database, package tracking, booking history |
| CMS | Notion API (same workspace) | Soulena edits pricing/packages in Notion, site pulls via API |
| Payments (future) | Omise | Thai payment gateway for credit cards — pending approval |
| Domain | TBD (to be purchased) | Start on .vercel.app subdomain |

## Architecture: Hybrid (Static + Notion Dynamic)

```
┌─────────────────────────────────────────────┐
│                  WEBSITE                     │
│                                             │
│  Static Content (in code):                  │
│  - Hero, About, Gallery, Location           │
│  - Payment Methods, Policies, Contact       │
│                                             │
│  Dynamic Content (from Notion API):         │
│  - Packages & Pricing                       │
│  - (future: testimonials, schedule notes)   │
│                                             │
│  External Embeds:                           │
│  - Cal.com (booking calendar)               │
│  - Google Maps (location)                   │
│                                             │
├─────────────────────────────────────────────┤
│            Next.js ISR (revalidate: 3600)   │
│            Notion API → cached at build     │
└──────────────┬──────────────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
    ▼                     ▼
┌─────────┐       ┌─────────────┐
│ Cal.com │       │   Notion    │
│ Booking │       │  Workspace  │
│ System  │       │             │
│         │       │ ┌─────────┐ │
│ Events: │       │ │Packages │ │ ← Soulena edits
│ - Beach │       │ │DB       │ │
│ - Priv. │       │ ├─────────┤ │
│ - Event │       │ │Clients  │ │ ← CRM (auto-populated
│ - Sound │       │ │DB       │ │    from bookings)
│         │       │ ├─────────┤ │
└─────────┘       │ │Bookings │ │ ← Webhook from Cal.com
                  │ │DB       │ │
                  │ └─────────┘ │
                  └─────────────┘
```

### Data Flow

1. **Visitor books a class** → Cal.com handles scheduling → Vercel API route (webhook) → creates record in Notion Bookings DB → optionally notifies Soulena via email
2. **Soulena changes prices** → edits Notion Packages DB → site revalidates within 1 hour (ISR) or on-demand via revalidation endpoint
3. **Soulena checks clients** → opens Notion on phone → sees all client history, packages remaining

**Fallback:** If Cal.com → Notion webhook proves complex for v1, Soulena can manually track bookings in Notion. The webhook is a nice-to-have automation, not a blocker.

## Page Structure (Single Page, Anchor Navigation)

### Header (sticky)
- WhatsApp link (+66 85 035 0848)
- Email (soulena.soul@gmail.com)
- Instagram icon
- Threads icon
- No cart, no search

### Section 1: Hero
- **Content type:** STATIC
- Full-width background image slider (3 photos, auto-rotate every 6s, CSS crossfade transition)
- Circular avatar overlay (centered)
- Flower icon (✿ brand element)
- Heading: "HELLO, I'M SOULENA SOUL"
- Subtitle: "YOGA AND MOVEMENT TEACHER"
- Tagline: "I create a soft space to help you move better, build awareness, and reconnect with balance."
- 4 CTA pill buttons → anchor to Booking section with pre-selected class type
  - BEACH YOGA CLASS
  - PRIVATE CLASS
  - PRIVATE EVENT
  - SOUL & SOUND
- Dot indicators for slider

### Section 2: About / Move
- **Content type:** STATIC
- Two-column layout (text + image)
- Heading: "MOVE — where island breeze and ocean calm meet"
- Text about Soulena's approach (from Canva content)
- Call-to-action: "JOIN MY CLASSES"

### Section 3: Classes / About Teaching
- **Content type:** STATIC
- Description of teaching approach
- Yoga, mobility, mindful movement, strength training, sound healing
- "READ MORE ABOUT SOULENA" link
- Photos/gallery of class settings

### Section 4: Working Space Gallery
- **Content type:** STATIC
- "A GLIMPSE INTO MY WORKING SPACE"
- Photo grid or carousel of yoga locations
- Beach, sunset, rocks — atmospheric shots

### Section 5: Location (Phuket)
- **Content type:** STATIC
- "Based in Phuket, Thailand"
- Phuket map image with highlighted beaches
- List of locations: Patong Beach, Kathu, Karon Beach, Kata Beach, Nai Harn Beach, Chalong

### Section 6: Booking (Cal.com)
- **Content type:** CAL.COM EMBED
- "VIEW AVAILABLE DATES" heading
- Embedded Cal.com calendar widget
- Event types:
  - Beach Yoga Class (group)
  - Private Class (1-on-1)
  - Private Event (weddings, birthdays, retreats)
  - Soul & Sound (meditation + sound healing)
- Booking form collects: name, email, phone, class type, preferred date, notes
- Cal.com handles availability, confirmation emails, calendar sync

### Section 7: Packages & Pricing
- **Content type:** NOTION (dynamic)
- "FIND THE PACKAGE THAT FITS YOUR FLOW"
- Two categories:
  - **Group Class Packages:**
    - Drop-in Class: 400 THB (~USD 12)
    - 5 Times Pack: 1,800 THB (~USD 50)
  - **Private Session Packs:**
    - 5 Times Private Pack: 4,200 THB (~USD 126)
    - 10 Times Private Pack: 7,500 THB (~USD 230)
- Each package shows: name, description, price THB, price USD equivalent, bullet features
- Soulena can edit all of this in Notion

### Section 8: Payment Methods
- **Content type:** STATIC
- "PAYMENT" heading
- Methods displayed:
  - Thai QR code (PromptPay)
  - Cash on arrival
  - Bank transfer
- Note: Omise credit card integration to be added when approved
- "After booking confirmation → show payment options → pay by QR code → send screenshot via WhatsApp"

### Section 9: Pricing & Policies
- **Content type:** STATIC
- Cancellation policy
- Weather policy (outdoor classes)
- Non-refundable purchases note
- Credit rollover policy (within 1 year)
- New student discount mention (10%)

### Section 10: Contact + Map
- **Content type:** STATIC
- WhatsApp button (primary CTA)
- Email link
- Instagram link
- Google Maps embed showing Phuket area
- "LET'S PRACTICE TOGETHER" heading

### Footer
- Navigation links (Home, About, Classes, Booking, Contact)
- Social media icons
- Copyright

## Notion Database Structure

### 1. Packages DB (CMS — feeds website)
| Field | Type | Purpose |
|-------|------|---------|
| Name | Title | Package name |
| Category | Select: "Group" / "Private" | Grouping on site |
| Price THB | Number | Price in Thai Baht |
| Price USD | Number | Approximate USD equivalent |
| Description | Rich text | Package description |
| Features | Rich text | Bullet list of what's included |
| Order | Number | Display order on site |
| Active | Checkbox | Show/hide on site |

### 2. Clients DB (CRM)
| Field | Type | Purpose |
|-------|------|---------|
| Name | Title | Client name |
| Email | Email | Contact email |
| Phone | Phone | WhatsApp number |
| Package | Relation → Packages | Active package |
| Sessions Remaining | Number | Classes left in package |
| First Visit | Date | When they first came |
| Notes | Rich text | Any notes about the client |

### 3. Bookings DB (auto-populated from Cal.com webhook)
| Field | Type | Purpose |
|-------|------|---------|
| Client | Relation → Clients | Who booked |
| Class Type | Select | Beach Yoga / Private / Event / Soul & Sound |
| Date | Date | When |
| Status | Select: Confirmed / Cancelled / Completed | Booking status |
| Payment Status | Select: Pending / Paid | Payment tracking |
| Notes | Rich text | Any booking notes |

## Design System

### Color Palette (from Canva mockups)
- **Primary:** Warm golden/olive (`#8b7355` area) — earthy, grounding
- **Background:** Cream/warm white (`#f5f0e8`) — soft, welcoming
- **Text:** Dark brown/charcoal — readable, warm
- **Accent:** Sage green (buttons, highlights)
- **CTA buttons:** Outlined pills with rounded borders (matches Canva hero)

### Typography
- **Headings:** Serif font (elegant, editorial feel) — uppercase, tracked
- **Body:** Clean sans-serif — readable, modern
- **Style:** Spacious, airy layout with generous whitespace

### Visual Principles (from Canva + inspiration sites)
- Warm, earthy, organic feel — not corporate
- Generous whitespace, breathing room
- Natural photography front and center
- Rounded elements (avatar, buttons) — soft and inviting
- Subtle decorative elements (flower icon ✿)
- Mobile-first responsive design

## Responsive Behavior

- **Mobile (< 768px):** Single column, hamburger nav, full-width sections
- **Tablet (768–1024px):** Two-column where appropriate
- **Desktop (> 1024px):** Max-width container, hero full-bleed, multi-column pricing cards

## Future Enhancements (out of scope for v1)

1. **Omise payment gateway** — credit card payments when approved
2. **Testimonials section** — from Notion DB
3. **Blog/journal** — Soulena's writings
4. **Multi-language** — Thai translation
5. **Newsletter signup** — email collection
6. **Package purchase flow** — buy packages online with Omise

## SEO & Performance

- Static generation (SSG) for all pages → fast load
- ISR for Notion content (revalidate every hour)
- Meta tags: Open Graph, Twitter cards
- Schema.org markup for local business
- Image optimization via Next.js `<Image>` component
- Lazy loading for below-fold content

## Accounts Needed (from Soulena)

1. **Cal.com** — create account, set up 4 event types
2. **Notion** — share workspace, create integration for API access
3. **Domain** — purchase (soulenasoul.com or similar)
4. **Omise** — pending approval (future)
5. **Vercel** — Anton deploys (connected to GitHub repo)
