import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobList from "../components/JobList";

function Home() {
  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      <Hero />
      <JobList />
    </div>
  );
}

export default Home;
