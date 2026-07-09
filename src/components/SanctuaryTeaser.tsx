import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function SanctuaryTeaser() {
  return (
    <section className="relative bg-brand-charcoal text-brand-cream overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="px-4 sm:px-8 lg:px-14 py-14 md:py-20 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-[40px] text-[#c9a76a] leading-tight mb-2">
            Soul &amp; Sound Sanctuary
          </h2>
          <p className="uppercase tracking-[0.2em] text-xs text-brand-cream/60 mb-6">
            Curated Private Wellness Experience
          </p>
          <p className="text-brand-cream/75 leading-relaxed mb-8 max-w-md">
            A calming and immersive wellness experience blending yoga, meditation, and sound healing —
            thoughtfully curated for{" "}
            <span className="text-brand-cream">weddings, birthdays, retreats, and meaningful celebrations.</span>
          </p>
          <Link
            href={ROUTES.sanctuary}
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#c9a76a]/70 text-[#c9a76a] px-8 py-3.5 text-xs uppercase tracking-wider hover:bg-[#c9a76a] hover:text-brand-charcoal transition-colors"
          >
            Enter the Sanctuary <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="relative min-h-[260px] md:min-h-full">
          <Image
            src="/images/card-sanctuary.jpg"
            alt="Sound healing bowls and candles"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20" />
        </div>
      </div>
    </section>
  );
}
