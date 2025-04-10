import { motion } from "framer-motion";

const NextSolutions = () => {
    const solutions = [
        {
          title: "Next-Gen Intelligence",
          description:
            "Unlock the future with intelligent systems that adapt, learn, and evolve. Our Next-Gen solutions empower your business with real-time insights, contextual understanding, and strategic foresight using AI & ML.",
          link: "/next-gen/intelligence",
        },
        {
          title: "Autonomous Operations",
          description:
            "Transform how your business runs with self-optimizing systems. We integrate AI to enable autonomous workflows, reducing human intervention while increasing speed, precision, and scalability.",
          link: "/next-gen/autonomous-operations",
        },
        {
          title: "Futuristic Forecasting",
          description:
            "Anticipate trends before they emerge. Our ML-powered forecasting models analyze complex datasets to predict market behavior, customer needs, and industry shifts, keeping you steps ahead.",
          link: "/next-gen/futuristic-forecasting",
        },
        {
          title: "Cognitive Interfaces",
          description:
            "Redefine user experience with AI-powered conversational and visual interfaces. From intelligent chat to emotion-aware systems, deliver seamless, human-like interactions across all platforms.",
          link: "/next-gen/cognitive-interfaces",
        },
      ];
      

  return (
    <motion.div
      className="p-6 text-left m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-bold mb-6">Explore Our Next-Gen Solutions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] text-gray-800 font-semibold mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-700 mb-4 xs:text-lg sm:text-lg md:text-xl lg:text-[12px] xl:text-[18px]">
              {solution.description}
            </p>
            <a href={solution.link} className="text-blue-500 hover:underline">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NextSolutions;
