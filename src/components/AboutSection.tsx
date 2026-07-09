import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl text-brand-charcoal mb-3 uppercase">
            Move
          </h2>
          <p className="font-serif text-2xl md:text-[32px] text-brand-charcoal/90 leading-snug mb-7">
            where island breeze and ocean calm meet
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Are you looking for a way to reconnect with yourself through movement, breath,
            fresh air, and the rhythm of nature?
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            I&apos;m Soulena Soul, a yoga and movement teacher based in Phuket, Thailand,
            helping people build strength, mobility, and deeper body awareness through
            mindful movement.
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/gallery-2.jpg"
              alt="Movement practice by the sea in Phuket"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale"
            />
          </div>
          {/* Palm icon accent, overlapping the lower-left corner */}
          <Image
            src="/images/palm-icon.png"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-6 -left-5 md:-left-7 w-16 h-16 md:w-20 md:h-20 drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
