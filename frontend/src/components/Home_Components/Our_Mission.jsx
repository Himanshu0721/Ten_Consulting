import { motion } from "framer-motion";

export default function MissionSection() {
  const differentiators = [
    {
      title: "Tech-agnostic service provider",
      category: "Global mindset",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/mission-1.webp"
    },
    {
      title: "SAP Authorized Partner",
      category: "ERP Stack",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/image-2.webp"
    },
    {
      title: "Off-shore, on-shore and nearshore capability centers",
      category: "24X7 availability",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/image-3.webp"
    },
    {
      title: "Right-sized to cater to Startups & Fortune 500",
      category: "Agile & nimble",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/mission-4.webp"
    }
  ];

  return (
    <div className="bg-white text-gray-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
          Our mission is to be a trusted digital partner and drive transformational outcomes for our customers, while empowering our employees to achieve their full potential.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10">
          Our differentiators help us stay true to our mission.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">{item.category}</p>
                <h3 className="text-base sm:text-lg font-semibold mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
