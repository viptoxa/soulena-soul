import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "Soul & Sound Sanctuary — Curated Private Wellness | Soulena Soul",
};

function Experience({ image, title, lines }: { image: string; title: string; lines: string[] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden ring-1 ring-[#c9a76a]/40 mb-5">
        <Image src={image} alt={title} fill sizes="220px" className="object-cover" />
      </div>
      <h3 className="font-serif tracking-wider uppercase text-[#c9a76a] text-lg mb-2">{title}</h3>
      <ul className="text-brand-cream/70 text-sm space-y-1">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
}

export default function SanctuaryPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 items-center">
          <div className="px-4 sm:px-8 lg:px-16 py-16 md:py-28 text-center md:text-left relative z-10">
            <FlowerIcon className="w-8 h-8 mx-auto md:mx-0 mb-6 opacity-70" />
            <p className="uppercase tracking-[0.3em] text-xs text-brand-cream/60 mb-5">
              Curated Private Wellness Experience
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-[#c9a76a] mb-6">
              Soul &amp; Sound
              <br />
              Sanctuary
            </h1>
            <p className="uppercase tracking-[0.25em] text-sm text-brand-cream/70">
              For Your Special Day &amp; Special Person
            </p>
          </div>
          <div className="relative min-h-[300px] md:min-h-[560px]">
            <Image
              src="/images/card-sanctuary.jpg"
              alt="Sound healing bowls and gold ornaments"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/30 to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-brand-charcoal/20 md:hidden" />
          </div>
        </div>
      </section>

      {/* The Mind–Body Connection */}
      <section className="px-4 py-14 md:py-24">
        <div className="mx-auto max-w-[1080px] grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
            <Image
              src="/images/sanctuary-4.jpg"
              alt="Partner practice by the sea"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
              The <em className="italic">Mind</em>–Body
              <br />
              Connection
            </h2>
            <p className="text-brand-cream/75 leading-relaxed mb-6">
              When the mind and body are in harmony, people often feel more grounded, restored, and at
              ease.
            </p>
            <p className="font-serif italic text-2xl text-[#c9a76a] mb-6">Restore your inner balance</p>
            <p className="text-brand-cream/75 leading-relaxed">
              Blending yoga, meditation, and sound healing, each experience is designed to bring calm and
              connection to{" "}
              <span className="text-brand-cream">weddings, birthdays, and meaningful celebrations.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Creating Space for Immersive Experiences */}
      <section className="px-4 py-14 md:py-24 border-t border-brand-cream/10">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-serif text-3xl md:text-5xl text-center mb-14 leading-tight">
            Creating <em className="italic">Space</em> for
            <br />
            Immersive Experiences
          </h2>
          <div className="grid sm:grid-cols-2 gap-12 md:gap-10 mb-16 max-w-2xl mx-auto">
            <Experience
              image="/images/sanctuary-2.jpg"
              title="Curated Yoga Session"
              lines={["Gentle movement & mindful flow", "Grounding movement by the sea"]}
            />
            <Experience
              image="/images/sanctuary-3.jpg"
              title="Sound Bath Session"
              lines={["Immersive sound bath experience", "Gentle sound for deep relaxation"]}
            />
          </div>
          <div className="text-center max-w-xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-sm text-[#c9a76a] mb-2">
              2-Hour Private Wellness Experience
            </p>
            <p className="font-serif italic text-xl text-brand-cream/80 mb-5">a gentle space to slow down…</p>
            <p className="text-brand-cream/70 leading-relaxed mb-10">
              Guided by the sound of the ocean, each experience invites moments of calm, presence, and
              meaningful connection.
            </p>
            <Link
              href={ROUTES.inquiry}
              className="inline-flex items-center gap-2 rounded-full bg-[#c9a76a] text-brand-charcoal px-10 py-4 text-sm uppercase tracking-wider font-medium hover:bg-[#d8bd8a] transition-colors"
            >
              Make an Inquiry <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
