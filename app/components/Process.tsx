const steps = [
  {
    title: "Discover",
    description: "We start by understanding your business goals, target audience, and current challenges to create a clear roadmap."
  },
  {
    title: "Build",
    description: "I design and develop your website using modern technologies, ensuring it's fast, responsive, and conversion-focused."
  },
  {
    title: "Launch",
    description: "Your site goes live with ongoing support to ensure everything runs smoothly and continues to perform."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          How We Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}