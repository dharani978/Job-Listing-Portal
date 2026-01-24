import { Link } from "react-router-dom";

function Navbar() {
  const scrollToJobs = () => {
    const section = document.getElementById("jobs");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#020617] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          Job<span className="text-blue-500">Portal</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-gray-300">
          
          <button
            onClick={scrollToJobs}
            className="hover:text-white"
          >
            Jobs
          </button>

          <button className="hover:text-white">
            Companies
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
