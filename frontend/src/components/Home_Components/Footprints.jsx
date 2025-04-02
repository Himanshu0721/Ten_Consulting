import { motion } from "framer-motion";

const recognitions = [
  {
    title: "Kellton Featured as 'Leader' in Zinnov Zones ER&D Digital Engineering Report, 2023-24",
    date: "February, 2024",
    category: "ENDORSED",
    logo: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/zz2023.png", // Replace with actual image URL
    link: "#",
    bgColor: "bg-yellow-100"
  },
  {
    title: "Kellton featured as 'Challenger' in Avasant SAP S4/HANA Services RadarView Report, 2024",
    date: "February, 2024",
    category: "FEATURED",
    logo: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Isolation_Mode%20(2).png", // Replace with actual image URL
    link: "#",
    bgColor: "bg-blue-100"
  },
  {
    title: "Kellton Featured as 'Product Challenger' in ISG SAP Ecosystem Report 2022-23",
    date: "May, 2023",
    category: "VALIDATED",
    logo: "https://kellton-uat.s3.amazonaws.com/s3fs-public/isg2.png", // Replace with actual image URL
    link: "#",
    bgColor: "bg-purple-100"
  }
];

export default function SuccessFootprints() {
  return (
    <div className="py-10 px-5 md:px-20 mt-45" >
      <p className="text-">Analyst Recognitions</p>  
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Footprints of our success</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recognitions.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
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
      </div>
    </div>
  );
}
