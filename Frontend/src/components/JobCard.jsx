import { Link } from "react-router-dom";

function JobCard({ id, title, company, location, type }) {
  return (
    <Link to={`/jobs/${id}`}>
      <div className="bg-[#020617] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition cursor-pointer">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400">{company}</p>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
          <span>{location}</span>
          <span className="bg-blue-600 px-3 py-1 rounded-full text-white">
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default JobCard;
