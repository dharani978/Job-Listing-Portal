import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div
      className="
        bg-[#020617]
        border border-gray-800
        rounded-xl
        p-6
        cursor-pointer
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/20
      "
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {job.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {job.company}
      </p>

      <div className="flex justify-between text-sm text-gray-300 mb-6">
        <span>{job.location}</span>
        <span>{job.type}</span>
      </div>

      <Link
        to={`/jobs/${job.id}`}
        className="inline-block text-blue-500 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}

export default JobCard;
