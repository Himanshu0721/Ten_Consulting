import { useState } from "react";
import { motion } from "framer-motion";

const internships = [
  {
    title: "Frontend Developer Internship",
    skills: "React, Tailwind CSS, HTML, CSS, JavaScript, Git",
    details:
      "Assist in designing and developing engaging user interfaces, improving website responsiveness, and ensuring seamless user experiences.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Backend Developer Internship",
    skills: "Node.js, Express.js, RESTful APIs, SQL/NoSQL, Git, Docker",
    details:
      "Assist in designing and developing robust backend services, optimizing database performance, and securing APIs.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "React.js Developer Internship",
    skills: "React.js, JavaScript, Redux, HTML, CSS, Git",
    details:
      "Assist in developing front-end applications, working with state management libraries, and enhancing UI performance.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Python Development Internship",
    skills: "Python, Django/Flask, REST APIs, SQL/NoSQL, Git, Docker",
    details:
      "Assist in developing and maintaining backend applications, writing efficient server-side logic, and integrating third-party APIs.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    title: "MERN Stack Developer Internship",
    skills:
      "MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs, Git, Docker",
    details:
      "Assist in designing and developing full-stack applications, implementing authentication, and handling data flow between frontend and backend.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "Spring Boot Development Internship",
    skills: "Java, Spring Boot, REST APIs, SQL/NoSQL, Git, Maven, Docker",
    details:
      "Assist in building scalable backend services, writing microservices, and implementing caching strategies for high availability.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    title: "Software Testing Internship",
    skills: "Manual Testing, Selenium, JUnit, TestNG, Bug Tracking Tools, Git",
    details:
      "Assist in testing and ensuring software quality, writing test cases, and performing automation testing using modern frameworks.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    title: "UI/UX Design Internship",
    skills: "Figma, Adobe XD, UX Research, Prototyping, HTML, CSS",
    details:
      "Enhance user experience through creative and engaging UI/UX design, conducting usability testing, and creating wireframes and prototypes.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    title: "Cloud Computing Internship",
    skills: "AWS, Azure, GCP, Kubernetes, Docker, Terraform, DevOps",
    details:
      "Assist in cloud infrastructure deployment and management, configuring CI/CD pipelines, and optimizing cloud resource usage.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  {
    title: "AI/ML Internship",
    skills:
      "Machine Learning, Deep Learning, Python, TensorFlow, PyTorch, Data Analysis",
    details:
      "Assist in building AI models and analyzing data, implementing machine learning algorithms, and optimizing model accuracy.",

    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
];

const Careers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredInternships = internships.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  p-10">
      {/* Search Bar */}
      <div className="flex  gap-2 mb-6">
        <input
          type="text"
          placeholder="Search internships..."
          className="w-full max-w-lg p-3 border border-gray-400 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search internships"
        />
        {search && (
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        )}
      </div>

      {/* No results message */}
      {filteredInternships.length === 0 ? (
        <p className="text-center text-gray-600">No internships found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((job, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 perspective-1000"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
            >
              <motion.div
                className="relative w-full h-full rounded-2xl shadow-lg transform-style-3d"
                animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full rounded-2xl flex flex-col justify-center items-center p-6 text-gray-900 shadow-lg transition-all duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    background: "linear-gradient(135deg, #F8F9FA, #E3E8EF)", // Soft blue-gray
                    border: "2px solid #4A90E2",
                  }}
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 text-center mt-2">
                    <strong>Skills:</strong> {job.skills}
                  </p>
                </div>

                {/* Back Side */}
                <div
                  className="absolute w-full h-full rounded-2xl flex flex-col justify-center items-center p-6 text-gray-100 shadow-lg transition-all duration-300"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(135deg, #0D47A1, #1976D2)", // Deep blue
                    border: "2px solid #FFC107", // Yellow contrast
                  }}
                >
                  <h3 className="text-xl font-semibold text-center">
                    {job.title}
                  </h3>
                  <p className="text-center mt-2">{job.details}</p>
                  <a
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Careers;
