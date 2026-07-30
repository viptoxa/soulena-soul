import GalleryLightbox from "./GalleryLightbox";
import { SITE } from "@/lib/constants";

const inquiryHref = `${SITE.whatsappUrl}?text=${encodeURIComponent(
  "Hi Soulena! I'd like to inquire about a group class for a hotel / wellness event."
)}`;

// Muted sage-grey heading, exactly as in the Canva.
const SAGE = "#8d8f82";

const PHOTOS = [
  { src: "/images/group-clinic.jpg", alt: "Yoga soft opening at Napatchar Clinic, Phuket" },
  { src: "/images/group-studio.jpg", alt: "Group wellness class in a Phuket studio" },
];

export default function GroupWellnessSection() {
  return (
    <section className="bg-brand-cream px-4 py-12 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <h2
          className="font-serif text-[34px] md:text-[52px] leading-[1.12] mb-10 md:mb-12"
          style={{ color: SAGE }}
        >
          Group Yoga for Hotel &amp;
          <br />
          Wellness Event Classes
        </h2>

        <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-10 md:gap-16 items-start">
          <div className="[&_.grid]:grid-cols-2 [&_.grid]:md:grid-cols-2 [&_button]:aspect-[4/5]">
            <GalleryLightbox images={PHOTOS} />
          </div>

          <div className="md:pt-2">
            <p className="text-brand-charcoal/80 leading-relaxed mb-4 text-[16px] md:text-[17px]">
              Bring the practice to your guests. I run{" "}
              <strong className="font-medium text-brand-charcoal">
                group yoga for hotels, wellness events, retreats, and private gatherings
              </strong>{" "}
              across Phuket — from a sunrise session on the sand to a soft opening in your studio.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-4 text-[16px] md:text-[17px]">
              Every session is shaped around your space, your schedule, and the mood you want your
              guests to leave with — grounded, unhurried, and cared for. All levels welcome, mats and
              props included.
            </p>
            <p className="text-brand-charcoal/80 leading-relaxed mb-8 text-[16px] md:text-[17px]">
              Tell me about your event and I&apos;ll put together a plan for it.
            </p>
            <a
              href={inquiryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
