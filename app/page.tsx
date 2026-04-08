'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Cantrell Digital
      </h1>

      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        Modern websites built for performance, conversion, and scale.
      </p>

      <button
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        onClick={() => alert("Work in progress")}
      >
        Get Started
      </button>
    </main>
  );
}