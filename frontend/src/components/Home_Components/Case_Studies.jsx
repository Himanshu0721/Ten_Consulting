import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CaseStudies() {
    const caseStudies = [
        {
          title: "AI & ML",
          company: "Evise.ai",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Evise.webp",
          head: "Transforming Business Advisory with Generative AI",
        },
        {
          title: "Digital Experience",
          company: "Americana",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Americana.webp",
          head: "Building seamless customer experiences with data for a leading fast-food company",
        },
        {
          title: "AI & ML",
          company: "AIDASH",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/AIDASH.webp",
          head: "AI-driven Disaster Management for a sustainable future",
        },
        {
          title: "Product Engineering",
          company: "ZEE5",
          image: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Zee5.webp",
          head: "Building cohesive and interconnected content experiences for an Indian major streaming platform",
        },
        {
          title: "Cloud Engineering",
          company: "Yum!",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Yum.webp",
          head: "A Cloud-ready architecture supercharged our customer's food business",
        },
        {
          title: "Digital Experience",
          company: "HUMBL",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/Humbl%20%281%29.webp",
          head: "Creating a high-quality NFT Marketplace for a FinTech Enterprise",
        },
        {
          title: "SAP SLO",
          company: "SI Group",
          image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2024-04/SI%20Group.webp",
          head: "Achieving a seamless carve-out for a US-based global chemical manufacturing giant",
        },
      ];
    

      const sectionRef = useRef(null);
      const isInView = useInView(sectionRef, { once: true });
    
      const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
          },
        }),
      };
    
      return (
        <div ref={sectionRef} className="bg-gray-900 text-white p-8">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-blue-400 uppercase text-sm">Case studies</h3>
            <h2 className="text-3xl font-bold mt-2">Innovation at work</h2>
    
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  className="group perspective w-full h-80"
                >
                  <div className="card-3d">
                    {/* Front Side */}
                    <div className="card-face rounded-lg overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-teal-600 bg-opacity-80 p-3 flex justify-between">
                        <p className="text-lg font-dark">{study.title}</p>
                        <p className="text-lg font-semibold">{study.company}</p>
                      </div>
                    </div>
    
                    {/* Back Side */}
                    <div className="card-face card-back bg-teal-600 text-white rounded-lg flex flex-col justify-center items-center p-4 text-center">
                      <h3 className="text-lg font-bold">{study.head}</h3>
                      <a href="#" className="mt-2 text-black underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
    
            <div className="mt-6 text-right">
              <a
                href="#"
                className="inline-block px-5 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-gray-900 transition"
              >
                View All Case Studies →
              </a>
            </div>
          </div>
        </div>
      );
    }