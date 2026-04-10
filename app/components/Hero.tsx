import Link from 'next/link';

export default function Hero() {
  return (
    <section className="scroll-mt-24 bg-gradient-to-br from-black via-gray-900 to-black px-4 pt-24 pb-18 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
      <div className="max-w-7xl mx-auto text-center relative">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Websites That Help
          <span className="block bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Businesses Get Chosen
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl lg:text-2xl">
          Cantrell Digital builds fast, modern websites for small businesses and brands that need more than a polished look. Every page is designed to build trust, guide action, and turn attention into inquiries.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/start-project"
            className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Start Your Project
          </Link>
          <a
            href="#services"
            className="inline-flex min-w-[220px] items-center justify-center rounded-xl border border-gray-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            See What We Build
          </a>
        </div>

        <p className="text-sm tracking-[0.16em] uppercase text-gray-400">
          Clear messaging. Fast load times. Built to convert.
        </p>

        {/* Subtle visual elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
