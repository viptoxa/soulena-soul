import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Sanctuary Inquiry — Soul & Sound Sanctuary | Soulena Soul",
};

const GOLD = "#c9a76a";

function GoldRule() {
  return (
    <svg
      viewBox="0 0 800 24"
      aria-hidden="true"
      className="mx-auto my-6 h-5 w-full max-w-[620px]"
      fill="none"
    >
      <path d="M8 12h360" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M432 12h360" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M400 3l14 9-14 9-14-9 14-9z" fill={GOLD} />
    </svg>
  );
}

export default function InquiryPage() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 md:py-24 text-white">
      {/* Gold loop accents, as in the Canva */}
      <svg
        viewBox="0 0 200 260"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[22%] hidden w-[150px] md:block"
      >
        <path
          d="M196 8c-70 18-130 62-118 112 10 44 84 40 94 2 8-32-46-50-84-28-40 24-42 88 22 118"
          stroke={GOLD}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 200 260"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-[8%] hidden w-[150px] md:block"
      >
        <path
          d="M4 252c70-18 130-62 118-112C112 96 38 100 28 138c-8 32 46 50 84 28 40-24 42-88-22-118"
          stroke={GOLD}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[860px]">
        <header className="text-center">
          <p className="font-serif text-xl md:text-2xl text-white">Soul &amp; Sound Sanctuary</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight text-white">Inquiry page</h1>
          <GoldRule />
          <p className="mx-auto max-w-[720px] text-[13px] md:text-sm italic leading-relaxed text-white/85">
            We create calming and immersive wellness experiences blending yoga, meditation, and sound
            healing,
            <br className="hidden md:block" />— thoughtfully curated for weddings, bridal wellness
            gatherings, couples retreats &amp; honeymoon experiences,
            <br className="hidden md:block" />
            wellness content with professional photography, curated styling &amp; props, birthdays, and
            meaningful celebrations.
          </p>
        </header>

        <div className="mt-12 md:mt-16">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
