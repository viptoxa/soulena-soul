"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function PaymentSection() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section className="py-14 md:py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="font-serif text-[27px] md:text-4xl uppercase tracking-wider text-brand-charcoal text-center">
          Payment
        </h2>
        <p className="text-brand-charcoal/60 text-center mt-3">
          Choose the payment method that works best for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
          {/* Credit / Debit Card */}
          <div className="rounded-2xl bg-white border border-brand-olive/15 shadow-sm p-6">
            <h3 className="font-serif text-xl text-brand-charcoal">Credit / Debit Card</h3>
            <p className="text-sm text-brand-charcoal/70 mt-2">
              Secure online card payment via Stripe.{" "}
              <span className="text-brand-charcoal/40">(Coming soon)</span>
            </p>
          </div>

          {/* Bank Transfer */}
          <div className="rounded-2xl bg-white border border-brand-olive/15 shadow-sm p-6">
            <h3 className="font-serif text-xl text-brand-charcoal">Bank Transfer</h3>
            <p className="text-sm text-brand-charcoal/70 mt-2">
              Thai bank transfer — account details shared on booking confirmation.
            </p>
          </div>

          {/* Thai QR Payment */}
          <div className="rounded-2xl bg-white border border-brand-olive/15 shadow-sm p-6">
            <h3 className="font-serif text-xl text-brand-charcoal">Thai QR Payment</h3>
            <p className="text-sm text-brand-charcoal/70 mt-2">Scan the Thai QR to pay.</p>
            <button
              type="button"
              onClick={() => setShowQR((prev) => !prev)}
              className="mt-4 rounded-full border border-brand-olive text-brand-olive px-5 py-2 text-xs uppercase tracking-wider hover:bg-brand-olive hover:text-white transition-colors"
              aria-expanded={showQR}
            >
              {showQR ? "Hide QR code" : "Show QR code"}
            </button>
            {showQR && (
              <div>
                <Image
                  src="/images/thai-qr.png"
                  alt="Thai QR payment code"
                  width={260}
                  height={260}
                  className="mx-auto mt-4 rounded-lg"
                />
                <p className="text-sm text-brand-charcoal/70 mt-4">
                  After paying, please send the payment slip to me on{" "}
                  <a
                    href={SITE.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-olive underline underline-offset-2 hover:text-brand-olive-dark transition-colors"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          {/* Cash on Arrival */}
          <div className="rounded-2xl bg-white border border-brand-olive/15 shadow-sm p-6">
            <h3 className="font-serif text-xl text-brand-charcoal">Cash on Arrival</h3>
            <p className="text-sm text-brand-charcoal/70 mt-2">
              Simply pay in cash at the class.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
