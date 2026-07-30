import Link from "next/link";
import type { ReactNode } from "react";
import { FlowerIcon } from "@/components/icons/SocialIcons";

export type SideBlock = { heading: string; items: ReactNode[]; footnote?: string };

export type ClassDetailData = {
  title: ReactNode;
  session: string;
  includes: string[];
  about: string[];
  sideBlocks: SideBlock[];
  note?: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

// Canva palette for this page: slate headings, gold flower mark. Buttons stay
// on the site's brand-olive style used everywhere else.
const SLATE = "#3f4c54";
const GOLD = "#8b8459";

function InfoHead({ children }: { children: ReactNode }) {
  return (
    <h4 className="font-serif italic text-[19px] md:text-[22px] mb-1.5" style={{ color: SLATE }}>
      {children}
    </h4>
  );
}

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-full bg-brand-olive px-6 py-3 text-center text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="block rounded-full border-2 border-brand-olive px-6 py-3 text-center text-xs uppercase tracking-wider text-brand-olive transition-colors hover:bg-brand-olive hover:text-white"
    >
      {children}
    </Link>
  );
}

export default function ClassDetailBlock({
  data,
  className = "bg-brand-cream",
}: {
  data: ClassDetailData;
  className?: string;
}) {
  return (
    <section className={`relative px-4 py-12 md:py-16 ${className}`}>
      <div className="relative mx-auto max-w-[1100px]">
        <FlowerIcon
          className="hidden md:block absolute right-0 -top-2 w-8 h-8"
          style={{ color: GOLD }}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left column */}
          <div>
            <h2
              className="font-serif text-[38px] md:text-[54px] leading-[1.08] mb-6"
              style={{ color: SLATE }}
            >
              {data.title}
            </h2>

            <div className="mb-5">
              <InfoHead>Session</InfoHead>
              <p className="text-brand-charcoal/80 text-[16px] md:text-[17px]">• {data.session}</p>
            </div>

            <div className="mb-5">
              <InfoHead>Class Includes</InfoHead>
              <ul className="space-y-0.5 text-brand-charcoal/80 text-[16px] md:text-[17px]">
                {data.includes.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>

            <div>
              <InfoHead>About the Class</InfoHead>
              <ul className="space-y-0.5 text-brand-charcoal/80 text-[16px] md:text-[17px] leading-relaxed">
                {data.about.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </div>

            {/* Canva places this note directly under "About the Class" */}
            {data.note && (
              <p className="mt-6 text-[13px] italic leading-relaxed text-brand-charcoal/70">
                {data.note}
              </p>
            )}
          </div>

          {/* Right column — keep clear of the flower mark */}
          <div className="flex flex-col md:pr-12">
            <div className="space-y-6">
              {data.sideBlocks.map((sb) => (
                <div key={sb.heading}>
                  <InfoHead>{sb.heading}</InfoHead>
                  <ul className="space-y-0.5 text-brand-charcoal/80 text-[16px] md:text-[17px]">
                    {sb.items.map((it, i) => (
                      <li key={i}>• {it}</li>
                    ))}
                  </ul>
                  {sb.footnote && (
                    <p className="text-xs italic text-brand-charcoal/60 mt-1">{sb.footnote}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-auto md:pt-10 flex flex-col gap-3 w-full max-w-[380px]">
              <PrimaryButton href={data.primaryCta.href}>{data.primaryCta.label}</PrimaryButton>
              {data.secondaryCta && (
                <SecondaryButton href={data.secondaryCta.href}>
                  {data.secondaryCta.label}
                </SecondaryButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
