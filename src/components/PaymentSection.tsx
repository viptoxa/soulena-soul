import Image from "next/image";
import type { ReactNode } from "react";
import { FlowerIcon } from "@/components/icons/SocialIcons";
import { SECTION_IDS, SITE } from "@/lib/constants";

// Canva page 10 palette: slate heading, gold flower mark on cream.
// Buttons stay on the site's brand-olive style used everywhere else.
const SLATE = "#3f4c54";
const GOLD = "#c7b96e";

// Stripe is applied for but not live yet — the client has not supplied a
// payment link. Keep this null until a real URL arrives; the card then
// renders a "coming soon" note instead of a button.
const STRIPE_PAYMENT_LINK: string | null = null;

function MethodCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-white/70 border border-brand-olive/15 shadow-sm p-6 md:p-7">
      <span
        className="font-serif text-[15px] tracking-[0.25em] uppercase opacity-60"
        style={{ color: SLATE }}
      >
        {step}
      </span>
      <h3
        className="font-serif text-[22px] md:text-[25px] uppercase tracking-wide mt-2 mb-3"
        style={{ color: SLATE }}
      >
        {title}
      </h3>
      <div className="text-[16px] leading-relaxed text-brand-charcoal/75 space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function PaymentSection() {
  return (
    <section id={SECTION_IDS.payment} className="bg-brand-cream px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        {/* ───────── Heading ───────── */}
        <h1
          className="font-serif text-[32px] md:text-5xl uppercase tracking-wide text-center"
          style={{ color: SLATE }}
        >
          Payment
        </h1>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-[16px] md:text-[17px] leading-relaxed text-brand-charcoal/75">
          Once your booking is confirmed, choose the payment option that works best for you.
        </p>

        {/* ───────── Featured: Thai QR payment ───────── */}
        <div className="relative mt-10 md:mt-14 rounded-3xl bg-white/70 border border-brand-olive/15 shadow-sm p-6 md:p-10">
          <FlowerIcon
            className="hidden md:block absolute right-8 top-8 w-8 h-8"
            style={{ color: GOLD }}
          />

          <div className="grid md:grid-cols-[minmax(0,360px)_1fr] gap-8 md:gap-12 items-center">
            <div className="relative mx-auto w-full max-w-[360px] aspect-square overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/payment-thai-qr-v2.jpg"
                alt="Soulena Soul Thai PromptPay QR code — scan with your banking app to pay"
                fill
                sizes="(min-width: 768px) 360px, 90vw"
                className="object-cover"
              />
            </div>

            <div>
              <span
                className="font-serif text-[15px] tracking-[0.25em] uppercase opacity-60"
                style={{ color: SLATE }}
              >
                Option 01
              </span>
              <h2
                className="font-serif text-[26px] md:text-[32px] uppercase tracking-wide mt-2"
                style={{ color: SLATE }}
              >
                Thai QR Payment
              </h2>
              <div className="mt-4 space-y-3 text-[16px] md:text-[17px] leading-relaxed text-brand-charcoal/75">
                <p>
                  Scan the QR code with any Thai banking app to complete your payment.
                </p>
                <p>
                  Once it is done, please send the payment slip to me on WhatsApp so I can
                  confirm your place in the class.
                </p>
              </div>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full bg-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-olive-dark"
              >
                Send slip on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* ───────── Other options ───────── */}
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-8">
          <MethodCard step="Option 02" title="Credit Card Payment">
            <p>
              Secure online card payment via Stripe.
              {STRIPE_PAYMENT_LINK ? null : (
                <span className="text-brand-charcoal/45"> Coming soon.</span>
              )}
            </p>
            {STRIPE_PAYMENT_LINK ? (
              <a
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full border-2 border-brand-olive px-8 py-3 text-xs uppercase tracking-wider text-brand-olive transition-colors hover:bg-brand-olive hover:text-white"
              >
                Pay by card
              </a>
            ) : null}
          </MethodCard>

          <MethodCard step="Option 03" title="Cash on Arrival">
            <p>
              Prefer to keep it simple? You are welcome to pay in cash when you arrive at
              the class.
            </p>
          </MethodCard>

          <MethodCard step="Option 04" title="Bank Transfer">
            <p>
              Thai bank transfer — account details are shared with your booking
              confirmation.
            </p>
          </MethodCard>
        </div>

        <p className="mt-8 text-center text-[15px] leading-relaxed text-brand-charcoal/60">
          Any questions about payment? Write to me at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-brand-olive underline underline-offset-2 hover:text-brand-olive-dark transition-colors"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
