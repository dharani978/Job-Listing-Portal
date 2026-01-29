import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
    


      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Jobs list (same as home) */}
        <Route path="/jobs" element={<Home />} />

        {/* Job details */}
        <Route path="/jobs/:id" element={<JobDetails />} />

        {/* Apply page */}
        <Route path="/apply/:id" element={<Apply />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
