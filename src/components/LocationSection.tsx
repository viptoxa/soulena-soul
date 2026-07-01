import { SECTION_IDS } from "@/lib/constants";
import LocationMap from "./LocationMap";

export default function LocationSection() {
  return (
    <section id={SECTION_IDS.location} className="py-20 px-4 bg-brand-olive/10">
      <div className="mx-auto max-w-[1200px]">
        <LocationMap />
      </div>
    </section>
  );
}
