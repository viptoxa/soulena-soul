# Soulena v2 — build notes

Source of truth for v2 = Soulena's Canva walkthrough video (`content v2/…​.MOV`, gitignored)
+ her pricing screenshots. `content v2/` and `public/photos/` hold raw assets (gitignored);
only optimized images in `public/images/` are shipped.

## ⚠️ Which Canva file is live
**Current: `DAHUiNdgrB4`** — "Soulena's Website Draft – 7/09", the copy Anton took into
his own account on 2026-09-07 (share link https://canva.link/h3jx2w37t232hoi). Two older
designs share the title "Soulena's Website Draft": `DAHO4qLkq9E` (what v2 was built from)
and `DAHJujTryBo` (the 2026-08-19 Package redesign). Both are **stale**. Always run
`search-designs` sorted by `modified_descending`, or `resolve-shortlink` on whatever link
she sends, rather than trusting an id written down here.

## Structure decision (UPDATED after full Canva access via Canva MCP)
The full Canva (11 pages, design id DAHO4qLkq9E) revealed a genuine **multi-page** site —
so the site is now multi-page, matching her design. Nav: Home / About / Classes / Booking / Contact.
Routes: `/` `/about` `/classes` `/booking` `/pricing` `/payment` `/contact` `/sanctuary` `/sanctuary/inquiry`.
Sanctuary is the dark/luxury exception. We keep OUR interactive Leaflet map (client prefers it).
Backup of the pre-rebuild layout: git tag `checkpoint-2026-07-09` + branch `backup/pre-multipage-rebuild`.

## Mobile
First full responsive pass done 2026-08-18 — verified clean at 320 / 375 / 390px on all
nine routes. See [[feedback_mobile_verification]] in memory: the pane's screenshot tool
returns stale frames after a JS scroll, so audit with a hidden iframe + DOM measurement.

## Section build status — ALL PAGES BUILT ✅
- [x] Home — Hero (3 slides, 4.5s) → MOVE → Join My Classes (cards→pages) → MEET YOUR INSTRUCTOR → A Glimpse Into My Working Space → footer.
- [x] Footer — "Let's Practice Together" hands-with-flowers + rotating "NEW STUDENT 10%" badge.
- [x] /about — MORE ABOUT ME (quotes, pharmacist, Teaching Exp, Certifications, Other Locations) + gallery + "Gentle Words" testimonials.
- [x] /classes — Class Pricing note + Weekend Beach + Private Session (ClassDetailBlock) + Group Hotel & Wellness + Sanctuary teaser + map.
- [x] /pricing — 4 families (`src/lib/pricing.ts`) + policies. **Rebuilt 2026-08-19** on her
      redesigned Canva page 8: cream paper, botanical branches, gold lotus, outlined cards
      with family icon badges. Feature bullets became a single validity line; families gained
      a blurb + icon; online tiers renamed Class -> Session. Assets `pkg-lotus.png`
      and `pkg-leaf-{a,b,c}.png` were keyed out of the Canva export. **Approved
      2026-08-20**, with badges alternating green `#807b5d` / gold `#d69e30` per
      family and her laptop drawing in the Single Session card.
      **Sharpness fix 2026-08-20** — she said the laptop drawing looked blurry.
      Canva now refuses PNG/JPG exports of this design at any width ("Not allowed
      to access design"), but **PDF export still works**, and a Canva PDF embeds
      each placed image as its own object. So `pdfimages -all -png` on a page-8
      PDF gives her drawing at its own resolution with a real alpha smask — no
      keying, no page-render upscale. That is now `pkg-online-laptop.png`
      (183x120 of true detail, padded on the left to 227x120 so the *laptop*
      sits at the canvas centre, then a premultiplied 2x LANCZOS upscale to
      454x240 — the PDF stores black under transparent pixels, so a straight
      RGBA resize fringes the strokes). The retired `pkg-online-illustration.png`
      also carried a stray full-width rule across its bottom two rows, keyed in
      from the card divider. The CSS lost its `translate-x-[9.5%]` (a fractional
      composited offset that resampled the image) and is now `w-[39%]
      max-w-[130px]`, reproducing the 27.29% of card width she drew. Verified:
      laptop-to-card-centre delta <= 0.004px at 375/768/1024/1280/1440, and the
      file now downscales (0.45-0.57x at DPR 2) instead of upscaling.
- [x] /booking — Cal.com availability (BookingSection) + inquiry form (BookingInquiry→WhatsApp) + policies.
- [x] /payment — Card (Stripe, per-package links) / Bank transfer / Thai QR (click-reveal + WhatsApp slip) / Cash.
- [x] /contact — Contact (WhatsApp/email/Instagram) + interactive map.
- [x] /sanctuary — dark luxury: hero + Mind–Body Connection + Creating Space (Curated Yoga/Sound Bath + 2h experience).
- [x] /sanctuary/inquiry — dark inquiry form (InquiryForm).

## Her detail pass — 2026-09-07 ("My little details to disturbing your peaceful night")
An 8-page annotated PDF plus a redesigned Classes page in `DAHUiNdgrB4`. All of it is
implemented except the hero photo, which needs a file only she has:

- **Header** — the four icons were two sizes (w-4 / w-5); all are w-5 now. WhatsApp and
  Mail moved to the right-hand cluster so the top-left corner is free for the logo she is
  drawing; that corner is an empty spacer until it arrives.
- **Nav** — reordered to Home / About / Classes / Packages / Booking / Sanctuary /
  Contact, and **Packages** added: `/pricing` had been live for weeks with no nav entry.
- **Home** — "Join My Classes" is 31px on a phone (the other section headings are still
  27px; she only asked about this one). "Simply move with Soulena Soul" is sans italic.
- **Footer** — "Explore . Follow Along" italic. The discount badge is re-cut to her
  reference: two widely spaced ring repeats instead of three cramped ones, a bigger NEW
  STUDENT* / 10%, and the asterisk note lifted out of the ring. The word gaps are
  non-breaking spaces — SVG collapses ordinary whitespace and the two words ran together.
- **/about** — "Soulena Soul" now overlaps "MORE ABOUT ME", tilted 2.5° and at 80%
  opacity. The rotated span is `inline-block` on purpose: rotating the full-width block
  pivots an 1100px box and throws the line right off. The photo grid became a stepped
  collage in the style of the Sanctuary one (`AboutGallery`), which is what she asked for;
  photos are dealt round-robin into three frames so any number of them works.
- **/classes — rebuilt** on her new page 5: centred title with a gold rule, a two-line
  tagline, three chips, and outlined cards with sand icon discs (`ClassIcons`). Weekend
  Beach keeps one photo and three stacked cards; Private Session has two photos and pairs
  the areas and price cards. That pair stacks again between lg and xl, where each card
  narrows to ~185px and every price line broke in two.
- **Payment popup** — the price buttons no longer jump straight to Stripe. `PayButton`
  opens a dialog offering card, PromptPay QR, bank transfer and cash, which is what she
  asked for; it is used on both /classes and /pricing, and `src/lib/payment.ts` is now the
  single source for the bank details /payment also renders. **Do not drive that dialog
  from the element's own `close` event** — it does not fire on `close()` in every engine,
  which left `document.body` locked at `overflow:hidden` and froze the page behind it.
  React state drives it, and Escape is handled by hand.
- **Buttons** — the filled button now carries a transparent 2px border so it is exactly
  the height of the outlined one; the outline had been adding 4px.
- **/booking** — "Booking the Class" matches "Class Pricing" (32px / 6xl), and both
  signatures use the sans italic she prefers.
- **/sanctuary** — the teaser rule lost its six chevrons ("this looks like a fishbone")
  and is the clean rule from the inquiry page. The orb bullets were measured 4.7px outside
  the disc at phone width; phone padding, portrait size and type are a step down, and
  every orb now clears the rim by at least 10px at 320–1280.
- **/contact** — the channel list moved from inside the map block to directly under the
  heading.
- **Sanctuary inquiry** — participants is digits-only (stripped on input, since
  `type="number"` still lets "e" and "+" through), and interests / preferred location are
  free-text fields with the old options offered underneath as suggestions.

### ⏳ Still needs something from her
- **Hero slide 1** — she wants the rocks-by-the-sea photo from page 3 of her Canva ("one
  of my favorite photos"). The copy embedded in the PDF is 648×800, nowhere near enough
  for a full-bleed hero, so this waits for the original off her Drive.
- **Class photos** are placeholders pulled from the Canva PDF (`class-beach-sunset.jpg`
  640×427, `class-private-1/2.jpg` 320×400). Swap them for the originals — nothing else needs touching:
  `PHOTO_SIZES` in `ClassDetailBlock.tsx` declares the widths the photos really
  occupy (a flat 460px single / 224px paired from 1212px up), checked against the
  rendered boxes at 375/768/1024/1280/1600, so Next uses the extra resolution the
  moment it exists. Drop the files into `public/images/` under the same names and
  redeploy. She confirmed on 2026-09-08 that she is uploading them.
- **"Movement-inspired sessions blending yoga, mobility & flow"** — the live Canva drops
  "mindful", her screenshots still have it. Following the Canva; worth confirming.
- **Nai Harn +200 THB travel fee** — her redesigned areas box drops it. Kept as a footnote
  on that card rather than silently losing a charge.

## Her "Final.Final.Maybe Final" pass — 2026-09-09
Eleven annotated pages plus a Drive folder of originals (three hero frames at
4269x2400, the Classes hero, both class blocks, twenty About photos, her logo
and flower in SVG, a palm drawing). Everything in it is live except two items
that are hers to answer, below.

- **Warm white.** "The white text throughout the website isn't pure white."
  `--color-white: #f9f8f0` is redefined in `@theme`, so every `text-white`,
  `bg-white`, `border-white` and their opacity variants follow — one line
  instead of touching eighteen files. The value is the fill from her own mark.
- **Logo** in the top-left: `brand-mark.png` (her SVG keyed off its white
  plate) plus a set wordmark, all caps with a larger leading S per word. It
  drops out between md and lg, where seven nav items leave no room.
- **Flower** re-cut. Her SVG is a 29KB traced outline of a regular rosette, so
  `FlowerIcon` draws it: the petal's cubic control points are a least-squares
  fit to her measured half-width profile (widest 0.249R at 0.79R, rms 0.007R).
  It turns slowly above the hero, as she asked.
- **Booking is the calendar only** and the nav label reads Availability; the
  route stays `/booking` so shared links live. Pricing + Policies is on
  Packages alone now. Classes lost its pay pills for the same reason.
- **Packages**: "Private Session" (no "Pack"), a Single Private Session card
  quoting 1,400 | 2,200 | 3,000 with one Stripe link per group size behind the
  popup, "Select" on every button, her palm on the drop-in card, and subtitles
  that honour newlines so they break where she marked them.
- Also: About's carousel (twenty photos, three non-overlapping columns, only
  the neighbouring frames mounted), the Glimpse circles on one level under
  "YOGA . NATURE . PEOPLE . PRESENCE" between hairlines, centred footer nav
  with "|", the badge ring with dots, inline-SVG arrows, contact in four boxes,
  the inquiry list in her order, Sanctuary's tracked-out white lines, rounded
  collage corners with a lean on transition, and a 420ms blurred mobile menu.

### ⏳ Waiting on her
- **Testimonials.** She asked for the names unblurred and sent the originals,
  but they carry full surnames (Paul Beaumont, Jana Noulton), an e-mail handle
  (schuth.elisa) and Jana's face — and Paul & Sarah's consent was explicitly
  "so long as no personal information is visible". Not done. The offer on the
  table: re-cut from her high-res files so they are crisp, first names open,
  surname/e-mail/avatar still covered.
- **"Mistrully"** for the About script line — a Canva font, needs the file and
  a licence to serve it.

## Turbopack root — read this before debugging a dev-server 404
`next dev` began answering **404 on every route, "/" included**, while
`next build` stayed green. Turbopack picks the project root by looking for a
lockfile and there is a stray `/Users/anton/package-lock.json` from 2023 above
this directory; when it chooses that one, nothing under `src/app` resolves.
`turbopack.root` is pinned in `next.config.ts`. Do not remove it.

## Pushing: force HTTP/1.1 when the commit carries images
A push with ~8MB of new photos fails as "the remote end hung up unexpectedly"
and then lies with "Everything up-to-date" — check `git ls-remote` rather than
believing it. This works:
`git -c http.postBuffer=524288000 -c http.version=HTTP/1.1 push origin main`

## Remaining polish (nice-to-have)
- Hero 3 nav dots already present; confirm slide transition feel.
- "A Glimpse" gallery — approximate her curved-text circular collage more closely (currently staggered circles).
- Map: hover a beach name → highlight its pin (her dev note).
- Sanctuary: her dev-note immersive auto-gallery for the middle section.
- Orphaned: old ContactSection.tsx no longer routed (safe to delete later).

## Client sign-off (2026-08-13)
Soulena reviewed the whole live site and approved it. She tested both forms herself
(booking + Sanctuary inquiry) and confirmed the WhatsApp hand-off carries every field.

- **Testimonials — permission GRANTED, redaction stays.** Soulena collected the
  students' consent (2026-08-18). Paul & Sarah granted it **conditionally**: "so long
  as no personal information is visible", so their surname must remain hidden. Jana
  gave unconditional consent; Elisa/Felix and Tina's replies were never shown to us.
  `/about` therefore keeps `about-testi-{1,2,3}-r.jpg`, where surnames, the
  `schuth.elisa` sender handle and Jana's profile photo are burned out of the JPEG
  pixels (a CSS mask would have left the original fetchable at its own URL) and the
  originals are deleted from `public/`. Only first names are published, which is what
  Paul's condition requires. To restore a specific one anyway:
  `git show 30501f3^:public/images/about-testi-1.jpg` and drop the `-r` suffix in
  `TestimonialsSection.tsx`.
- **Prices are final** and now show **THB only** — she asked to drop the USD
  approximations, so `priceUSD` is gone from `PricingTier`. Stripe converts to the
  visitor's own currency at checkout anyway.
- **Stripe — ALL LINKS LIVE (2026-08-18).** Ten packages carry `stripeUrl` in
  `src/lib/pricing.ts`; the four single-session prices quoted only on /classes
  (beach drop-in + private for 1/2/3 people) use `PAY_LINKS` in
  `src/app/classes/page.tsx`. Every link was opened and checked — product name and
  THB amount match the tier it is attached to in all twelve cases. If she adds a new
  package, add the tier plus its `stripeUrl` and the button appears automatically.
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
1. Avatar — she has no front-facing headshot yet and will shoot one.
2. Sanctuary photos are daytime only; she is happy for us to colour-grade them to
   match the dark page.
3. Notion self-editing for prices + a short walkthrough for her (prices are locked now).
4. Cal.com — confirm she finished tidying her availability and event types.
5. (optional) One more true sunset/beach landscape for the 3rd hero slide.
