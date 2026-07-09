import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-[27px] md:text-5xl text-brand-charcoal mb-2 uppercase tracking-wider">
            Move
          </h2>
          <p className="font-serif text-lg md:text-xl text-brand-olive italic mb-6">
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
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/gallery-2.jpg"
            alt="Movement practice by the sea in Phuket"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
