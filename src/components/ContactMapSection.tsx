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

/** Contact page: heading, then the channels, then the map. */
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

        {/* These used to sit under the beach list inside the map block; Soulena
            asked for them directly under the heading (2026-09-07), which is
            also where a visitor looks first for a way to reach her. The e-mail
            address is far wider than the other three, so one per line below sm
            keeps the row from breaking 1 / 2 / 1. */}
        {/* Four outlined boxes rather than a plain row — "I think having four
            items in a box like this would work perfectly" (2026-09-09). */}
        <ul className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-2 md:mt-10 md:gap-4">
          {CHANNELS.map(({ label, href, display, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-brand-olive/30 px-4 py-4 text-brand-charcoal transition-colors hover:border-brand-olive hover:bg-brand-olive/5"
              >
                <Icon className="h-[22px] w-[22px] shrink-0" aria-hidden="true" />
                <span className="sr-only">{label}: </span>
                <span className="text-[14px] opacity-80 transition-opacity group-hover:opacity-100">
                  {display}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div id={SECTION_IDS.location} className="mt-12 md:mt-16">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
