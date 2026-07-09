import { SECTION_IDS } from "@/lib/constants";
import { PRICING, type PricingFamily, type PricingTier } from "@/lib/pricing";

function Flower({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={className} aria-hidden="true">
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

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 md:p-7 border border-brand-olive/15 shadow-sm transition-all duration-300 hover:border-brand-olive/50 hover:shadow-lg hover:-translate-y-1">
      <h4 className="font-medium uppercase tracking-wider text-brand-charcoal text-[15px]">
        {tier.title}
      </h4>
      <div className="h-px bg-brand-olive/10 my-3.5" />
      <p className="font-medium text-brand-charcoal/90 text-sm leading-snug mb-4 min-h-[2.5rem]">
        {tier.subtitle}
      </p>

      <ul className="space-y-1.5 mb-6 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[13px] text-brand-charcoal/65">
            <span className="w-1 h-1 rounded-full bg-brand-sage mt-1.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-baseline gap-2">
        <span className="font-serif text-brand-olive-dark">
          <span className="text-2xl md:text-[27px]">{tier.priceTHB.toLocaleString()}</span>
          <span className="text-base ml-1.5">THB</span>
        </span>
        <span className="text-xs text-brand-charcoal/45">~ USD {tier.priceUSD}</span>
      </div>
    </div>
  );
}

function FamilyBlock({ family }: { family: PricingFamily }) {
  const cols =
    family.tiers.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3 max-w-5xl"
      : "sm:grid-cols-2 max-w-3xl";

  return (
    <div className="mb-14 last:mb-0">
      <h3 className="font-serif text-2xl md:text-[28px] text-brand-olive-dark text-center mb-8">
        {family.name}
      </h3>
      <div className={`grid gap-5 md:gap-6 mx-auto ${cols}`}>
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
      className="py-14 md:py-24 px-4 bg-gradient-to-b from-[#e7ddba] to-[#ddd2a8]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <Flower className="w-8 h-8 text-brand-olive/40 mb-4" />
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider text-center leading-tight">
            Find the Package
            <br className="sm:hidden" /> That Fits Your Flow
          </h2>
          <p className="text-brand-charcoal/60 text-center mt-3 max-w-xl leading-relaxed">
            Choose the rhythm that suits you — drop in whenever the island calls,
            or commit to a deeper journey.
          </p>
        </div>

        {PRICING.map((family) => (
          <FamilyBlock key={family.id} family={family} />
        ))}
      </div>
    </section>
  );
}
