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
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors duration-200">
              <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">{project.type}</div>
              <p className="text-gray-300 mb-6">{project.summary}</p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}