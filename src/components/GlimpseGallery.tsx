import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// "A glimpse into my working space" — the Canva composition weaves four
// circles into an infinity/wave (low · high · low · high) while the title
// sweeps over the top and curves back under the bottom.
const CIRCLES = [
  { src: "/images/glimpse-v3-a.jpg", left: "5.8%", top: "40.3%" }, // jungle deck (lower)
  { src: "/images/glimpse-v3-b.jpg", left: "27.2%", top: "16.1%" }, // reclining rest (upper)
  { src: "/images/glimpse-v3-c.jpg", left: "48.7%", top: "40.3%" }, // sand practice (lower)
  { src: "/images/glimpse-v3-d.jpg", left: "70.1%", top: "16.1%" }, // group by the sea (upper)
];

/** Her wording, set as widely spaced caps under the title (2026-09-09). */
const TAGLINE = "YOGA . NATURE . PEOPLE . PRESENCE";

/** The hairlines she asked for, framing the section top and bottom. */
function Hairline({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`mx-auto block h-px w-full max-w-[1120px] bg-[#e9dcb4]/35 ${className}`} />;
}

const CREAM = "#e9dcb4";
const arcText = {
  fontFamily: "var(--font-serif)",
  fontSize: "50px",
  letterSpacing: "9px",
} as const;

export default function GlimpseGallery() {
  return (
    <section className="bg-[#7d7550] px-4 py-12 md:py-16 overflow-hidden">
      <Hairline className="mb-12 md:mb-16" />

      {/* Desktop — circles woven into an infinity, title sweeping around */}
      <div
        className="relative mx-auto hidden md:block w-full max-w-[1120px]"
        style={{ aspectRatio: "1120 / 620" }}
      >
        <svg viewBox="0 0 1120 620" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <path id="gTop" d="M 110 340 A 400 400 0 0 1 810 210" fill="none" />
            <path id="gBot" d="M 250 500 A 1100 1100 0 0 0 1050 500" fill="none" />
          </defs>
          <text fill={CREAM} style={arcText}>
            <textPath href="#gTop" startOffset="50%" textAnchor="middle">
              A GLIMPSE INTO
            </textPath>
          </text>
          <text fill={CREAM} style={arcText}>
            <textPath href="#gBot" startOffset="50%" textAnchor="middle">
              MY WORKING SPACE
            </textPath>
          </text>
        </svg>

        {CIRCLES.map((c) => (
          <div
            key={c.src}
            className="absolute overflow-hidden rounded-full ring-[3px] ring-[#c3b98d]/70 shadow-[0_14px_36px_rgba(0,0,0,0.22)]"
            style={{ left: c.left, top: c.top, width: "25.5%", aspectRatio: "1 / 1" }}
          >
            <Image src={c.src} alt="" fill sizes="280px" className="object-cover" />
          </div>
        ))}

        <FlowerIcon className="absolute -bottom-1 right-3 h-8 w-8 text-[#e9dcb4]" />
      </div>

      <p className="mt-8 hidden text-center text-[13px] uppercase tracking-[0.42em] text-[#e9dcb4]/85 md:block lg:text-[15px]">
        {TAGLINE}
      </p>

      {/* Mobile — stacked title + a 2×2 grid. Four circles in one row only fit
          at ~110px each on a phone, which is too small to read the photos, so
          the wave is carried by offsetting the right-hand column instead. */}
      <div className="md:hidden text-center">
        <h2 className="font-serif text-3xl leading-tight text-[#e9dcb4]">
          A Glimpse Into
          <br />
          My Working Space
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-[300px] text-[11px] uppercase leading-relaxed tracking-[0.3em] text-[#e9dcb4]/85">
          {TAGLINE}
        </p>
        {/* The right-hand column used to sit 28px lower to echo the desktop
            weave; she asked for all four on one level (2026-09-09). */}
        <div className="mx-auto grid max-w-[330px] grid-cols-2 gap-4">
          {CIRCLES.map((c) => (
            <div
              key={c.src}
              className="relative aspect-square overflow-hidden rounded-full ring-[3px] ring-[#c3b98d]/70 shadow-lg"
            >
              <Image src={c.src} alt="" fill sizes="160px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <Hairline className="mt-12 md:mt-16" />
    </section>
  );
}
