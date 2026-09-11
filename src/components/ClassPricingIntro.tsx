import Image from "next/image";
import { FlowerIcon } from "@/components/icons/SocialIcons";

export default function ClassPricingIntro() {
  return (
    <section className="relative isolate overflow-hidden text-brand-cream px-4 py-16 md:py-24 text-center">
      {/*
       * Her own re-grade of the same deck, sent 2026-09-11: "please replace
       * this photo with the same one in this colour tone instead... I think
       * this tone will blend in better with the other photos on the page."
       * It is far flatter than the original (channel spread 77 -> 39), which
       * also lifts the copy off it better than the old frame did.
       *
       * It is 16:9 where the old file was 3:4, so on a phone the box is much
       * taller than the picture and object-cover has to scale it up to about
       * three times the viewport width. "100vw" would ask for a file a third
       * of the size it renders at and the photo would go soft — the same trap
       * the class photos fell into on 2026-09-09.
       */}
      <Image
        src="/images/classes-hero-v4.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 100vw, (min-width: 640px) 150vw, 320vw"
        className="object-cover object-center -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-[#123044]/45" />

      <div className="relative mx-auto max-w-[760px]">
        <FlowerIcon className="w-8 h-8 mx-auto mb-5 text-brand-cream/80" />
        <h1 className="font-serif text-[32px] md:text-6xl uppercase tracking-[0.06em]">Class Pricing</h1>
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
          {/* Back to the serif italic: she corrected herself on 2026-09-09 —
              "I gave you the wrong instruction here, this is actually the font
              I want". */}
          <span className="font-serif text-lg italic md:text-xl">Soulena Soul</span>
        </p>
      </div>
    </section>
  );
}
