import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal mb-2 uppercase tracking-wider">
            Move
          </h2>
          <p className="font-serif text-lg text-brand-olive italic mb-6">
            where island breeze and ocean calm meet
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Are you looking for a way to reconnect with yourself through movement, breath,
            fresh air, and the rhythm of nature?
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            I&apos;m Soulena Soul, a yoga and movement teacher based in Phuket, Thailand,
            helping people build strength, mobility, and deeper body awareness through
            mindful movement.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-8">
            Still evolving in her teaching journey, Soulena brings a gentle and intentional
            approach to every class — creating a soft space inspired by island life in Phuket
            where students can breathe, move, explore, and simply be.
          </p>
          <a
            href={`#${SECTION_IDS.booking}`}
            className="inline-block border-2 border-brand-olive text-brand-olive rounded-full px-8 py-3 text-sm uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
          >
            Join My Classes
          </a>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="Soulena practicing yoga on the beach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
