import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Sampled straight from the Canva Classes page: warm dark-brown canvas with
// every piece of type in the same soft gold.
const INK = "#2f2822";
const GOLD = "#cdbc6d";

function GoldRule() {
  return (
    <svg viewBox="0 0 680 20" fill="none" aria-hidden="true" className="my-5 h-4 w-full max-w-[620px]">
      <path d="M4 10h300" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      <path d="M376 10h300" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      <path d="M340 2l12 8-12 8-12-8 12-8z" fill={GOLD} />
    </svg>
  );
}

export default function SanctuaryTeaser() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <div className="grid md:grid-cols-[minmax(0,1fr)_33%]">
        {/* Copy */}
        <div className="flex flex-col justify-center px-5 py-14 sm:px-10 md:py-20 lg:pl-16 lg:pr-14">
          <h2
            className="font-serif text-[38px] leading-[1.05] sm:text-[46px] lg:text-[56px]"
            style={{ color: GOLD }}
          >
            Soul &amp; Sound Sanctuary
          </h2>

          <GoldRule />

          <p
            className="font-serif text-[28px] leading-[1.25] sm:text-[32px] lg:text-[38px]"
            style={{ color: GOLD }}
          >
            Curated Private
            <br />
            Wellness Experience
          </p>

          <p className="mt-7 max-w-[520px] leading-relaxed" style={{ color: GOLD }}>
            A calming and immersive wellness experience blending yoga, meditation, and sound healing,
            <br className="hidden sm:block" />— thoughtfully curated for{" "}
            <strong className="font-semibold">
              weddings, birthdays, retreats, and meaningful celebrations.
            </strong>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <FlowerIcon className="h-8 w-8 shrink-0" style={{ color: GOLD }} />
            <Link
              href={ROUTES.sanctuary}
              className="inline-flex items-center gap-2 rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
            >
              Enter the Sanctuary <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Singing-bowls panel, full height on the right */}
        <div className="relative order-first h-56 md:order-none md:h-auto md:min-h-[560px]">
          <Image
            src="/images/sss-hero-bowls.jpg"
            alt="Singing bowls and candles laid out for a sound healing ceremony"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
