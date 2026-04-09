const packages = [
  {
    name: "Starter",
    startingAt: "$2,500",
    features: ["Custom design", "Up to 5 pages", "Mobile responsive", "Basic SEO setup"]
  },
  {
    name: "Growth",
    startingAt: "$5,000",
    features: ["Everything in Starter", "E-commerce integration", "Advanced analytics", "Content management"]
  },
  {
    name: "Premium",
    startingAt: "$10,000",
    features: ["Everything in Growth", "Custom functionality", "Ongoing maintenance", "Priority support"]
  }
];

export default function Pricing() {
  return (
    <section className="bg-gray-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pricing Packages
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          These tiers offer helpful starting points, not rigid boxes. Every package is tailored to your goals, scope, and the level of support your project needs.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700">
              <h3 className="mb-2 text-2xl font-semibold text-white">{pkg.name}</h3>
              <p className="mb-6 text-3xl font-bold text-blue-400">Starting at {pkg.startingAt}</p>
              <p className="mb-6 min-h-[84px] text-gray-400 leading-7">
                {pkg.name === 'Starter' && 'A strong fit for smaller launches, focused brochure sites, and clear first impressions.'}
                {pkg.name === 'Growth' && 'Ideal for brands ready for more content, deeper functionality, and stronger lead or sales support.'}
                {pkg.name === 'Premium' && 'Built for custom scopes that need more strategy, more integration, and ongoing hands-on partnership.'}
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
