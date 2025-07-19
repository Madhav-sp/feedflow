import React from "react";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 w-full flex flex-col items-center text-center px-6 py-16 md:py-24">
        <img
          src="https://via.placeholder.com/1200x600.png?text=Hero+Image"
          alt="Hero"
          className="w-full h-auto rounded-md max-w-6xl mb-8"
        />
        <div className="absolute text-white font-bold text-2xl md:text-4xl leading-snug max-w-2xl px-4">
          Turn every feedback into action <br />
          automatically, accurately & rapidly.
        </div>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          Get Started
        </button>
      </section>

      {/* Registered Companies */}
      <section className="px-6 py-12 md:py-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Registered Companies
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: "Tech Innovators Inc.",
              desc: "Leading the tech industry with innovative solutions.",
              image: "https://via.placeholder.com/300x300?text=Tech+Innovators",
            },
            {
              name: "Global Solutions Ltd.",
              desc: "Providing global solutions for complex challenges.",
              image:
                "https://via.placeholder.com/300x300?text=Global+Solutions",
            },
            {
              name: "Creative Minds Co.",
              desc: "Fostering creativity and innovation in every project.",
              image: "https://via.placeholder.com/300x300?text=Creative+Minds",
            },
          ].map((company, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded shadow hover:shadow-md transition"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-52 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          See All Companies
        </button>
      </section>

      {/* Top Flow Companies */}
      <section className="px-6 py-12 md:py-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Top Flow Companies
        </h2>
        <p className="text-gray-600 mb-8">
          Leaderboard of the most responsive companies handling feedback
          efficiently.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: "Data Dynamics Corp.",
              desc: "Harnessing the power of data for dynamic decision-making.",
              image: "https://via.placeholder.com/300x300?text=Data+Dynamics",
            },
            {
              name: "Future Forward Enterprises",
              desc: "Driving innovation and progress with a forward-thinking approach.",
              image: "https://via.placeholder.com/300x300?text=Future+Forward",
            },
            {
              name: "Strategic Insights Group",
              desc: "Providing strategic insights to guide business success.",
              image:
                "https://via.placeholder.com/300x300?text=Strategic+Insights",
            },
          ].map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <img
                src={company.image}
                alt={company.name}
                className="w-full h-52 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <p className="text-sm text-gray-600">{company.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
          See Leaderboard
        </button>
      </section>
    </div>
  );
};

export default Home;
