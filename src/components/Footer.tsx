import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

function DiscountBadge() {
  return (
    <div className="relative w-28 h-28 md:w-40 md:h-40 shrink-0 text-brand-charcoal">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full [animation:spin_26s_linear_infinite]"
        aria-hidden="true"
      >
        <defs>
          <path id="badgeCircle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current" style={{ fontSize: "8px", letterSpacing: "0.22em" }}>
          <textPath href="#badgeCircle" startOffset="0">
            DISCOUNT · DISCOUNT · DISCOUNT · DISCOUNT ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
        <span className="text-[9px] md:text-[10px] uppercase tracking-wider">New Student</span>
        <span className="font-serif italic text-2xl md:text-3xl my-0.5">10%</span>
        <span className="text-[6px] md:text-[7px] text-brand-charcoal/60 leading-tight">
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
    <footer className="relative isolate overflow-hidden">
      {/* Hands-with-flowers background */}
      <Image
        src="/images/footer-hands.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/70 via-brand-cream/25 to-brand-cream/60" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 pt-14 md:pt-20 pb-8">
        {/* Headline + discount badge */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-serif text-[34px] leading-[1.05] md:text-6xl text-brand-charcoal">
              Let&apos;s Practice
              <br />
              Together
            </h2>
            <p className="mt-3 md:mt-4 italic tracking-[0.15em] text-brand-charcoal/55 text-sm md:text-lg">
              EXPLORE . FOLLOW ALONG
            </p>
          </div>
          <DiscountBadge />
        </div>

        {/* Navigation */}
        <nav className="mt-12 md:mt-20 flex flex-wrap gap-x-6 md:gap-x-10 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm md:text-base uppercase tracking-wider text-brand-charcoal/80 underline-offset-8 hover:underline hover:text-brand-charcoal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Tagline rule */}
        <div className="mt-8 flex items-center gap-4">
          <FlowerIcon className="w-5 h-5 text-brand-olive/70 shrink-0" />
          <span className="h-px flex-1 bg-brand-charcoal/20" />
          <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-brand-charcoal/55 whitespace-nowrap">
            Practice with Soulena Soul
          </span>
        </div>

        {/* Fine print */}
        <div className="mt-5 flex flex-col sm:flex-row justify-between gap-1 text-[11px] text-brand-charcoal/45">
          <span>© {new Date().getFullYear()} Soulena Soul. All rights reserved.</span>
          <span>
            Made in{" "}
            <a
              href="https://craftive.dev/?utm_source=soulenasoul&utm_medium=referral&utm_campaign=footer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-brand-charcoal transition-colors"
            >
              Craftive
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
