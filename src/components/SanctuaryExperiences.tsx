import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { SANCTUARY_CREAM, SANCTUARY_ORB } from "@/components/SanctuaryTheme";

type Experience = {
  image: string;
  imageAlt: string;
  title: [string, string];
  points: [string, string];
};

const EXPERIENCES: Experience[] = [
  {
    image: "/images/sss-circle-yoga.jpg",
    imageAlt: "A balanced stack of smooth grey stones",
    title: ["Curated Yoga", "Session"],
    points: ["Gentle movement & mindful flow", "Grounding movement by the sea"],
  },
  {
    image: "/images/sss-circle-sound.jpg",
    imageAlt: "Candles, rolled towels and leaves in a spa setting",
    title: ["Sound Bath", "Session"],
    points: ["Immersive sound bath experience", "Gentle sound for deep relaxation"],
  },
];

function ExperienceOrb({ image, imageAlt, title, points }: Experience) {
  return (
    <div
      className="relative aspect-square w-[260px] shrink-0 rounded-full sm:w-[290px] lg:w-[326px]"
      style={{ backgroundImage: SANCTUARY_ORB }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center px-[13%] text-center">
        <div className="relative aspect-square w-[38%] overflow-hidden rounded-full">
          <Image src={image} alt={imageAlt} fill sizes="130px" className="object-cover" />
        </div>

        <h3
          className="mt-[7%] font-serif text-[19px] uppercase leading-[1.2] tracking-[0.05em] lg:text-[22px]"
          style={{ color: SANCTUARY_CREAM }}
        >
          {title[0]}
          <br />
          {title[1]}
        </h3>

        <ul
          className="mt-[5%] space-y-1 text-left text-[11.5px] italic leading-snug lg:text-[12.5px]"
          style={{ color: SANCTUARY_CREAM }}
        >
          {points.map((point) => (
            <li key={point} className="flex gap-1.5">
              <span aria-hidden>&bull;</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Canva page 6, closing block: pure-black canvas with the dimmed shell
 * backdrop, the two navy experience orbs, the "2-hour" panel behind a hairline
 * rule, and the HOME / inquiry footer row.
 */
export default function SanctuaryExperiences() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Dim shell backdrop, exactly as it sits behind this block in the Canva */}
      <Image
        src="/images/sss-shell-backdrop.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="pointer-events-none select-none object-cover object-center opacity-90"
      />

      {/* Gold loop line-art, bottom left */}
      <Image
        src="/images/sss-line-curl.png"
        alt=""
        aria-hidden
        width={980}
        height={1031}
        className="pointer-events-none absolute -left-[4%] bottom-[1%] hidden w-[26%] max-w-[360px] select-none sm:block"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
        <h2
          className="font-serif text-[clamp(2.1rem,5.4vw,3.5rem)] leading-[1.02]"
          style={{ color: SANCTUARY_CREAM }}
        >
          Creating <em className="italic">Space</em> for
          <span className="block md:pl-[9%]">Immersive Experiences</span>
        </h2>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[minmax(0,1fr)_290px] md:gap-0">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-5 lg:gap-7">
            {EXPERIENCES.map((experience) => (
              <ExperienceOrb key={experience.title.join(" ")} {...experience} />
            ))}
          </div>

          <div
            className="flex flex-col items-center text-center md:border-l md:border-[#e9e3d7]/25 md:pl-10 md:pt-2"
            style={{ color: SANCTUARY_CREAM }}
          >
            <p className="font-serif text-[22px] uppercase leading-none tracking-[0.02em] lg:text-[26px]">
              2-Hour
            </p>
            <p className="mt-2 font-serif text-[16px] uppercase leading-[1.25] tracking-[0.03em] lg:text-[18px]">
              Private Wellness
              <br />
              Experience
            </p>

            <p
              className="mt-6 text-[24px] leading-[1.2] lg:text-[30px]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              a gentle space
              <br />
              to slow down&hellip;
            </p>

            <p className="mt-6 max-w-[30ch] text-[14px] leading-[1.5] lg:text-[16px]">
              Guided by the sound of the ocean, each experience invites moments of calm,
              presence, and meaningful connection.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-8 md:mt-20">
          <Link
            href={ROUTES.home}
            className="group inline-flex items-center gap-4 font-serif text-[18px] italic tracking-wide lg:text-[21px]"
            style={{ color: SANCTUARY_CREAM }}
          >
            <svg
              viewBox="0 0 46 12"
              className="h-3 w-[46px] transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              aria-hidden
            >
              <path
                d="M45 6H2M2 6l6-4M2 6l6 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="underline decoration-[1px] underline-offset-[6px]">HOME</span>
          </Link>

          <div className="flex items-center gap-4">
            <Image
              src="/images/sss-pearls.png"
              alt=""
              aria-hidden
              width={665}
              height={460}
              className="pointer-events-none hidden w-[84px] select-none sm:block lg:w-[104px]"
            />
            <Link
              href={ROUTES.inquiry}
              className="rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
            >
              Make an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
