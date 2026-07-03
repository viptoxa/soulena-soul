import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Soul & Sound Sanctuary — Soulena Soul | Phuket",
};

export default function SanctuaryPage() {
  return (
    <section className="bg-brand-charcoal text-brand-cream min-h-[75vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-2xl">
        <p className="tracking-[0.3em] uppercase text-brand-cream/50 text-xs mb-5">
          Curated Private Wellness Experience
        </p>
        <h1 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
          Soul &amp; Sound Sanctuary
        </h1>
        <p className="text-brand-cream/70 leading-relaxed mb-10 max-w-xl mx-auto">
          A calming and immersive wellness experience blending yoga, meditation, and sound
          healing — thoughtfully curated for weddings, birthdays, retreats, and meaningful
          celebrations.
        </p>
        <Link
          href={ROUTES.inquiry}
          className="inline-block rounded-full border border-brand-cream/50 px-10 py-4 text-sm uppercase tracking-wider hover:bg-brand-cream hover:text-brand-charcoal transition-colors"
        >
          Make an Inquiry
        </Link>
        <p className="text-brand-cream/30 text-xs mt-8">Full sanctuary experience coming soon.</p>
      </div>
    </section>
  );
}
