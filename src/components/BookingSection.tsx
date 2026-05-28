"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "@/lib/constants";

export default function BookingSection() {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;
    if (!calUsername) {
      setCalLoaded(true);
      return;
    }

    import("@calcom/embed-react").then(() => {
      setCalLoaded(true);
    });
  }, []);

  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME;

  return (
    <section id={SECTION_IDS.booking} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider mb-4">
            View Available Dates
          </h2>
          <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
            Whether you&apos;re joining a beach yoga class, booking a private session,
            or planning a special wellness gathering, each experience is thoughtfully
            designed with care and attention to your needs.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white/60 min-h-[500px] flex items-center justify-center">
          {calUsername ? (
            <iframe
              src={`https://cal.com/${calUsername}?embed=true&theme=light`}
              className="w-full h-[600px] border-0"
              title="Book a class with Soulena Soul"
            />
          ) : (
            <div className="text-center p-12">
              <p className="font-serif text-xl text-brand-olive mb-4">
                Booking Calendar
              </p>
              <p className="text-brand-charcoal/60 text-sm mb-6">
                Cal.com calendar will appear here once configured.
              </p>
              <p className="text-brand-charcoal/40 text-xs">
                Set <code className="bg-brand-cream-dark px-1 rounded">NEXT_PUBLIC_CAL_USERNAME</code> in .env.local
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-brand-charcoal/60">
            Simply fill out the booking form and I&apos;ll get back to you as soon as possible.
          </p>
          <p className="text-sm text-brand-charcoal/40 mt-1 italic">
            With love, Soulena Soul
          </p>
        </div>
      </div>
    </section>
  );
}
