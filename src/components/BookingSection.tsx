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

  return (
    <>
      {/* ───────── Hero — BOOKING THE CLASS ───────── */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/booking-sand-hero.jpg"
          alt="Soulena's flower mark resting in the sand beside the beach yoga sign"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "saturate(0.78) contrast(0.74)" }}
        />
        {/*
         * Canva gives this photo a soft warm wash rather than a grey scrim.
         * Measured off the export: its shadows sit at rgb(85,77,62) and the
         * sand median at rgb(134,112,87) — so the teal "Soulena" sign reads
         * olive-brown and white type stays legible over the whole frame.
         * The contrast/saturate pair plus this overlay reproduce both points.
         */}
        <div className="absolute inset-0 bg-[#6f6346]/60" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-4 py-16 md:py-28 flex flex-col items-center text-center text-white">
          <FlowerIcon className="w-8 h-8 md:w-10 md:h-10 text-white mb-5 md:mb-7" />

          <h1 className="font-serif text-[28px] md:text-5xl uppercase tracking-[0.08em]">
            Booking the Class
          </h1>

          {/* Thin vertical rule, as in the Canva */}
          <span className="block w-px h-12 md:h-16 bg-white/70 my-7 md:my-9" aria-hidden="true" />

          <p className="max-w-[860px] text-[15px] md:text-[19px] leading-relaxed text-white/95">
            Whether you&apos;re joining a beach yoga class, booking a private session, or planning a
            special wellness gathering, each experience is thoughtfully designed with care and
            attention to your needs.
          </p>

          <p className="mt-5 md:mt-6 max-w-[860px] text-[15px] md:text-[19px] leading-relaxed text-white/95">
            Simply fill out the booking form with a few details about the class you&apos;re interested in,{" "}
            <br className="hidden md:inline" />
            and I&apos;ll get back to you as soon as possible.
          </p>

          <p className="mt-7 md:mt-9 text-[15px] md:text-[19px] leading-relaxed text-white/95">
            With love,
            <br />
            <em>Soulena Soul</em>
          </p>
        </div>
      </section>

      {/* ───────── View available dates ───────── */}
      <section id={SECTION_IDS.booking} className="bg-brand-cream px-4 pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <h2
            className="flex items-center gap-3 md:gap-4 font-serif text-[27px] md:text-5xl uppercase tracking-wide mb-8 md:mb-10"
            style={{ color: SLATE }}
          >
            <CalendarIcon className="w-6 h-6 md:w-9 md:h-9 shrink-0" />
            View Available Dates
          </h2>

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
    </>
  );
}
