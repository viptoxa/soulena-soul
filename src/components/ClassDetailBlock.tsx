import Image from "next/image";
import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ClockIcon, MeditationIcon, LeafIcon } from "@/components/icons/ClassIcons";

export type SideBlock = {
  heading: ReactNode;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  items: ReactNode[];
  /** Two-up list, as her Private Session areas box is laid out. */
  columns?: 1 | 2;
  footnote?: string;
  /** Rendered under the list — the Private Session price card puts its button here. */
  footer?: ReactNode;
};

export type Chip = { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

export type ClassDetailData = {
  title: ReactNode;
  /** Two short lines under the gold rule. */
  tagline: ReactNode;
  chips: Chip[];
  photos: { src: string; alt: string }[];
  session: ReactNode;
  includes: string[];
  about: string[];
  sideBlocks: SideBlock[];
  /**
   * "stack" puts the side blocks in one column under the photo (Weekend
   * Beach); "pair" sets the last two beside each other (Private Session).
   */
  sideLayout?: "stack" | "pair";
  note?: ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

// Sampled off her 2026-09-07 Canva page 5: near-white paper, sand hairline
// borders and icon discs, brown italic headings, slate body copy. The buttons
// stay in the site's own brand-olive style rather than the Canva's #927d61.
const PAPER = "#fefff8";
const SAND = "#efe5d2";
const BROWN = "#78584d";
const SLATE = "#3a4e5d";
const GOLD = "#c9a34a";

/*
 * What the photos really measure, so the browser picks the right file. The
 * right column is 39% of a container that is min(1180px, viewport - 32px), so
 * it settles at a flat 460px from 1212px up and is full-width below lg; the
 * two-up photos are (column - 12px gap) / 2. The old single string claimed
 * 22vw at lg+, which is 281px at a 1280px viewport where the photo is really
 * 460px — Next then served a file too small and the photo rendered soft.
 */
const PHOTO_SIZES = {
  single: "(min-width: 1212px) 460px, (min-width: 1024px) 39vw, calc(100vw - 32px)",
  pair: "(min-width: 1212px) 224px, (min-width: 1024px) 19vw, calc(50vw - 22px)",
};

/** Hairline rule with a centred four-point sparkle, as under both titles. */
function GoldRule() {
  return (
    <svg viewBox="0 0 420 16" fill="none" aria-hidden className="mx-auto my-4 h-4 w-[280px] max-w-full md:w-[360px]">
      <path d="M0 8h190M230 8h190" stroke={GOLD} strokeWidth="1.1" />
      <path
        d="M210 0c1.6 5.2 3.2 6.8 8.4 8-5.2 1.2-6.8 2.8-8.4 8-1.6-5.2-3.2-6.8-8.4-8 5.2-1.2 6.8-2.8 8.4-8Z"
        fill={GOLD}
      />
    </svg>
  );
}

function IconDisc({
  Icon,
  className = "",
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}) {
  return (
    <span
      className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full md:h-[50px] md:w-[50px] ${className}`}
      style={{ backgroundColor: SAND, color: BROWN }}
    >
      <Icon className="h-[22px] w-[22px] md:h-[26px] md:w-[26px]" />
    </span>
  );
}

/**
 * The outlined panel every piece of information sits in. `align` decides
 * whether the icon sits beside the heading (her wide boxes) or above it (the
 * narrow pair at the bottom of the Private Session block).
 */
function InfoCard({
  Icon,
  heading,
  children,
  align = "row",
  className = "",
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  heading: ReactNode;
  children: ReactNode;
  align?: "row" | "column";
  className?: string;
}) {
  return (
    <div
      className={`rounded-[14px] border px-4 py-4 md:px-5 md:py-5 ${
        align === "row" ? "flex gap-3.5 md:gap-4" : ""
      } ${className}`}
      style={{ borderColor: SAND }}
    >
      <IconDisc Icon={Icon} className={align === "column" ? "mb-2.5" : "mt-0.5"} />
      <div className="min-w-0 flex-1">
        {/* The stacked variant sits in a half-width box, so its heading runs a
            size smaller — at 19px "Flexible time & location" broke over three
            lines. */}
        <h4
          className={`font-serif italic leading-tight ${
            align === "column" ? "text-[15px] md:text-[16px]" : "text-[17px] md:text-[19px]"
          }`}
          style={{ color: BROWN }}
        >
          {heading}
        </h4>
        <div
          className={`mt-1.5 leading-[1.5] ${
            align === "column" ? "text-[14px] md:text-[15px]" : "text-[15px] md:text-[16px]"
          }`}
          style={{ color: SLATE }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Bullets({ items, columns = 1 }: { items: ReactNode[]; columns?: 1 | 2 }) {
  return (
    <ul className={`space-y-1 ${columns === 2 ? "grid grid-cols-2 gap-x-4 space-y-0 gap-y-1" : ""}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-[0.55em] h-[3px] w-[3px] shrink-0 rounded-full bg-current" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* Both buttons carry a 2px border — the filled one's is transparent — so the
   pair is exactly the same height. Soulena spotted them differing by the 4px
   the outline was adding (2026-09-07). */
const BUTTON_BASE =
  "block rounded-full border-2 px-6 py-3 text-center text-xs font-bold uppercase tracking-wider transition-colors";

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${BUTTON_BASE} border-transparent bg-brand-olive text-white hover:bg-brand-olive-dark`}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${BUTTON_BASE} border-brand-olive text-brand-olive hover:bg-brand-olive hover:text-white`}
    >
      {children}
    </Link>
  );
}

export default function ClassDetailBlock({ data }: { data: ClassDetailData }) {
  const pair = data.sideLayout === "pair";
  const paired2Up = data.photos.length > 1;
  const [stacked, paired] = pair
    ? [data.sideBlocks.slice(0, -2), data.sideBlocks.slice(-2)]
    : [data.sideBlocks, []];

  return (
    <section className="px-4 py-12 md:py-16" style={{ backgroundColor: PAPER }}>
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_39%] lg:gap-10">
        {/* ───────── Left: title, chips and the wide cards ───────── */}
        <div>
          <header className="text-center">
            <h2
              className="font-serif text-[34px] leading-[1.08] md:text-[52px]"
              style={{ color: SLATE }}
            >
              {data.title}
            </h2>
            <GoldRule />
            <p className="text-[15px] leading-relaxed md:text-[17px]" style={{ color: SLATE }}>
              {data.tagline}
            </p>
          </header>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {data.chips.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] md:text-[14px]"
                style={{ backgroundColor: SAND, color: SLATE }}
              >
                <Icon className="h-[17px] w-[17px] shrink-0" style={{ color: BROWN }} />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]">
            <InfoCard Icon={ClockIcon} heading="Session">
              {data.session}
            </InfoCard>
            <InfoCard Icon={MeditationIcon} heading="Class Includes">
              <Bullets items={data.includes} />
            </InfoCard>
          </div>

          <InfoCard Icon={LeafIcon} heading="About the Class" className="mt-4">
            <Bullets items={data.about} />
            {data.note ? (
              <div className="mt-3 text-[13px] italic leading-relaxed md:text-[14px]">{data.note}</div>
            ) : null}
          </InfoCard>
        </div>

        {/* ───────── Right: photos, detail cards, buttons ───────── */}
        <div className="flex flex-col gap-4">
          <div className={`grid gap-3 ${paired2Up ? "grid-cols-2" : "grid-cols-1"}`}>
            {data.photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-[10px] ${
                  paired2Up ? "aspect-[4/5]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={paired2Up ? PHOTO_SIZES.pair : PHOTO_SIZES.single}
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {stacked.map((sb, i) => (
            <InfoCard key={i} Icon={sb.Icon} heading={sb.heading}>
              <Bullets items={sb.items} columns={sb.columns} />
              {sb.footnote ? <p className="mt-1 text-[12px] italic opacity-70">{sb.footnote}</p> : null}
              {sb.footer}
            </InfoCard>
          ))}

          {/* Side by side wherever there is room. Between lg and xl the right
              column narrows to ~185px a card, which broke every price line in
              two, so they stack again through that band. */}
          {paired.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {paired.map((sb, i) => (
                <InfoCard key={i} Icon={sb.Icon} heading={sb.heading} align="column">
                  <Bullets items={sb.items} columns={sb.columns} />
                  {sb.footnote ? (
                    <p className="mt-1 text-[12px] italic opacity-70">{sb.footnote}</p>
                  ) : null}
                  {sb.footer}
                </InfoCard>
              ))}
            </div>
          )}

          <div className="mt-1 flex flex-col gap-3">
            <PrimaryButton href={data.primaryCta.href}>{data.primaryCta.label}</PrimaryButton>
            {data.secondaryCta && (
              <SecondaryButton href={data.secondaryCta.href}>{data.secondaryCta.label}</SecondaryButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
