"use client";

import { useState } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { WhatsAppIcon, MailIcon, InstagramIcon, ThreadsIcon } from "@/components/icons/SocialIcons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-cream-dark">
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
        {/* Contact info */}
        <div className="flex items-center gap-4">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 text-sm text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            <span className="hidden sm:inline">{SITE.email}</span>
          </a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
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
            aria-label="Toggle menu"
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
        <nav className="md:hidden border-t border-brand-cream-dark bg-brand-cream px-4 py-3">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1.5 text-sm font-medium text-brand-charcoal hover:text-brand-olive transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
