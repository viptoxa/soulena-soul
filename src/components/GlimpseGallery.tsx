import Image from "next/image";

const CLUSTER = [
  { src: "/images/gallery-1.jpg", d: "w-40 h-40 md:w-40 md:h-40 z-10" },
  { src: "/images/gallery-3.jpg", d: "w-36 h-36 md:w-36 md:h-36 -ml-5 md:-ml-6 mt-10 z-20" },
  { src: "/images/gallery-4.jpg", d: "w-44 h-44 md:w-52 md:h-52 -ml-5 md:-ml-6 z-10" },
  { src: "/images/gallery-5.jpg", d: "w-36 h-36 md:w-36 md:h-36 -ml-5 md:-ml-6 mt-10 z-20" },
  { src: "/images/gallery-6.jpg", d: "w-40 h-40 md:w-40 md:h-40 -ml-5 md:-ml-6 z-10" },
];

function Circle({ src, d }: { src: string; d: string }) {
  return (
    <div className={`relative shrink-0 rounded-full overflow-hidden ring-4 ring-[#98906f] shadow-xl ${d}`}>
      <Image src={src} alt="" fill sizes="240px" className="object-cover" />
    </div>
  );
}

export default function GlimpseGallery() {
  return (
    <section className="bg-[#7d7550] text-brand-cream py-16 md:py-24 px-4 overflow-hidden">
      {/* Desktop — title curves around the photo cluster */}
      <div className="relative mx-auto w-full max-w-[680px] aspect-square hidden md:block">
        <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <path id="gTop" d="M 45 250 A 205 205 0 0 1 455 250" fill="none" />
            <path id="gBot" d="M 45 250 A 205 205 0 0 0 455 250" fill="none" />
          </defs>
          <text
            className="fill-[#e7d8ac]"
            style={{ fontFamily: "var(--font-serif)", fontSize: "40px", letterSpacing: "7px" }}
          >
            <textPath href="#gTop" startOffset="50%" textAnchor="middle">A&nbsp;GLIMPSE&nbsp;INTO</textPath>
          </text>
          <text
            className="fill-[#e7d8ac]"
            style={{ fontFamily: "var(--font-serif)", fontSize: "40px", letterSpacing: "7px" }}
          >
            <textPath href="#gBot" startOffset="50%" textAnchor="middle">MY&nbsp;WORKING&nbsp;SPACE</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {CLUSTER.map((c) => (
            <Circle key={c.src} src={c.src} d={c.d} />
          ))}
        </div>
      </div>

      {/* Mobile — stacked title + wrapped circles */}
      <div className="md:hidden text-center">
        <p className="uppercase tracking-[0.35em] text-brand-cream/60 text-xs mb-2">A Glimpse Into</p>
        <h2 className="font-serif text-3xl text-[#e7d8ac] mb-8">My Working Space</h2>
        <div className="flex flex-wrap justify-center items-center gap-y-4">
          {CLUSTER.map((c, i) => (
            <div
              key={c.src}
              className={`relative shrink-0 rounded-full overflow-hidden ring-4 ring-[#98906f] shadow-lg -mx-2 ${
                i % 2 ? "w-28 h-28" : "w-32 h-32"
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
