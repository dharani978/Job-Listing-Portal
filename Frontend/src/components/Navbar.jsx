import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          Job<span className="text-blue-500">Portal</span>
        </h1>

        <ul className="flex gap-6 text-gray-300">
          <li>
            <Link to="/" className="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-white">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-white">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
