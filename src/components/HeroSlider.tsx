"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { SITE, SECTION_IDS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

const HERO_IMAGES = [
  { src: "/images/hero-1.jpg", alt: "Sunset yoga session on the hilltop overlooking the ocean" },
  { src: "/images/hero-2.jpg", alt: "Soulena assisting a student on the ocean deck" },
  { src: "/images/hero-3.jpg", alt: "Beach yoga group practice at sunrise" },
];

const CAL_BASE = "https://cal.com/soulena.soul";
const inquiry = (topic: string) =>
  `${SITE.whatsappUrl}?text=${encodeURIComponent(
    `Hi Soulena! I'd like to inquire about ${topic}.`
  )}`;

// The first three are bookable in Cal.com; the last two are inquiry-only
// (Soulena prefers WhatsApp/email for events and Soul & Sound).
const CLASS_TYPES = [
  { label: "BEACH YOGA CLASS", href: `${CAL_BASE}/beach-yoga-class` },
  { label: "PRIVATE SESSION", href: `${CAL_BASE}/private-session` },
  { label: "ONLINE SESSION", href: `${CAL_BASE}/online` },
  { label: "PRIVATE EVENT", href: inquiry("a Private Event / Hotel & Wellness session") },
  { label: "SOUL & SOUND", href: inquiry("a Soul & Sound experience") },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id={SECTION_IDS.hero} className="relative w-full h-[calc(100svh-57px)] min-h-[540px] overflow-hidden">
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
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-brand-olive/40" />
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

        {/* Flower icon */}
        <FlowerIcon className="w-8 h-8 mb-4 opacity-80" />

        {/* Heading */}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-wider mb-2">
          HELLO, I&apos;M SOULENA SOUL
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
          {CLASS_TYPES.map((ct) => (
            <a
              key={ct.label}
              href={ct.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/60 rounded-full px-5 py-2 text-xs md:text-sm tracking-wider uppercase hover:bg-white/20 transition-colors"
            >
              {ct.label}
            </a>
          ))}
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
