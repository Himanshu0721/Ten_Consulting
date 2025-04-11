import { motion } from "framer-motion";

const AiMlContent = () => {
  return (
    <motion.div 
      className="flex justify-center items-center pt-6 w-full overflow-hidden flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className="w-full flex flex-col bg-gray-200 justify-center items-center p-6 text-center"
        style={{
          backgroundImage: "url('https://cdn.prod.website-files.com/66fc2ff3074bb309fb4d56fc/66fc2ff3074bb309fb4d598c_blog-card-thumbnail_digital-twin-generation-architecture.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <motion.img
          src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/ai-first.png"
          alt="AI First"
          className="mb-4 w-20 h-30 object-contain mr-12 flex items-left text-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h3 
          className="text-xl text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] text-left font-semibold text-white w-[70%] pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Empowering business and tech functions with AI and Generative AI to boost efficiency, delight customers, and spark breakthrough innovations.
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default AiMlContent;
