import { Link } from "react-router-dom";

function Apply() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#020617] border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Apply for Job
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          />

          {/* Resume Upload */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Upload Resume (PDF / DOC)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="
                w-full text-sm text-gray-300
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border
                file:border-gray-300
                file:bg-[#f5f5dc]
                file:text-black
                hover:file:bg-[#eee8d5]
                cursor-pointer
              "
            />
          </div>

          {/* Submit (UNCHANGED) */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Application
          </button>
        </form>

        <Link
          to="/"
          className="block text-center text-gray-400 hover:text-white mt-6"
        >
          ← Back to Jobs
        </Link>
      </div>
    </div>
  );
}

export default Apply;
