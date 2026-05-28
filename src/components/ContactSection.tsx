import { SECTION_IDS, SITE } from "@/lib/constants";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Let&apos;s Practice Together
        </h2>
        <p className="text-center text-brand-charcoal/60 mb-12">
          Explore · Follow Along
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider">
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span>{SITE.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <MailIcon className="w-6 h-6" />
                <span>{SITE.email}</span>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-brand-charcoal hover:text-brand-olive transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
                <span>{SITE.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="font-serif text-xl text-brand-olive uppercase tracking-wider">
              Map
            </h3>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253025.09399692596!2d98.2470379!3d7.8804363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031e2c462524f%3A0xe9f077eb0d1e7b9c!2sPhuket!5e0!3m2!1sen!2sth!4v1706000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Phuket location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
