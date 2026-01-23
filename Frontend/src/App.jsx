import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
