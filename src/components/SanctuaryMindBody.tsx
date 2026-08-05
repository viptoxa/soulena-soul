import Image from "next/image";
import SanctuaryCollage from "@/components/SanctuaryCollage";
import { SANCTUARY_CREAM, SANCTUARY_INK } from "@/components/SanctuaryTheme";

/**
 * Canva page 6, second block: the immersive photo collage on the left and
 * "The Mind–Body Connection" copy on the right, with the script accent line
 * and a gold loop sweeping in from the right edge.
 */
export default function SanctuaryMindBody() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: SANCTUARY_INK }}
    >
      {/* Gold loop line-art sweeping in from the right */}
      <Image
        src="/images/sss-line-curl.png"
        alt=""
        aria-hidden
        width={980}
        height={1031}
        className="pointer-events-none absolute -right-[6%] top-[42%] hidden w-[26%] max-w-[330px] -scale-x-100 select-none md:block"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 px-4 pb-16 pt-10 sm:px-8 md:grid-cols-[1.06fr_1fr] md:gap-10 md:pb-24 md:pt-14">
        <SanctuaryCollage />

        <div className="md:pt-1">
          <h2
            className="font-serif text-[clamp(2.2rem,5.7vw,4rem)] leading-[0.98]"
            style={{ color: SANCTUARY_CREAM }}
          >
            The <em className="italic">Mind</em>&#8211;Body
            <span className="mt-[0.06em] block whitespace-nowrap md:pl-12 lg:pl-24 xl:pl-32">
              Connection
            </span>
          </h2>

          <p
            className="mt-8 max-w-[366px] text-[15px] leading-[1.45] md:mt-12 md:text-[17px]"
            style={{ color: SANCTUARY_CREAM }}
          >
            When the mind and body are in harmony, people often feel more grounded, restored,
            and at ease.
          </p>

          <p
            className="mt-7 text-[26px] leading-tight md:mt-9 md:text-[34px]"
            style={{ fontFamily: "var(--font-script)", color: SANCTUARY_CREAM }}
          >
            Restore your inner balance
          </p>

          <p
            className="mt-7 max-w-[366px] text-[15px] leading-[1.45] md:mt-9 md:text-[17px]"
            style={{ color: SANCTUARY_CREAM }}
          >
            Blending yoga, meditation, and sound healing, each experience is designed to bring
            calm and connection to{" "}
            <strong className="font-semibold">
              weddings, birthdays, and meaningful celebrations.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
