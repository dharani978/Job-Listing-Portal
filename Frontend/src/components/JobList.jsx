import { useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

function JobList() {
  // ✅ STATE MUST BE DEFINED FIRST
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    type: "",
  });

  const jobs = [
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Remote",
    },
    {
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Delhi",
      type: "Internship",
    },
  ];

  // ✅ FILTER LOGIC AFTER STATE
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === "" || job.type === filters.type)
    );
  });

  return (
    <section className="bg-[#020617] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          Latest <span className="text-blue-500">Jobs</span>
        </h2>

        {/* ✅ PASS PROPS CORRECTLY */}
        <SearchBar filters={filters} setFilters={setFilters} />

        {filteredJobs.length === 0 ? (
          <p className="text-gray-400">No jobs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobList;
