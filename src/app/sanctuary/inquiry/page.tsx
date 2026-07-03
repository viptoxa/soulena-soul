import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Sanctuary Inquiry — Soul & Sound Sanctuary | Soulena Soul",
};

export default function InquiryPage() {
  return (
    <section className="bg-brand-charcoal text-brand-cream px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="font-serif text-lg text-brand-cream/70">Soul &amp; Sound Sanctuary</p>
          <h1 className="font-serif text-4xl md:text-5xl mt-1 mb-6">Inquiry Page</h1>
          <p className="text-brand-cream/60 leading-relaxed max-w-xl mx-auto">
            We create calming and immersive wellness experiences blending yoga, meditation, and
            sound healing — thoughtfully curated for weddings, bridal gatherings, couples retreats
            &amp; honeymoon experiences, luxury villa stays, birthdays, and meaningful celebrations.
          </p>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
