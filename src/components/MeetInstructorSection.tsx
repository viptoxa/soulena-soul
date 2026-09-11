import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/icons/SocialIcons";

export default function MeetInstructorSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        {/* On a phone the photo comes first, and she asked for this one line to
            sit above it (2026-09-09). From md the heading is back in the text
            column where it belongs. */}
        <h2 className="order-1 font-serif text-[27px] uppercase tracking-wider text-brand-charcoal md:hidden">
          Meet Your Instructor
        </h2>

        <div className="order-3 md:order-1">
          {/* Sans-serif italic, not serif — her 2026-09-07 note. */}
          <p className="font-sans italic text-brand-olive mb-4 leading-tight">
            <span className="block text-base md:text-lg">Simply move with</span>
            <span className="block text-2xl md:text-4xl">Soulena Soul</span>
          </p>
          <h2 className="mb-6 hidden font-serif uppercase tracking-wider text-brand-charcoal md:block md:text-4xl">
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
            className="inline-flex items-center gap-2 mt-8 border-2 border-brand-olive text-brand-olive rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
          >
            Read More About Soulena <ArrowRightIcon className="h-3 w-[30px] shrink-0" />
          </Link>
        </div>
        <div className="order-2 md:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            /* Back to the original shot at her request (2026-09-11): "since
               I'm doing a yoga pose it connects really nicely with 'Simply move
               with Soulena Soul' underneath... my face is already fairly
               visible there", and she'd rather not add a circular inset. */
            src="/images/instructor-v2.jpg"
            alt="Soulena Soul in a standing pose on the deck, being adjusted"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
