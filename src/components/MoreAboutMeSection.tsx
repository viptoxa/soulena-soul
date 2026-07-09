import Image from "next/image";
import type { ReactNode } from "react";

function Quote({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-2xl md:text-[28px] italic text-brand-charcoal leading-snug">
      {children}
    </p>
  );
}

function Credential({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-xl uppercase tracking-wider text-brand-charcoal mb-3">{title}</h3>
      <ul className="space-y-2 text-brand-charcoal/75 text-sm leading-relaxed">{children}</ul>
    </div>
  );
}

export default function MoreAboutMeSection() {
  return (
    <section className="bg-brand-cream">
      {/* Heading + first quote */}
      <div className="mx-auto max-w-[1100px] px-4 pt-16 md:pt-24 pb-6">
        <div className="mb-10">
          <h1 className="font-serif text-[32px] md:text-5xl uppercase tracking-wider text-brand-charcoal">
            More About Me
          </h1>
          <p className="font-serif italic text-2xl text-brand-olive mt-1">Soulena Soul</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Quote>
            &ldquo;I strongly believe that staying active, mobile, and flexible is one of the keys to
            long-term health and longevity.&rdquo;
          </Quote>
          <div className="relative aspect-[3/4] max-w-[280px] mx-auto w-full rounded-xl overflow-hidden">
            <Image
              src="/images/instructor-a.jpg"
              alt="Soulena in an inversion"
              fill
              sizes="(min-width: 768px) 280px, 60vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 space-y-4 text-brand-charcoal/80 leading-relaxed max-w-2xl">
          <p>
            Nowadays, our lifestyle tends to become more sedentary and disconnected from movement, nature,
            and even our own bodies.
          </p>
          <p>
            Alongside teaching yoga and movement, I also continue working in the healthcare field as a{" "}
            <em className="font-medium text-brand-charcoal not-italic">pharmacist</em> — a background that
            has deeply shaped the way I view movement, health, and long-term well-being.
          </p>
        </div>
      </div>

      {/* Field of interest + more quotes */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[3/4] max-w-[280px] mx-auto w-full rounded-xl overflow-hidden order-2 md:order-1">
          <Image
            src="/images/instructor-b.jpg"
            alt="Soulena practicing on the mat"
            fill
            sizes="(min-width: 768px) 280px, 60vw"
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <Quote>&ldquo;My field of interest goes beyond yoga alone.&rdquo;</Quote>
          <p className="text-brand-charcoal/80 leading-relaxed">
            I&apos;m also deeply interested in mobility training, calisthenics, animal flow, strength
            training, and mindful movement practices — elements I hope to gradually bring into my classes in
            the future. I want my students to have more ways to explore movement, build body awareness, and
            create a stronger connection with themselves in a supportive and enjoyable way.
          </p>
          <div className="pt-3">
            <Quote>&ldquo;To me, discipline is also a form of self-love.&rdquo;</Quote>
            <p className="text-brand-charcoal/70 mt-2 leading-relaxed">
              Not punishment — but a gentle commitment to taking care of yourself consistently.
            </p>
          </div>
        </div>
      </div>

      {/* Credentials */}
      <div className="mx-auto max-w-[1100px] px-4 pt-10 pb-16 md:pb-24 grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-8">
          <Credential title="Teaching Experience">
            <li>• 100+ yoga classes taught</li>
            <li>• Classes designed for all levels: beginner – intermediate</li>
          </Credential>
          <Credential title="Certifications">
            <li>• RYT-200 Yoga Alliance Certified Teacher (Hatha Vinyasa)</li>
            <li>• Sound Therapy Training Certificate (30 Hours)</li>
          </Credential>
          <Credential title="My Other Teaching Locations">
            <li>
              <strong className="font-medium text-brand-charcoal">Mandarava Resort &amp; Spa, Phuket</strong>
              <br />— hospitality &amp; wellness collaboration
            </li>
            <li>
              <strong className="font-medium text-brand-charcoal">A Blanket &amp; A Pillow Café, Phuket</strong>
              <br />— a nice &amp; lovely space by the sea with beautiful scenery
              <br />— seasonal classes during Phuket high season: NOV – MAR
            </li>
          </Credential>
        </div>
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            src="/images/about-main.jpg"
            alt="Soulena in her teaching space"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
