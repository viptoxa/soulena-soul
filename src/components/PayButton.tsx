"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SITE } from "@/lib/constants";
import { BANK, QR_IMAGE } from "@/lib/payment";

/**
 * A price line with a "Pay now" pill. Soulena asked for the pill to offer every
 * way she takes money rather than jumping straight to Stripe (2026-09-07):
 * "could a pop-up appear when they click it, so customers can choose how they
 * want to pay; PromptPay QR, bank transfer, or cash?"
 *
 * Uses a native <dialog> so Escape, the backdrop and focus handling come from
 * the platform instead of being re-implemented.
 */
/*
 * There is a PayButton per price — two on /classes, ten on /pricing — and each
 * one writes the same document.body.style.overflow. If two are ever open at
 * once, whichever closes first would unlock the page while the other is still
 * covering it. Counting the open ones means the lock lifts only when the last
 * dialog closes.
 */
let openDialogs = 0;

export default function PayButton({
  cardUrl,
  cardOptions,
  label,
  variant = "inline",
}: {
  cardUrl?: string;
  /** Several prices behind one button, e.g. the 1 / 2 / 3-person private rates. */
  cardOptions?: { label: string; url: string }[];
  /** What is being paid for — shown beside the pill inline, and in the dialog. */
  label: string;
  /** "inline" sits after a price line (/classes); "block" is a card CTA (/pricing). */
  variant?: "inline" | "block";
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const titleId = useId();
  const cards = cardOptions ?? (cardUrl ? [{ label: "Pay by card", url: cardUrl }] : []);

  const close = useCallback(() => setOpen(false), []);

  /*
   * React state drives the dialog, not the element's own "close" event: that
   * event turned out not to fire on close() in every engine, which left
   * document.body locked at overflow:hidden and froze the page behind the
   * popup. Escape is handled here for the same reason.
   */
  useEffect(() => {
    const el = ref.current;
    if (!el || !open) return;
    if (!el.open) el.showModal();
    openDialogs += 1;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      openDialogs = Math.max(0, openDialogs - 1);
      if (openDialogs === 0) document.body.style.overflow = "";
      if (el.open) el.close();
      setCopied(null);
    };
  }, [open]);

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    } catch {
      /* clipboard blocked — the number is on screen to copy by hand */
    }
  };

  return (
    <>
      {variant === "block" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 inline-block rounded-full bg-brand-olive px-7 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
        >
          Select
        </button>
      ) : (
        <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>{label}</span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="whitespace-nowrap rounded-full bg-brand-olive px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
          >
            Select
          </button>
        </span>
      )}

      <dialog
        ref={ref}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // Clicking the backdrop lands on the dialog element itself.
          if (e.target === ref.current) close();
        }}
        className="w-[min(560px,92vw)] rounded-3xl border border-brand-olive/15 bg-brand-cream p-0 text-brand-charcoal shadow-2xl backdrop:bg-black/45 backdrop:backdrop-blur-[2px]"
      >
        {/* Centred throughout — her note on the popup was simply "please
            center-align everything" (2026-09-09). The close button leaves the
            flow so the heading can sit on the true centre. */}
        <div className="relative max-h-[85vh] overflow-y-auto p-6 text-center md:p-8">
          <div>
            <div>
              <h2 id={titleId} className="font-serif text-[22px] uppercase tracking-wide md:text-[26px]">
                How would you like to pay?
              </h2>
              <p className="mt-1 text-[14px] text-brand-charcoal/70">{label}</p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-brand-charcoal/60 transition-colors hover:bg-brand-olive/10 hover:text-brand-charcoal md:right-5 md:top-5"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <ul className="mt-6 space-y-4">
            {cards.length > 0 ? (
              <li className="rounded-2xl border border-brand-olive/15 bg-white/70 p-5">
                <h3 className="font-serif text-[18px] uppercase tracking-wide">Card</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-brand-charcoal/75">
                  Secure online payment through Stripe. You are charged in your own currency.
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {cards.map((card) => (
                    <a
                      key={card.url}
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-brand-olive px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
                    >
                      {card.label}
                    </a>
                  ))}
                </div>
              </li>
            ) : null}

            <li className="rounded-2xl border border-brand-olive/15 bg-white/70 p-5">
              <h3 className="font-serif text-[18px] uppercase tracking-wide">PromptPay QR</h3>
              <div className="mt-3 flex flex-col items-center gap-4">
                <div className="relative aspect-square w-[150px] shrink-0 overflow-hidden rounded-xl shadow-sm">
                  <Image src={QR_IMAGE} alt="Soulena Soul PromptPay QR code" fill sizes="150px" className="object-cover" />
                </div>
                <div className="text-[15px] leading-relaxed text-brand-charcoal/75">
                  <p>Scan with any Thai banking app, then send me the slip so I can confirm your spot.</p>
                  <button
                    type="button"
                    onClick={() => copy(BANK.promptPay, "promptpay")}
                    className="mt-2 font-medium tracking-wide text-brand-charcoal underline underline-offset-4 hover:text-brand-olive"
                  >
                    {BANK.promptPay}
                    <span className="ml-2 text-[12px] uppercase tracking-wider text-brand-olive">
                      {copied === "promptpay" ? "copied" : "copy"}
                    </span>
                  </button>
                </div>
              </div>
            </li>

            <li className="rounded-2xl border border-brand-olive/15 bg-white/70 p-5">
              <h3 className="font-serif text-[18px] uppercase tracking-wide">Bank transfer</h3>
              <dl className="mt-2 space-y-1.5 text-[15px]">
                <div>
                  <dt className="text-brand-charcoal/50">{BANK.name}</dt>
                  <dd>
                    <button
                      type="button"
                      onClick={() => copy(BANK.account, "account")}
                      className="font-medium tracking-wide text-brand-charcoal underline underline-offset-4 hover:text-brand-olive"
                    >
                      {BANK.account}
                      <span className="ml-2 text-[12px] uppercase tracking-wider text-brand-olive">
                        {copied === "account" ? "copied" : "copy"}
                      </span>
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="text-brand-charcoal/50">Account name</dt>
                  <dd>{BANK.holder}</dd>
                </div>
              </dl>
            </li>

            <li className="rounded-2xl border border-brand-olive/15 bg-white/70 p-5">
              <h3 className="font-serif text-[18px] uppercase tracking-wide">Cash</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-brand-charcoal/75">
                Prefer to keep it simple? You are welcome to pay in cash when you arrive.
              </p>
            </li>
          </ul>

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-full border-2 border-brand-olive px-6 py-3 text-center text-[11px] font-bold uppercase tracking-wider text-brand-olive transition-colors hover:bg-brand-olive hover:text-white"
          >
            Send the slip on WhatsApp
          </a>
        </div>
      </dialog>
    </>
  );
}
