import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const dropdownData = [
  {
    id: 1,
    title: "AI and ML",
    links: [
      { name: "Generative AI", url: "/ai-ml/generative-ai" },
      { name: "Data Science", url: "/ai-ml/data-science" },
    ],
  },
  {
    id: 2,
    title: "Data Analytics",
    links: [
      { name: "Data Consulting", url: "/data-analytics/data-consulting" },
      { name: "Analytics and Integration", url: "/data-analytics/integration-api" },
      { name: "Agentic", url: "/data-analytics/agentic" },
    ],
  },
  {
    id: 3,
    title: "Next Gen",
    links: [{ name: "Blockchain", url: "/next-gen/blockchain" }],
  },
  {
    id: 4,
    title: "Insights",
    links: [
      { name: "Blogs", url: "#" },
      { name: "News", url: "#" },
      { name: "White Paper", url: "#" },
    ],
  },
  {
    id: 5,
    title: "Industries",
    links: [
      { name: "TEN Education", url: "https://education.entrepreneurshipnetwork.net/" },
      { name: "TEN Human Resource", url: "https://ten-human-resources.vercel.app/" },
      { name: "TEN Media", url: "https://ten-media-rosy.vercel.app/" },
      { name: "TEN Art", url: "https://art-industry.vercel.app/" },
      { name: "TEN Space Research", url: "https://space-industry-five.vercel.app/" },
      { name: "TEN Health", url: "https://ten-healthcare-industry.vercel.app/" },
      { name: "TEN AI", url: "https://ten-ai-industry.vercel.app/" },
      { name: "TEN Internal Tools", url: "https://ten-internal-tools.vercel.app" },
      { name: "TEN Incubation and VC", url: "https://incubation-vc.vercel.app/" },
    ],
  },
];

const DropdownSection = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleClick = (id) => {
    setSelectedDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
      Using an <span className="text-violet-800">AI-first</span> approach, we
        build intelligent and future-proof digital solutions to transform
        companies.
      </h1>

      <div className="flex flex-col lg:flex-row mt-10 gap-6">
        {/* Left Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-[45%] text-white p-6 sm:p-8 rounded-lg shadow-md bg-cover bg-center h-[300px] flex flex-col justify-between"
          style={{
            backgroundImage: `url('${
              dropdownData.find((item) => item.id === selectedDropdown)?.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsUzIvXT6R8JB6RfTh24JNCNEOGwdWWuqiQ&s"
            }')`,
          }}
        >
          <p className="text-sm sm:text-base text-gray-200">🚀 Technology at TEN</p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
      Empowering Innovation Through AI
    </h3>
    <p className="mt-2 text-sm sm:text-base text-gray-100">
      The Entrepreneurship Network (TEN) leads the frontier of cutting-edge solutions in AI, Blockchain, and beyond.
    </p>
        </motion.div>

        {/* Dropdown List */}
        <div className="w-full lg:w-[55%]">
          <ul className="text-gray-700 text-sm sm:text-base md:text-lg mb-8">
            {dropdownData.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="border-b py-3 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => handleClick(item.id)}
                >
                  <span>{item.title}</span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      selectedDropdown === item.id ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </div>

                <AnimatePresence>
                  {selectedDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-2 text-gray-600 text-sm"
                    >
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        {item.links.map((link, i) => (
                          <li key={i}>
                            <a
                              href={link.url}
                              className="hover:underline text-black"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default DropdownSection;
