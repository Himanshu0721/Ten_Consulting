import { useState } from "react";
import { motion } from "framer-motion";

export default function RecentHappenings() {
  const news = [
    {
      id: 1,
      title:
        "Kellton secures $2.5 Million project from Oil India to transform Wellhead Monitoring",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-12/oil%20india-hpbanner.webp",
      link: "#"
    },
    {
      id: 2,
      title:
        "Kellton wins Bronze Stevie® Award in 2024 International Business Awards®",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-09/Mask%20group.webp",
      link: "#"
    },
    {
      id: 3,
      title:
        "Kellton Recognized as a ‘Challenger’ in Avasant’s SAP S/4HANA Services 2023-2024 RadarView™",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Avasant.webp",
      link: "#"
    },
    {
      id: 4,
      title:
        "Kellton emerges as a Leader in Zinnov Zones Digital Engineering and ER&D Services Ratings 2023",
      description: "Read More",
      image:
        "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Zinnov%20zones%20%281%29.webp",
      link: "#"
    }
  ];

  const [selectedNews, setSelectedNews] = useState(news[0]);

  return (
    <div className="bg-white text-gray-900 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center md:text-left">
          Recent happenings at Kellton
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side enlarged image */}
          <motion.div
            key={selectedNews.id}
            className="w-full h-64 md:h-full rounded-xl overflow-hidden shadow-lg md:col-span-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right side cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
            {news.map((item) => (
              <motion.div
                key={item.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-black hover:text-white transition duration-300"
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
