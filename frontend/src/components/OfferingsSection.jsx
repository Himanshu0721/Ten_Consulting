import { motion } from "framer-motion";

const OfferingsSection = ({ offerings }) => {
    return (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="offerings-section max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
        <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-gray-700"
        >
            Our Offerings
        </motion.h3>
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4"
        >
            AI-Innovation
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="offerings-content flex flex-col lg:flex-row lg:items-start mt-10 gap-6"
        >
        {/* Offerings Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="offerings-card bg-cover bg-center text-white p-6 sm:p-8 rounded-lg shadow-md h-auto w-full lg:w-[45%] flex flex-col justify-between"
                style={{
                    backgroundImage: "url('https://cdn.prod.website-files.com/66fc2ff3074bb309fb4d56fc/66fc2ff3074bb309fb4d598c_blog-card-thumbnail_digital-twin-generation-architecture.webp')",
                }}
            >
                <p className="text-sm sm:text-base text-gray-200">✨ AI-First</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-400">
                    Revolutionizing Content with AI
                </h3>
                <p className="text-lg sm:text-md mt-4">
                    Capitalize on AI-Innovation to create fresh content, whether it's
                    text, images, or videos. This automation boosts productivity & fuels
                    creativity.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white w-[40%] text-black py-2 px-4 sm:py-3 sm:px-6 mt-4 border rounded-md text-sm sm:text-base"
                >
                    Let's Talk
                </motion.button>
            </motion.div>

        {/* Offerings List */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="offerings-list w-full lg:w-[55%]"
            >
                <ul className="text-gray-700 text-sm sm:text-base md:text-lg mb-16">
                    {offerings.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                        className="border-b pb-3 pt-3 cursor-pointer"
                        onClick={() => {
                            document
                                .getElementById(`answer-${index}`)
                                .classList.toggle("hidden");
                            document
                                .getElementById(`icon-${index}`)
                                .classList.toggle("rotate-180");
                        }}
                    >
                        <div className="flex justify-between items-center">
                            {item.title}
                            <span id={`icon-${index}`} className="transition-transform transform text-xl font-semibold" > + </span>
                        </div>
                        <p id={`answer-${index}`} className="hidden mt-2 text-gray-600 text-sm sm:text-base" > {item.content}</p>
                    </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    </motion.div>
    );
};

export default OfferingsSection;
