import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const insights = [
  {
    title: "Revealing top Data Migration trends and predictions to watch",
    date: "April 02, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Data%20Migration%20trends%202025.webp",
  },
  {
    title: "Quantum-proofing your business: A critical security imperative",
    date: "April 01, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Thumbnail3.webp",
  },
  {
    title: "The rise of Multimodal Data in impact",
    date: "March 28, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Multimodal%20data%20in%20AI.webp",
  },
  {
    title: "AI Integration in Modern Workflows",
    date: "March 22, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/cross%20platform%20development%20trends%20-%20thumbnail%20image.webp",
  },
  {
    title: "5G and its Role in Digital Transformation",
    date: "March 18, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Generative%20AI%20tools.webp",
  },
  {
    title: "Smart Cities and IoT: A Symbiotic Growth",
    date: "March 14, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Minimizing%20disruption%20in%20Product%20Modernization_Thumbnail.webp",
  },
  {
    title: "Cybersecurity Trends to Watch in 2025",
    date: "March 09, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2025-01/Thumbnail%20%282%29%20%282%29.webp",
  },
  {
    title: "Cloud Computing: Then vs Now",
    date: "March 05, 2025",
    category: "Blog",
    image:
      "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-11/WP_Thumbnail.webp",
  },
];

export default function InsightsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - visibleCards + insights.length) % insights.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCards) % insights.length);
  };

  const displayedInsights = insights.slice(startIndex, startIndex + visibleCards).concat(
    startIndex + visibleCards > insights.length
      ? insights.slice(0, (startIndex + visibleCards) % insights.length)
      : []
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <p className="text-blue-700 mb-2">Insights</p>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Take a look at bright insights
        </h2>
        <div className="space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300"
          >
            ❯
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayedInsights.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-md overflow-hidden bg-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-blue-600 font-semibold">
                  {item.category}
                </span>
                <h3 className="text-md font-semibold mt-2 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 text-center">
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          View Insights
        </button>
      </div>
    </div>
  );
}
