import Image from "next/image";
import Link from "next/link";
import { SECTION_IDS, SITE, ROUTES } from "@/lib/constants";

const inquiry = (topic: string) =>
  `${SITE.whatsappUrl}?text=${encodeURIComponent(`Hi Soulena! I'd like to inquire about ${topic}.`)}`;

type ClassCard = {
  title: string;
  subtitle?: string;
  image: string;
  position?: string;
  href: string;
  kind: "anchor" | "route" | "external";
};

const CLASS_CARDS: ClassCard[] = [
  {
    title: "Weekend Beach Yoga & Movement",
    subtitle: "Group classes by the sea",
    image: "/images/card-beach.jpg",
    position: "object-center",
    href: "#pricing",
    kind: "anchor",
  },
  {
    title: "Private Class",
    subtitle: "Anywhere, anytime — at your favourite place",
    image: "/images/card-private.jpg",
    position: "object-[center_30%]",
    href: "#pricing",
    kind: "anchor",
  },
  {
    title: "Hotel & Wellness Event",
    subtitle: "Groups, retreats & resorts",
    image: "/images/card-event.jpg",
    position: "object-center",
    href: inquiry("a Hotel & Wellness Event"),
    kind: "external",
  },
  {
    title: "Soul & Sound Sanctuary",
    subtitle: "A curated private experience",
    image: "/images/card-sanctuary.jpg",
    position: "object-center",
    href: ROUTES.sanctuary,
    kind: "route",
  },
];

function LearnMore({ card }: { card: ClassCard }) {
  const label = (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 px-4 py-1.5 text-[11px] uppercase tracking-wider text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-charcoal">
      Learn More
    </span>
  );
  if (card.kind === "route") {
    return <Link href={card.href}>{label}</Link>;
  }
  return (
    <a href={card.href} {...(card.kind === "external" ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {label}
    </a>
  );
}

export default function ClassesSection() {
  return (
    <section id={SECTION_IDS.classes} className="py-14 md:py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider">
            Join My Classes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {CLASS_CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110 ${card.position ?? "object-center"}`}
              />
              {/* Legibility gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/25 to-transparent" />

              {/* Overlaid content */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start gap-3 text-white">
                <div>
                  <h3 className="font-serif text-xl leading-snug drop-shadow-sm">{card.title}</h3>
                  {card.subtitle && (
                    <p className="text-[13px] text-white/80 mt-1 leading-snug">{card.subtitle}</p>
                  )}
                </div>
                <LearnMore card={card} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
