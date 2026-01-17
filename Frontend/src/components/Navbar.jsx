import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">
        JobPortal
      </h1>

      <ul className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
