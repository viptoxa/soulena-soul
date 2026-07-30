import { SECTION_IDS } from "@/lib/constants";
import LocationMap, { type MapTone } from "./LocationMap";

/**
 * Canva puts this block on an olive band at the end of the Classes page, and
 * plain on the cream Contact page — hence the tone.
 */
export default function LocationSection({ tone = "cream" }: { tone?: MapTone }) {
  return (
    <section
      id={SECTION_IDS.location}
      className={`px-4 pt-12 pb-16 md:pt-16 md:pb-24 ${
        tone === "olive" ? "bg-[#7d7550]" : "bg-brand-cream"
      }`}
    >
      <div className="mx-auto max-w-[1200px]">
        <LocationMap tone={tone} />
      </div>
    </section>
  );
}
