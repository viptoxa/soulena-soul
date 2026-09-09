"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE, NAV_LINKS, ROUTES } from "@/lib/constants";
import { WhatsAppIcon, MailIcon, InstagramIcon, ThreadsIcon } from "@/components/icons/SocialIcons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Publish the header's real height so the hero can fill exactly the rest
  // of the viewport (adapts across breakpoints — no hard-coded offset).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () =>
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-cream-dark"
    >
      <div className="mx-auto max-w-[1200px] px-[15px] py-2.5 md:px-4 md:py-4 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        {/*
         * Her logo, which is why the four icons moved to the right last round.
         * The wordmark is set rather than baked into the image so it stays
         * crisp and searchable: all caps with the leading S of each word a
         * touch larger, as she specified. The wordmark drops out between md
         * and lg: seven nav items plus the icons leave no room for it there,
         * and she said herself to keep only what fits ("if having the logo
         * there makes this area feel too crowded ... feel free to remove it").
         */}
        <Link href={ROUTES.home} className="group flex items-center gap-2 md:gap-2.5 md:pr-6">
          <Image
            src="/images/brand-mark.png"
            alt=""
            width={260}
            height={235}
            priority
            className="h-[26px] w-auto md:h-[30px]"
          />
          <span className="hidden font-serif text-[12px] uppercase leading-none tracking-[0.16em] text-brand-charcoal transition-colors group-hover:text-brand-olive max-md:inline lg:inline lg:text-[13.5px]">
            <span className="text-[1.2em]">S</span>oulena{" "}
            <span className="text-[1.2em]">S</span>oul
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 justify-self-center whitespace-nowrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-brand-charcoal hover:text-brand-olive transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact + social icons + mobile toggle — all four icons share one
            size (w-5 h-5); WhatsApp and Mail used to be a step smaller. */}
        <div className="flex items-center gap-3 justify-self-end">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp ${SITE.phoneDisplay}`}
            className="flex items-center gap-1.5 text-sm text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden lg:inline">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.email}`}
            className="text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <MailIcon className="w-5 h-5" />
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-charcoal hover:text-brand-olive transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href={SITE.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-brand-charcoal hover:text-brand-olive transition-colors">
            <ThreadsIcon className="w-5 h-5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 md:hidden text-brand-charcoal"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {menuOpen && (
        <nav id="mobile-nav" className="md:hidden absolute inset-x-0 top-full z-50 border-t border-brand-cream-dark bg-brand-cream shadow-lg px-[15px] py-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1.5 text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
