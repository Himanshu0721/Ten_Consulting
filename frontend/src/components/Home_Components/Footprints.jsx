import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const recognitions = [
  {
    title: "TEN Honored as a Leading Platform for Startup Education & Innovation, 2024",
    date: "March, 2024",
    category: "RECOGNIZED",
    logo: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/zz2023.png",
    link: "#",
    bgColor: "bg-yellow-100",
  },
  {
    title: "TEN Featured in Top 10 EdTech Startups Revolutionizing Digital Learning",
    date: "January, 2024",
    category: "FEATURED",
    logo: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Isolation_Mode%20(2).png",
    link: "#",
    bgColor: "bg-blue-100",
  },
  {
    title: "TEN Validated by Industry Experts for Building a Global Entrepreneurial Ecosystem",
    date: "November, 2023",
    category: "VALIDATED",
    logo: "https://kellton-uat.s3.amazonaws.com/s3fs-public/isg2.png",
    link: "#",
    bgColor: "bg-purple-100",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
    },
  }),
};

export default function SuccessFootprints() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div ref={sectionRef} className="py-10 px-5 md:px-20">
      <p className="text-gray-700 uppercase tracking-wider text-sm">Analyst Recognitions</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Footprints of our success</h2>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {recognitions.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            custom={index}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-2xl shadow-lg ${item.bgColor} transition-transform duration-300 block`}
          >
            <span className="px-3 py-1 text-sm font-semibold bg-white rounded-md shadow-md">
              {item.category}
            </span>
            <img src={item.logo} alt="logo" className="mt-4 w-24" />
            <p className="mt-4 text-lg font-semibold text-gray-800">{item.title}</p>
            <p className="mt-2 text-gray-600 text-sm">{item.date}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
