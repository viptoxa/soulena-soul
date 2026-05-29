import Image from "next/image";
import { SECTION_IDS, LOCATIONS } from "@/lib/constants";

export default function LocationSection() {
  return (
    <section id={SECTION_IDS.location} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider mb-2">
            Based in Phuket, Thailand
          </h2>
          <p className="text-brand-charcoal/70 mb-8 leading-relaxed">
            Classes take place at beautiful beach locations across Phuket island.
          </p>
          <ul className="space-y-3">
            {LOCATIONS.map((location) => (
              <li key={location} className="flex items-center gap-3 text-brand-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-sage flex-shrink-0" />
                {location}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-cream-dark">
          <Image
            src="/images/phuket-map.jpg"
            alt="Map of Phuket showing yoga class locations"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
