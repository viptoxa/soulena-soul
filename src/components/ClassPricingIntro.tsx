import { FlowerIcon } from "@/components/icons/SocialIcons";

export default function ClassPricingIntro() {
  return (
    <section className="bg-brand-charcoal text-brand-cream py-16 md:py-24 px-4 text-center">
      <div className="mx-auto max-w-2xl">
        <FlowerIcon className="w-8 h-8 mx-auto mb-5 opacity-70" />
        <h1 className="font-serif text-3xl md:text-5xl uppercase tracking-wider mb-5">Class Pricing</h1>
        <div className="w-px h-8 bg-brand-cream/40 mx-auto mb-6" />
        <p className="uppercase tracking-wider text-sm text-brand-cream/80 mb-5">
          A note on my classes pricing to my beloved community.
        </p>
        <p className="text-brand-cream/70 leading-relaxed mb-4">
          I truly believe in the power of spending time in nature, moving your body mindfully, and
          reconnecting through breath in a way that feels nourishing, strengthening, and empowering.
        </p>
        <p className="text-brand-cream/70 leading-relaxed mb-6">
          My classes are created to offer a grounding, supportive, and meaningful experience for
          students at all levels.
        </p>
        <p className="font-serif italic text-brand-cream/90">
          With love,
          <br />
          Soulena Soul
        </p>
      </div>
    </section>
  );
}
