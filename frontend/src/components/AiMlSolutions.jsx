import { motion } from "framer-motion";

const AiMlSolutions = () => {
  const solutions = [
    {
      title: "AI-Powered Insights",
      description:
        "Gain deep insights into your business operations with cutting-edge AI solutions. Our advanced analytics help you uncover hidden patterns, optimize processes, and enhance decision-making with real-time data-driven intelligence.",
      link: "/ai-ml/ai-insights",
    },
    {
      title: "Smart Automation",
      description:
        "Leverage AI-driven automation to boost efficiency and reduce manual effort. Our intelligent automation solutions streamline repetitive tasks, enhance accuracy, and free up your team to focus on strategic initiatives.",
      link: "/ai-ml/smart-automation",
    },
    {
      title: "Predictive Intelligence",
      description:
        "Stay ahead of the curve with predictive analytics. Our AI models analyze historical data to forecast trends, identify growth opportunities, and mitigate potential risks, empowering you to make proactive business decisions.",
      link: "/ai-ml/predictive-intelligence",
    },
    {
      title: "Conversational AI",
      description:
        "Enhance customer interactions with AI-powered chatbots and voice assistants. Deliver personalized experiences, provide instant support, and create seamless engagement across multiple touchpoints, ensuring superior user satisfaction.",
      link: "/ai-ml/conversational-ai",
    },
  ];

  return (
    <motion.div
      className="p-6 text-left m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-bold mb-6">Explore Our AI & ML Solutions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] text-gray-800 font-semibold mb-2">
              {solution.title}
            </h3>
            <p className="text-gray-700 mb-4 xs:text-lg sm:text-lg md:text-xl lg:text-[12px] xl:text-[18px]">
              {solution.description}
            </p>
            <a href={solution.link} className="text-blue-500 hover:underline">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AiMlSolutions;
