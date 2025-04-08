import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = ({ heroData }) => {
    const topRef = useRef(null);
    const [isTopInView, setIsTopInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsTopInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (topRef.current) observer.observe(topRef.current);
    return () => observer.disconnect();
    }, []);

    return (
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
                    className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg"
                >
                    <ol className="flex space-x-2 ml-6">
                        {heroData.breadcrumb.map((item, index) => (
                        <li key={index}>
                            {item.link ? (
                            <a href={item.link} className="text-white hover:underline">
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
    );
};

export default HeroSection;
