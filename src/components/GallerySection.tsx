import { SECTION_IDS } from "@/lib/constants";
import GalleryLightbox from "./GalleryLightbox";

const GALLERY_IMAGES = [
  { src: "/images/about-gallery-1.jpg", alt: "Sunset beach yoga class group photo" },
  { src: "/images/about-gallery-2.jpg", alt: "Group meditation on the deck surrounded by nature" },
  { src: "/images/about-gallery-3.jpg", alt: "Restorative stretch on the mats in the sun" },
  { src: "/images/about-gallery-4.jpg", alt: "Assisted backbend by the sea" },
  { src: "/images/about-gallery-5.jpg", alt: "Beach movement class on the sand" },
  { src: "/images/about-gallery-6.jpg", alt: "Sunrise flow on the hillside overlooking the ocean" },
  { src: "/images/about-gallery-7.jpg", alt: "Studio mobility class" },
  { src: "/images/about-gallery-8.jpg", alt: "Warrior pose on the deck by the ocean" },
];

export default function GallerySection() {
  return (
    <section id={SECTION_IDS.gallery} className="pb-6 md:pb-10 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1120px]">
        <GalleryLightbox images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
