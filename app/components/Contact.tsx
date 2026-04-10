export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s Talk About Your Website
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          If you have a new project, an outdated site, or a business that needs a stronger online presence, send a quick note. We&apos;ll talk through the goals, scope, and the best next step.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:andrew@cantrelldigital.dev"
            className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Email Cantrell Digital
          </a>
          <button
            className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-gray-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            onClick={() => alert("Booking feature coming soon!")}
          >
            Schedule a Call
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Most inquiries start with a simple email: andrew@cantrelldigital.dev
        </p>
      </div>
    </section>
  );
}
