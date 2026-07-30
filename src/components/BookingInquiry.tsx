"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { FlowerIcon } from "@/components/icons/SocialIcons";

type ClassType = "Beach Yoga & Movement Class" | "Private Session";

const CLASS_TYPES: ClassType[] = [
  "Beach Yoga & Movement Class",
  "Private Session",
];

const BEFORE_OPTIONS = [
  "Yes, I have",
  "No, this will be my first class",
];

const PRIVATE_GROUP_SIZES = ["1 person", "2 people", "3 people"];

// Canva booking page palette: slate headings, gold flower mark. Buttons keep
// the site's brand-olive pill style used everywhere else.
const SLATE = "#3f4c54";
const GOLD = "#8b8459";
const CARD_BG = "#f4f3ec";

const inputClass =
  "w-full rounded-lg border border-brand-olive/25 bg-white px-4 py-3 text-[15px] text-brand-charcoal focus:outline-none focus:border-brand-olive";
const labelClass = "block text-[15px] font-medium mb-2";

/** Tall selectable block, matching the option boxes in the Canva form. */
function OptionBox({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-xl px-5 py-5 text-left text-[15px] md:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f3ec] ${
        selected
          ? "bg-brand-olive text-white"
          : "bg-brand-cream-dark/70 text-brand-charcoal hover:bg-brand-cream-dark"
      }`}
    >
      {label}
    </button>
  );
}

export default function BookingInquiry() {
  const [selected, setSelected] = useState<ClassType | "">("");

  // Shared fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  // Beach Yoga fields
  const [people, setPeople] = useState("");
  const [joinedBefore, setJoinedBefore] = useState(BEFORE_OPTIONS[0]);

  // Private Session fields
  const [groupSize, setGroupSize] = useState(PRIVATE_GROUP_SIZES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;

    let msg = `Hi Soulena! I'd like to book a session. 🌿\n\n` + `• Interested in: ${selected}\n`;

    if (selected === "Beach Yoga & Movement Class") {
      msg +=
        `• How many people will join: ${people || "—"}\n` +
        `• Joined a class before: ${joinedBefore}\n`;
    } else {
      msg += `• Group size: ${groupSize}\n`;
    }

    msg +=
      `• Name: ${name || "—"}\n` +
      `• Email: ${email || "—"}\n` +
      `• WhatsApp: ${whatsapp || "—"}`;

    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="bg-brand-cream px-4 pb-14 md:pb-24 pt-4 md:pt-8">
      <div className="mx-auto max-w-[1200px] grid gap-10 md:gap-14 md:grid-cols-[6fr_5fr]">
        {/* ───────── Left column — heading + invitation ───────── */}
        <div className="md:sticky md:top-24 md:self-start">
          <h2
            className="font-serif text-[34px] md:text-6xl uppercase tracking-wide leading-[1.45]"
            style={{ color: SLATE }}
          >
            Begin Your
            <br />
            Journey Here
          </h2>

          <div className="mt-8 md:mt-20">
            <p className="text-[16px] md:text-[18px]" style={{ color: SLATE }}>
              Interested in practicing together?
            </p>
            <p className="text-[16px] md:text-[18px] font-semibold" style={{ color: SLATE }}>
              Fill out the form, I&apos;d love to hear from you!
            </p>
            <FlowerIcon className="mt-5 w-7 h-7" style={{ color: GOLD }} />
          </div>
        </div>

        {/* ───────── Right column — booking form card ───────── */}
        <div
          className="rounded-2xl border border-brand-cream-dark/60 p-6 md:p-8"
          style={{ backgroundColor: CARD_BG }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold" style={{ color: SLATE }}>
            Booking Form
          </h3>

          <form onSubmit={handleSubmit} className="mt-7 md:mt-8 text-left">
            {/* Step 1 — choose class type */}
            <fieldset>
              <legend className="text-[16px] md:text-[17px] font-semibold mb-3" style={{ color: SLATE }}>
                What are you interested in?
              </legend>
              <div className="space-y-3">
                {CLASS_TYPES.map((type) => (
                  <OptionBox
                    key={type}
                    label={type}
                    selected={selected === type}
                    onSelect={() => setSelected(type)}
                  />
                ))}
              </div>
            </fieldset>

            {/* Step 2 — Beach Yoga & Movement Class */}
            {selected === "Beach Yoga & Movement Class" && (
              <div className="mt-8 border-t border-brand-cream-dark pt-7">
                <h4 className="text-xl md:text-2xl font-semibold mb-5" style={{ color: SLATE }}>
                  Beach Yoga &amp; Movement Class
                </h4>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="by-name" className={labelClass} style={{ color: SLATE }}>
                      Your name
                    </label>
                    <input
                      id="by-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="by-email" className={labelClass} style={{ color: SLATE }}>
                      Your email
                    </label>
                    <input
                      id="by-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="by-whatsapp" className={labelClass} style={{ color: SLATE }}>
                      WhatsApp number
                    </label>
                    <input
                      id="by-whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="by-people" className={labelClass} style={{ color: SLATE }}>
                      How many people will join?
                    </label>
                    <input
                      id="by-people"
                      type="number"
                      min={1}
                      value={people}
                      onChange={(e) => setPeople(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <fieldset>
                    <legend className={labelClass} style={{ color: SLATE }}>
                      Have you joined a class with Soulena before?
                    </legend>
                    <div className="space-y-3">
                      {BEFORE_OPTIONS.map((opt) => (
                        <label
                          key={opt}
                          className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-5 py-4 text-[15px] transition-colors focus-within:ring-2 focus-within:ring-brand-olive focus-within:ring-offset-2 focus-within:ring-offset-[#f4f3ec] ${
                            joinedBefore === opt
                              ? "bg-brand-olive text-white"
                              : "bg-brand-cream-dark/70 text-brand-charcoal hover:bg-brand-cream-dark"
                          }`}
                        >
                          <input
                            type="radio"
                            name="joinedBefore"
                            checked={joinedBefore === opt}
                            onChange={() => setJoinedBefore(opt)}
                            className="sr-only"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            )}

            {/* Step 2 — Private Session */}
            {selected === "Private Session" && (
              <div className="mt-8 border-t border-brand-cream-dark pt-7">
                <h4 className="text-xl md:text-2xl font-semibold mb-5" style={{ color: SLATE }}>
                  Private Session
                </h4>

                <div className="space-y-5">
                  <fieldset>
                    <legend className={labelClass} style={{ color: SLATE }}>
                      How many people will join? (maximum 3 people)
                    </legend>
                    <div className="space-y-3">
                      {PRIVATE_GROUP_SIZES.map((size) => (
                        <label
                          key={size}
                          className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-5 py-4 text-[15px] transition-colors focus-within:ring-2 focus-within:ring-brand-olive focus-within:ring-offset-2 focus-within:ring-offset-[#f4f3ec] ${
                            groupSize === size
                              ? "bg-brand-olive text-white"
                              : "bg-brand-cream-dark/70 text-brand-charcoal hover:bg-brand-cream-dark"
                          }`}
                        >
                          <input
                            type="radio"
                            name="groupSize"
                            checked={groupSize === size}
                            onChange={() => setGroupSize(size)}
                            className="sr-only"
                          />
                          {size}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="pv-name" className={labelClass} style={{ color: SLATE }}>
                      Your name
                    </label>
                    <input
                      id="pv-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="pv-email" className={labelClass} style={{ color: SLATE }}>
                      Your email
                    </label>
                    <input
                      id="pv-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="pv-whatsapp" className={labelClass} style={{ color: SLATE }}>
                      WhatsApp number
                    </label>
                    <input
                      id="pv-whatsapp"
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Submit */}
            {selected && (
              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
              >
                Book Your Session
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
