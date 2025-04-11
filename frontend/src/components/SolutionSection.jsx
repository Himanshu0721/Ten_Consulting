import { motion } from "framer-motion";


const SolutionSection = ({solution}) => {
    console.log(solution.heading);
  return (
    <motion.div
      className="p-6 text-left m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-bold mb-6">
        {solution.heading}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {solution.services.map((text, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] text-gray-800 font-semibold mb-2">
              {text.title}
            </h3>
            <p className="text-gray-700 mb-4 xs:text-lg sm:text-lg md:text-xl lg:text-[12px] xl:text-[18px]">
              {text.description}
            </p>
            <a href={text.link} className="text-blue-500 hover:underline">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default SolutionSection;
