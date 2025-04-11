import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "TEN has been an invaluable partner in our digital transformation journey. Their expertise and innovation have helped us stay ahead.",
    name: "John Doe",
    title: "CTO, TechCorp Ltd.",
    image: "https://m.media-amazon.com/images/M/MV5BODUyNzM1NzY0NF5BMl5BanBnXkFtZTYwNjk5ODQ0._V1_FMjpg_UX308_.jpg"
  },
  {
    text: "We've seen a remarkable improvement in efficiency since working with TEN. Their solutions are top-notch!",
    name: "Sarah Smith",
    title: "CEO, InnovateX",
    image: "https://thelead.uk/sites/default/files/2024-07/445777499_8079066162115225_9081191787631245274_n.jpg"
  },
  {
    text: "TEN's team is exceptional. Their ability to adapt and deliver beyond expectations is truly commendable.",
    name: "Michael Brown",
    title: "VP of Operations, FinTech Solutions",
    image: "https://marvel-b1-cdn.bc0a.com/f00000000103807/www.cityyear.org/wp-content/uploads/2022/03/Michael_Brown_Headshot_ehaney.jpg"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-blue-900 text-white py-12 px-6 md:px-20 shadow-xl overflow-hidden">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center md:text-left"
      >
        What our clients say
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-8">
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg italic leading-relaxed">
                “{testimonials[index].text}”
              </p>
              <div>
                <p className="mt-2 font-bold text-xl">{testimonials[index].name}</p>
                <p className="text-sm text-blue-200">{testimonials[index].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          key={index}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        <a
          href="#"
          className="text-white text-sm md:text-base font-semibold underline hover:text-blue-200 transition"
        >
          View All →
        </a>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="p-2 bg-white text-blue-900 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <FaChevronLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="p-2 bg-white text-blue-900 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            <FaChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
