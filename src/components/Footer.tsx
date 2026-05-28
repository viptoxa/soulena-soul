import { NAV_LINKS, SITE } from "@/lib/constants";
import { InstagramIcon, ThreadsIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-brand-olive text-white py-12 px-4">
      <div className="mx-auto max-w-[1200px]">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Copyright */}
        <p className="text-center text-sm text-white/50">
          © {new Date().getFullYear()} Soulena Soul. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
