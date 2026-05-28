import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.svg", alt: "Beach yoga session at sunset" },
  { src: "/images/gallery-2.svg", alt: "Peaceful morning practice by the sea" },
  { src: "/images/gallery-3.svg", alt: "Group yoga on Phuket beach" },
  { src: "/images/gallery-4.svg", alt: "Meditation by the ocean" },
];

export default function GallerySection() {
  return (
    <section id={SECTION_IDS.gallery} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-12">
          A Glimpse Into My Working Space
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
