import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const GOLD = "#ccbd66";
const SHADOW = "shadow-[0_16px_40px_-16px_rgba(60,52,40,0.45)]";

// Real student notes — shown in full (never cropped), overlapping like the Canva.
// The e-mail screenshots sit on white cards; Tina's note is the photo itself,
// so it gets no white frame.
const CARDS = [
  { src: "/images/about-testi-1.jpg", w: 1000, h: 565, framed: true, alt: "Thank-you note from Paul & Sarah after a morning class", pos: "left-0 top-[16%] w-[36%] rotate-[-4deg] z-10" },
  { src: "/images/about-testi-2.jpg", w: 1000, h: 754, framed: true, alt: "Message from Elisa and Felix after a private class", pos: "left-[39%] top-[8%] w-[31%] rotate-[-2deg] z-20" },
  { src: "/images/about-testi-3.jpg", w: 1000, h: 760, framed: true, alt: "Kind words from Jana after a wonderful class", pos: "left-[19%] top-[48%] w-[35%] rotate-[-1deg] z-30" },
  { src: "/images/about-testi-4.jpg", w: 694, h: 999, framed: false, alt: "Handwritten thank-you card from Tina at Mandarava Resort", pos: "left-[69%] top-0 w-[27%] rotate-[7deg] z-40" },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-wide text-brand-charcoal leading-[1.05] mb-8 md:mb-10 max-w-[19ch]">
          Gentle Words from the Community
        </h2>

        {/* Desktop — overlapping collage (matches the Canva) */}
        <div className="relative hidden md:block h-[640px]">
          {CARDS.map((c) => (
            <figure
              key={c.src}
              className={`absolute ${c.pos} ${SHADOW} ${
                c.framed ? "rounded-xl bg-white p-3" : "rounded-lg overflow-hidden"
              }`}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                sizes="420px"
                className={`w-full h-auto ${c.framed ? "rounded-lg" : ""}`}
              />
            </figure>
          ))}
          <FlowerIcon className="absolute right-[4%] bottom-[8%] w-9 h-9 z-50" style={{ color: GOLD }} />
        </div>

        {/* Mobile — simple stack */}
        <div className="md:hidden space-y-6">
          {CARDS.map((c, i) => (
            <figure
              key={c.src}
              className={`mx-auto max-w-[420px] shadow-[0_12px_30px_-14px_rgba(60,52,40,0.4)] ${
                c.framed ? "rounded-xl bg-white p-3" : "rounded-lg overflow-hidden"
              }`}
              style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                sizes="90vw"
                className={`w-full h-auto ${c.framed ? "rounded-lg" : ""}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
