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

        <div className="bg-brand-olive/5 rounded-xl p-6 max-w-2xl mx-auto text-center">
          <p className="text-sm text-brand-charcoal/70 leading-relaxed">
            After booking confirmation → choose payment option → if pay by QR code →
            send screenshot via{" "}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-olive underline"
            >
              WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
