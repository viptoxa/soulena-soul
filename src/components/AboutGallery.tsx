"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; alt: string };

/**
 * The About gallery. It used to be a flat 2×4 grid; Soulena asked for it to
 * work like the Soul & Sound Sanctuary collage instead (2026-09-07) — "I
 * actually have a lot of photos on my About page too, so I'd love it if
 * customers could scroll through them like this."
 *
 * Same mechanic as SanctuaryCollage: three overlapping frames that cross-fade
 * together, stepped by the arrows or on a timer. Restyled for the cream page,
 * and each frame still opens the full photo, which the grid already did.
 *
 * Photos are dealt round-robin into the three frames, so the block copes with
 * any number of them — more are coming from her Drive.
 */
const FRAMES = 3;
const INTERVAL_MS = 5600;

function Frame({
  slides,
  step,
  sizes,
  className,
  onOpen,
  priority = false,
}: {
  slides: { image: GalleryImage; index: number }[];
  step: number;
  sizes: string;
  className: string;
  onOpen: (index: number) => void;
  priority?: boolean;
}) {
  if (slides.length === 0) return null;
  const current = slides[step % slides.length];

  return (
    <button
      type="button"
      onClick={() => onOpen(current.index)}
      aria-label={`View ${current.image.alt}`}
      className={`group absolute cursor-pointer overflow-hidden rounded-xl shadow-[0_14px_34px_rgba(80,70,55,0.22)] ${className}`}
    >
      {slides.map((slide, i) => {
        const active = i === step % slides.length;
        return (
          <Image
            key={slide.image.src}
            src={slide.image.src}
            alt={active ? slide.image.alt : ""}
            aria-hidden={!active}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className={`object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${
              active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
            }`}
          />
        );
      })}
    </button>
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
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-brand-olive/50 text-brand-olive transition-colors hover:bg-brand-olive hover:text-white"
    >
      {children}
    </button>
  );
}

export default function AboutGallery({ images }: { images: GalleryImage[] }) {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Round-robin so consecutive photos land in different frames.
  const lanes = Array.from({ length: FRAMES }, (_, lane) =>
    images.map((image, index) => ({ image, index })).filter((_, i) => i % FRAMES === lane)
  );
  const steps = Math.max(1, ...lanes.map((lane) => lane.length));

  const move = useCallback(
    (delta: number) => setStep((s) => (s + delta + steps) % steps),
    [steps]
  );

  useEffect(() => {
    if (paused || openIndex !== null || steps < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, openIndex, steps, step]);

  const close = useCallback(() => setOpenIndex(null), []);
  const showRelative = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") showRelative(1);
      else if (e.key === "ArrowLeft") showRelative(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showRelative]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="relative mx-auto aspect-[798/699] w-full max-w-[880px]"
        role="group"
        aria-roledescription="carousel"
        aria-label="Photos from Soulena's classes"
      >
        {/* Tall frame, upper left */}
        <Frame
          slides={lanes[0]}
          step={step}
          onOpen={setOpenIndex}
          priority
          sizes="(min-width: 768px) 340px, 40vw"
          className="left-[4%] top-0 h-[58%] w-[38%]"
        />
        {/* Tall frame, right — the largest of the three */}
        <Frame
          slides={lanes[1]}
          step={step}
          onOpen={setOpenIndex}
          priority
          sizes="(min-width: 768px) 440px, 50vw"
          className="left-[46%] top-[16%] z-10 h-[84%] w-[50%]"
        />
        {/* Small print overlapping the lower left */}
        <Frame
          slides={lanes[2]}
          step={step}
          onOpen={setOpenIndex}
          sizes="(min-width: 768px) 280px, 32vw"
          className="left-0 top-[38%] z-20 h-[35%] w-[32%]"
        />
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <StepButton label="Previous photos" onClick={() => move(-1)}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </StepButton>

        <div className="flex items-center gap-2">
          {Array.from({ length: steps }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStep(i)}
              aria-label={`Show photo set ${i + 1}`}
              aria-current={i === step}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-6 bg-brand-olive" : "w-1.5 bg-brand-olive/35 hover:bg-brand-olive/60"
              }`}
            />
          ))}
        </div>

        <StepButton label="Next photos" onClick={() => move(1)}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </StepButton>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showRelative(-1);
            }}
            aria-label="Previous image"
            className="absolute left-2 text-white/70 transition-colors hover:text-white sm:left-6"
          >
            <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
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
              showRelative(1);
            }}
            aria-label="Next image"
            className="absolute right-2 text-white/70 transition-colors hover:text-white sm:right-6"
          >
            <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
