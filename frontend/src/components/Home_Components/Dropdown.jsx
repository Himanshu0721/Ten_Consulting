import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";

const dropdownData = [
  {
    id: 1,
    title: "AI and ML",
    image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/acc-3.webp",
    links: [
      { name: "Generative AI", url: "#" },
      { name: "Data Science", url: "#" },
    ],
  },
  {
    id: 2,
    title: "Data Analytics",
    image: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Data%20Science%20%26%20Engineering.webp",
    links: [
      { name: "Data Consulting", url: "#" },
      { name: "Analytics and Integration", url: "#" },
      { name: "Agentic", url: "#" },
    ],
  },
  {
    id: 3,
    title: "Next Gen",
    image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/NextGen%20services%20(1).webp",
    links: [{ name: "Blockchain", url: "#" }],
  },
  {
    id: 4,
    title: "Insights",
    image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Cloud.webp",
    links: [
      { name: "Blogs", url: "#" },
      { name: "News", url: "#" },
      { name: "White Paper", url: "#" },
    ],
  },
  {
    id: 5,
    title: "Industries",
    image: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/SAP%20(2)_0.webp",
    links: [
      { name: "TEN Education", url: "#" },
      { name: "TEN Human Resource", url: "#" },
      { name: "TEN Media", url: "#" },
      { name: "TEN Art", url: "#" },
      { name: "TEN Space Research", url: "#" },
      { name: "TEN Health", url: "#" },
      { name: "TEN AI", url: "#" },
      { name: "TEN Internal Tools", url: "#" },
      { name: "TEN Incubation and VC", url: "#" },
    ],
  },
];


const Dropdown = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  // Scroll animation refs
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  const handleDropdownClick = (id) => {
    setSelectedDropdown(selectedDropdown === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8 md:px-10">
      {/* Animated Heading */}
      <motion.h1
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-gray-800 text-center"
      >
        Using an <span className="text-violet-800">AI-first</span> approach, we
        build intelligent and future-proof digital solutions to transform
        companies.
      </motion.h1>

      {/* Main Content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/* Dropdown Section */}
        <div className="w-full md:w-1/3 p-6 space-y-4 bg-gray-50">
          {dropdownData.map((item) => {
            const isOpen = selectedDropdown === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg"
              >
                <button
                  onClick={() => handleDropdownClick(item.id)}
                  className={`w-full text-left flex justify-between items-center px-4 py-3 font-semibold text-gray-700 transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-100 text-blue-700"
                      : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {item.title}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden px-4 pt-2 pb-4 bg-gray-100 border-t text-sm text-gray-600 space-y-3"
                    >
                      <ul className="list-disc list-inside space-y-1">
                        {item.links.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:underline"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-2/3">
          <AnimatePresence mode="wait">
            {selectedDropdown !== null && (
              <motion.img
                key={selectedDropdown}
                src={
                  dropdownData.find((item) => item.id === selectedDropdown)
                    .image
                }
                alt="Selected"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-100 h-100 ml-40 object-cover rounded-lg p-4"
              />
            )}
          </AnimatePresence>
          {selectedDropdown === null && (
            <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl p-10 text-center">
              Select a service to see the image
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile image section */}
      {selectedDropdown !== null && (
        <motion.div
          key={`mobile-${selectedDropdown}`}
          className="md:hidden w-full mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={
              dropdownData.find((item) => item.id === selectedDropdown).image
            }
            alt="Mobile View"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
