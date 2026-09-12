import { SECTION_IDS } from "@/lib/constants";
import AboutGallery from "./AboutGallery";

/*
 * Her photos for this block. The alt text is deliberately generic: she sent
 * them without captions, and a wrong specific description is worse for a
 * screen reader than an honest general one.
 *
 * The count matters. AboutGallery deals these round-robin into three columns
 * and steps every column together, so with twenty they split 7 / 7 / 6 and the
 * short column ran out a step early and looped back to its own first photo —
 * which is the repeat Soulena spotted on 2026-09-11, same picture in the same
 * column on the first dot and the last. Twenty-one makes it 7 / 7 / 7 and it
 * is gone. Keep this list a multiple of three.
 *
 * -21 goes last on purpose, not in filename order. It is IMG_7278, the frame
 * either side of -01's IMG_7279 — same trees, same view — and first in the
 * list they would have shared a row looking like a mistake. Last, it lands in
 * the exact slot the repeat used to occupy.
 */
const GALLERY_IMAGES = [
  { src: "/images/about-gal-v3-01.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-02.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-03.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-04.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-05.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-06.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-07.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-08.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-09.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-10.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-11.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-12.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-13.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-14.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-15.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-16.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-17.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-18.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-19.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-20.jpg", alt: "Soulena teaching in Phuket" },
  { src: "/images/about-gal-v3-21.jpg", alt: "Soulena teaching in Phuket" },
];

export default function GallerySection() {
  return (
    <section id={SECTION_IDS.gallery} className="px-4 pb-10 pt-2 md:pb-16 bg-brand-cream">
      <div className="mx-auto max-w-[1120px]">
        <AboutGallery images={GALLERY_IMAGES} />
      </div>
    </section>
  );
}
