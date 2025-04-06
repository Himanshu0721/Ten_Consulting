import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    clientImage: "/testimonial_logo.png",
    authorImage: "/testimonial_person.png",
    authorName: "Krishna Tangella",
    authorTitle: "Founder & CEO, DoveMed",
    testimonial:
      '"Despite the numerous challenges that emerged throughout the project, Tivix built an incredibly complex platform. The website is well-structured, stable, and able to accommodate 500,000 users each month. More than 1.2 million physicians are registered on the site, and traffic is increasing by 15% each month."',
  },
  {
    clientImage: "/testimonial_logo2.png",
    authorImage: "/testimonial_person2.png",
    authorName: "William Bowers",
    authorTitle: "Co-Founder & CEO, Evise.ai",
    testimonial:
      '"We chose Kellton as a partner because they had a good reputation with their customers. Though new to Generative AI, Kellton has all the right talents needed to build the innovative platform. Kellton has been with Evise every step of the way, from sales engagement to testing, and working with Kellton has been enjoyable overall."',
  },
];

const TestimonialsSection = () => {
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
      <motion.h5
        initial={{ opacity: 0, y: 30 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-sm md:text-lg mb-4 font-normal text-gray-900 max-w-[1030px] w-full leading-snug"
      >
        Know what they say about us
      </motion.h5>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-normal text-gray-900 mb-10 sm:mb-14 md:mb-16 lg:mb-20 max-w-[1030px] w-full leading-snug"
      >
        Testimonials
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="max-w-[806px] w-full mx-auto text-sm xs:text-base sm:text-lg md:text-xl font-light space-y-12"
      >
        {testimonials.map((t, i) => (
          <div key={i} className="space-y-7">
            <img src={t.clientImage} alt="Client Logo" className="h-full w-auto" />
            <p className="font-medium text-sm tracking-normal leading-6">
              {t.testimonial}
            </p>
            <div className="flex items-center justify-end gap-2">
              <img src={t.authorImage} alt={t.authorName} className="h-full w-auto" />
              <div className="flex flex-col justify-center">
                <span className="font-medium text-sm tracking-normal">
                  {t.authorName}
                </span>
                <span className="font-medium text-xs tracking-normal">
                  {t.authorTitle}
                </span>
              </div>
            </div>
            <hr className="border-b-[0.5px] border-gray-300 my-4" />
          </div>
        ))}

        <div className="grid place-items-center"><button className="bg-white border border-gray-400 cursor-pointer px-4 py-2 text-sm text-gray-900 font-medium focus:outline-0">See More Testimonials</button></div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsSection;
