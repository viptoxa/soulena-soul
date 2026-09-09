import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

function DiscountBadge() {
  return (
    // Re-cut to her reference (2026-09-07): two widely-spaced repeats instead
    // of three cramped ones, a bigger "NEW STUDENT*" and 10%, and the asterisk
    // note lifted out of the ring altogether — inside it there was never room.
    <div className="shrink-0">
      <div className="relative mx-auto h-28 w-28 text-white md:h-40 md:w-40">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full [animation:spin_26s_linear_infinite]"
          aria-hidden="true"
        >
          <defs>
            <path id="badgeCircle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          {/*
           * textLength pins the ring text to the circle's exact circumference
           * (2πr, r=38). Without it the repeats ran longer than the path and
           * the tail overlapped the head — it read as "DISCDISCOUNT". Two
           * repeats leave the spare length to letter-spacing, which is the
           * airy look she drew. The gaps are non-breaking spaces because SVG
           * collapses ordinary runs of whitespace, and without a wider gap the
           * two words ran together as "…UNTDISCOUNT".
           */}
          <text className="fill-current" style={{ fontSize: "11px", letterSpacing: "0.04em" }}>
            <textPath
              href="#badgeCircle"
              startOffset="0"
              textLength="238.8"
              lengthAdjust="spacing"
            >
              {"DISCOUNT\u00a0\u00a0·\u00a0\u00a0DISCOUNT\u00a0\u00a0·\u00a0\u00a0"}
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
          <span className="text-[9px] italic uppercase leading-[1.5] tracking-wide md:text-[12px] md:tracking-wider">
            New
            <br />
            Student*
          </span>
          <span className="mt-1 font-serif text-[26px] italic md:text-[38px]">10%</span>
        </div>
      </div>
      <p className="mx-auto -mt-1 w-28 text-center text-[8px] italic leading-tight text-white/75 md:-mt-2 md:w-44 md:text-[11px]">
        *For Weekend
        <br />
        Beach Classes only
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden text-white">
      {/* Hands-with-flowers background */}
      <Image
        src="/images/footer-hands.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Warm overlay so the light photo reads as a mid-tone under white text */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7c7463]/55 via-[#7c7463]/35 to-[#7c7463]/55" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-8 pt-16 md:pt-24 pb-8">
        {/* Headline + discount badge */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-serif text-[38px] leading-[1.02] md:text-6xl text-white [text-shadow:0_1px_10px_rgba(60,52,40,0.35)]">
              Let&apos;s Practice
              <br />
              Together
            </h2>
            <p className="mt-4 md:mt-5 italic tracking-[0.18em] text-white/80 text-sm md:text-lg">
              EXPLORE . FOLLOW ALONG
            </p>
          </div>
          <DiscountBadge />
        </div>

        {/* Navigation */}
        {/* Centred with "|" between the items, which she thought would read as
            more polished than the underlined left-aligned row (2026-09-09). */}
        <nav className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:mt-28 md:gap-x-4">
          {NAV_LINKS.map((link, i) => (
            <Fragment key={link.href}>
              {i > 0 ? (
                <span aria-hidden className="text-sm text-white/40 md:text-base">
                  |
                </span>
              ) : null}
              <Link
                href={link.href}
                className="text-sm uppercase tracking-wider text-white/90 transition-colors hover:text-white md:text-base"
              >
                {link.label}
              </Link>
            </Fragment>
          ))}
        </nav>

        {/* Tagline rule */}
        <div className="mt-8 flex items-center gap-4">
          <FlowerIcon className="w-5 h-5 text-white/85 shrink-0" />
          <span className="h-px flex-1 bg-white/35" />
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/75 whitespace-nowrap">
            Practice with Soulena Soul
          </span>
        </div>

        {/* Fine print */}
        <div className="mt-5 flex flex-col sm:flex-row justify-between gap-1 text-[11px] text-white/55">
          <span>© {new Date().getFullYear()} Soulena Soul. All rights reserved.</span>
          <span>
            Made in{" "}
            <a
              href="https://craftive.dev/?utm_source=soulenasoul&utm_medium=referral&utm_campaign=footer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Craftive
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
