import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

export default function ClassPricingIntro() {
  return (
    <section className="relative isolate overflow-hidden text-brand-cream px-4 py-16 md:py-24 text-center">
      {/* Canva uses the underwater / jellyfish photo behind this note */}
      <Image
        src="/images/classes-hero-jelly.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-[#123044]/45" />

      <div className="relative mx-auto max-w-[760px]">
        <FlowerIcon className="w-8 h-8 mx-auto mb-5 text-brand-cream/80" />
        <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-[0.06em]">Class Pricing</h1>
        <div className="w-px h-10 bg-brand-cream/50 mx-auto my-6" />
        <p className="uppercase tracking-[0.08em] text-sm md:text-base text-brand-cream mb-6 leading-relaxed">
          A note on my classes pricing
          <br />
          to my beloved community.
        </p>
        <p className="text-brand-cream/90 leading-relaxed mb-5 text-[15px] md:text-[17px]">
          I truly believe in the power of spending time in nature, moving your body mindfully, and
          reconnecting through breath in a way that feels nourishing, strengthening, and empowering.
        </p>
        <p className="text-brand-cream/90 leading-relaxed mb-8 text-[15px] md:text-[17px]">
          My classes are created to offer a grounding, supportive, and meaningful experience for
          students at all levels.
        </p>
        <p className="text-brand-cream text-[15px] md:text-[17px] leading-relaxed">
          With love,
          <br />
          <span className="font-serif italic text-lg md:text-xl">Soulena Soul</span>
        </p>
      </div>
    </section>
  );
}
