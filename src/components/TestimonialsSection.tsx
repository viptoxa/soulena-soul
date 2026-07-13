import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const GOLD = "#c7b96e";

// Real student notes — shown in full (never cropped), scattered like the Canva.
const CARDS = [
  { src: "/images/about-testi-1.jpg", w: 1000, h: 565, alt: "Thank-you note from Paul & Sarah after a morning class", pos: "left-0 top-[6%] w-[41%] rotate-[-3deg] z-10" },
  { src: "/images/about-testi-2.jpg", w: 1000, h: 754, alt: "Message from Elisa and Felix after a private class", pos: "left-[45%] top-[1%] w-[43%] rotate-[2deg] z-10" },
  { src: "/images/about-testi-3.jpg", w: 1000, h: 760, alt: "Kind words from Jana after a wonderful class", pos: "left-[6%] top-[45%] w-[39%] rotate-[-1.5deg] z-20" },
  { src: "/images/about-testi-4.jpg", w: 694, h: 999, alt: "Handwritten thank-you card from Tina at Mandarava Resort", pos: "left-[65%] top-[31%] w-[26%] rotate-[3deg] z-30" },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-wide text-brand-charcoal leading-[1.05] mb-10 md:mb-16 max-w-[15ch]">
          Gentle Words from the Community
        </h2>

        {/* Desktop — scattered overlapping collage */}
        <div className="relative hidden md:block h-[700px]">
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
                sizes="480px"
                className="w-full h-auto rounded-lg"
              />
            </figure>
          ))}
          <FlowerIcon className="absolute right-[6%] bottom-[2%] w-8 h-8 z-40" style={{ color: GOLD }} />
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
