import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const GOLD = "#ccbd66";

// Real student notes — shown in full (never cropped), overlapping like the Canva.
const CARDS = [
  { src: "/images/about-testi-1.jpg", w: 1000, h: 565, alt: "Thank-you note from Paul & Sarah after a morning class", pos: "left-[4%] top-[15%] w-[33%] rotate-[-3.5deg] z-10" },
  { src: "/images/about-testi-2.jpg", w: 1000, h: 754, alt: "Message from Elisa and Felix after a private class", pos: "left-[39%] top-[7%] w-[28%] rotate-[-2deg] z-20" },
  { src: "/images/about-testi-3.jpg", w: 1000, h: 760, alt: "Kind words from Jana after a wonderful class", pos: "left-[20%] top-[44%] w-[32%] rotate-[-1deg] z-30" },
  { src: "/images/about-testi-4.jpg", w: 694, h: 999, alt: "Handwritten thank-you card from Tina at Mandarava Resort", pos: "left-[64%] top-0 w-[25%] rotate-[7deg] z-40" },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-wide text-brand-charcoal leading-[1.05] mb-8 md:mb-10 max-w-[15ch]">
          Gentle Words from the Community
        </h2>

        {/* Desktop — overlapping collage (matches the Canva) */}
        <div className="relative hidden md:block h-[600px]">
          {CARDS.map((c) => (
            <figure
              key={c.src}
              className={`absolute rounded-xl bg-white p-3 shadow-[0_16px_40px_-16px_rgba(60,52,40,0.45)] ${c.pos}`}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                sizes="420px"
                className="w-full h-auto rounded-lg"
              />
            </figure>
          ))}
          <FlowerIcon className="absolute right-[5%] bottom-[4%] w-9 h-9 z-50" style={{ color: GOLD }} />
        </div>

        {/* Mobile — simple stack */}
        <div className="md:hidden space-y-6">
          {CARDS.map((c, i) => (
            <figure
              key={c.src}
              className="mx-auto max-w-[420px] rounded-xl bg-white p-3 shadow-[0_12px_30px_-14px_rgba(60,52,40,0.4)]"
              style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
            >
              <Image src={c.src} alt={c.alt} width={c.w} height={c.h} sizes="90vw" className="w-full h-auto rounded-lg" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
