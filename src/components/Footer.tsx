import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

function DiscountBadge() {
  return (
    <div className="relative w-28 h-28 md:w-40 md:h-40 shrink-0 text-white">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full [animation:spin_26s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path id="badgeCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        {/*
         * textLength pins the ring text to the circle's exact circumference
         * (2πr, r=37). Without it the four repeats ran ~25% longer than the
         * path and the tail overlapped the head — it read as "DISCDISCOUNT".
         */}
        <text className="fill-current" style={{ fontSize: "8px" }}>
          <textPath
            href="#badgeCircle"
            startOffset="0"
            textLength="232.5"
            lengthAdjust="spacing"
          >
            DISCOUNT · DISCOUNT · DISCOUNT ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
        {/* On a phone the badge is 112px, leaving ~68px of clear width inside
            the ring at this line's height — "New Student" at 9px/wider was
            71px and collided with the ring letters. */}
        <span className="text-[8px] tracking-wide md:text-[10px] md:tracking-wider uppercase">
          New Student
        </span>
        <span className="font-serif italic text-2xl md:text-3xl my-0.5">10%</span>
        <span className="text-[6px] md:text-[7px] text-white/70 leading-tight">
          *For Weekend
          <br />
          Beach Classes only
        </span>
      </div>
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
            <p className="mt-4 md:mt-5 tracking-[0.18em] text-white/80 text-sm md:text-lg">
              EXPLORE . FOLLOW ALONG
            </p>
          </div>
          <DiscountBadge />
        </div>

        {/* Navigation */}
        <nav className="mt-16 md:mt-28 flex flex-wrap gap-x-8 md:gap-x-14 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm md:text-base uppercase tracking-wider text-white/90 underline underline-offset-8 decoration-white/50 hover:text-white hover:decoration-white transition-colors"
            >
              {link.label}
            </Link>
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
