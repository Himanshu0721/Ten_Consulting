import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const allTestimonials = [
  {
    authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
    authorName: "Alex Carter",
    authorTitle: "Product Manager at Novalink",
    testimonial:
      "Working with TEN was a turning point for our product. They took our abstract ideas and turned them into something tangible and effective. The strategy they proposed aligned perfectly with our goals. We felt like they truly understood our mission.",
  },
  {
    authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
    authorName: "Mia Thompson",
    authorTitle: "Design Lead at Creatix",
    testimonial:
      "The team’s communication and organization were outstanding. Every update felt timely, relevant, and clear. We never felt left in the dark, even during fast-moving sprints. Collaboration was effortless and surprisingly fun.",
  },
  {
    authorImage: "https://randomuser.me/api/portraits/men/52.jpg",
    authorName: "Jordan Malik",
    authorTitle: "CTO at Skyvault Technologies",
    testimonial:
      "We’ve worked with many developers, but TEN stands out for code quality and architecture. The system they built has been rock-solid with zero issues post-launch. Their attention to scalability and maintainability was impressive. It’s clear they care about long-term success.",
  },
  {
    authorImage: "https://randomuser.me/api/portraits/women/23.jpg",
    authorName: "Priya Desai",
    authorTitle: "Operations Head at FlowLogic",
    testimonial:
      "We saw results faster than we expected. Within weeks, our internal tools were streamlined, and productivity noticeably improved. They didn’t just build features—they understood how we work and optimized accordingly. We’d gladly hire them again.",
  },
  {
    authorImage: "https://randomuser.me/api/portraits/men/11.jpg",
    authorName: "Felix Navarro",
    authorTitle: "Creative Director at NeonHive",
    testimonial:
      "Their design work is clean, modern, and user-friendly. They grasped our branding instantly and delivered without needing endless revisions. Every component felt purposeful and polished. It was design that actually worked, not just looked pretty.",
  },
  {
    authorImage: "https://randomuser.me/api/portraits/women/48.jpg",
    authorName: "Isabella Laurent",
    authorTitle: "VP of Engineering at Corefield Labs",
    testimonial:
      "TEN proved to be one of the most dependable teams we’ve ever worked with. Deadlines were always met, and the deliverables exceeded expectations. Even in crunch moments, they remained calm and focused. You can count on them when it matters most.",
  },
];

const featuredTestimonials = allTestimonials.slice(0, 3);

const TestimonialsSection = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });

  const [testimonials, setTestimonials] = useState(featuredTestimonials);

  const toggleTestimonials = () => {
    setTestimonials(
      testimonials === featuredTestimonials
        ? allTestimonials
        : featuredTestimonials
    );
  };

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
          <div
            key={i}
            className="space-y-7 text-center md:text-left md:space-y-4"
          >
            <p className="font-medium text-base sm:text-lg md:text-xl italic tracking-normal leading-relaxed relative px-8 md:px-0">
              "{t.testimonial}"
            </p>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-end">
              <img
                src={t.authorImage}
                alt={t.authorName}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
              />
              <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:ml-3">
                <span className="font-medium text-sm sm:text-base tracking-normal">
                  {t.authorName}
                </span>
                <span className="font-medium text-xs sm:text-sm tracking-normal">
                  {t.authorTitle}
                </span>
              </div>
            </div>
            <hr className="border-b-[0.5px] border-gray-300 my-4 max-w-[200px] mx-auto md:ml-0" />
          </div>
        ))}

        <div className="grid place-items-center">
          <button
            onClick={toggleTestimonials}
            className="bg-white border border-gray-400 cursor-pointer px-4 py-2 text-sm sm:text-base text-gray-900 font-medium focus:outline-0"
          >
            {testimonials.length === featuredTestimonials.length
              ? "See More Testimonials"
              : "See Less"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialsSection;
