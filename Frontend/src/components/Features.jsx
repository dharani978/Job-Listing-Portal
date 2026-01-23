const features = [
  {
    title: "Verified Jobs",
    desc: "Every job posting is manually verified",
  },
  {
    title: "Easy Apply",
    desc: "Apply to jobs in just one click",
  },
  {
    title: "Employer Dashboard",
    desc: "Post and manage jobs effortlessly",
  },
];

function Features() {
  return (
    <section className="py-20 bg-gray-50 px-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Why Choose JobPortal?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
