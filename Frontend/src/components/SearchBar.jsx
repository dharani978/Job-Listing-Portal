function SearchBar({
  filters = { title: "", location: "", type: "" },
  setFilters = () => {},
}) {
  return (
    <div className="bg-[#020617] border border-gray-800 rounded-xl p-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Job title"
          value={filters.title}
          onChange={(e) =>
            setFilters({ ...filters, title: e.target.value })
          }
          className="bg-[#0f172a] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Location"
          value={filters.location}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
          className="bg-[#0f172a] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
        />

        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
          className="bg-[#0f172a] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
        >
          <option value="">All Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
        >
          Search
        </button>

      </div>
    </div>
  );
}

export default SearchBar;
