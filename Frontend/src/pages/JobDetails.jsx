import { useParams, Link } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  // Temporary static data (later this comes from backend)
  const jobs = [
    {
      id: "0",
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      description:
        "We are looking for a skilled Frontend Developer to build modern, scalable web applications using React and Tailwind CSS.",
      skills: ["React", "JavaScript", "Tailwind CSS", "Git"],
    },
    {
      id: "1",
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Remote",
      description:
        "Seeking a Backend Developer to design scalable APIs and manage databases.",
      skills: ["Node.js", "Express", "MongoDB", "AWS"],
    },
    {
      id: "2",
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Delhi",
      type: "Internship",
      description:
        "Design intuitive user interfaces and experiences for enterprise products.",
      skills: ["Figma", "UI Design", "UX Research"],
    },
  ];

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Jobs
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-400 mb-6">
          {job.company} • {job.location} • {job.type}
        </p>

        <div className="bg-[#020617] border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Job Description
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            {job.description}
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Required Skills
          </h3>

          <div className="flex flex-wrap gap-3 mb-8">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
