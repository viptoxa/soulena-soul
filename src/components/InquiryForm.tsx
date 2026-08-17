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

function Chip({
  label,
  selected,
  onClick,
  className = "",
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full px-4 py-2 font-serif italic text-sm transition-colors ${
        selected
          ? "bg-brand-olive text-white"
          : "bg-transparent text-brand-charcoal/70 hover:text-brand-charcoal"
      } ${className}`}
    >
      • {label}
    </button>
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
      <fieldset>
        <legend className="mb-3 text-[15px] md:text-base font-semibold text-white">
          What are you interested in?
        </legend>
        {/* These labels are long enough to wrap inside their own chip on a
            phone, which left the row ragged and centre-aligned. One per line
            below sm reads as an option list; the Canva chip row returns at sm. */}
        <div className="flex flex-col gap-y-1 rounded-[28px] bg-[#f0ece3] px-4 py-3 sm:flex-row sm:flex-wrap sm:gap-x-1">
          {INTERESTS.map((item) => (
            <Chip
              key={item}
              label={item}
              selected={interest === item}
              onClick={() => setInterest(interest === item ? "" : item)}
              className="w-full text-left sm:w-auto sm:text-center"
            />
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="participants">Number of participants</Label>
        <input
          id="participants"
          type="text"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          className={FIELD}
        />
      </div>

      <fieldset>
        <legend className="mb-3 text-[15px] md:text-base font-semibold text-white">
          Preferred location
        </legend>
        <div className="flex flex-wrap gap-x-1 gap-y-1 rounded-[28px] bg-[#f0ece3] px-4 py-3">
          {LOCATIONS.map((loc) => (
            <Chip
              key={loc}
              label={loc}
              selected={location === loc}
              onClick={() => setLocation(location === loc ? "" : loc)}
            />
          ))}
        </div>
      </fieldset>

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
