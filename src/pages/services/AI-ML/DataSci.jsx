import { React, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import {
  heroData,
  contentData,
  offerings,
  justSectionDetails,
  justOfferings,
  funFactDetails,
  transformationData,
  insightsData,
} from "../../../assets/dataSci";

const DataSci = () => {
  const topRef = useRef(null);
  const contentRef = useRef(null);
  const offeringRef = useRef(null);
  const funFactRef = useRef(null);
  const leadingRef = useRef(null);
  const insightRef = useRef(null);
  const justRef = useRef(null);

  const isTopInView = useInView(topRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isContentInView = useInView(contentRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isOfferingInView = useInView(offeringRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isJustInView = useInView(justRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isFunFactInView = useInView(funFactRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isLeadingInView = useInView(leadingRef, {
    triggerOnce: false,
    margin: "-100px",
  });
  const isInsightInView = useInView(insightRef, {
    triggerOnce: false,
    margin: "-100px",
  });

  return (
    <div className="generative-ai-container font-normal">
      {/* Top Section */}
      <div className="-nid views-row relative">
        <div
          className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-start px-4 relative h-[80vh] sm:h-[90vh] md:h-[100vh] lg:h-[110vh]"
          style={{ backgroundImage: heroData.backgroundImage }}
        >
          <motion.div
            ref={topRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isTopInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 right-2 sm:right-8 md:left-18 transform -translate-y-1/2 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] text-left"
          >
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              aria-label="Breadcrumb Navigation"
              role="navigation"
              className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl"
            >
              <ol className="flex space-x-2 ml-6">
                {heroData.breadcrumb.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white hover:underline"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-white">{item.label}</span>
                    )}
                    {index !== heroData.breadcrumb.length - 1 && " / "}
                  </li>
                ))}
              </ol>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold leading-tight"
            >
              {heroData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.8 }}
              className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
            >
              {heroData.description}
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* Content-Section */}
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
        >
          {contentData.heading}
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
      {/* Offering Section */}
      <motion.div
        ref={offeringRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="offerings-section max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-gray-700"
        >
          Our Offerings
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4"
        >
          Data Science & ML
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="offerings-content flex flex-col lg:flex-row lg:items-start mt-10 gap-6"
        >
          {/* Offerings Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="offerings-card bg-cover bg-center text-white p-6 sm:p-8 rounded-lg shadow-md h-auto  w-full lg:w-[45%] flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/L2%20PAGES.jpg')",
            }}
          >
            <p className="text-sm sm:text-base text-gray-200">✨ AI-First</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl w-[70%] sm:w-full md:w-[60%] font-400">
            AI-powered Data Insights
            </h3>
            <p className="text-lg sm:text-md mt-4 md:w-[60%]">
            Leverage AI to analyze and transform diverse data types, identify patterns, and make predictions for insight-led decisions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white w-[40%] text-black py-2 px-4 sm:py-3 sm:px-6 mt-4 border rounded-md text-sm sm:text-base"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Offerings List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="offerings-list w-full lg:w-[55%]"
          >
            <ul className="text-gray-700 text-sm sm:text-base md:text-lg mb-16">
              {offerings.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, delay: 1 + index * 0.2 }}
                  className="border-b pb-3 pt-3 cursor-pointer "
                  onClick={() => {
                    document
                      .getElementById(`answer-${index}`)
                      .classList.toggle("hidden");
                    document
                      .getElementById(`icon-${index}`)
                      .classList.toggle("rotate-180");
                  }}
                >
                  <div className="flex justify-between items-center">
                    {item.title}
                    <span
                      id={`icon-${index}`}
                      className="transition-transform transform text-xl font-semibold"
                    >
                      +
                    </span>
                  </div>
                  <p
                    id={`answer-${index}`}
                    className="hidden mt-2 text-gray-600 text-sm sm:text-base "
                  >
                    {item.content}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Just few section */}
      <div
        className="outer-container max-w-[100vw] w-full mx-auto mt-12 px-10 bg-cover bg-center bg-no-repeat pt-[255px] pb-[255px] sm:pt-[100px] sm:pb-[80px] xs:pt-[100px] xs:pb-[60px]"
        style={{ backgroundImage: justSectionDetails.backgroundImage }}
      >
        <div className="reason-wrap bg-opacity-90 p-4 max-w-[100vw] w-full">
          <motion.div
            ref={justRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isJustInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="reason-header-wrap flex flex-col sm:flex-row items-start justify-between"
          >
            <div className="text-left sm:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-lg xs:text-xl sm:text-2xl"
              >
                <span className="header-content">
                  {justSectionDetails.headerTitle}
                </span>
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isJustInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-500 mt-2 text-white"
              >
                <span className="header-content">
                  {justSectionDetails.mainTitle}
                </span>
              </motion.h2>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isJustInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="border border-white text-lg mt-12 sm:mt-8 md:mt-12 text-white text-lg w-[50%] sm:w-auto md:w-[20%] lg:w-[15%] rounded-lg px-2 py-2 transition duration-300 hover:bg-white hover:text-black"
              onClick={() =>
                (window.location.href = justSectionDetails.buttonLink)
              }
            >
              {justSectionDetails.buttonText}
            </motion.button>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 text-white mb-12">
            {justOfferings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isJustInView ? { opacity: 1, x: 0 } : {}}
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
          </div>
        </div>
      </div>

      {/* Fun Fact Section */}
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
            className="fun-fact flex flex-col sm:flex-row bg-[#D4832B] p-6 sm:p-10 rounded-lg text-white w-full max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="face-media flex justify-center items-center mx-auto sm:mx-0"
            >
              <img
                alt="AI Innovation"
                src={funFactDetails.imageSrc}
                className="block max-w-[90%] h-auto sm:h-[70%] md:h-[80%] lg:h-[90%]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="fact-content mt-6 sm:mt-0 w-[100%] text-start flex flex-col justify-center "
            >
              <div className="fact-filled flex items-center gap-3 ml-18 md:ml-14 lg:ml-14 xl:ml-18 sm:ml-6 xs:ml-4">
                <img
                  alt="Fun Fact Icon"
                  src={funFactDetails.iconSrc}
                  className="h-5 w-auto"
                />
                <p className="text-lg font-bold uppercase">
                  {funFactDetails.title}
                </p>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="fact-title text-2xl sm:text-3xl md:text-4xl font-semibold mb-3  ml-16 ml-18 md:ml-14 lg:ml-14 xl:ml-18 sm:ml-6 xs:ml-4"
              >
                {funFactDetails.fact}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="fact-body-text text-base sm:text-lg mt-2 ml-16 ml-18 md:ml-14 lg:ml-14 xl:ml-18 sm:ml-6 xs:ml-4 mb-6"
              >
                {funFactDetails.description}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Leading Section */}
      <motion.div
        ref={leadingRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="leading-transformation-container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 w-full max-w-6xl"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-left leading-tight"
        >
          Transforming Business with AI & Data Science
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
              className="image-wrapper rounded-lg overflow-hidden bg-white shadow-lg p-4 sm:p-6"
            >
              <img
                src={item.img}
                alt={item.alt}
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

      {/* Insight Section */}
      <motion.div
        ref={insightRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-[#06122C] text-white p-6 sm:p-8 md:p-12 lg:p-16 w-full"
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-md sm:text-lg md:text-xl font-medium text-gray-400 mb-4 sm:mb-6 ml-16 ml-18 md:ml-14 lg:ml-14 xl:ml-18 sm:ml-6 xs:ml-4"
        >
          Explore Our Insights
        </motion.p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ml-16 ml-18 md:ml-14 lg:ml-14 xl:ml-18 sm:ml-6 xs:ml-4">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
          >
            Lead the Way with Industry Insights
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
              Latest AI & Tech Trends
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
      {/* Add Contact Form Below */}
    </div>
  );
};

export default DataSci;
