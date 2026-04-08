const reasons = [
  "Modern, clean designs that build trust",
  "Mobile-first approach for all devices",
  "Lightning-fast performance and loading speeds",
  "Clear communication throughout the process",
  "Ongoing support and maintenance options"
];

export default function WhyCantrell() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Why Choose Cantrell Digital
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          I focus on creating websites that not only look great but deliver real business results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl">
              <p className="text-gray-300">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}