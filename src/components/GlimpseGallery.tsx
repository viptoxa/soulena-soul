import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// "A glimpse into my working space" — the Canva composition weaves four
// circles into an infinity/wave (low · high · low · high) while the title
// sweeps over the top and curves back under the bottom.
const CIRCLES = [
  { src: "/images/glimpse-a.jpg", left: "5.8%", top: "40.3%" }, // group meditation (lower)
  { src: "/images/glimpse-b.jpg", left: "27.2%", top: "16.1%" }, // reclining stretch (upper)
  { src: "/images/glimpse-c.jpg", left: "48.7%", top: "40.3%" }, // backbend by the sea (lower)
  { src: "/images/glimpse-d.jpg", left: "70.1%", top: "16.1%" }, // beach class (upper)
];

const CREAM = "#e9dcb4";
const arcText = {
  fontFamily: "var(--font-serif)",
  fontSize: "50px",
  letterSpacing: "9px",
} as const;

export default function GlimpseGallery() {
  return (
    <section className="bg-[#7d7550] py-16 md:py-24 px-4 overflow-hidden">
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

      {/* Mobile — stacked title + woven circles */}
      <div className="md:hidden text-center">
        <h2 className="font-serif text-3xl leading-tight text-[#e9dcb4] mb-8">
          A Glimpse Into
          <br />
          My Working Space
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-y-3">
          {CIRCLES.map((c, i) => (
            <div
              key={c.src}
              className={`relative -mx-2 shrink-0 overflow-hidden rounded-full ring-[3px] ring-[#c3b98d]/70 shadow-lg ${
                i % 2 ? "w-28 h-28 -mt-4" : "w-32 h-32 mt-4"
              }`}
            >
              <Image src={c.src} alt="" fill sizes="160px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
