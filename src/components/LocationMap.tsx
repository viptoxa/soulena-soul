"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LOCATIONS } from "@/lib/constants";

const PhuketMap = dynamic(() => import("./PhuketMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-brand-cream-dark/40 animate-pulse" />
  ),
});

export default function LocationMap() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider mb-2">
          Based in Phuket, Thailand
        </h2>
        <p className="text-brand-charcoal/70 mb-8 leading-relaxed">
          Classes take place at beautiful beach locations across Phuket island.
          Tap a spot to find it on the map.
        </p>
        <ul className="grid grid-cols-2 gap-3">
          {LOCATIONS.map((location, i) => (
            <li key={location.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  active === i
                    ? "border-brand-olive bg-brand-olive/10 text-brand-charcoal"
                    : "border-brand-cream-dark bg-white/40 text-brand-charcoal/70 hover:border-brand-olive/50 hover:text-brand-charcoal"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors ${
                    active === i ? "bg-brand-olive" : "bg-brand-sage"
                  }`}
                />
                <span className="text-sm font-medium">{location.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative isolate aspect-[4/5] rounded-2xl overflow-hidden border-2 border-brand-cream-dark shadow-sm">
        <PhuketMap
          locations={LOCATIONS}
          activeIndex={active}
          onMarkerClick={setActive}
        />
      </div>
    </div>
  );
}
