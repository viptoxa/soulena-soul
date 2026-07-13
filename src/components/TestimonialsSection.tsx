import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Real student notes — shown in full (never cropped). Natural dimensions keep
// each screenshot readable.
const TESTIMONIALS = [
  { src: "/images/about-testi-1.jpg", w: 1000, h: 565, alt: "Thank-you note from Paul & Sarah after a morning class", rot: "-2deg" },
  { src: "/images/about-testi-4.jpg", w: 694, h: 999, alt: "Handwritten thank-you card from Tina at Mandarava Resort", rot: "1.5deg" },
  { src: "/images/about-testi-2.jpg", w: 1000, h: 754, alt: "Message from Elisa and Felix after a private class", rot: "1.5deg" },
  { src: "/images/about-testi-3.jpg", w: 1000, h: 760, alt: "Kind words from Jana after a wonderful class", rot: "-1.5deg" },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1000px]">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <FlowerIcon className="w-8 h-8 text-brand-olive/40 mb-4" />
          <h2 className="font-serif text-[27px] md:text-5xl uppercase tracking-wide text-brand-charcoal text-center leading-tight">
            Gentle Words from the Community
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 gap-6 md:gap-8 [column-fill:_balance]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.src}
              className="mb-6 md:mb-8 break-inside-avoid rounded-xl bg-white p-3 shadow-[0_10px_30px_-12px_rgba(60,52,40,0.35)]"
              style={{ transform: `rotate(${t.rot})` }}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={t.w}
                height={t.h}
                sizes="(min-width: 640px) 480px, 90vw"
                className="w-full h-auto rounded-lg"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
