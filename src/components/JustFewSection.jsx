import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const JustSection = ({ justSectionDetails }) => {
    const justRef = useRef(null);
    const isJustInView = useInView(justRef, { once: true, margin: "-100px" });

    return (
    <motion.div
        ref={justRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isJustInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="outer-container max-w-[100vw] w-full mx-auto mt-12 px-10 bg-cover bg-center bg-no-repeat pt-[255px] pb-[255px] sm:pt-[100px] sm:pb-[80px] xs:pt-[100px] xs:pb-[60px]"
        style={{ backgroundImage: justSectionDetails.backgroundImage }}
    >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isJustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="reason-wrap bg-opacity-90 p-4 max-w-[100vw] w-full"
        >
            <motion.div className="reason-header-wrap flex flex-col sm:flex-row flex-wrap items-start justify-between">
                <div className="text-left">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isJustInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white text-lg xs:text-xl sm:text-2xl"
                    >
                        <span className="header-content">
                            {justSectionDetails.headerTitle}
                        </span>
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isJustInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 text-white"
                    >
                        <span className="header-content">
                            {justSectionDetails.mainTitle}
                        </span>
                    </motion.h2>
                </div>
                 <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isJustInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    className="border border-white text-lg mt-12 sm:mt-8 md:mt-12 text-white w-[50%] sm:w-auto md:w-[20%] lg:w-[15%] rounded-lg px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
                    onClick={() =>
                        (window.location.href = justSectionDetails.buttonLink)
                    }
                >
                    {justSectionDetails.buttonText}
                 </motion.button>
             </motion.div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isJustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 text-white mb-12"
        >
            {justSectionDetails.justOfferings.map((item, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isJustInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="reason-grid-inner flex flex-col sm:flex-row"
            >
                <div className="reason-right w-full sm:w-3/4">
                    <h5 className="text-xl sm:text-2xl font-semibold">
                        {item.title}
                    </h5>
                    <p className="text-white mt-2 text-lg mb-6">{item.content}</p>
                </div>
            </motion.div>
            ))}
        </motion.div>
    </motion.div>
    );
};

export default JustSection;
