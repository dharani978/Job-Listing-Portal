import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    const user = {
      name: "Anshika",
      email: email,
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <form
        onSubmit={handleLogin}
        className="bg-[#0f172a] p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 rounded bg-[#020617] text-white border border-gray-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-3 rounded bg-[#020617] text-white border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
