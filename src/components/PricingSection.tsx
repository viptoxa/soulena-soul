import { SECTION_IDS } from "@/lib/constants";
import { PRICING, type PricingFamily, type PricingTier } from "@/lib/pricing";

// Canva page 8 ("PACKAGE") palette — flat sand panel, near-white square cards,
// slate display heading, deep maroon serif family names, hairline row rules.
const SAND = "#ddcd71";
const CARD = "#fafbf2";
const SLATE = "#3f4c54";
const MAROON = "#661414";
const RULE = "#d9d9d9";

// Canva prints the price as one bold line, e.g. "1,200 THB (~ USD 35.8)".
function priceLine(tier: PricingTier) {
  return `${tier.priceTHB.toLocaleString("en-US")} THB (~ USD ${tier.priceUSD})`;
}

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    // Canva mocks one card per group with a soft drop shadow — that is the
    // "selected / hovered" state noted in the design, so it lives on :hover here.
    <div
      className="flex flex-col transition-shadow duration-300 hover:shadow-[10px_12px_24px_rgba(120,104,40,0.32)] active:shadow-[10px_12px_24px_rgba(120,104,40,0.32)]"
      style={{ backgroundColor: CARD }}
    >
      <h4 className="px-5 py-6 text-[17px] font-bold uppercase leading-tight text-brand-charcoal md:px-6 md:py-8 md:text-[21px]">
        {tier.title}
      </h4>

      <div
        className="flex-1 border-y px-5 pt-3.5 pb-5 md:px-6 md:pb-6"
        style={{ borderColor: RULE }}
      >
        <p className="text-[17px] font-bold uppercase leading-[1.2] text-brand-charcoal md:text-[21px]">
          {tier.subtitle}
        </p>
        <ul className="mt-3.5 ml-3 list-disc space-y-1 pl-4 text-[14px] leading-snug text-brand-charcoal/85 md:mt-4 md:text-[16px]">
          {tier.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <p className="px-5 py-5 text-[18px] font-bold text-brand-charcoal md:px-6 md:py-6 md:text-[22px]">
        {priceLine(tier)}
      </p>
    </div>
  );
}

function FamilyBlock({ family }: { family: PricingFamily }) {
  return (
    <div className="mb-16 last:mb-0 md:mb-24">
      <h3
        className="mb-6 font-serif text-[26px] uppercase leading-[1.15] sm:text-[38px] lg:text-[54px] md:mb-8"
        style={{ color: MAROON }}
      >
        {family.name}
      </h3>

      {/* Canva keeps a three-column rhythm throughout — the two-tier groups
          simply leave the third column empty rather than stretching. */}
      <div className="grid gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {family.tiers.map((tier) => (
          <TierCard key={tier.id} tier={tier} />
        ))}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section
      id={SECTION_IDS.pricing}
      className="px-4 pt-14 pb-12 sm:px-6 md:pt-20 md:pb-16"
      style={{ backgroundColor: SAND }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h2
          className="mb-8 text-[30px] font-bold uppercase leading-[1.3] sm:text-[42px] lg:text-[58px] md:mb-10"
          style={{ color: SLATE }}
        >
          Find the Package
          <br />
          That Fits Your Flow
        </h2>

        {PRICING.map((family) => (
          <FamilyBlock key={family.id} family={family} />
        ))}
      </div>
    </section>
  );
}
