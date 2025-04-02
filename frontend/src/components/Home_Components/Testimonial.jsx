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
    <div className="bg-blue-900 text-white py-12 px-6 md:px-20 rounded-lg">
      <h5 className="text-xl md:text-2xl font-semibold">What our clients say</h5>
      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="w-full md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg italic">“{testimonials[index].text}”</p>
              <p className="mt-4 font-bold">{testimonials[index].name}</p>
              <p className="text-sm">{testimonials[index].title}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="relative w-48 h-48 mt-6 md:mt-0">
          <img
            src={testimonials[index].image}
            alt="Client"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <a href="#" className="text-white font-semibold underline">View All →</a>
        <div className="flex space-x-4">
          <button onClick={prevSlide} className="p-2 bg-white text-blue-900 rounded-full shadow-md">
            <FaChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 bg-white text-blue-900 rounded-full shadow-md">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
