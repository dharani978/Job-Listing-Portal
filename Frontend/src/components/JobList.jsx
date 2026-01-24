import { useState } from "react";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

function JobList() {
  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Remote",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Delhi",
      type: "Internship",
    },
  ];

  const [filters, setFilters] = useState({
    title: "",
    location: "",
    type: "",
  });

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
      (filters.type === "" || job.type === filters.type)
    );
  });

  return (
    <section id="jobs" className="bg-[#020617] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">
          Latest <span className="text-blue-500">Jobs</span>
        </h2>

        <SearchBar filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobList;
