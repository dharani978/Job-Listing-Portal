import { useParams, Link } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  // Temporary dummy data (later backend will replace this)
  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      type: "Full Time",
      description:
        "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS.",
    },
    {
      id: "2",
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      type: "Remote",
      description:
        "Backend Developer needed with strong Node.js and database knowledge.",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Microsoft",
      location: "Delhi",
      type: "Internship",
      description:
        "Design clean and user-friendly interfaces for web applications.",
    },
  ];

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Jobs
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
        <p className="text-gray-400 mb-2">{job.company}</p>

        <div className="flex gap-4 text-sm text-gray-300 mb-8">
          <span>{job.location}</span>
          <span>•</span>
          <span>{job.type}</span>
        </div>

        <p className="text-gray-300 leading-relaxed mb-10">
          {job.description}
        </p>

        <Link to={`/apply/${job.id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default JobDetails;
