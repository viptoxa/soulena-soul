import { SECTION_IDS, SITE } from "@/lib/constants";

function Bullet() {
  return <span className="w-1.5 h-1.5 rounded-full bg-brand-sage mt-2 flex-shrink-0" />;
}

export default function PoliciesSection() {
  return (
    <section id={SECTION_IDS.policies} className="py-14 md:py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[800px]">
        <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Pricing + Policies
        </h2>
        <p className="text-center text-brand-charcoal/60 mb-10 leading-relaxed">
          To help sustain this outdoor wellness space in a place where the weather can
          often be unpredictable, I kindly ask for your understanding of the following policies.
          Thank you for helping to sustain what I love to share and create with you.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-lg text-brand-olive uppercase tracking-wider mb-4">
              Bookings &amp; Payments
            </h3>
            <ul className="space-y-3 text-brand-charcoal/80 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Bullet />
                <span>All purchases are <strong>final and non-refundable</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <Bullet />
                <span>
                  If you purchase a <em>beach yoga &amp; movement class</em> and are{" "}
                  <strong>unable to attend that day</strong>, I&apos;m happy to offer you a{" "}
                  <strong>one-time courtesy rebooking</strong> to another session.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Bullet />
                <span>
                  If a <em>beach yoga &amp; movement class</em> needs to be canceled due to{" "}
                  <strong>weather conditions</strong>, your class credit can be used anytime{" "}
                  <strong>within one year</strong> of the original class date.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Bullet />
                <span>
                  <em>Package sessions</em> are <strong>non-transferable and non-refundable</strong>.
                  If an unexpected circumstance arises, please don&apos;t hesitate to reach out, and
                  I will do my best to support you.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-brand-olive uppercase tracking-wider mb-4">
              Safety &amp; Respectful Space
            </h3>
            <ul className="space-y-3 text-brand-charcoal/80 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Bullet />
                <span>Please inform me in advance of any <strong>injuries or medical conditions</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <Bullet />
                <span>
                  Please note that <strong>late arrivals of more than 15 minutes</strong> may not be
                  able to join the class.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Bullet />
                <span>
                  I reserve the right to refuse participation in case of{" "}
                  <strong>disrespectful or inappropriate behavior</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-brand-charcoal/50 mt-10">
          For any questions, feel free to contact me at{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-olive underline">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
