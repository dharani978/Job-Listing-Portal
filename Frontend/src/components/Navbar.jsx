import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-[#020617] border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold">
          Talent<span className="text-blue-500">Track</span>
        </Link>

        {/* RIGHT SIDE NAV */}
        <div className="flex items-center gap-8 text-sm font-medium">

          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>

          {/* Scroll to jobs section */}
          <a href="#jobs" className="hover:text-blue-500 transition">
            Jobs
          </a>

          {!user ? (
            <>
              <Link to="/login" className="hover:text-blue-500 transition">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span>{user?.name || "User"}</span>
              </div>

              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
