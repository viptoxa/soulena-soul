"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

const INTERESTS = [
  "Private yoga and sound healing",
  "Bridal wellness gatherings",
  "Couples retreats and honeymoon experiences",
  "Luxury villa stays",
  "Birthday gatherings",
  "Wellness photography and content creation",
  "Girls' trip",
];

const LOCATIONS = ["Villa", "Resort/Hotel", "Beach", "Private Home", "Not sure yet"];

// Canva shows the inputs as soft cream cards on the black canvas.
const FIELD =
  "w-full rounded-2xl bg-[#f0ece3] px-5 py-4 font-serif italic text-[15px] md:text-base text-brand-charcoal placeholder-brand-charcoal/45 focus:outline-none focus:ring-2 focus:ring-[#c9a76a]";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-3 block text-[15px] md:text-base font-semibold text-white">
      {children}
    </label>
  );
}

/**
 * A free-text field with the old fixed options offered underneath as
 * suggestions. Soulena asked for exactly this (2026-09-07): "for these
 * sections, I'd prefer the items to be shown as suggestions rather than fixed
 * choices to select from" — tapping one fills the field, but anything can be
 * typed over it.
 */
function SuggestField({
  id,
  label,
  value,
  onChange,
  suggestions,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  suggestions: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={FIELD}
      />
      <ul className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((item) => {
          const chosen = value === item;
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => onChange(chosen ? "" : item)}
                aria-pressed={chosen}
                className={`rounded-full px-3.5 py-1.5 font-serif text-[13px] italic transition-colors md:text-sm ${
                  chosen
                    ? "bg-brand-olive text-white"
                    : "bg-[#f0ece3]/85 text-brand-charcoal/75 hover:bg-[#f0ece3] hover:text-brand-charcoal"
                }`}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function InquiryForm() {
  const [interest, setInterest] = useState("");
  const [participants, setParticipants] = useState("");
  const [location, setLocation] = useState("");
  const [vision, setVision] = useState("");
  const [photography, setPhotography] = useState("Yes, I'm interested");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi Soulena! I'd love to inquire about the Soul & Sound Sanctuary.\n\n` +
      `• Interested in: ${interest || "—"}\n` +
      `• Number of participants: ${participants || "—"}\n` +
      `• Preferred location: ${location || "—"}\n` +
      `• Professional photography: ${photography}\n` +
      `• My vision: ${vision || "—"}\n` +
      `• Contact: ${contact || "—"}`;
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left">
      <SuggestField
        id="interest"
        label="What are you interested in?"
        value={interest}
        onChange={setInterest}
        suggestions={INTERESTS}
        placeholder="Tell me what you have in mind"
      />

      <div>
        <Label htmlFor="participants">Number of participants</Label>
        {/* Digits only — she asked for the field to refuse letters entirely
            (2026-09-07). type="number" still lets "e", "+" and "-" through in
            some browsers, so the value is stripped on the way in as well. */}
        <input
          id="participants"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          value={participants}
          onChange={(e) => setParticipants(e.target.value.replace(/[^0-9]/g, ""))}
          className={FIELD}
        />
      </div>

      <SuggestField
        id="location"
        label="Preferred location"
        value={location}
        onChange={setLocation}
        suggestions={LOCATIONS}
        placeholder="Villa, resort, beach — or somewhere else"
      />

      <div>
        <Label htmlFor="vision">
          Tell me more about your vision, and let&apos;s create a meaningful wellness experience
          together
        </Label>
        <textarea
          id="vision"
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          rows={5}
          placeholder="You're welcome to share any ideas, moods, or special details you have in mind — such as birthdays, honeymoon moments, floral decor, curated styling, sunrise and sunset setup, and other special touch."
          className={FIELD}
        />
      </div>

      <fieldset>
        <legend className="mb-3 text-[15px] md:text-base font-semibold text-white">
          Optional add-ons: Professional photography
        </legend>
        <div className="space-y-3">
          {["Yes, I'm interested", "Not at the moment"].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-3 text-white">
              <input
                type="radio"
                name="photography"
                checked={photography === opt}
                onChange={() => setPhotography(opt)}
                className="h-4 w-4 accent-[#c9a76a]"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="contact">Contact info</Label>
        <input
          id="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Phone number / WhatsApp / Telegram"
          className={FIELD}
        />
      </div>

      <div className="pt-2 text-center">
        <button
          type="submit"
          className="inline-block rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
        >
          Make an Inquiry
        </button>
      </div>

      <p className="text-[15px] md:text-base font-semibold text-white">
        We&apos;ll personally review your inquiry and get back to you within 24-48 hours.
      </p>
    </form>
  );
}
