import { SECTION_IDS, SITE } from "@/lib/constants";

const PAYMENT_METHODS = [
  {
    icon: "📱",
    title: "Thai QR Code (PromptPay)",
    description: "Scan the QR code with any Thai banking app for instant payment.",
  },
  {
    icon: "💵",
    title: "Cash",
    description: "Pay cash on arrival at the class location.",
  },
  {
    icon: "🏦",
    title: "Bank Transfer",
    description: "Direct transfer to Soulena's Thai bank account.",
  },
];

const PAYMENT_STEPS = [
  {
    title: "Book your class",
    description: "Reserve your spot through the booking calendar above.",
  },
  {
    title: "Choose how to pay",
    description: "Pick Thai QR, cash on arrival, or bank transfer.",
  },
  {
    title: "Confirm via WhatsApp",
    description: "Send your payment screenshot and your place is secured.",
  },
];

export default function PaymentSection() {
  return (
    <section id={SECTION_IDS.payment} className="py-20 px-4 bg-brand-cream">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal uppercase tracking-wider text-center mb-12">
          Payment
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {PAYMENT_METHODS.map((method) => (
            <div key={method.title} className="bg-white/60 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{method.icon}</div>
              <h3 className="font-serif text-base text-brand-charcoal mb-2">{method.title}</h3>
              <p className="text-sm text-brand-charcoal/60">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-olive/5 rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
          <h3 className="font-serif text-lg text-brand-olive uppercase tracking-wider text-center mb-8">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {PAYMENT_STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-brand-olive text-white font-serif text-lg mb-4">
                  {i + 1}
                </div>
                <h4 className="font-serif text-base text-brand-charcoal mb-1.5">
                  {step.title}
                </h4>
                <p className="text-sm text-brand-charcoal/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-brand-charcoal/60 mt-8">
            Paying by QR code? Just send your screenshot via{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-olive underline underline-offset-2 hover:text-brand-olive-dark transition-colors"
            >
              WhatsApp
            </a>{" "}
            and you&apos;re all set.
          </p>
        </div>
      </div>
    </section>
  );
}
