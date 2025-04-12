import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";

const ContentSection = ({ contentData }) => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });

  // Scroll progress of the entire section (relative to viewport)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start center ", "end center"], // adjust as needed
  });

  const yHeading = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: -50 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-[1260px] w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto border-b border-gray-500 py-10 sm:py-14 md:py-16 lg:py-18"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left side: Heading */}
        <motion.h3
          style={{ y: yHeading }}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-normal text-gray-900 max-w-[500px] w-full leading-snug sticky top-24"
        >
          {contentData.heading}
        </motion.h3>

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

// Use React.memo to prevent unnecessary re-renders if props are not changing
export default memo(ContentSection);
