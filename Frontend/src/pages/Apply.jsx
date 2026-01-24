import { Link } from "react-router-dom";

function Apply() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Jobs
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">
          Apply for this Job
        </h1>

        <form className="bg-[#020617] border border-gray-800 rounded-xl p-8 space-y-5">
          
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />

          <input
            type="file"
            className="w-full text-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;
