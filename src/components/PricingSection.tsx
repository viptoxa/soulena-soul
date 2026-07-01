import { SECTION_IDS } from "@/lib/constants";
import type { Package } from "@/types";

interface PricingSectionProps {
  packages: Package[];
}

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

function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 flex flex-col border border-brand-olive/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <h3 className="font-serif text-xl text-brand-charcoal mb-1.5">{pkg.name}</h3>
      <p className="text-sm text-brand-charcoal/60 mb-6 min-h-[2.5rem]">{pkg.description}</p>
      <div className="mb-6 flex items-baseline gap-2">
        <span className="font-serif text-brand-olive">
          <span className="text-3xl">{pkg.priceTHB.toLocaleString()}</span>
          <span className="text-lg ml-1.5">THB</span>
        </span>
        <span className="text-sm text-brand-charcoal/50">~USD {pkg.priceUSD}</span>
      </div>
      <div className="h-px bg-brand-olive/10 mb-5" />
      <ul className="space-y-2.5">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-brand-charcoal/70">
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
    <section id={SECTION_IDS.pricing} className="py-24 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center mb-16">
          <Flower className="w-8 h-8 text-brand-olive/40 mb-4" />
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center">
            Find the Package That Fits Your Flow
          </h2>
          <p className="text-brand-charcoal/60 text-center mt-3 max-w-xl leading-relaxed">
            Choose the rhythm that suits you — drop in whenever the island calls,
            or commit to a deeper journey.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider mb-8 text-center">
            Group Yoga Class
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {groupPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
          <span className="h-px w-16 bg-brand-olive/20" />
          <Flower className="w-5 h-5 text-brand-olive/40" />
          <span className="h-px w-16 bg-brand-olive/20" />
        </div>

        <div>
          <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider mb-8 text-center">
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
