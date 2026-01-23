function JobCard({ title, company, location, type }) {
  return (
    <div className="bg-[#020617] border border-gray-800 rounded-xl p-6 hover:border-blue-600 transition shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-2">
        {title}
      </h2>

      <p className="text-gray-400 mb-4">
        {company} • {location}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-sm px-3 py-1 rounded-full bg-blue-600/20 text-blue-400">
          {type}
        </span>

        <button className="text-blue-500 hover:text-blue-400 font-medium">
          View Details →
        </button>
      </div>
    </div>
  );
}

export default JobCard;
