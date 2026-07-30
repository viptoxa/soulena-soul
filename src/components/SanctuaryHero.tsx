import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";
import {
  SANCTUARY_CREAM,
  SANCTUARY_GOLD_TEXT,
  SANCTUARY_INK,
  SANCTUARY_ORB,
} from "@/components/SanctuaryTheme";

/**
 * Canva page 6 hero: warm near-black canvas, gold loop line-art on the left,
 * the singing-bowls photo panel on the right, and a deep navy orb centred on
 * top of both carrying the gold display type.
 */
export default function SanctuaryHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: SANCTUARY_INK }}
    >
      <div className="relative mx-auto h-[420px] w-full max-w-[1400px] sm:h-[540px] md:h-[600px] lg:h-[700px] xl:h-[740px]">
        {/* Bowls photo — right-hand panel; the orb overlaps its left edge */}
        <div className="absolute right-0 top-[6%] h-[84%] w-[46%] sm:w-[38%] md:w-[32%]">
          <Image
            src="/images/sss-hero-bowls.jpg"
            alt="Brass singing bowls, crystal bowls and mallets laid out on a striped rug for a sound healing ceremony"
            fill
            sizes="(min-width: 768px) 32vw, 46vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Gold loop line-art, left */}
        <Image
          src="/images/sss-loop-a.png"
          alt=""
          aria-hidden
          width={700}
          height={770}
          className="pointer-events-none absolute left-[1%] top-[9%] hidden w-[27%] max-w-[300px] -scale-x-100 select-none sm:block"
        />

        {/* Navy orb */}
        <div
          className="absolute left-[46%] top-1/2 aspect-square w-[78vw] max-w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:left-1/2 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[640px]"
          style={{ backgroundImage: SANCTUARY_ORB }}
        >
          <div className="flex h-full w-full -translate-y-[5%] flex-col items-center justify-center px-6 text-center">
            <FlowerIcon
              className="mb-[7%] aspect-square w-[7%] min-w-[22px]"
              style={{ color: SANCTUARY_CREAM }}
              aria-hidden
            />

            <p
              className="text-[9px] uppercase leading-[1.55] tracking-[0.22em] sm:text-[11px] md:text-[13px]"
              style={{ color: SANCTUARY_CREAM }}
            >
              Curated Private
              <br />
              Wellness Experience
            </p>

            <h1 className="mb-[8%] mt-[6%] font-serif uppercase">
              <span
                className="block text-[clamp(2.1rem,8.2vw,4.5rem)] leading-[0.87]"
                style={SANCTUARY_GOLD_TEXT}
              >
                Soul &amp;
                <br />
                Sound
              </span>
              <span
                className="mt-[0.25em] block text-[clamp(1rem,3.9vw,2.2rem)] leading-none tracking-[0.14em]"
                style={SANCTUARY_GOLD_TEXT}
              >
                Sanctuary
              </span>
            </h1>

            <p
              className="text-[9px] uppercase leading-[1.55] tracking-[0.22em] sm:text-[11px] md:text-[13px]"
              style={{ color: SANCTUARY_CREAM }}
            >
              For Your Special Day
              <br />
              &amp; Special Person
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
