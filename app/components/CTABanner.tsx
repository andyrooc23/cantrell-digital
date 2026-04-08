export default function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Grow Your&apos; Business Online?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Let&apos;s build a website that actually brings in customers and drives results.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
          Get Started Today
        </button>
      </div>
    </section>
  );
}