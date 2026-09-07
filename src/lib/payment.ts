/**
 * Soulena's payment details, sent 2026-08-13. Kept here rather than inside
 * /payment because the "Pay now" popup on the class and package prices offers
 * the same four options and must not drift from that page.
 */
export const BANK = {
  name: "Kasikornbank (KBANK)",
  account: "043-186-9241",
  holder: "Miss Jitpisut Ponsumritchok",
  promptPay: "085-035-0848",
} as const;

/** Her Thai PromptPay QR, the same image /payment shows. */
export const QR_IMAGE = "/images/payment-thai-qr-v2.jpg";
