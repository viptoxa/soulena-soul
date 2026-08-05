"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { LOCATIONS } from "@/lib/constants";

const PhuketMap = dynamic(() => import("./PhuketMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-brand-cream-dark/40 animate-pulse" />,
});

export type MapTone = "cream" | "olive";

export default function LocationMap({
  tone = "cream",
  children,
}: {
  tone?: MapTone;
  /** Optional extra content under the beach list — /contact puts its channels here. */
  children?: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const olive = tone === "olive";

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2
          className={`font-serif text-[27px] md:text-4xl uppercase tracking-wider mb-2 ${
            olive ? "text-brand-cream" : "text-brand-charcoal"
          }`}
        >
          Based in Phuket, Thailand
        </h2>
        <p
          className={`mb-8 leading-relaxed ${
            olive ? "text-brand-cream/75" : "text-brand-charcoal/70"
          }`}
        >
          Classes take place at beautiful beach locations across Phuket island. Tap a spot to find it
          on the map.
        </p>
        <ul className="grid grid-cols-2 gap-3">
          {LOCATIONS.map((location, i) => (
            <li key={location.name}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  olive
                    ? active === i
                      ? "border-brand-cream bg-brand-cream/15 text-brand-cream"
                      : "border-brand-cream/35 bg-transparent text-brand-cream/75 hover:border-brand-cream/70 hover:text-brand-cream"
                    : active === i
                      ? "border-brand-olive bg-brand-olive/10 text-brand-charcoal"
                      : "border-brand-cream-dark bg-white/40 text-brand-charcoal/70 hover:border-brand-olive/50 hover:text-brand-charcoal"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 transition-colors ${
                    olive
                      ? active === i
                        ? "bg-brand-cream"
                        : "bg-brand-cream/50"
                      : active === i
                        ? "bg-brand-olive"
                        : "bg-brand-sage"
                  }`}
                />
                <span className="text-sm font-medium">{location.name}</span>
              </button>
            </li>
          ))}
        </ul>

        {children}
      </div>

      <div
        className={`relative isolate aspect-[4/5] rounded-2xl overflow-hidden border-2 shadow-sm ${
          olive ? "border-brand-cream/70" : "border-brand-cream-dark"
        }`}
      >
        <PhuketMap locations={LOCATIONS} activeIndex={active} onMarkerClick={setActive} />
      </div>
    </div>
  );
}
