import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/globee-banner-home.webp",
    title: "Webbys 2023 Honoree",
    buttonText: "Learn More",
  },
  {
    url: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/banner-home-2.webp",
    title: "TEN recognized as a Leader in Zinnov Zones Digital Engineering and ER&D Report, 2023",
    buttonText: "Read More",
  },
  {
    url: "https://kellton-uat.s3.amazonaws.com/s3fs-public/homepage_0.webp",
    title: "TEN features in Avasant's SAP S/4HANA Services 2023-2024 Radarview",
    buttonText: "Read More",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] lg:h-screen overflow-hidden">
      <AnimatePresence>
        {images.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${slide.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full  bg-opacity-40 flex items-center justify-center sm:justify-start px-4 sm:px-8 lg:px-16">
                <motion.div
                  className="text-center sm:text-left text-white space-y-4 max-w-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                    {slide.title}
                  </h1>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-5 py-2 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
                  >
                    {slide.buttonText}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
      >
        ❮
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10"
      >
        ❯
      </motion.button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            animate={{ scale: index === currentSlide ? 1.3 : 1 }}
            transition={{ duration: 0.3 }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
