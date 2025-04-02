import React, { useState, useEffect } from "react";
  

// <---- Image Scroller Array ---->
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

// <---- Image Scroller Data ---->
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 3000; // 3 seconds

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-40">
            <div className="text-center text-white space-y-4">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Previous & Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        ❯
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


export default Carousel;
