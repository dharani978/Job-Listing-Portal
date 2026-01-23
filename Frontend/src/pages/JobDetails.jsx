import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function JobDetails() {
  const { id } = useParams();

  return (
    <div className="bg-[#020617] min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">
          Job Details
        </h1>

        <p className="text-gray-400 mb-8">
          Job ID: {id}
        </p>

        <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-8">
          <p className="mb-4">This page will show full job information.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
