import Image from "next/image";
import type { ReactNode } from "react";
import { FlowerIcon } from "@/components/icons/SocialIcons";

// Canva About palette: desaturated teal-slate for headings/quotes, dusty
// mauve for the handwritten name.
const SLATE = "#3f4c54";
const MAUVE = "#bd8b93";

function Quote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-serif italic leading-snug ${className}`} style={{ color: SLATE }}>
      {children}
    </p>
  );
}

function Credential({ title, icon, children }: { title: string; icon?: boolean; children: ReactNode }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 font-serif text-lg md:text-xl uppercase tracking-wider mb-3" style={{ color: SLATE }}>
        {title}
        {icon && <FlowerIcon className="w-4 h-4 text-brand-olive/60" />}
      </h3>
      <ul className="space-y-2 text-brand-charcoal/75 text-sm leading-relaxed">{children}</ul>
    </div>
  );
}

export default function MoreAboutMeSection() {
  return (
    <section className="bg-brand-cream overflow-hidden">
      {/* ───────── Hero: MORE ABOUT ME ───────── */}
      <div className="mx-auto max-w-[1150px] px-4 pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-wide leading-none" style={{ color: SLATE }}>
            More About Me
          </h1>
          <span
            className="block text-4xl md:text-5xl -mt-1 md:-mt-2 ml-1"
            style={{ fontFamily: "var(--font-script)", color: MAUVE }}
          >
            Soulena Soul
          </span>
        </div>

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-14 items-center">
          <div className="space-y-8">
            <Quote className="text-[26px] md:text-[34px]">
              &ldquo;I strongly believe that staying active, mobile, and flexible is one of the keys to
              long-term health and longevity.&rdquo;
            </Quote>
            <div className="space-y-4 text-brand-charcoal/80 leading-relaxed max-w-xl">
              <p>
                Nowadays, our lifestyle tends to become more sedentary and disconnected from movement,
                nature, and even our own bodies.
              </p>
              <p>
                Alongside teaching yoga and movement, I also continue working in the healthcare field as a{" "}
                <strong className="font-semibold" style={{ color: SLATE }}>pharmacist</strong> — a background
                that has deeply shaped the way I view movement, health, and long-term well-being.
              </p>
            </div>
          </div>

          {/* Inversion cut-out, floating on the cream */}
          <div className="relative mx-auto w-full max-w-[260px] md:max-w-[300px] aspect-[1102/2326]">
            <Image
              src="/images/about-inversion.png"
              alt="Soulena in a forearm-stand inversion"
              fill
              sizes="(min-width: 768px) 300px, 60vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* ───────── Field of interest ───────── */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-1 relative aspect-[3/4] max-w-[380px] w-full mx-auto rounded-2xl overflow-hidden shadow-[0_18px_50px_-24px_rgba(60,52,40,0.4)]">
          <Image
            src="/images/about-crow.jpg"
            alt="Soulena in crow pose on a deck by the pool"
            fill
            sizes="(min-width: 768px) 380px, 80vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2 space-y-5">
          <Quote className="text-2xl md:text-[30px]">
            &ldquo;My field of interest goes beyond yoga alone.&rdquo;
          </Quote>
          <p className="text-brand-charcoal/80 leading-relaxed">
            I&apos;m also deeply interested in mobility training, calisthenics, animal flow, strength
            training, and mindful movement practices — elements I hope to gradually bring into my classes in
            the future. I want my students to have more ways to explore movement, build body awareness, and
            create a stronger connection with themselves in a supportive and enjoyable way.
          </p>
          <div className="pt-2 text-right">
            <Quote className="text-2xl md:text-[30px]">
              &ldquo;To me, discipline is also a form of self-love.&rdquo;
            </Quote>
            <p className="text-brand-charcoal/70 mt-2 leading-relaxed">
              Not punishment — but a gentle commitment to taking care of yourself consistently.
            </p>
          </div>
        </div>
      </div>

      {/* ───────── Credentials ───────── */}
      <div className="mx-auto max-w-[1100px] px-4 pt-10 md:pt-14 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="space-y-8">
          <Credential title="Teaching Experience" icon>
            <li>• 100+ yoga classes taught</li>
            <li>• Classes designed for all levels: beginner – intermediate</li>
          </Credential>
          <Credential title="Certifications">
            <li>• RYT-200 Yoga Alliance Certified Teacher (Hatha Vinyasa)</li>
            <li>• Sound Therapy Training Certificate (30 Hours)</li>
          </Credential>
          <Credential title="My Other Teaching Locations">
            <li>
              <strong className="font-medium" style={{ color: SLATE }}>Mandarava Resort &amp; Spa, Phuket</strong>
              <br />— hospitality &amp; wellness collaboration
            </li>
            <li>
              <strong className="font-medium" style={{ color: SLATE }}>A Blanket &amp; A Pillow Café, Phuket</strong>
              <br />— a nice &amp; lovely space by the sea with beautiful scenery
              <br />— seasonal classes during Phuket high season: NOV – MAR
            </li>
          </Credential>
        </div>
        <div className="relative aspect-[4/5] max-w-[440px] w-full mx-auto rounded-2xl overflow-hidden shadow-[0_18px_50px_-24px_rgba(60,52,40,0.4)]">
          <Image
            src="/images/about-meditation.jpg"
            alt="Soulena meditating in her teaching space"
            fill
            sizes="(min-width: 768px) 440px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
