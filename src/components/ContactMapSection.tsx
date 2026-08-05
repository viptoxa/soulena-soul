import { SITE, SECTION_IDS } from "@/lib/constants";
import LocationMap from "@/components/LocationMap";
import {
  WhatsAppIcon,
  MailIcon,
  InstagramIcon,
  ThreadsIcon,
} from "@/components/icons/SocialIcons";

// Canva page 9 keeps this page deliberately minimal: two large Playfair
// headings ("CONTACT" and "MAP", no extra letter-spacing) in the desaturated
// slate blue-grey used across the site, over a row of plain icon links.
const SLATE = "#3f4c54";

const HEADING =
  "text-center font-serif uppercase leading-none text-[32px] md:text-[44px]";

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

/** Contact channels and the Phuket map, as one continuous band. */
export default function ContactMapSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="bg-brand-cream px-4 pt-16 pb-16 md:pt-24 md:pb-24"
      style={{ color: SLATE }}
    >
      <div className="mx-auto max-w-[1200px]">
        <h1 className={HEADING}>Contact</h1>

        <ul className="mt-12 flex flex-wrap items-start justify-center gap-x-12 gap-y-8 md:mt-16 md:gap-x-20">
          {CHANNELS.map(({ label, href, display, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-3.5 text-brand-charcoal transition-colors hover:text-brand-olive"
              >
                <Icon
                  className="h-11 w-11 md:h-[58px] md:w-[58px]"
                  aria-hidden="true"
                />
                <span className="sr-only">{label}: </span>
                <span className="text-[12px] tracking-[0.04em] opacity-70 transition-opacity group-hover:opacity-100 md:text-[13px]">
                  {display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className={`${HEADING} mt-20 md:mt-28`}>Map</h2>

        <div id={SECTION_IDS.location} className="mt-12 md:mt-16">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
