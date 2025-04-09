import { useState } from "react";
import { motion } from "framer-motion";

export default function RecentHappenings() {
  const news = [
    {
      id: 1,
      title:
        "TEN Partners with Google for Startups to Launch Global Incubation Program",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-07/business-process-automation-data-integration%28Thumbnail%29.webp?itok=lhmcxiw9?itok=-c-mguQC",
      link: "#",
    },
    {
      id: 2,
      title:
        "Over 10,000 Students Graduate from TEN’s Flagship Startup Bootcamp 2024",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/AI-driven%20Autonomous%20Testing%20in%20quality%20engineering_0.webp?itok=0L6siHfF",
      link: "#",
    },
    {
      id: 3,
      title:
        "TEN Launches ‘Startup Sprint’ Hackathon Series Across 50+ Indian Campuses",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/550x460-LLM.webp?itok=dF-RxVCn",
      link: "#",
    },
    {
      id: 4,
      title:
        "TEN Recognized by NASSCOM for Impact in Youth Entrepreneurship",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-03/shubham-dhage-208asI7iZiU-unsplash_0.webp?itok=TzPFxyW4?itok=-c-mguQC",
      link: "#",
    },
  ];

  const [selectedNews, setSelectedNews] = useState(news[0]);

  return (
    <div className="bg-white text-gray-900 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center md:text-left">
          Recent Highlights from TEN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section with Large Image */}
          <motion.div
            key={selectedNews.id}
            className="relative w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg md:col-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Image */}
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col items-center justify-center text-center text-white p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {selectedNews.title}
              </h3>
              <a
                href={selectedNews.link}
                className="text-sm md:text-base underline font-medium"
              >
                {selectedNews.description} →
              </a>
            </div>
          </motion.div>

          {/* Right Section Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
            {news.map((item) => (
              <motion.div
                key={item.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-black hover:text-white transition duration-300 
                           flex flex-col justify-center items-center text-center min-h-[250px]"
                onMouseEnter={() => setSelectedNews(item)}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-base md:text-lg font-semibold">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="mt-2 inline-block text-sm md:text-base font-medium underline"
                >
                  {item.description} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
