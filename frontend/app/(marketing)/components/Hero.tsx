import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative switchboard dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-primary/20" />
        <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-secondary/30" />
        <div className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-accent/20" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/15" />
        <div className="absolute bottom-32 right-10 w-3 h-3 rounded-full bg-secondary/20" />
        {/* Connecting lines (switchboard motif) */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.07]" aria-hidden="true">
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="#5B8C8A" strokeWidth="1" />
          <line x1="60%" y1="15%" x2="85%" y2="50%" stroke="#E8985E" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="70%" y2="30%" stroke="#A7C4A0" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-primary">AI-Powered Wellness</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-text mb-6">
          Your AI wellness companion
          <br />
          <span className="text-primary">for remote work</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg md:text-xl text-text-light leading-relaxed mb-10">
          Amay helps remote workers build healthier habits, track their mood, and
          prevent burnout — all powered by AI that understands your work patterns
          and wellbeing needs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-xl bg-primary px-8 py-3.5 text-white font-heading font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            className="rounded-xl border-2 border-border px-8 py-3.5 text-text font-heading font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
