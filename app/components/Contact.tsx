export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Let&apos;s Work Together
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          Ready to discuss your project? I&apos;d love to hear about your business and how we can help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:andrew@cantrelldigital.dev"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Email Me
          </a>
          <button
            className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
            onClick={() => alert("Booking feature coming soon!")}
          >
            Book a Call
          </button>
        </div>

        <p className="text-gray-400 mt-8">
          andrew@cantrelldigital.dev
        </p>
      </div>
    </section>
  );
}