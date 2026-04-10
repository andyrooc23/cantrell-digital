const steps = [
  {
    title: "Strategy",
    description: "We clarify your offer, audience, priorities, and what the site needs to do so the build starts with direction instead of guesswork."
  },
  {
    title: "Design & Build",
    description: "We write, design, and develop the site around clear messaging, clean structure, and a fast experience across desktop and mobile."
  },
  {
    title: "Launch & Refine",
    description: "Before launch we test the details, tighten the experience, and make sure you go live with a site that feels ready to represent the business."
  }
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-gray-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          How The Process Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-[0_0_0_6px_rgba(37,99,235,0.12)] transition-transform duration-200 hover:scale-105">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mx-auto max-w-sm text-gray-300 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
