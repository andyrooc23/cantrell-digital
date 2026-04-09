export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/70 sm:text-sm">
          Built with modern tools for speed, responsiveness, and maintainability
        </p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Grow Your Business Online?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          Let&apos;s create a site that feels refined, works hard, and gives your business room to grow.
        </p>
        <a
          href="#contact"
          className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}
