const projects = [
  {
    type: "E-commerce Brand",
    summary: "Repositioned the brand with a sharper storefront, clearer product flow, and a mobile experience that made buying feel effortless."
  },
  {
    type: "Local Service Business",
    summary: "Turned a dated online presence into a lead-focused site with stronger service messaging, cleaner navigation, and easier contact paths."
  },
  {
    type: "Creator Brand",
    summary: "Built a polished, high-trust website that helped the founder present their work clearly and start more qualified client conversations."
  }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Results We Aim For
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-gray-300 sm:text-lg">
          The goal is never just a nicer website. It is better positioning, smoother user journeys, and a site that helps the business move forward.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-800 p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-700">
              <div className="mb-3 text-sm uppercase tracking-[0.16em] text-gray-400">{project.type}</div>
              <p className="mb-8 text-gray-300 leading-7">{project.summary}</p>
              <button className="mt-auto inline-flex items-center font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-300">
                See the direction →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
