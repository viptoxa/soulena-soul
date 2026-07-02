import Image from "next/image";
import { SECTION_IDS, SITE } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="relative isolate overflow-hidden">
      {/* Background image + darkening overlay */}
      <Image
        src="/images/contact-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-charcoal/65" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000px] px-4 py-16 md:py-36 flex flex-col items-center text-center text-white">
        <h2 className="font-serif text-[27px] md:text-5xl uppercase tracking-wider mb-4">
          Let&apos;s Stay Connected
        </h2>
        <p className="text-white/75 tracking-wide mb-10">Explore · Follow Along</p>

        <a
          href={`#${SECTION_IDS.booking}`}
          className="inline-block rounded-full bg-brand-cream px-8 py-3.5 md:px-10 md:py-4 text-sm uppercase tracking-wider text-brand-charcoal hover:bg-white transition-colors shadow-lg mb-12"
        >
          Book a Class
        </a>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-start sm:justify-center gap-x-8 gap-y-4 self-stretch sm:self-auto">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
          >
            <MailIcon className="w-4 h-4" />
            <span>{SITE.email}</span>
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{SITE.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
