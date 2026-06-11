import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the basics — no credit card needed.",
    features: [
      "Daily mood check-ins",
      "Basic habit tracking (3 habits)",
      "Weekly wellness summary",
      "Limited AI tips (5/week)",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/month",
    description: "Full access to all wellness tools and unlimited AI insights.",
    features: [
      "Unlimited mood tracking",
      "Unlimited habit streaks",
      "Burnout risk detection",
      "Unlimited AI wellness tips",
      "Detailed analytics & trends",
      "Priority support",
    ],
    cta: "Start Pro",
    href: "/signup",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-text mb-4">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-xl text-text-light text-lg">
            Start free and upgrade when you&apos;re ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-primary text-white ring-2 ring-primary shadow-xl shadow-primary/20"
                  : "bg-background-white border border-border"
              }`}
            >
              <div className="mb-6">
                <h3
                  className={`font-heading font-semibold text-lg mb-1 ${
                    plan.highlighted ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-heading font-extrabold text-4xl ${
                      plan.highlighted ? "text-white" : "text-text"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    plan.highlighted ? "text-white/80" : "text-text-light"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white" : "text-text-light"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full rounded-xl py-3 text-center font-heading font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
