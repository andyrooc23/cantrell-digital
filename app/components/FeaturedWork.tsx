const projects = [
  {
    type: "Fitness Brand",
    summary: "Increased online sales by 40% with a modern e-commerce site featuring seamless checkout and mobile optimization."
  },
  {
    type: "Local Service Business",
    summary: "Built a professional website that boosted lead generation by 60% through clear service descriptions and contact forms."
  },
  {
    type: "Personal Brand",
    summary: "Created a portfolio site that helped the creator land 3 new clients within the first month of launch."
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Featured Work
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          A snapshot of the kind of outcomes we aim for: stronger positioning, smoother user journeys, and websites that support real business momentum.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700">
              <div className="mb-3 text-sm uppercase tracking-[0.16em] text-gray-400">{project.type}</div>
              <p className="mb-8 text-gray-300 leading-7">{project.summary}</p>
              <button className="mt-auto inline-flex items-center font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
