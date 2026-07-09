import Image from "next/image";

const GLIMPSE = [
  "/images/gallery-1.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/card-event.jpg",
];

export default function GlimpseGallery() {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-olive/90 text-brand-cream overflow-hidden">
      <div className="mx-auto max-w-[1100px] text-center">
        <p className="uppercase tracking-[0.35em] text-brand-cream/60 text-xs mb-3">A Glimpse Into</p>
        <h2 className="font-serif text-3xl md:text-5xl mb-12 md:mb-16">My Working Space</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {GLIMPSE.map((src, i) => (
            <div
              key={src}
              className={`relative rounded-full overflow-hidden ring-4 ring-brand-cream/20 shadow-lg ${
                i % 2
                  ? "w-28 h-28 md:w-40 md:h-40 md:-translate-y-5"
                  : "w-32 h-32 md:w-48 md:h-48 md:translate-y-5"
              }`}
            >
              <Image src={src} alt="" fill sizes="200px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
