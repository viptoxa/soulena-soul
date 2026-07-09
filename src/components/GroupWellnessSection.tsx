import Image from "next/image";
import { SITE } from "@/lib/constants";

const inquiryHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
  "Hi Soulena! I'd like to inquire about a group class for a hotel / wellness event."
)}`;

export default function GroupWellnessSection() {
  return (
    <section className="bg-brand-cream px-4 py-12 md:py-16">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="font-serif text-3xl md:text-[40px] text-brand-charcoal leading-[1.1] mb-8">
          Group Yoga for Hotel &amp; Wellness Event Classes
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image src="/images/card-event.jpg" alt="Group wellness class" fill sizes="(min-width:768px) 25vw, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-6">
              <Image src="/images/gallery-4.jpg" alt="Group practice by the sea" fill sizes="(min-width:768px) 25vw, 45vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              I also offer group classes for <strong className="font-medium text-brand-charcoal">hotels, wellness events, and private gatherings</strong>, all available upon request.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4">
              Each session can be thoughtfully tailored to the atmosphere and needs of your space.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-7">
              Feel free to reach out for collaborations or more details.
            </p>
            <a
              href={inquiryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-brand-olive text-white px-8 py-3 text-xs uppercase tracking-wider hover:bg-brand-olive-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
