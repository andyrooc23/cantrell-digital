const services = [
  {
    title: "Custom Business Websites",
    description: "For businesses that need a credible online presence, a clear offer, and a site built around how customers actually decide."
  },
  {
    title: "Website Refreshes",
    description: "For brands with an outdated site, unclear messaging, or a design that no longer matches the quality of the business."
  },
  {
    title: "Conversion-Focused Landing Pages",
    description: "For launches, ads, and campaigns that need a focused page with a clear message, strong structure, and one job to do."
  },
  {
    title: "Ongoing Website Support",
    description: "For owners who want updates handled, performance watched, and their site kept sharp after launch."
  }
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-gray-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          Whether you need a full site, a strategic refresh, or a single page built to convert, the work is scoped around your goals, audience, and growth stage.
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
