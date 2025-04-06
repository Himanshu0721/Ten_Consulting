import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContentSection = ({ contentData }) => {
    const contentRef = useRef(null);
    const isContentInView = useInView(contentRef, { once: true });

    return (
        <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="content-section max-w-[1260px] w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto border-b border-gray-500 py-10 sm:py-14 md:py-16 lg:py-18"
        >
        <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-normal text-gray-900 mb-10 sm:mb-14 md:mb-16 lg:mb-20 max-w-[1030px] w-full leading-snug"
        >   {contentData.heading}
        </motion.h3>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="content-section-wrap max-w-[806px] w-full mx-auto text-sm xs:text-base sm:text-lg md:text-xl font-light"
        >
            {contentData.paragraphs.map((text, index) => (
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                className="mt-4 text-gray-700"
            >
                {text}
            </motion.p>
        ))}
        </motion.div>
    </motion.div>
    );
};

export default ContentSection;
