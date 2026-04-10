const reasons = [
  "Messaging that makes your business easier to understand",
  "Clean design that feels credible from the first impression",
  "Fast, responsive builds that work well on every screen",
  "A straightforward process with clear communication",
  "Flexible support after launch if you need it"
];

export default function WhyCantrell() {
  return (
    <section id="about" className="scroll-mt-24 bg-black px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why Businesses Hire Cantrell Digital
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          The work is built for businesses that want to look established, communicate clearly, and feel confident sending people to their website.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex h-full items-center rounded-2xl border border-gray-800 bg-gray-800 p-6">
              <p className="text-gray-300 leading-7">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
