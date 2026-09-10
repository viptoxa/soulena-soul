"use client";

import { useEffect } from "react";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";
import { SECTION_IDS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME;

// Canva booking page palette: slate headings on cream.
const SLATE = "#3f4c54";

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7 1.5a1 1 0 0 1 1 1V4h8V2.5a1 1 0 1 1 2 0V4h1.5A2.5 2.5 0 0 1 22 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-13A2.5 2.5 0 0 1 4.5 4H6V2.5a1 1 0 0 1 1-1ZM4 10v9.5c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V10H4Zm3 2h2.5v2.5H7V12Zm4.75 0h2.5v2.5h-2.5V12Zm4.75 0H19v2.5h-2.5V12ZM7 16.25h2.5v2.5H7v-2.5Zm4.75 0h2.5v2.5h-2.5v-2.5Z" />
    </svg>
  );
}

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

  // The page is only this block now, so it carries the top and bottom padding
  // the removed hero used to provide.
  return (
    <section id={SECTION_IDS.booking} className="bg-brand-cream px-4 pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-[1200px]">
          {/* The page's only heading now that the hero is gone, so it is the
              h1 — otherwise /booking ships without one at all. */}
          <h1
            className="flex items-center gap-3 md:gap-4 font-serif text-[27px] md:text-5xl uppercase tracking-wide mb-8 md:mb-10"
            style={{ color: SLATE }}
          >
            <CalendarIcon className="w-6 h-6 md:w-9 md:h-9 shrink-0" />
            View Available Dates
          </h1>

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
        </div>
    </section>
  );
}
