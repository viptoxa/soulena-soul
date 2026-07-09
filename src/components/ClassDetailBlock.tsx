import Link from "next/link";
import type { ReactNode } from "react";

export type SideBlock = { heading: string; items: ReactNode[]; footnote?: string };

export type ClassDetailData = {
  title: string;
  session: string;
  includes: string[];
  about: string[];
  sideBlocks: SideBlock[];
  note?: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function InfoHead({ children }: { children: ReactNode }) {
  return <h4 className="font-serif italic text-brand-olive text-lg mb-2">{children}</h4>;
}

export default function ClassDetailBlock({
  data,
  className = "bg-brand-cream",
}: {
  data: ClassDetailData;
  className?: string;
}) {
  return (
    <section className={`px-4 py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-[1080px] grid md:grid-cols-2 gap-8 md:gap-14">
        {/* Left column */}
        <div>
          <h2 className="font-serif text-3xl md:text-[40px] text-brand-charcoal leading-[1.1] mb-6">
            {data.title}
          </h2>
          <div className="mb-5">
            <InfoHead>Session</InfoHead>
            <p className="text-brand-charcoal/75 text-sm">• {data.session}</p>
          </div>
          <div className="mb-5">
            <InfoHead>Class Includes</InfoHead>
            <ul className="space-y-1 text-brand-charcoal/75 text-sm">
              {data.includes.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
          <div>
            <InfoHead>About the Class</InfoHead>
            <ul className="space-y-1.5 text-brand-charcoal/75 text-sm leading-relaxed">
              {data.about.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="space-y-5">
            {data.sideBlocks.map((sb) => (
              <div key={sb.heading}>
                <InfoHead>{sb.heading}</InfoHead>
                <ul className="space-y-1 text-brand-charcoal/75 text-sm">
                  {sb.items.map((it, i) => (
                    <li key={i}>• {it}</li>
                  ))}
                </ul>
                {sb.footnote && (
                  <p className="text-xs italic text-brand-charcoal/50 mt-1.5">{sb.footnote}</p>
                )}
              </div>
            ))}
          </div>

          {data.note && (
            <p className="text-xs text-brand-charcoal/55 italic mt-6 leading-relaxed">{data.note}</p>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:max-w-xs">
            <Link
              href={data.primaryCta.href}
              className="text-center rounded-full bg-brand-olive text-white px-6 py-3 text-xs uppercase tracking-wider hover:bg-brand-olive-dark transition-colors"
            >
              {data.primaryCta.label}
            </Link>
            {data.secondaryCta && (
              <Link
                href={data.secondaryCta.href}
                className="text-center rounded-full border border-brand-olive text-brand-olive px-6 py-3 text-xs uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
              >
                {data.secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
