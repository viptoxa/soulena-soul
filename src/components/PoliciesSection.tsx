import { SECTION_IDS, SITE } from "@/lib/constants";
import { FlowerIcon, MailIcon } from "@/components/icons/SocialIcons";

// Canva styles this block with a slate display heading and plum body copy.
const SLATE = "#3f4c54";
const PLUM = "#7d2b52";
const GOLD = "#8b8459";

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3
        className="mb-2 text-[15px] md:text-base font-bold italic uppercase tracking-wide"
        style={{ color: PLUM }}
      >
        {title}
      </h3>
      <ul
        className="list-disc space-y-1.5 pl-6 text-[15px] md:text-base leading-relaxed marker:text-[#7d2b52]"
        style={{ color: PLUM }}
      >
        {children}
      </ul>
    </div>
  );
}

export default function PoliciesSection() {
  return (
    <section id={SECTION_IDS.policies} className="bg-[#fdfaf2] px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-5 flex items-start justify-between gap-6">
          <h2
            className="font-serif text-[34px] md:text-[52px] uppercase tracking-[0.04em] leading-none"
            style={{ color: SLATE }}
          >
            Pricing + Policies
          </h2>
          <FlowerIcon className="mt-2 h-8 w-8 shrink-0" style={{ color: GOLD }} />
        </div>

        <p
          className="mb-7 max-w-[980px] text-[15px] md:text-base leading-relaxed"
          style={{ color: PLUM }}
        >
          To help sustain this outdoor wellness space in a place where the weather can often be
          unpredictable, I kindly ask for your understanding of the following policies. Thank you for
          helping to sustain what I love to share and create with you.
        </p>

        <div className="space-y-6">
          <Group title="Bookings &amp; Payments">
            <li>
              All purchases are <strong className="font-semibold">final and non-refundable</strong>.
            </li>
            <li>
              If you purchase a <em className="underline">beach yoga &amp; movement class</em> and are{" "}
              <strong className="font-semibold">unable to attend that day</strong>, I&apos;m happy to
              offer you <strong className="font-semibold">a one-time courtesy rebooking</strong> to
              another session.
            </li>
            <li>
              If a <em className="underline">beach yoga &amp; movement class</em> needs to be canceled
              due to <strong className="font-semibold">weather conditions</strong>, your class credit
              can be used anytime <strong className="font-semibold">within one year</strong> of the
              original class date.
            </li>
            <li>
              <em className="underline">Package sessions</em>{" "}
              <strong className="font-semibold">are non-transferable and non-refundable</strong>. If an
              unexpected circumstance arises, please don&apos;t hesitate to reach out, and I will do my
              best to support you.
            </li>
          </Group>

          <Group title="Safety &amp; Respectful Space">
            <li>
              Please inform me in advance of any{" "}
              <strong className="font-semibold">injuries or medical conditions</strong>.
            </li>
            <li>
              Please note that{" "}
              <strong className="font-semibold">late arrivals of more than 15 minutes</strong> may not
              be able to join the class.
            </li>
            <li>
              I reserve the right to refuse participation in case of{" "}
              <strong className="font-semibold">disrespectful or inappropriate behavior</strong>.
            </li>
          </Group>
        </div>

        <p
          className="mt-7 flex flex-wrap items-center gap-2 text-[15px] md:text-base"
          style={{ color: PLUM }}
        >
          For any questions, feel free to contact me at:
          <MailIcon className="h-5 w-5" style={{ color: PLUM }} />
          <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:opacity-80">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
