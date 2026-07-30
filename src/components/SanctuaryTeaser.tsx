import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

// Matches the Canva "Soul & Sound Sanctuary" page: black canvas, gold display
// type inside a deep navy orb, sound-bowl photo to the side.
const GOLD = "#c9a227";
const NAVY = "#1b2a4a";

export default function SanctuaryTeaser() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="grid md:grid-cols-[1.05fr_1fr] items-stretch">
        {/* Orb + title */}
        <div className="relative flex items-center justify-center px-6 py-16 md:py-24">
          <div
            className="relative flex aspect-square w-[min(78vw,420px)] flex-col items-center justify-center rounded-full px-8 text-center"
            style={{ background: `radial-gradient(circle at 50% 40%, #2b3d63 0%, ${NAVY} 62%, #101a30 100%)` }}
          >
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-white/80 leading-relaxed">
              Curated Private
              <br />
              Wellness Experience
            </p>
            <h2
              className="font-serif uppercase leading-[0.95] my-4 text-[34px] md:text-[46px] tracking-[0.02em]"
              style={{ color: GOLD }}
            >
              Soul &amp;
              <br />
              Sound
            </h2>
            <p
              className="font-serif uppercase tracking-[0.32em] text-[15px] md:text-[19px] -mt-1 mb-5"
              style={{ color: GOLD }}
            >
              Sanctuary
            </p>
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/80 leading-relaxed">
              For your special day
              <br />&amp; special person
            </p>
          </div>
        </div>

        {/* Photo + CTA */}
        <div className="relative min-h-[300px] md:min-h-[520px]">
          <Image
            src="/images/card-sanctuary.jpg"
            alt="Singing bowls and candles set up for a sound healing ceremony"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="mb-5 max-w-md text-sm md:text-[15px] leading-relaxed text-white/85">
              A calming, immersive experience blending yoga, meditation, and sound healing —
              thoughtfully curated for{" "}
              <span className="text-white">weddings, birthdays, retreats, and celebrations.</span>
            </p>
            <Link
              href={ROUTES.sanctuary}
              className="inline-flex items-center gap-2 rounded-full border px-8 py-3.5 text-[12px] uppercase tracking-[0.18em] transition-colors hover:bg-[#c9a227] hover:text-black"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Enter the Sanctuary <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
