"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GalleryLightbox({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const show = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(1);
      else if (e.key === "ArrowLeft") show(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, show]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View ${image.alt}`}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${
              index === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            className="relative w-full h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
