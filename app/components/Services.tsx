const services = [
  {
    title: "Custom Website Design",
    description: "Tailored websites built from the ground up to match your brand and business goals."
  },
  {
    title: "Website Refresh & Optimization",
    description: "Modernize existing sites with improved design, speed, and user experience."
  },
  {
    title: "Landing Pages That Convert",
    description: "High-converting landing pages designed to turn visitors into customers."
  },
  {
    title: "Ongoing Website Maintenance",
    description: "Regular updates, security monitoring, and performance optimization."
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-gray-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Services
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          We shape each engagement around your goals, whether you need a focused launch, a strategic refresh, or long-term website support.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700">
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
