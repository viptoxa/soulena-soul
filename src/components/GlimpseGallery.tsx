import Image from "next/image";

type Size = "md" | "lg" | "xl";

const SIZES: Record<Size, string> = {
  md: "w-28 h-28 md:w-36 md:h-36",
  lg: "w-32 h-32 md:w-44 md:h-44",
  xl: "w-36 h-36 md:w-56 md:h-56",
};

const GLIMPSE: { src: string; size: Size; offset: string }[] = [
  { src: "/images/gallery-1.jpg", size: "lg", offset: "md:mt-2" },
  { src: "/images/gallery-3.jpg", size: "md", offset: "md:mt-9" },
  { src: "/images/gallery-4.jpg", size: "xl", offset: "md:mt-16" },
  { src: "/images/gallery-5.jpg", size: "md", offset: "md:mt-9" },
  { src: "/images/gallery-6.jpg", size: "lg", offset: "md:mt-2" },
];

export default function GlimpseGallery() {
  return (
    <section className="bg-[#8b8168] text-brand-cream py-16 md:py-24 px-4 overflow-hidden">
      <div className="mx-auto max-w-[1080px]">
        {/* Curved title */}
        <svg viewBox="0 0 1000 180" className="w-full h-auto mb-4 md:mb-8" aria-hidden="true">
          <defs>
            <path id="glimpseArc" d="M 50 160 Q 500 10 950 160" fill="none" />
          </defs>
          <text
            className="fill-[#e7d8ac]"
            style={{ fontFamily: "var(--font-serif)", fontSize: "52px", letterSpacing: "1px" }}
          >
            <textPath href="#glimpseArc" startOffset="50%" textAnchor="middle">
              A Glimpse Into My Working Space
            </textPath>
          </text>
        </svg>
        <h2 className="sr-only">A Glimpse Into My Working Space</h2>

        {/* Overlapping circular cluster */}
        <div className="flex flex-wrap justify-center items-center gap-y-5">
          {GLIMPSE.map((g, i) => (
            <div
              key={g.src}
              className={`relative shrink-0 rounded-full overflow-hidden ring-4 ring-[#a89a78] shadow-xl -mx-2 md:-mx-4 ${SIZES[g.size]} ${g.offset}`}
              style={{ zIndex: i % 2 ? 20 : 10 }}
            >
              <Image src={g.src} alt="" fill sizes="240px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
