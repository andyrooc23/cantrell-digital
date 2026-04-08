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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
          Pricing Packages
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Tailored solutions starting from these ranges. Every project is customized to your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-semibold text-white mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-blue-400 mb-6">Starting at {pkg.startingAt}</p>
              <ul className="space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
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