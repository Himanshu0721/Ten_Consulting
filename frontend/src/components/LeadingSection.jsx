import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const LeadingSection = ({ transformationData }) => {
    const leadingRef = useRef(null);
    const isLeadingInView = useInView(leadingRef, {
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
    <motion.div
        ref={leadingRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="leading-transformation-container mx-auto p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 w-full max-w-6xl"
    >
        <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-left leading-tight"
        >
            Pioneering AI-Driven Business Innovation
        </motion.h2>

        <div className="transformation-images mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {transformationData.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isLeadingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                className="image-wrapper rounded-lg overflow-hidden bg-white shadow-lg p-4 sm:p-6 flex flex-col items-start"
            >
                <img
                    src={item.img}
                    alt={item.alt || "Transformation Image"}
                    className="w-full h-auto rounded-lg object-cover"
                />
                <p className="text-sm sm:text-lg mt-2 font-medium text-gray-500">
                    {item.region}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                    {item.title}
                </p>
            </motion.div>
            ))}
        </div>
    </motion.div>
    );
};

export default LeadingSection;
