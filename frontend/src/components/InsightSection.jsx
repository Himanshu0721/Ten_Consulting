import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const InsightSection = ({ insightsData }) => {
    const insightRef = useRef(null);
    const isInsightInView = useInView(insightRef, { once: true });

    return (
    <motion.div
        ref={insightRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-[#06122C] text-white p-6 sm:p-8 md:p-12 lg:p-16 w-full"
    >
        <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={isInsightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-md sm:text-lg md:text-xl font-medium text-gray-400 mb-4"
        >
            Explore Our Insights
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={isInsightInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            >
                Stay Ahead with the Latest Trends
            </motion.h2>

            <motion.button
                whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#06122C",
            }}
                transition={{ duration: 0.3 }}
                className="mt-4 md:mt-0 text-md sm:text-lg md:text-xl px-4 py-2 font-semibold rounded-lg flex items-center gap-2 border border-white"
            >
                Explore <FaArrowRight />
            </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-6 sm:mt-8">
            {insightsData.map((insight, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)",
                }}
                className="rounded-lg overflow-hidden bg-[#0D1B3F] p-4 sm:p-6 shadow-md hover:shadow-lg transition"
            >
                <img
                    src={insight.img}
                    alt={insight.title}
                    className="rounded-lg w-full h-auto object-cover"
                />
                <p className="text-sm sm:text-md text-gray-400 mt-4">
                    Tech Insights
                </p>
                <p className="text-lg sm:text-xl font-semibold mt-2">
                    {insight.title}
                </p>
                <p className="text-sm sm:text-md text-gray-400 mt-1">
                    {insight.date}
                </p>
            </motion.div>
        ))}
        </div>
    </motion.div>
    );
};

export default InsightSection;
