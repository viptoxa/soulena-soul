import { SECTION_IDS, SITE } from "@/lib/constants";

const POLICIES = [
  "All purchases are final and non-refundable.",
  "If you purchase a beach group yoga class and are unable to attend that day, I'm happy to offer you a one-time courtesy rescheduling to another date.",
  "If a beach group yoga class needs to be cancelled due to weather conditions, your class credit can be used anytime within one year of the original class date.",
  "Private sessions are non-transferable and non-refundable. If an unexpected circumstance arises, please don't hesitate to reach out, and I will do my best to support you.",
];

export default function PoliciesSection() {
  return (
    <section id={SECTION_IDS.policies} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[800px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-4">
          Pricing + Policies
        </h2>
        <p className="text-center text-brand-charcoal/60 mb-10 leading-relaxed">
          To help sustain this outdoor wellness space in a place where the weather can
          often be unpredictable, I kindly ask for your understanding of the following policies.
          Thank you for helping to sustain what I love to share and create with you.
        </p>

        <ul className="space-y-4">
          {POLICIES.map((policy) => (
            <li key={policy} className="flex items-start gap-3 text-brand-charcoal/80 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-sage mt-2 flex-shrink-0" />
              {policy}
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-brand-charcoal/50 mt-8">
          For any questions, feel free to contact me at{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-olive underline">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
