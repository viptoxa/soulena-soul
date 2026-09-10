import { SECTION_IDS } from "@/lib/constants";
import AboutGallery from "./AboutGallery";

// The twenty photos she uploaded on 2026-09-09 for this block. The alt text is
// deliberately generic: she sent them without captions, and a wrong specific
// description is worse for a screen reader than an honest general one.
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
