"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE, SECTION_IDS, ROUTES } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Her own three hero frames, sent 2026-09-09 (4269x2400 originals).
const HERO_IMAGES = [
  { src: "/images/hero-v3-1.jpg", alt: "Practising on the sand as the sun sets behind the headland" },
  { src: "/images/hero-v3-2.jpg", alt: "Late afternoon light on the open sea" },
  { src: "/images/hero-v3-3.jpg", alt: "A seated practice among the granite boulders at the water's edge" },
];

/*
 * These used to drop straight into Cal.com and WhatsApp. Soulena asked for
 * them to lead to the Classes page instead (2026-09-09) — read first, book
 * after. Soul & Sound keeps its own page, which is neither booking nor a
 * class listing.
 */
const CLASS_TYPES = [
  { label: "BEACH YOGA CLASS", href: ROUTES.classes },
  { label: "PRIVATE CLASS", href: ROUTES.classes },
  { label: "WELLNESS EVENT", href: ROUTES.classes },
  { label: "SOUL & SOUND", href: ROUTES.sanctuary },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id={SECTION_IDS.hero} className="relative w-full h-[calc(100svh-var(--header-h,57px))] min-h-[540px] overflow-hidden">
      {/* Background slides */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Warm overlay — stronger on mobile for text legibility */}
          <div className="absolute inset-0 bg-brand-olive/55 md:bg-brand-olive/40" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Avatar */}
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 mb-4">
          <Image
            src="/images/avatar.jpg"
            alt="Soulena Soul"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Turning slowly, the way the discount badge does — her request. */}
        <FlowerIcon className="w-8 h-8 mb-4 opacity-80 [animation:spin_30s_linear_infinite] motion-reduce:animate-none" />

        {/* Heading — on a phone it reads better broken after "HELLO," than
            wrapped mid-name, which is where it landed on its own. */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wider mb-2">
          HELLO,
          <br className="sm:hidden" />{" "}
          I&apos;M SOULENA SOUL
        </h1>

        {/* Divider line */}
        <div className="w-px h-8 bg-white/50 my-4" />

        {/* Subtitle */}
        <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-2">
          {SITE.tagline}
        </p>
        <p className="text-sm md:text-lg max-w-2xl opacity-90 mb-8">
          {SITE.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {CLASS_TYPES.map((ct) => {
            const cls =
              "border border-white/60 rounded-full px-5 py-2 text-xs md:text-sm font-semibold tracking-wider uppercase hover:bg-white/20 transition-colors";
            return (
              <Link key={ct.label} href={ct.href} className={cls}>
                {ct.label}
              </Link>
            );
          })}
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
