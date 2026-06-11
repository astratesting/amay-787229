import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-background-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-12 md:p-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Start taking care of yourself today
          </h2>
          <p className="mx-auto max-w-lg text-white/80 text-lg mb-8">
            Join Amay and build healthier work-from-home habits. It&apos;s free to start
            — no credit card required.
          </p>
          <Link
            href="/signup"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-primary font-heading font-semibold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </section>
  );
}
