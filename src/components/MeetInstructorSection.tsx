import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function MeetInstructorSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="font-serif italic text-brand-olive text-lg md:text-xl leading-tight mb-3">
            Simply move with
            <br />
            Soulena Soul
          </p>
          <h2 className="font-serif text-[27px] md:text-4xl text-brand-charcoal uppercase tracking-wider mb-6">
            Meet Your Instructor
          </h2>
          <div className="space-y-4 text-brand-charcoal/80 leading-relaxed">
            <p>
              Soulena&apos;s journey into{" "}
              <strong className="font-medium text-brand-charcoal">yoga and mindful movement</strong> began
              from a desire to reconnect with herself through movement, breath, and awareness. Over time,
              the personal practice naturally evolved into a space of learning, exploration, and deeper
              connection.
            </p>
            <p>
              Blending{" "}
              <strong className="font-medium text-brand-charcoal">
                yoga, mobility, mindful movement, strength training, and guided meditation
              </strong>
              , her classes are designed to encourage students to move better, build body awareness, and
              reconnect with themselves in a grounded and supportive way.
            </p>
            <p>
              Still evolving in her teaching journey, Soulena brings a gentle and intentional approach to
              every class — creating a soft space inspired by island life in Phuket where students can{" "}
              <strong className="font-medium text-brand-charcoal">
                breathe, move, explore, and simply be.
              </strong>
            </p>
          </div>
          <Link
            href={ROUTES.about}
            className="inline-flex items-center gap-2 mt-8 border-2 border-brand-olive text-brand-olive rounded-full px-7 py-3 text-sm uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
          >
            Read More About Soulena <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="order-1 md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/instructor.jpg"
            alt="Soulena Soul, yoga and movement teacher"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
