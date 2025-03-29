import { React, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";


const GenerativeAI = () => {

  const topRef = useRef(null);
  const contentRef = useRef(null);
  const offeringRef = useRef(null);
  const funFactRef = useRef(null);
  const leadingRef = useRef(null);
  const insightRef = useRef(null);
  const justRef = useRef(null);

  const isTopInView = useInView(topRef, { triggerOnce: false, margin: "-100px" });
  const isContentInView = useInView(contentRef, { triggerOnce: false, margin: "-100px" });
  const isOfferingInView = useInView(offeringRef, { triggerOnce: false, margin: "-100px" });
  const isJustInView = useInView(justRef, { triggerOnce: false, margin: "-100px" })
  const isFunFactInView = useInView(funFactRef, { triggerOnce: false, margin: "-100px" });
  const isLeadingInView = useInView(leadingRef, { triggerOnce: false, margin: "-100px" });
  const isInsightInView = useInView(insightRef, { triggerOnce: false, margin: "-100px" });


  const offerings = [
    {
      title: "Chatbots and Virtual Assistants",
      content:
        "Our Chatbots/Virtual Assistants services encompass AI-powered chatbot development, virtual assistant integration, and natural language processing (NLP) capabilities.",
    },
    {
      title: "Skill Assessment Services",
      content:
        "Kellton's skill assessment offering incorporates a powerful tool capable of generating dynamic questions and accurately assessing candidate responses. Our rating system ensures a transparent evaluation of the candidate's skill level, providing valuable insights for informed decision-making.",
    },
    {
      title: "Credit Analysis",
      content:
        "Our Credit Analysis services encompass advanced data analysis and Generative AI algorithms that can generate synthetic data to augment the limited labeled data for credit risk modeling.",
    },
    {
      title: "Knowledge Databases",
      content:
        "Leveraging Generative AI, we enable businesses to automatically generate high-quality and relevant content, create concise summaries of large documents, and structure knowledge for efficient retrieval and analysis.",
    },
    {
      title: "AI Generated Product/Marketing Campaign",
      content:
        "Our AI-generated product/marketing campaign services encompass AI-powered content creation, product design, and marketing campaign optimization.",
    },
  ];

  return (
    <div className="generative-ai-container font-normal">
      {/* Top-Section */}
      <div className="-nid views-row relative">
        <div
          className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-start px-4 relative h-[80vh] sm:h-[90vh] md:h-[100vh] lg:h-[110vh]"
          style={{
            backgroundImage:
              "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-05/pawel-czerwinski-PvgqqicSLvA-unsplash_0.webp')",
          }}
        >
          <motion.div
            ref={topRef}
            initial={{ opacity: 0, y: -50 }}
            animate={isTopInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute top-1/2 right-2 sm:right-8 md:left-18 transform -translate-y-1/2 max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] text-left"
          >
            <motion.nav
              initial={{ opacity: 0, x: -20 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              aria-label="Breadcrumb Navigation"
              role="navigation"
              className="mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <ol className="flex space-x-2 ml-6">
                <li>
                  <a href="/" className="text-white hover:underline">
                    Home
                  </a>{" "}
                  /
                </li>
                <li>
                  <a
                    href="/our-services"
                    className="text-white hover:underline"
                  >
                    Services
                  </a>{" "}
                  /
                </li>
                <li>
                  <a href="/ai-ml" className="text-white hover:underline">
                    AI & ML
                  </a>{" "}
                  /
                </li>
                <li className="text-white">AI-Powered Innovation</li>
              </ol>
            </motion.nav>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              AI-Powered Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isTopInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.8 }}
              className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl"
            >
              Unleashing the future with AI—transforming ideas into reality,
              driving creativity, and revolutionizing industries.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Content-Section */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: -50 }}
        animate={isContentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="content-section max-w-[1260px] w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto border-b border-gray-500 py-10 sm:py-14 md:py-16 lg:py-18"
      >
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 mb-10 sm:mb-14 md:mb-16 lg:mb-20 max-w-[1030px] w-full leading-snug"
        >
          Unlocking infinite horizons: How Generative AI empowers industries
          with cutting-edge creativity, innovation, and inspiration.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="content-section-wrap max-w-[806px] w-full mx-auto text-sm xs:text-base sm:text-lg md:text-xl font-light"
        >
          {[
            "Generative AI is revolutionizing industries with cutting-edge creativity, innovation, and inspiration.",
            "Welcome to the transformative world of AI! At Ten Consulting, we believe that Generative AI holds the key to revolutionizing industries and reshaping the way we interact with technology. Our innovative Generative AI services harness the power of cutting-edge AI and natural language processing (NLP) to create intelligent systems that can comprehend and respond to human language in ways previously unimaginable.",
            "Content creation and marketing: With our advanced Generative AI solutions, businesses can automate content generation, from blog posts and articles to social media updates. This not only saves time but also ensures consistent, high-quality content that resonates with target audiences, leading to improved engagement and brand loyalty.",
            "Leveraging Generative AI, Ten Consulting helps businesses streamline customer interactions with intelligent virtual assistants. These AI-powered assistants offer 24/7 support, answering customer queries, providing personalized recommendations, and enhancing overall customer experience, resulting in increased customer satisfaction and retention.",
            "Our Generative AI offerings are built on state-of-the-art AI frameworks and tools, including sophisticated NLP models, LLMs, neural networks, and deep learning algorithms. These cutting-edge technologies empower businesses to automate repetitive tasks, gain valuable customer insights, and optimize decision-making processes, transforming their operations and fostering innovation at scale.",
            "At Ten Consulting, we boast a remarkable capability to fine-tune foundation models, harnessing their latent power to derive impactful changes. Our expertise in Generative AI enables us to explore endless possibilities for your business's growth and success, as we explore new frontiers in AI-driven transformation.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              className="mt-4 text-gray-700"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      {/* Offering Section */}
      <motion.div
        ref={offeringRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="offerings-section max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl font-medium text-gray-700"
        >
          Our Offerings
        </motion.h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4"
        >
          Generative AI
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="offerings-content flex flex-col lg:flex-row lg:items-start mt-10 gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="offerings-card bg-cover bg-center text-white p-6 sm:p-8 rounded-lg shadow-md h-[400px] sm:h-[450px] lg:h-[50vh] w-full lg:w-[45%] flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/L2%20PAGES.jpg')",
            }}
          >
            <p className="text-sm sm:text-base text-gray-200">✨ AI-First</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl w-[70%] sm:w-full md:w-[60%] font-400">
              Revolutionizing Content with AI
            </h3>
            <p className="text-lg sm:text-md mt-4 md:w-[60%]">
              Capitalize on the power of Generative AI to create fresh content,
              whether it's text, images, or videos. This automation can boost
              productivity / fuel creativity.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white w-[40%] text-black py-2 px-4 sm:py-3 sm:px-6 mt-4 border rounded-md text-sm sm:text-base"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="offerings-list w-full lg:w-[55%]"
          >
            <ul className="text-gray-700 text-sm sm:text-base md:text-lg">
              {offerings.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isOfferingInView ? { opacity: 1, x: 0 } : {}}
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
                    <span
                      id={`icon-${index}`}
                      className="transition-transform transform text-xl font-semibold"
                    >
                      +
                    </span>
                  </div>
                  <p
                    id={`answer-${index}`}
                    className="hidden mt-2 text-gray-600 text-sm sm:text-base"
                  >
                    {item.content}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Just few section */}
      <div
        className="outer-container max-w-[100vw] w-full mx-auto mt-12 px-4 bg-cover bg-center bg-no-repeat pt-[255px] pb-[116px] sm:pt-[100px] sm:pb-[80px] xs:pt-[100px] xs:pb-[60px]"
        style={{
          backgroundImage:
            "url('https://cdn.kellton.com/s3fs-public/large-bg.webp')",
        }}
      >
        <div className="reason-wrap bg-opacity-90 p-4 max-w-[100vw] w-full">
          <motion.div
            ref={justRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isJustInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="reason-header-wrap flex flex-col md:flex-row items-left justify-between"
          >
            <div className="text-left md:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white text-lg xs:text-xl sm:text-2xl"
              >
                <span className="header-content">
                  Unlock AI's Full Potential
                </span>
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isJustInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-500 mt-2 text-white"
              >
                <span className="header-content">Harness AI for Success</span>
              </motion.h2>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isJustInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="border border-white text-lg mt-4 sm:mt-8 md:mt-12 text-white text-lg w-[50%] sm:w-auto md:w-[20%] lg:w-[15%] rounded-lg px-2 transition duration-300 hover:bg-white hover:text-black"
              onClick={() =>
                (window.location.href = "/our-global-presence#lets-talk")
              }
            >
              Start Now
            </motion.button>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 text-white">
            {[
              {
                title: "💠 Custom AI Solutions",
                content:
                  "We design AI models tailored to your unique business needs, ensuring seamless integration and maximum efficiency.",
              },
              {
                title: "💠 Advanced Model Training",
                content:
                  "Our experts fine-tune AI models using real-world data, enhancing accuracy and performance to drive better outcomes.",
              },
              {
                title: "💠 Seamless AI Integration",
                content:
                  "We integrate AI-driven automation into your existing systems, improving productivity and reducing manual workload.",
              },
              {
                title: "💠 AI-Powered Insights",
                content:
                  "Gain deep business insights with AI-driven analytics, helping you make smarter and data-backed decisions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isJustInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="reason-grid-inner flex flex-col sm:flex-row"
              >
                <div className="reason-right w-full sm:w-3/4">
                  <h5 className="text-xl sm:text-2xl font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-white mt-2 text-lg">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fun Fact Section */}
      <motion.div
        ref={funFactRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="fun-fact-main-wrap mt-12 text-center px-4"
      >
        <div className="fun-container py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="fun-fact flex flex-col md:flex-row bg-[#5B45A8] p-6 sm:p-10 rounded-lg text-white w-full max-w-5xl mx-auto"
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="face-media flex justify-center items-center mx-auto md:mx-0"
            >
              <img
                alt="AI Innovation"
                height="180"
                width="230"
                src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Purple%20(1).webp"
                className="block max-w-[90%] h-auto md:h-[70%]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="fact-content mt-6 md:mt-0 md:ml-6 w-full text-start"
            >
              <div className="fact-filled flex items-center gap-3">
                <img
                  alt="Fun Fact Icon"
                  src="https://d3tj4wnms16o5e.cloudfront.net/s3fs-public/fun-fact-star.png"
                  className="h-5 w-auto"
                />
                <p className="text-lg font-bold uppercase">AI FACT</p>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="fact-title text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 mb-3"
              >
                AI-powered chatbots handle <strong>85%</strong> of customer
                interactions, improving efficiency and satisfaction.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isFunFactInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="fact-body-text text-base sm:text-lg mt-2"
              >
                Embrace AI-driven customer service and elevate engagement like
                never before.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Leading Section */}

      <motion.div
        ref={leadingRef}
        initial={{ opacity: 0, x: 50 }}
        animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="leading-transformation-container mx-auto p-6 sm:p-8 md:p-12 lg:p-16"
      >
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold text-black text-left"
        >
          Pioneering AI-Driven Business Innovation
        </motion.h2>

        <div className="transformation-images mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {[
            {
              img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-07/omnichannel-excellence-hospitality-leader%20%28Thumbnail%29.webp?itok=060k_l3C",
              alt: "AI in Hospitality",
              region: "APAC",
              title:
                "Elevating customer experiences with AI-powered hospitality solutions",
            },
            {
              img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-08/Empowering%20the%20legal%20landscape%20Thumbnail.webp?itok=GantJ2pv",
              alt: "AI in Law",
              region: "USA",
              title: "Transforming legal operations with AI-driven automation",
            },
            {
              img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-08/Incorporating%20AI-Powered%20ChatGPT%20and%20Master%20Data%20Management%20Thumbnail.webp?itok=5B0x6BOb",
              alt: "AI in Finance",
              region: "Europe",
              title: "Driving financial innovation with AI-powered analytics",
            },
            {
              img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/2023-08/Building%20the%20future%20of%20Business%20Advisory%20Thumbnail.webp?itok=QaTUVSMd",
              alt: "AI in Supply Chain",
              region: "Global",
              title:
                "Optimizing global supply chains with AI-powered forecasting",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isLeadingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              className="image-wrapper rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-lg mt-2 font-semibold text-gray-500">
                {item.region}
              </p>
              <p className="text-xl sm:text-2xl font-bold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Insight Section */}
      <motion.div
      ref={insightRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-[#06122C] text-white p-8 md:p-12 lg:p-16 min-h-auto"
    >
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl font-medium text-gray-400 mb-6"
      >
        Explore Our Insights
      </motion.p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 md:mb-0"
        >
          Stay Ahead with the Latest Trends
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#06122C" }}
          aanimate={isInsightInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="mt-2 md:mt-0 text-lg md:text-xl p-2 px-4 text-white font-semibold rounded-lg flex items-center gap-2 border border-white"
        >
          Explore <FaArrowRight />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
        {[
          {
            img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/550x460-genai.webp?itok=48sLquZn",
            title: "How AI is Transforming Digital Marketing in 2024",
            date: "August 15, 2024",
          },
          {
            img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/Thumbnail-Traditionald.webp?itok=KMN7AyxS",
            title: "Top Cybersecurity Trends Every Business Should Know",
            date: "August 5, 2024",
          },
          {
            img: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/styles/case_studies_550px_460px/public/AI%20for%20Data%20Analysis.webp?itok=thNRESzz",
            title: "Blockchain Beyond Cryptocurrency: The Future of Secure Transactions",
            date: "July 20, 2024",
          },
        ].map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInsightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
            className="rounded-lg overflow-hidden"
          >
            <img src={insight.img} alt={insight.title} className="rounded-lg w-full h-auto object-cover" />
            <p className="text-md text-gray-400 mt-4">Tech Insights</p>
            <p className="text-lg font-semibold mt-2">{insight.title}</p>
            <p className="text-md text-gray-400 mt-1">{insight.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
    
    {/* Add Contact Form Below */}
    </div>
  );
};

export default GenerativeAI;
