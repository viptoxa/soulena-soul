# Soulena v2 — build notes

Source of truth for v2 = Soulena's Canva walkthrough video (`content v2/…​.MOV`, gitignored)
+ her pricing screenshots. `content v2/` and `public/photos/` hold raw assets (gitignored);
only optimized images in `public/images/` are shipped.

## Structure decision
Single scrolling home page (client prefers one-page). Only **Soul & Sound Sanctuary**
is a separate page (`/sanctuary` + `/sanctuary/inquiry`) — deliberately dark/luxury.
Keep OUR interactive Leaflet map (client prefers it over her static map image).

## Section build status
- [x] Hero — 4 buttons: BEACH YOGA CLASS, PRIVATE CLASS, WELLNESS EVENT, SOUL & SOUND(→/sanctuary). New sunset photos.
- [x] Pricing — 4 families exact from Canva (`src/lib/pricing.ts`), click/hover highlight + sibling dim.
- [x] Classes cards — 4 overlay cards + LEARN MORE + hover-brighten.
- [ ] About — "MOVE" intro + "MEET YOUR INSTRUCTOR" + full "MORE ABOUT ME" (pharmacist story, 2 quotes) + testimonials + gallery.
- [ ] Class detail blocks — Weekend Beach + Private Session (session/includes/areas/schedule/price, RESERVE→Cal.com).
- [ ] Sanctuary page — dark luxury ("LET'S PRACTICE TOGETHER"), her sound-healing photos.
- [ ] Footer — "LET'S PRACTICE TOGETHER" hands-with-flowers bg + "NEW STUDENT 10%" note.
- [ ] Payment — Credit card (Stripe links), Bank transfer, Thai QR (click-to-reveal, image in repo), Cash.

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
