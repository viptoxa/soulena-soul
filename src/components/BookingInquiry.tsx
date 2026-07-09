"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

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

const inputClass =
  "w-full border border-brand-olive/25 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-brand-olive";
const labelClass = "block text-sm text-brand-charcoal/70 mb-1.5";

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
    <section className="bg-brand-cream py-14 md:py-20 px-4">
      <div className="mx-auto max-w-[640px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center">
          Booking Form
        </h2>
        <p className="text-center text-brand-charcoal/60 mt-3 mb-10">
          What are you interested in?
        </p>

        <form onSubmit={handleSubmit} className="space-y-7 text-left">
          {/* Step 1 — choose class type */}
          <div className="flex flex-col sm:flex-row gap-3">
            {CLASS_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelected(type)}
                className={`flex-1 rounded-full px-5 py-3 text-sm transition-colors ${
                  selected === type
                    ? "bg-brand-olive text-white"
                    : "border border-brand-olive/40 text-brand-charcoal hover:border-brand-olive"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Step 2 — Beach Yoga & Movement Class */}
          {selected === "Beach Yoga & Movement Class" && (
            <div className="space-y-5">
              <div>
                <label htmlFor="by-name" className={labelClass}>
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
                <label htmlFor="by-email" className={labelClass}>
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
                <label htmlFor="by-whatsapp" className={labelClass}>
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
                <label htmlFor="by-people" className={labelClass}>
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

              <div>
                <span className={labelClass}>
                  Have you joined a class with Soulena before?
                </span>
                <div className="flex flex-col gap-2 mt-1">
                  {BEFORE_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm text-brand-charcoal/75 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="joinedBefore"
                        checked={joinedBefore === opt}
                        onChange={() => setJoinedBefore(opt)}
                        className="accent-brand-olive"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2 — Private Session */}
          {selected === "Private Session" && (
            <div className="space-y-5">
              <div>
                <span className={labelClass}>
                  How many people will join? (maximum 3 people)
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {PRIVATE_GROUP_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setGroupSize(size)}
                      className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                        groupSize === size
                          ? "bg-brand-olive text-white"
                          : "border border-brand-olive/40 text-brand-charcoal hover:border-brand-olive"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="pv-name" className={labelClass}>
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
                <label htmlFor="pv-email" className={labelClass}>
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
                <label htmlFor="pv-whatsapp" className={labelClass}>
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
          )}

          {/* Submit */}
          {selected && (
            <button
              type="submit"
              className="w-full rounded-full bg-brand-olive text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-brand-olive-dark transition-colors"
            >
              Book Your Session
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
