"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

/**
 * Three overlapping frames, exactly as they sit in the Canva collage. Each
 * frame slowly cross-fades through its own set of photos so the block reads as
 * one soft, immersive gallery; the arrows step every frame at once.
 */
const FRAME_A: Slide[] = [
  { src: "/images/sss-gal-a1.jpg", alt: "Soulena adjusting a guest's seated posture on the beach" },
  { src: "/images/sss-gal-a2.jpg", alt: "A guided backbend under the palms at the water's edge" },
  { src: "/images/sss-gal-a3.jpg", alt: "Crystal and brass bowls being arranged before a sound bath" },
];

const FRAME_B: Slide[] = [
  { src: "/images/sss-gal-b1.jpg", alt: "A birthday flower arch on the sand facing the sea" },
  { src: "/images/sss-gal-b2.jpg", alt: "Candles and illuminated letters set up for a celebration" },
  { src: "/images/sss-gal-b3.jpg", alt: "A marigold and jasmine mandala laid out on the sand" },
];

const FRAME_C: Slide[] = [
  { src: "/images/sss-gal-c1.jpg", alt: "A private sound healing session in a palm grove" },
  { src: "/images/sss-gal-c2.jpg", alt: "A sanctuary setting prepared under the palms by the beach" },
  { src: "/images/sss-gal-c3.jpg", alt: "Soulena playing chimes over a resting guest" },
];

const COUNT = FRAME_A.length;
const INTERVAL_MS = 5600;

function Frame({
  slides,
  index,
  sizes,
  priority = false,
}: {
  slides: Slide[];
  index: number;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <>
      {slides.map((slide, i) => {
        const active = i === index;
        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={active ? slide.alt : ""}
            aria-hidden={!active}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className={`object-cover transition-[opacity,transform] duration-[1800ms] ease-out ${
              active ? "scale-100 opacity-100" : "scale-[1.07] opacity-0"
            }`}
          />
        );
      })}
    </>
  );
}

function StepButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#c9a24a]/60 text-[#e2bb70] transition-colors hover:bg-[#c9a24a]/15"
    >
      {children}
    </button>
  );
}

export default function SanctuaryCollage() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const step = useCallback((delta: number) => {
    setIndex((i) => (i + delta + COUNT) % COUNT);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % COUNT), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, index]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="relative aspect-[798/699] w-full"
        role="group"
        aria-roledescription="carousel"
        aria-label="Soul & Sound Sanctuary gallery"
      >
        {/* Tall frame, top left */}
        <div className="absolute left-[15.8%] top-0 h-[58.2%] w-[39.1%] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          <Frame
            slides={FRAME_A}
            index={index}
            sizes="(min-width: 768px) 22vw, 39vw"
            priority
          />
        </div>

        {/* Tall frame, right — sits above the black-and-white one */}
        <div className="absolute left-[48.4%] top-[16%] z-10 h-[84%] w-[49.7%] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
          <Frame slides={FRAME_C} index={index} sizes="(min-width: 768px) 27vw, 50vw" priority />
        </div>

        {/* Framed print, lower left */}
        <div
          className="absolute left-[-1%] top-[37.5%] z-20 h-[35.05%] w-[32.1%] p-[5.5%] shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: "#e3ded5" }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <Frame slides={FRAME_B} index={index} sizes="(min-width: 768px) 17vw, 30vw" />
          </div>
        </div>
      </div>

      {/* Manual controls — the client asked to be able to step through by hand */}
      <div className="mt-6 flex items-center gap-4 pl-[15.8%]">
        <StepButton label="Previous image" onClick={() => step(-1)}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path
              d="M15 5l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StepButton>
        <div className="flex items-center gap-2">
          {FRAME_A.map((slide, i) => (
            <span
              key={slide.src}
              aria-hidden
              className={`block h-[5px] rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-[#e2bb70]" : "w-[5px] bg-[#e2bb70]/35"
              }`}
            />
          ))}
        </div>
        <StepButton label="Next image" onClick={() => step(1)}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path
              d="M9 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StepButton>
        <span className="sr-only" aria-live="polite">
          {`Image ${index + 1} of ${COUNT}`}
        </span>
      </div>
    </div>
  );
}
