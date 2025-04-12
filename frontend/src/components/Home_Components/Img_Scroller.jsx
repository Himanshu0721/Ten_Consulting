import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    url: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_2001,h_1620/https://answerrocket.com/wp-content/uploads/ai-consulting-guide-background-image-1024x829.webp",
    title: "Empowering Startups Across the Globe with TEN's Global Network",
  },
  {
    url: "https://t3.ftcdn.net/jpg/05/67/80/08/240_F_567800850_jtQfLe4KavwpmY8Xvb8A9XIgFhYeIdGa.jpg",
    title: "TEN recognized as a Leader in Zinnov Zones Digital Engineering and ER&D Report, 2023",
  },
  {
    url: "https://t3.ftcdn.net/jpg/01/41/84/54/240_F_141845435_s4eetaMlR3ZfkkKa6ndBNsTOiVTPsuGa.jpg",
    title: "TEN features in Avasant's SAP S/4HANA Services 2023-2024 Radarview",
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


  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] lg:h-screen overflow-hidden">
    <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${images[0].url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full h-full bg-black/40" />
      </div>
      <AnimatePresence>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images[currentSlide].url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1,
              }}
            >
              <div className="w-full h-full bg-black/40 flex items-center justify-center sm:justify-start px-4 sm:px-8 lg:px-16">
                <motion.div
                  className="text-center sm:text-left text-white space-y-4 max-w-2xl z-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
                  {images[currentSlide].title}
                  </h1>
                </motion.div>
              </div>
            </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
