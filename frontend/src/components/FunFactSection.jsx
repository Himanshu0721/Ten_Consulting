import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FunFactSection = ({ funFactDetails }) => {
    const funFactRef = useRef(null);
    const isFunFactInView = useInView(funFactRef, {
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={funFactRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="fun-fact-main-wrap mt-12 text-center px-4"
        >
            <div className="fun-container py-8 sm:py-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="fun-fact flex flex-col sm:flex-row bg-[#5B45A8] p-6 sm:p-10 rounded-lg text-white w-full max-w-5xl mx-auto"
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="face-media flex justify-center items-center mx-auto sm:mx-0"
                    >
                        <img
                        alt={funFactDetails.imageAlt || "Fun Fact Image"}
                        src={funFactDetails.imageSrc}
                        className="block max-w-[90%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%]"
                    />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isFunFactInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="fact-content mt-6 sm:mt-0 w-full text-start flex flex-col justify-center"
                    >
                    <div className="fact-filled flex items-center gap-3 ml-6">
                        <img
                            alt={funFactDetails.iconAlt || "Fun Fact Icon"}
                            src={funFactDetails.iconSrc}
                            className="h-5 w-auto"
                        />
                        <p className="text-lg font-bold uppercase"> {funFactDetails.title} </p>
                    </div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFunFactInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="fact-title text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 ml-6"
                    >
                        {funFactDetails.fact}
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isFunFactInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="fact-body-text text-base sm:text-lg mt-2 ml-6 mb-6"
                    >
                        {funFactDetails.description}
                    </motion.p>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
  );
};

export default FunFactSection;
