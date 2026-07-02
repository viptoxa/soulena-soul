"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { SECTION_IDS } from "@/lib/constants";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME;

export default function BookingSection() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#8b7355" },
          dark: { "cal-brand": "#8b7355" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id={SECTION_IDS.booking} className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider mb-4">
            View Available Dates
          </h2>
          <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
            Whether you&apos;re joining a beach yoga class, booking a private session,
            or planning a special wellness gathering, each experience is thoughtfully
            designed with care and attention to your needs.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden bg-white/60 border border-brand-cream-dark shadow-sm">
          {CAL_USERNAME ? (
            <Cal
              calLink={CAL_USERNAME}
              style={{ width: "100%", height: "600px", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          ) : (
            <div className="text-center p-12 min-h-[400px] flex flex-col items-center justify-center">
              <p className="font-serif text-xl text-brand-olive mb-4">Booking Calendar</p>
              <p className="text-brand-charcoal/60 text-sm">
                The booking calendar will appear here once configured.
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
