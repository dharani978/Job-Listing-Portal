import { Link } from "react-router-dom";

function JobCard({ id, title, company, location, type }) {
  return (
    <Link to={`/jobs/${id}`}>
      <div className="bg-[#0f172a] border border-gray-800 rounded-xl p-6 text-white hover:border-blue-500 transition cursor-pointer">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-2">{company}</p>
        <p className="text-gray-500">{location}</p>
        <span className="inline-block mt-4 text-sm text-blue-400">
          {type}
        </span>
      </div>
    </Link>
  );
}

export default JobCard;
