import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";
import {
  SANCTUARY_CREAM,
  SANCTUARY_GOLD_TEXT,
  SANCTUARY_INK,
  SANCTUARY_ORB,
} from "@/components/SanctuaryTheme";

/**
 * Canva page 6 hero, rebuilt from measurements taken off the live design
 * (page 1200x675, i.e. 16:9). Everything below is expressed as a share of that
 * frame so it holds at any width:
 *
 *   orb        626 wide, centred, top 48px      -> 52.2% W, left 23.9%, top 7.1% H
 *   bowls photo 447x671 at x=731, y=44          -> 37.25% W, left 60.9%, top 6.5% H
 *   line art   364x513 at x=15,  y=105          -> 30.3%  W, left 1.25%, top 15.6% H
 *   "SANCTUARY" 42.67px                         -> 3.56% W
 */
export default function SanctuaryHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: SANCTUARY_INK }}>
      <div
        className="relative mx-auto aspect-[4/5] w-full max-w-[1400px] sm:aspect-[16/9]"
        style={{ containerType: "inline-size" }}
      >
        {/* Bowls photo — inset panel on the right */}
        <div className="absolute right-0 top-[6%] h-[84%] w-[46%] sm:left-[60.9%] sm:right-auto sm:top-[6.5%] sm:h-[99.4%] sm:w-[37.25%]">
          <Image
            src="/images/sss-hero-bowls.jpg"
            alt="Brass singing bowls, crystal bowls and mallets laid out on a striped rug for a sound healing ceremony"
            fill
            sizes="(min-width: 640px) 38vw, 46vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Gold ribbon line-art, left — full uncropped artwork (0.841 aspect,
            matching the 364x513 box Canva gives it) */}
        <div className="pointer-events-none absolute left-[1.25%] top-[15.6%] hidden h-[76%] w-[30.3%] sm:block">
          <Image
            src="/images/sss-line-ribbon.png"
            alt=""
            aria-hidden
            fill
            sizes="31vw"
            className="select-none object-contain"
          />
        </div>

        {/* Navy orb */}
        <div
          className="absolute left-1/2 top-[46%] aspect-square w-[80cqw] -translate-x-1/2 -translate-y-1/2 rounded-full sm:left-[23.9%] sm:top-[7.1%] sm:w-[52.2cqw] sm:translate-x-0 sm:translate-y-0"
          style={{ backgroundImage: SANCTUARY_ORB }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center px-[8%] pb-[3%] text-center">
            <FlowerIcon
              className="mb-[6.5%] aspect-square w-[5.2cqw] sm:w-[3.3cqw]"
              style={{ color: SANCTUARY_CREAM }}
              aria-hidden
            />

            <p
              className="text-[1.8cqw] uppercase leading-[1.6] tracking-[0.22em] sm:text-[1.17cqw]"
              style={{ color: SANCTUARY_CREAM }}
            >
              Curated Private
              <br />
              Wellness Experience
            </p>

            <h1 className="mb-[7%] mt-[6.5%] font-serif uppercase">
              <span
                className="block text-[11.5cqw] leading-[0.87] sm:text-[7.5cqw]"
                style={SANCTUARY_GOLD_TEXT}
              >
                Soul &amp;
                <br />
                Sound
              </span>
              <span
                className="mt-[0.22em] block text-[5.4cqw] leading-none tracking-[0.14em] sm:text-[3.56cqw]"
                style={SANCTUARY_GOLD_TEXT}
              >
                Sanctuary
              </span>
            </h1>

            <p
              className="text-[1.8cqw] uppercase leading-[1.6] tracking-[0.22em] sm:text-[1.17cqw]"
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
