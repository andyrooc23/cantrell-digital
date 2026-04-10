const packages = [
  {
    name: "Starter",
    startingAt: "$2,500",
    features: ["Custom design", "Up to 5 pages", "Responsive build", "Foundational SEO setup"]
  },
  {
    name: "Growth",
    startingAt: "$5,000",
    features: ["Everything in Starter", "E-commerce or lead-gen enhancements", "Analytics setup", "Content management"]
  },
  {
    name: "Premium",
    startingAt: "$10,000",
    features: ["Everything in Growth", "Custom functionality", "Ongoing support options", "Priority collaboration"]
  }
];

export default function Pricing() {
  return (
    <section className="bg-gray-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Flexible Project Ranges
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          These are starting points to help frame scope and investment. Every project is shaped around what your business actually needs, not forced into a rigid package.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700">
              <h3 className="mb-2 text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="mb-6 text-3xl font-bold text-blue-400">Projects from {pkg.startingAt}</p>
              <p className="mb-6 min-h-[84px] text-gray-400 leading-7">
                {pkg.name === 'Starter' && 'A smart fit for newer businesses or focused service sites that need a strong first impression without unnecessary complexity.'}
                {pkg.name === 'Growth' && 'Ideal for established businesses that need more pages, stronger conversion paths, and room for content, sales, or lead generation.'}
                {pkg.name === 'Premium' && 'Best for ambitious builds with custom requirements, deeper strategy, and a more hands-on partnership from start to launch.'}
              </p>
              <ul className="mt-auto space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="mr-2 text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
