import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const TESTIMONIALS = [
  { src: "/images/testimonial-1.jpg", alt: "Kind message from a student about their yoga session" },
  { src: "/images/testimonial-2.jpg", alt: "Warm words of thanks from a student after class" },
  { src: "/images/testimonial-3.jpg", alt: "Heartfelt feedback from a student in the community" },
  { src: "/images/testimonial-4.jpg", alt: "Gentle appreciation shared by a returning student" },
] as const;

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <FlowerIcon className="w-8 h-8 text-brand-olive/40 mb-4" />
          <h2 className="font-serif text-[27px] md:text-4xl uppercase tracking-wider text-brand-charcoal text-center leading-tight">
            Gentle Words from the Community
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.src}
              className={`bg-white p-2.5 rounded-lg shadow-md transition-transform hover:rotate-0 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div className="relative aspect-[3/4] rounded overflow-hidden">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
