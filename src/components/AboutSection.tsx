import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

// Canva uses a desaturated slate blue-grey for the Home headings/body.
const SLATE = "#3f4c54";

export default function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div style={{ color: SLATE }}>
          <h2 className="font-serif text-5xl md:text-7xl mb-4 uppercase leading-none">Move</h2>
          <p className="font-serif text-3xl md:text-[38px] leading-[1.15] mb-8">
            where island breeze
            <br />
            and ocean calm meet
          </p>
          <p className="leading-relaxed mb-5 opacity-90">
            Are you looking for a way to reconnect with yourself through movement, breath,
            fresh air, and the rhythm of nature?
          </p>
          <p className="leading-relaxed opacity-90">
            I&apos;m Soulena Soul, a yoga and movement teacher based in{" "}
            <strong className="font-semibold">Phuket, Thailand,</strong> helping people build
            strength, mobility, and deeper body awareness through mindful movement.
          </p>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_18px_50px_-24px_rgba(60,52,40,0.4)]">
            <Image
              src="/images/move-color.jpg"
              alt="Beach yoga & movement class in Phuket"
              width={600}
              height={600}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="w-full h-auto"
            />
          </div>
          {/* Palm icon overlapping the lower-left corner */}
          <Image
            src="/images/palm-circle.png"
            alt=""
            width={96}
            height={96}
            className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-6 w-16 h-16 md:w-24 md:h-24"
          />
        </div>
      </div>
    </section>
  );
}
