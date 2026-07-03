"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

const INTERESTS = [
  "Private yoga & sound healing",
  "Bridal wellness gathering",
  "Couples retreat / honeymoon",
  "Luxury villa stay",
  "Birthday gathering",
  "Wellness photography & content",
  "Girls' trip",
];

const LOCATIONS = ["Villa", "Resort / Hotel", "Beach", "Private Home", "Not sure yet"];

const fieldClass =
  "w-full rounded-xl bg-brand-cream/5 border border-brand-cream/20 px-4 py-3 text-brand-cream placeholder-brand-cream/40 focus:border-brand-cream/60 focus:outline-none transition-colors";

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
      `Hi Soulena! I'd love to inquire about the Soul & Sound Sanctuary. 🐚\n\n` +
      `• Interested in: ${interest || "—"}\n` +
      `• Number of participants: ${participants || "—"}\n` +
      `• Preferred location: ${location || "—"}\n` +
      `• Professional photography: ${photography}\n` +
      `• My vision: ${vision || "—"}\n` +
      `• Contact: ${contact || "—"}`;
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-7 text-left">
      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">What are you interested in?</label>
        <div className="flex flex-wrap gap-2">
          {INTERESTS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setInterest(item)}
              className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                interest === item
                  ? "border-brand-cream bg-brand-cream text-brand-charcoal"
                  : "border-brand-cream/25 text-brand-cream/70 hover:border-brand-cream/60"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">Number of participants</label>
        <input
          type="text"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          placeholder="e.g. 2–6"
          className={fieldClass}
        />
      </div>

      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">Preferred location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={fieldClass}
        >
          <option value="" className="text-brand-charcoal">Select…</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc} className="text-brand-charcoal">
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">
          Tell me more about your vision, and let&apos;s create a meaningful wellness experience together
        </label>
        <textarea
          value={vision}
          onChange={(e) => setVision(e.target.value)}
          rows={4}
          placeholder="Ideas, moods, or special details — birthdays, honeymoon moments, floral decor, sunrise/sunset setup, and other special touches."
          className={fieldClass}
        />
      </div>

      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">
          Optional add-on: Professional photography
        </label>
        <div className="flex gap-6">
          {["Yes, I'm interested", "Not at the moment"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 text-sm text-brand-cream/70 cursor-pointer">
              <input
                type="radio"
                name="photography"
                checked={photography === opt}
                onChange={() => setPhotography(opt)}
                className="accent-brand-cream"
              />
              {opt}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm text-brand-cream/80 mb-2">Contact info</label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="WhatsApp / Telegram"
          className={fieldClass}
        />
      </div>

      <div className="text-center pt-2">
        <button
          type="submit"
          className="inline-block rounded-full bg-brand-cream px-12 py-4 text-sm uppercase tracking-wider text-brand-charcoal hover:bg-white transition-colors"
        >
          Make an Inquiry
        </button>
        <p className="text-brand-cream/40 text-xs mt-4">
          We&apos;ll personally review your inquiry and get back to you within 24–48 hours.
        </p>
      </div>
    </form>
  );
}
