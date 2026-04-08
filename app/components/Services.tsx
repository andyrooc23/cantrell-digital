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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}