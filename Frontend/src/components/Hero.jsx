function Hero() {
  return (
    <section className="bg-[#0f172a] text-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Find Your <span className="text-blue-500">Dream Job</span>
        </h1>

        <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
          Discover opportunities from top companies and take the next step in your career.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Browse Jobs
          </button>

          <button className="border border-gray-500 hover:border-white px-8 py-3 rounded-lg font-semibold transition">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
