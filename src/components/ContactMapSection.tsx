import { SITE } from "@/lib/constants";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";

export default function ContactMapSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-serif text-4xl md:text-5xl uppercase tracking-wider text-brand-charcoal text-center mb-10">
          Contact
        </h2>

        <div className="flex flex-col items-center gap-5">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <WhatsAppIcon className="w-6 h-6" aria-hidden="true" />
            <span className="text-lg">{SITE.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <MailIcon className="w-6 h-6" aria-hidden="true" />
            <span className="text-lg">{SITE.email}</span>
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
          >
            <InstagramIcon className="w-6 h-6" aria-hidden="true" />
            <span className="text-lg">{SITE.instagramHandle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
