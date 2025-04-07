import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillarsData = [
  {
    id: 1,
    title: "Customer Assist",
    icon: "https://img.icons8.com/ios-filled/50/handshake.png",
  },
  {
    id: 2,
    title: "Skill Assessment",
    icon: "https://img.icons8.com/ios-filled/50/clipboard.png",
  },
  {
    id: 3,
    title: "Sentiment Analysis",
    icon: "https://img.icons8.com/ios-filled/50/idea.png",
  },
  {
    id: 4,
    title: "Credit History Analysis",
    icon: "https://img.icons8.com/ios-filled/50/speedometer.png",
  },
];

const HeroSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const pillarsRef = useRef(null);
  const isPillarsInView = useInView(pillarsRef, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <div className="relative w-full h-full pt-2 bg-gradient-to-r from-black via-purple-900 to-blue-900 text-white overflow-hidden">

      {/* Main Content */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-10 mt-10"
      >
        {/* Left Section */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-4xl md:text-5xl font-bold">
            TEN's <span className="text-yellow-500">AI-first</span> COE
          </h2>

          <div className="flex items-center space-x-3 mt-4">
            <img
              src="https://img.icons8.com/fluency/48/000000/artificial-intelligence.png"
              alt="AI Icon"
              className="w-8 h-8"
            />
            <h3 className="text-lg font-semibold">AI - FIRST</h3>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Our Center of Excellence (CoE) serves as a centralized hub for developing and deploying AI solutions specifically designed to drive AI-led digital transformation across our customer bases. The CoE actively collaborates with all the business units within the organization to embed AI meaningfully into our service offerings, ensuring seamless integration and delivering tangible results across the board.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
          >
            Talk to an expert →
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-8 text-center"
        >
          {[
            { label: "AI Technologies", value: "6+" },
            { label: "Frameworks", value: "5+" },
            { label: "FTE Experts Team", value: "70+" },
            { label: "Projects Delivered", value: "20+" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={0.2 + idx * 0.1}
              variants={fadeUp}
              className="text-center"
            >
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* AI Pillars Section */}
      <div className="bg-gradient-to-r from-black via-purple-900 to-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            ref={pillarsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isPillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Our AI Pillars
          </motion.h2>

          <motion.div
            initial="hidden"
            animate={isPillarsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {pillarsData.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                variants={fadeUp}
                className="bg-blue-950 bg-opacity-40 rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
