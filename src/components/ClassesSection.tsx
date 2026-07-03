import Image from "next/image";
import { SECTION_IDS } from "@/lib/constants";

const CLASS_OFFERINGS = [
  {
    title: "Yoga & Mobility",
    description: "Mindful movement to improve flexibility, strength, and body awareness.",
    image: "/images/class-yoga.jpg",
    position: "object-[center_80%]",
  },
  {
    title: "Strength Training",
    description: "Build functional strength through intentional, guided exercises.",
    image: "/images/class-strength.jpg",
    position: "object-center",
  },
  {
    title: "Guided Meditation",
    description: "Calm your mind and find stillness through breath and meditation.",
    image: "/images/class-meditation.jpg",
    position: "object-[center_70%]",
  },
  {
    title: "Sound Healing",
    description: "Immersive sound experiences to restore balance and inner peace.",
    image: "/images/class-sound.jpg",
    position: "object-[center_20%]",
  },
];

export default function ClassesSection() {
  return (
    <section id={SECTION_IDS.classes} className="py-14 md:py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider">
            Join My Classes
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {CLASS_OFFERINGS.map((offering) => (
            <div
              key={offering.title}
              className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden text-center"
            >
              <div className="relative aspect-[4/3] sm:aspect-[3/4]">
                <Image
                  src={offering.image}
                  alt={offering.title}
                  fill
                  className={`object-cover ${offering.position}`}
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-brand-olive mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                  {offering.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={`#${SECTION_IDS.about}`}
            className="text-sm text-brand-olive underline underline-offset-4 hover:text-brand-olive-dark transition-colors uppercase tracking-wider"
          >
            Read More About Soulena →
          </a>
        </div>
      </div>
    </section>
  );
}
