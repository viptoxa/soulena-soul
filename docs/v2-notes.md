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
- [x] /payment — Card (Stripe, per-package links) / Bank transfer / Thai QR (click-reveal + WhatsApp slip) / Cash.
- [x] /contact — Contact (WhatsApp/email/Instagram) + interactive map.
- [x] /sanctuary — dark luxury: hero + Mind–Body Connection + Creating Space (Curated Yoga/Sound Bath + 2h experience).
- [x] /sanctuary/inquiry — dark inquiry form (InquiryForm).

## Remaining polish (nice-to-have)
- Hero 3 nav dots already present; confirm slide transition feel.
- "A Glimpse" gallery — approximate her curved-text circular collage more closely (currently staggered circles).
- Map: hover a beach name → highlight its pin (her dev note).
- Sanctuary: her dev-note immersive auto-gallery for the middle section.
- Orphaned: old ContactSection.tsx no longer routed (safe to delete later).

## Client sign-off (2026-08-13)
Soulena reviewed the whole live site and approved it. She tested both forms herself
(booking + Sanctuary inquiry) and confirmed the WhatsApp hand-off carries every field.

- **Testimonials — permission still PENDING.** She is e-mailing each student first.
  Until she confirms, `/about` uses `about-testi-{1,2,3}-r.jpg`: surnames, the
  `schuth.elisa` sender handle and Jana's profile photo are burned out of the JPEG
  pixels, and the originals were deleted from `public/`. The redaction is baked into
  the files on purpose — a CSS mask would have left the original fetchable at its own
  URL. To restore once she says yes: `git show 30501f3^:public/images/about-testi-1.jpg`
  (etc.) and drop the `-r` suffix in `TestimonialsSection.tsx`.
- **Prices are final** and now show **THB only** — she asked to drop the USD
  approximations, so `priceUSD` is gone from `PricingTier`. Stripe converts to the
  visitor's own currency at checkout anyway.
- **Stripe**: she creates one Payment Link per package in her dashboard and sends each
  over. Wire them into `PRICING[].tiers[].stripeUrl`; a tier without a link simply
  renders no card button. Live so far: Beach drop-in (400 THB).
- **Bank details are live on `/payment`**: KBANK 043-186-9241, Miss Jitpisut
  Ponsumritchok; PromptPay 085-035-0848.
- **Cal.com**: she is checking her availability and deleting the default 15/30-min
  event types herself.

## Pricing (confirmed final 2026-08-13 — THB only)
Beach: Drop-in 400฿ · 3× 1,100฿ · 5× 1,800฿
Private: 5× 5,500฿ · 10× 10,000฿
Duo: 5× 9,000฿ · 10× 17,000฿
Online 1:1: Single 1,200฿ · 5× 5,200฿ · 10× 9,500฿

## Image asset map (public/images/, curated by workflow wf_04701cd5)
hero-1/2/3, about-main, instructor-a/b, card-beach(Photo_014), card-private, card-event,
card-sanctuary, gallery-1..6, testimonial-1..4, sanctuary-hero, sanctuary-1..4, sea-pearl.png,
footer-hands.jpg, contact-bg.jpg, booking-bg.jpg.

## STILL OPEN
1. **Mobile layout has never been reviewed** — every round was desktop-only. Next job.
2. Testimonials — waiting on her students' permission before un-redacting the names.
3. Remaining Stripe Payment Links, one per package, as she creates them.
4. Avatar — she has no front-facing headshot yet and will shoot one.
5. Sanctuary photos are daytime only; she is happy for us to colour-grade them to
   match the dark page.
6. Notion self-editing for prices + a short walkthrough for her (prices are locked now).
7. (optional) One more true sunset/beach landscape for the 3rd hero slide.
