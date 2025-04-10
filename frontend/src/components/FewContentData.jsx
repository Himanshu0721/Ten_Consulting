import { motion } from "framer-motion";

const FewContentData = ({fewData}) => {
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
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/thumbnails/021/793/030/small_2x/shadows-on-blue-background-with-overlay-effect-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[42px] text-left font-semibold text-white w-[80%] pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
        {fewData.heading}
        </motion.h3>
      </div>
    </motion.div>
  );
};
export default FewContentData;
