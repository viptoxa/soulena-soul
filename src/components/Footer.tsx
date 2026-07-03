import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { InstagramIcon, ThreadsIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-olive text-white py-8 md:py-12 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Navigation */}
        <nav className="flex flex-nowrap justify-center gap-x-3 gap-y-2 md:gap-6 mb-6 md:mb-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs md:text-sm uppercase tracking-wide md:tracking-wider text-white/70 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors">
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href={SITE.threads} target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-white/70 hover:text-white transition-colors">
            <ThreadsIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright + credit */}
        <p className="text-center text-xs md:text-sm text-white/50">
          © {new Date().getFullYear()} Soulena Soul. All rights reserved.
        </p>
        <p className="text-center text-xs text-white/40 mt-2">
          Made in{" "}
          <a
            href="https://craftive.dev/?utm_source=soulenasoul&utm_medium=referral&utm_campaign=footer"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white transition-colors"
          >
            Craftive
          </a>
        </p>
      </div>
    </footer>
  );
}
