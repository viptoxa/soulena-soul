import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Sampled straight from the Canva Classes page: warm dark-brown canvas with
// every piece of type in the same soft gold, over a huge dimmed shell whose
// ridges read as sand ripples.
const INK = "#2f2822";
const GOLD = "#cdbc6d";

/** Thin rule with a centred diamond and small flourishes, as in the Canva. */
function GoldRule() {
  return (
    <svg
      viewBox="0 0 1000 24"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="my-6 h-5 w-full max-w-[900px]"
    >
      <path d="M2 12h466" stroke={GOLD} strokeWidth="1.6" />
      <path d="M532 12h466" stroke={GOLD} strokeWidth="1.6" />
      <path d="M500 2l16 10-16 10-16-10 16-10z" fill={GOLD} />
      {[120, 240, 360, 640, 760, 880].map((x) => (
        <path key={x} d={`M${x - 5} 8l5 4-5 4`} stroke={GOLD} strokeWidth="1.2" opacity="0.75" />
      ))}
    </svg>
  );
}

export default function SanctuaryTeaser() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_34%]">
        {/* Copy */}
        <div className="relative isolate flex flex-col justify-center overflow-hidden px-5 py-16 sm:px-10 md:py-24 lg:pl-16 lg:pr-14">
          {/* Giant dimmed shell — its ridges become the sand-ripple texture */}
          <Image
            src="/images/sss-shell-backdrop.jpg"
            alt=""
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="-z-10 scale-[2.4] object-cover object-left-top opacity-75 mix-blend-screen"
          />

          <h2
            className="font-serif leading-[1.02] text-[clamp(30px,4.8vw,72px)] md:whitespace-nowrap"
            style={{ color: GOLD }}
          >
            Soul &amp; Sound Sanctuary
          </h2>

          <GoldRule />

          <p
            className="font-serif leading-[1.3] text-[30px] sm:text-[38px] lg:text-[50px]"
            style={{ color: GOLD }}
          >
            Curated Private
            <br />
            Wellness Experience
          </p>

          <p
            className="mt-10 max-w-[640px] text-[16px] leading-relaxed lg:text-[19px]"
            style={{ color: GOLD }}
          >
            {/* The space has to be explicit: JSX drops the newline before the
                <br>, so with the break hidden on phones it read "healing,—". */}
            A calming and immersive wellness experience blending yoga, meditation, and sound healing,{" "}
            <br className="hidden sm:block" />— thoughtfully curated for{" "}
            <strong className="font-semibold">
              weddings, birthdays, retreats, and meaningful celebrations.
            </strong>
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <FlowerIcon className="h-11 w-11 shrink-0 lg:h-14 lg:w-14" style={{ color: GOLD }} />
            <Link
              href={ROUTES.sanctuary}
              className="inline-flex items-center gap-4 rounded-full bg-brand-olive px-10 py-4 text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-olive-dark"
            >
              Enter the Sanctuary <span aria-hidden>⟶</span>
            </Link>
          </div>
        </div>

        {/* Singing-bowls panel, full height on the right */}
        <div className="relative order-first h-60 md:order-none md:h-auto md:min-h-[640px]">
          <Image
            src="/images/sss-hero-bowls.jpg"
            alt="Singing bowls and candles laid out for a sound healing ceremony"
            fill
            sizes="(min-width: 768px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
