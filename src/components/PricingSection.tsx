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
