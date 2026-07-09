# Soulena v2 — build notes

Source of truth for v2 = Soulena's Canva walkthrough video (`content v2/…​.MOV`, gitignored)
+ her pricing screenshots. `content v2/` and `public/photos/` hold raw assets (gitignored);
only optimized images in `public/images/` are shipped.

## Structure decision (UPDATED after full Canva access via Canva MCP)
The full Canva (11 pages, design id DAHO4qLkq9E) revealed a genuine **multi-page** site —
so the site is now multi-page, matching her design. Nav: Home / About / Classes / Booking / Contact.
Routes: `/` `/about` `/classes` `/booking` `/pricing` `/payment` `/contact` `/sanctuary` `/sanctuary/inquiry`.
Sanctuary is the dark/luxury exception. We keep OUR interactive Leaflet map (client prefers it).
Backup of the pre-rebuild layout: git tag `checkpoint-2026-07-09` + branch `backup/pre-multipage-rebuild`.

## Section build status — ALL PAGES BUILT ✅
- [x] Home — Hero (3 slides, 4.5s) → MOVE → Join My Classes (cards→pages) → MEET YOUR INSTRUCTOR → A Glimpse Into My Working Space → footer.
- [x] Footer — "Let's Practice Together" hands-with-flowers + rotating "NEW STUDENT 10%" badge.
- [x] /about — MORE ABOUT ME (quotes, pharmacist, Teaching Exp, Certifications, Other Locations) + gallery + "Gentle Words" testimonials.
- [x] /classes — Class Pricing note + Weekend Beach + Private Session (ClassDetailBlock) + Group Hotel & Wellness + Sanctuary teaser + map.
- [x] /pricing — 4 families (`src/lib/pricing.ts`) + policies.
- [x] /booking — Cal.com availability (BookingSection) + inquiry form (BookingInquiry→WhatsApp) + policies.
- [x] /payment — Card (Stripe, "coming soon") / Bank transfer / Thai QR (click-reveal + WhatsApp slip) / Cash.
- [x] /contact — Contact (WhatsApp/email/Instagram) + interactive map.
- [x] /sanctuary — dark luxury: hero + Mind–Body Connection + Creating Space (Curated Yoga/Sound Bath + 2h experience).
- [x] /sanctuary/inquiry — dark inquiry form (InquiryForm).

## Remaining polish (nice-to-have)
- Hero 3 nav dots already present; confirm slide transition feel.
- "A Glimpse" gallery — approximate her curved-text circular collage more closely (currently staggered circles).
- Map: hover a beach name → highlight its pin (her dev note).
- Sanctuary: her dev-note immersive auto-gallery for the middle section.
- Orphaned: old ContactSection.tsx no longer routed (safe to delete later).

## BLOCK BEFORE PROD
- Testimonials show real names/emails — publish only after Soulena's OK.
- Bank details + Stripe links are placeholders until she sends them.

## Pricing (from Canva; confirm final — she said still updating)
Beach: Drop-in 400฿/$12 · 3× 1,100฿/$33 · 5× 1,800฿/$55
Private: 5× 5,500฿/$168 · 10× 10,000฿/$306
Duo: 5× 9,000฿/$275 · 10× 17,000฿/$520
Online 1:1: Single 1,200฿/$35.8 · 5× 5,200฿/$155 · 10× 9,500฿/$284

## Image asset map (public/images/, curated by workflow wf_04701cd5)
hero-1/2/3, about-main, instructor-a/b, card-beach(Photo_014), card-private, card-event,
card-sanctuary, gallery-1..6, testimonial-1..4, sanctuary-hero, sanctuary-1..4, sea-pearl.png,
footer-hands.jpg, contact-bg.jpg, booking-bg.jpg.

## NEEDED FROM SOULENA (for the message)
1. Avatar — a proper front-facing round headshot (none usable in the drive).
2. Stripe Payment Links (URL per package) once prices are final.
3. Bank-transfer details (account name + number / PromptPay).
4. Cal.com — confirm event slugs (beach-yoga-class, private-session); delete default 30/15-min events.
5. Testimonials — OK to publish the "Compliment-*" screenshots? names to keep/remove?
6. Confirm final prices are locked, then set up Notion self-editing + teach her.
7. (optional) Sanctuary photos are bright daytime — a candlelit/darker set would match the luxury tone; else we regrade.
8. (optional) One more true sunset/beach landscape for the 3rd hero slide.
