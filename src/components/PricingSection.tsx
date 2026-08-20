import { Fragment } from "react";
import { SECTION_IDS } from "@/lib/constants";
import {
  PRICING,
  type PricingFamily,
  type PricingTier,
  type FamilyIcon,
  type IconTone,
} from "@/lib/pricing";

// Canva page 8, redesigned by Soulena on 2026-08-19 — the bright sand panel is
// gone. Palette and geometry were sampled straight off the export:
//   page  #f4efe5 · card #fafbf2 · card border #cba449 (1px) · rule #d9d9d9
//   heading/sub #3a4e5d · family heading + blurb #635f46 · icon badge #807b5d
// Card width is a fixed 30.3% of the frame with a ~2% gutter, so a two-card
// family sits centred at the same width rather than stretching — which is also
// what her dev note asks for ("it is too far away from each other").
const PAGE = "#f4efe5";
const CARD = "#fafbf2";
const GOLD = "#cba449";
const SLATE = "#3a4e5d";
const OLIVE = "#635f46";
const RULE = "#d9d9d9";
const BADGE_GREEN = "#807b5d";
// Her lotus mark and the "yellow" badges are the same ink — she asked for it
// explicitly ("same yellow as this lotus logo").
const BADGE_GOLD = "#d69e30";

function FamilyBadge({ icon, tone }: { icon: FamilyIcon; tone: IconTone }) {
  const paths = {
    // three rolling lines — beach
    wave: (
      <path
        d="M4 9.2c1.6-1.5 3.1-1.5 4.7 0s3.1 1.5 4.7 0 3.1-1.5 4.7 0M4 12.6c1.6-1.5 3.1-1.5 4.7 0s3.1 1.5 4.7 0 3.1-1.5 4.7 0M4 16c1.6-1.5 3.1-1.5 4.7 0s3.1 1.5 4.7 0 3.1-1.5 4.7 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
    // one practitioner — private
    person: (
      <>
        <circle cx="12" cy="9" r="3.3" />
        <path d="M5.4 19.2a6.6 6.6 0 0 1 13.2 0z" />
      </>
    ),
    // two practitioners — duo
    duo: (
      <>
        <circle cx="8.4" cy="9.4" r="2.9" />
        <path d="M2.6 18.8a5.8 5.8 0 0 1 11.6 0z" />
        <circle cx="15.8" cy="9.4" r="2.9" />
        <path d="M10 18.8a5.8 5.8 0 0 1 11.6 0z" />
      </>
    ),
    // screen on a stand — online
    laptop: (
      <>
        <rect x="6" y="6.6" width="12" height="8.4" rx="1.1" />
        <path d="M3.6 17.4h16.8l-1.3-1.5H4.9z" />
      </>
    ),
  };

  return (
    <span
      aria-hidden
      className="absolute left-1/2 top-0 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-[0_4px_10px_rgba(90,80,50,0.25)]"
      style={{ backgroundColor: tone === "gold" ? BADGE_GOLD : BADGE_GREEN }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[26px] w-[26px]">
        {paths[icon]}
      </svg>
    </span>
  );
}

function TierCard({ tier, icon, tone }: { tier: PricingTier; icon: FamilyIcon; tone: IconTone }) {
  return (
    <div
      className="group relative mt-[23px] flex w-full flex-col rounded-[10px] border shadow-[6px_8px_18px_rgba(120,110,70,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_12px_26px_rgba(120,110,70,0.28)] sm:w-[47%] lg:w-[32%]"
      style={{ backgroundColor: CARD, borderColor: GOLD }}
    >
      <FamilyBadge icon={icon} tone={tone} />

      <h4
        className="px-5 pb-4 pt-7 text-center font-serif text-[21px] uppercase leading-tight md:text-[24px]"
        style={{ color: "#171512" }}
      >
        {tier.title}
      </h4>

      <div className="flex-1 border-y px-5 py-5 text-center md:px-6" style={{ borderColor: RULE }}>
        <p className="text-balance text-[15px] uppercase leading-[1.45] text-brand-charcoal md:text-[16px]">
          {tier.subtitle}
        </p>
        {tier.illustration ? (
          /* The artwork is not symmetrical — the botanical sprig hangs off its
             right side — so centring the file would push the laptop left. Her
             note asks for the laptop screen to line up with the middle of the
             card, and the laptop sits 9.5% of the image width left of centre,
             so the image is nudged back by exactly that. */
          <img
            src={tier.illustration.src}
            alt={tier.illustration.alt}
            width={310}
            height={186}
            className="mx-auto mt-4 h-auto w-[62%] max-w-[190px] translate-x-[9.5%] select-none"
          />
        ) : null}
        {tier.note ? (
          <p className="mt-4 text-[14px] italic text-brand-charcoal md:text-[15px]">{tier.note}</p>
        ) : null}
        {tier.validity ? (
          <p className={`text-[14px] text-brand-charcoal/85 md:text-[15px] ${tier.note ? "mt-1" : "mt-4"}`}>
            ( {tier.validity} )
          </p>
        ) : null}
      </div>

      <div className="px-5 py-5 text-center md:px-6">
        <p className="font-serif text-[21px] text-brand-charcoal md:text-[24px]">
          {tier.priceTHB.toLocaleString("en-US")} THB
        </p>
        {/* Not in the Canva, but every package is payable by card — kept in the
            site's own button style rather than the design's. */}
        {tier.stripeUrl ? (
          <a
            href={tier.stripeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-olive px-7 py-2.5 text-[11px] uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
          >
            Pay by card
          </a>
        ) : null}
      </div>
    </div>
  );
}

function FamilyBlock({ family }: { family: PricingFamily }) {
  return (
    <div className="mb-16 last:mb-0 md:mb-20">
      <h3
        className="text-center text-[24px] uppercase leading-tight tracking-[0.02em] sm:text-[30px] lg:text-[36px]"
        style={{ color: OLIVE }}
      >
        {family.name}
      </h3>
      {family.blurb ? (
        <p
          className="mx-auto mt-1.5 max-w-[760px] text-center text-[14px] leading-snug md:text-[16px]"
          style={{ color: OLIVE }}
        >
          {/* The blurb is pipe-separated, so it should wrap at the separators
              rather than mid-phrase — on a phone it was breaking "Suitable for /
              all levels". Each segment keeps its trailing bar and never breaks
              inside itself; the space between segments is the only break point. */}
          {family.blurb.split(" | ").map((part, i, all) => (
            <Fragment key={part}>
              <span className="whitespace-nowrap">
                {part}
                {i < all.length - 1 ? " |" : ""}
              </span>
              {/* the breakable space must sit OUTSIDE the nowrap span */}
              {i < all.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap justify-center gap-x-[2%] gap-y-6 md:mt-10">
        {family.tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} icon={family.icon} tone={family.iconTone} />
        ))}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id={SECTION_IDS.pricing}
      className="relative overflow-hidden px-4 pt-14 pb-14 sm:px-6 md:pt-20 md:pb-20"
      style={{ backgroundColor: PAGE }}
    >
      {/* Botanical branches lifted from her Canva page and keyed to alpha. They
          are decoration only, so they stay out of the flow and off small screens
          where they would crowd the cards. */}
      <img
        src="/images/pkg-leaf-a.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-16 top-16 hidden w-[30%] max-w-[420px] select-none md:block"
      />
      <img
        src="/images/pkg-leaf-b.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-[26%] hidden w-[15%] max-w-[210px] select-none md:block"
      />
      <img
        src="/images/pkg-leaf-c.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-10 top-[58%] hidden w-[27%] max-w-[380px] select-none md:block"
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* ───────── Heading ───────── */}
        {/* Her lotus mark, keyed out of the Canva export rather than redrawn —
            a hand-traced approximation kept losing the petal proportions. */}
        <img
          src="/images/pkg-lotus.png"
          alt=""
          aria-hidden
          className="mx-auto w-[58px] select-none md:w-[66px]"
        />

        <h2
          className="mt-3 text-center font-serif text-[32px] leading-[1.15] sm:text-[46px] lg:text-[62px]"
          style={{ color: SLATE }}
        >
          Find the Package
          <br />
          That Fits <em className="italic">Your Flow</em>
        </h2>

        {/* Gold rule with a four-point sparkle at its centre */}
        <svg
          viewBox="0 0 420 16"
          aria-hidden
          className="mx-auto mt-4 h-4 w-[300px] max-w-[70%] md:w-[420px]"
          fill="none"
        >
          <path d="M0 8h190M230 8h190" stroke={GOLD} strokeWidth="1.1" />
          <path d="M210 0c1.6 5.2 3.2 6.8 8.4 8-5.2 1.2-6.8 2.8-8.4 8-1.6-5.2-3.2-6.8-8.4-8 5.2-1.2 6.8-2.8 8.4-8Z" fill={GOLD} />
        </svg>

        <p
          className="mx-auto mt-4 max-w-[620px] text-center text-[15px] leading-relaxed md:text-[18px]"
          style={{ color: SLATE }}
        >
          Thoughtful packages to support your practice
          <br className="hidden sm:block" />{" "}
          wherever you are on your journey
        </p>

        <div className="mt-12 md:mt-16">
          {PRICING.map((family) => (
            <FamilyBlock key={family.id} family={family} />
          ))}
        </div>
      </div>
    </section>
  );
}
