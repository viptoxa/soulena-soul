import { SITE, SECTION_IDS } from "@/lib/constants";
import LocationMap from "@/components/LocationMap";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  ThreadsIcon,
} from "@/components/icons/SocialIcons";

// Canva page 9 keeps this page deliberately minimal: a large Playfair heading
// in the desaturated slate blue-grey used across the site, over plain links.
const SLATE = "#3f4c54";

const CHANNELS = [
  {
    label: "WhatsApp",
    href: SITE.whatsappUrl,
    display: SITE.phoneDisplay,
    external: true,
    Icon: WhatsAppIcon,
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    display: SITE.email,
    external: false,
    Icon: MailIcon,
  },
  {
    label: "Instagram",
    href: SITE.instagram,
    display: SITE.instagramHandle,
    external: true,
    Icon: InstagramIcon,
  },
  {
    label: "Threads",
    href: SITE.threads,
    display: SITE.instagramHandle,
    external: true,
    Icon: ThreadsIcon,
  },
];

/** Contact channels sit inside the map block, so the page stays compact. */
export default function ContactMapSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="bg-brand-cream px-4 pt-14 pb-16 md:pt-20 md:pb-24"
      style={{ color: SLATE }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-center font-serif text-[32px] uppercase leading-none md:text-[44px]">
          Contact
        </h1>

        <div id={SECTION_IDS.location} className="mt-12 md:mt-16">
          <LocationMap>
            {/* The e-mail address is far wider than the other three, so letting
                the row wrap on a phone left it ragged (1 / 2 / 1). One per line
                below sm reads as a deliberate list and keeps the tap targets
                full-width. */}
            <ul className="mt-8 flex flex-col gap-4 border-t border-brand-cream-dark pt-6 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {CHANNELS.map(({ label, href, display, external, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2.5 text-brand-charcoal transition-colors hover:text-brand-olive"
                  >
                    <Icon className="h-[22px] w-[22px] shrink-0" aria-hidden="true" />
                    <span className="sr-only">{label}: </span>
                    <span className="text-[13px] opacity-75 transition-opacity group-hover:opacity-100">
                      {display}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </LocationMap>
        </div>
      </div>
    </section>
  );
}
