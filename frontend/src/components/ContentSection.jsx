import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ContentSection = ({ contentData }) => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"],
  });

  // Only apply scroll movement on large screens
  const yHeading = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: -50 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-[1260px] w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto border-b border-gray-500 py-10 sm:py-14 md:py-16 lg:py-18"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Heading */}
        <motion.h3
          style={{ y: yHeading }}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="
            text-5xl pb-9 xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px]
            font-normal text-blue-900 max-w-[500px] w-full leading-snug
            lg:sticky lg:top-24 lg:block hidden
          "
        >
          {contentData.heading}
        </motion.h3>

        {/* Static heading for mobile (no motion, always visible) */}
        <h3 className="block lg:hidden text-2xl sm:text-3xl font-semibold text-gray-900">
          {contentData.heading}
        </h3>

        {/* Right side: Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-[806px] w-full text-sm xs:text-base sm:text-lg md:text-xl font-light"
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
      </div>
    </motion.div>
  );
};

export default ContentSection;
