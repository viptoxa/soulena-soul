import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Group meditation session on the deck surrounded by nature" },
  { src: "/images/gallery-2.jpg", alt: "Pair yoga with sound bowls on the beach" },
  { src: "/images/gallery-3.jpg", alt: "Sound healing ceremony under palm trees" },
  { src: "/images/gallery-4.jpg", alt: "Beach yoga practice by the ocean" },
  { src: "/images/gallery-5.jpg", alt: "Partner yoga shoulderstands on the ocean deck" },
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
                index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
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
