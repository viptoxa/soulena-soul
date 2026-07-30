import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Matches the Canva "Soul & Sound Sanctuary" hero: warm near-black canvas,
// gold loop line-art on the left, the bowls photo panel on the right, and a
// deep navy orb centred on top of both.
const GOLD = "#d0a13c";
const INK = "#1c1712";

export default function SanctuaryTeaser() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {/* Hero band */}
      <div className="relative h-[460px] sm:h-[560px] md:h-[660px]">
        {/* Bowls photo — right-hand panel, the orb overlaps it */}
        <div className="absolute inset-y-8 right-0 w-[62%] md:w-[46%]">
          <Image
            src="/images/card-sanctuary.jpg"
            alt="Singing bowls and candles set up for a sound healing ceremony"
            fill
            sizes="(min-width: 768px) 46vw, 62vw"
            className="object-cover"
          />
        </div>

        {/* Gold loop line-art, left side */}
        <svg
          viewBox="0 0 240 340"
          fill="none"
          aria-hidden="true"
          className="absolute left-[3%] top-1/2 hidden -translate-y-1/2 md:block w-[190px] lg:w-[230px]"
        >
          <path
            d="M232 12C120 40 30 96 44 168c12 62 118 60 132 6 12-46-64-70-118-40C10 160 8 250 96 292"
            stroke={GOLD}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M120 322c40 14 84 4 112-22" stroke={GOLD} strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Navy orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="flex aspect-square w-[86vw] max-w-[300px] sm:max-w-[380px] md:max-w-[480px] flex-col items-center justify-center rounded-full px-8 text-center"
            style={{
              background:
                "radial-gradient(circle at 50% 38%, #3a4a72 0%, #26355a 45%, #131d36 100%)",
            }}
          >
            <FlowerIcon className="mb-4 h-6 w-6 md:h-8 md:w-8 text-white/90" />
            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.28em] text-white/85 leading-[1.7]">
              Curated Private
              <br />
              Wellness Experience
            </p>
            <h2
              className="font-serif uppercase leading-[0.92] my-3 md:my-4 text-[36px] md:text-[54px]"
              style={{ color: GOLD }}
            >
              Soul &amp;
              <br />
              Sound
            </h2>
            <p
              className="font-serif uppercase tracking-[0.3em] text-[15px] md:text-[22px] mb-4 md:mb-6"
              style={{ color: GOLD }}
            >
              Sanctuary
            </p>
            <p className="text-[9px] md:text-[11px] uppercase tracking-[0.28em] text-white/85 leading-[1.7]">
              For your special day
              <br />&amp; special person
            </p>
          </div>
        </div>
      </div>

      {/* Blurb + CTA */}
      <div className="relative mx-auto max-w-2xl px-4 pb-14 md:pb-20 text-center">
        <p className="mb-7 leading-relaxed text-white/75">
          A calming, immersive experience blending yoga, meditation, and sound healing —
          thoughtfully curated for{" "}
          <span className="text-white">weddings, birthdays, retreats, and celebrations.</span>
        </p>
        <Link
          href={ROUTES.sanctuary}
          className="inline-block rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
        >
          Enter the Sanctuary
        </Link>
      </div>
    </section>
  );
}
