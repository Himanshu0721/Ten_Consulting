import React from "react";

const GenerativeAI = () => {
  return (
    <div className="generative-ai-container font-normal">
      {/* Hero Section */}
      <div
        className="hero-section bg-cover bg-center text-white py-16 h-[110vh] flex flex-col justify-center items-start px-4 sm:px-4 md:px-4 lg:px-4"
        style={{
          backgroundImage:
            "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/2023-05/pawel-czerwinski-PvgqqicSLvA-unsplash_0.webp')",
        }}
      >
        {" "}
        <div className="breadcrumb text-white text-sm sm:text-base md:text-lg lg:text-xl mb-6">
          Home / Services / AI & ML / Generative AI
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-700">
          Generative AI
        </h2>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-xl w-[85%]">
          Generative AI: Your gateway to infinite possibilities - witness the
          cutting-edge power of AI that creates, innovates, and inspires.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section max-w-[1260px] w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto border-b border-gray-500 py-18">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 mb-20 max-w-[1030px] w-[100%] leading-tight">
          Unlocking infinite horizons: How Generative AI empowers industries
          with cutting-edge creativity, innovation, and inspiration.
        </h3>

        <div className="content-section-wrap max-w-[806px] w-full mx-auto text-lg font-300">
          <p className="mt-4 text-gray-700">
            Generative AI is revolutionizing industries with cutting-edge
            creativity, innovation, and inspiration.
          </p>
          <p className="mt-4">
            Welcome to the transformative world of AI! At Ten Consulting, we
            believe that Generative AI holds the key to revolutionizing
            industries and reshaping the way we interact with technology. Our
            innovative Generative AI services harness the power of cutting-edge
            AI and natural language processing (NLP) to create intelligent
            systems that can comprehend and respond to human language in ways
            previously unimaginable.
          </p>
          <p className="mt-4">
            Content creation and marketing: With our advanced Generative AI
            solutions, businesses can automate content generation, from blog
            posts and articles to social media updates. This not only saves time
            but also ensures consistent, high-quality content that resonates
            with target audiences, leading to improved engagement and brand
            loyalty.
          </p>
          <p className="mt-4">
            Leveraging Generative AI, Ten Consulting helps businesses streamline
            customer interactions with intelligent virtual assistants. These
            AI-powered assistants offer 24/7 support, answering customer
            queries, providing personalized recommendations, and enhancing
            overall customer experience, resulting in increased customer
            satisfaction and retention.
          </p>
          <p className="mt-4">
            Our Generative AI offerings are built on state-of-the-art AI
            frameworks and tools, including sophisticated NLP models, LLMs,
            neural networks, and deep learning algorithms. These cutting-edge
            technologies empower businesses to automate repetitive tasks, gain
            valuable customer insights, and optimize decision-making processes,
            transforming their operations and fostering innovation at scale.
          </p>
          <p className="mt-4">
            At Ten Consulting, we boast a remarkable capability to fine-tune
            foundation models, harnessing their latent power to derive impactful
            changes. Our expertise in Generative AI enables us to explore
            endless possibilities for your business's growth and success, as we
            explore new frontiers in AI-driven transformation.
          </p>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="offerings-section max-w-5xl mx-auto py-18 px-6">
        <h3 className="text-xl font-400 text-gray-700 ">Our offerings</h3>
        <h2 className="text-6xl font-600 mt-6 ">Generative AI</h2>
        <div className="offerings-content grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div
            className="offerings-card bg-cover bg-center text-white p-[35px] rounded-lg shadow-md h-[50vh] w-[38vw] mt-8"
            style={{
              backgroundImage:
                "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/L2%20PAGES.jpg')",
            }}
          >
            <p className="mt-2 text-lg text-gray-200">AI-First</p>
            <h3 className="text-[42px] mt-4">Gen AI for Content</h3>
            <p className="mt-8 text-lg">
              Capitalize on the power of Generative AI to create fresh content,
              whether it's text, images, or videos. This automation can boost
              productivity and fuel creativity.
            </p>
            <button className="bg-white text-black p-[15px] mt-6 border rounded-md">
              Let's talk
            </button>
          </div>

          <div className="offerings-list  p-6 ">
            <ul className=" text-gray-700 text-xl">
              <li className="border-b pb-4 pt-4">
                Chatbots and Virtual Assistants
              </li>
              <li className="border-b pb-4 pt-4">Skill Assessment Services</li>
              <li className="border-b pb-4 pt-4">Credit Analysis</li>
              <li className="border-b pb-4 pt-4">Knowledge Databases</li>
              <li className="border-b pb-4 pt-4">
                AI Generated Product/Marketing Campaign
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Ten Consulting for Generative AI? */}
      <div
        className="container  max-w-[100vw] w-full mx-auto mt-12 px-4 bg-cover bg-center bg-no-repeat pt-[255px] pb-[116px]"
        style={{
          backgroundImage:
            "url('	https://cdn.kellton.com/s3fs-public/large-bg.webp')",
        }}
      >
        <div className="reason-wrap bg-opacity-90 p-8 ">
          {/* Header */}
          <div className="reason-header-wrap flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-white text-xl">
                <span className="header-content">
                  Why Ten Consulting for Generative AI?
                </span>
              </p>
              <h2 className="text-4xl md:text-6xl font-600 mt-2">
                <span className="header-content text-white">Just a few reasons why</span>
              </h2>
            </div>
            <button
              className="border border-white text-white py-2 px-6 rounded-lg mt-4 md:mt-0"
              onClick={() =>
                (window.location.href = "/our-global-presence#lets-talk")
              }
            >
              Let’s Work Together
            </button>
          </div>

          {/* Reasons Grid */}
          <div className="mt-8 flex flex-wrap gap-8 text-white">
            {/* Right models tailored to use cases */}
            <div className="reason-grid-inner flex flex-col md:flex-row p-6 w-full lg:w-[48%]">
              <div className="reason-left w-full md:w-1/3 h-32"></div>
              <div className="reason-right w-full md:w-2/3 mt-4 md:mt-0">
                <h5 className="text-2xl font-600">
                  Right models tailored to use cases
                </h5>
                <p className="text-white mt-2 text-xl">
                  At Ten Consulting, we understand cost optimization and the
                  need for accurate models tailored to specific use cases. We
                  meticulously select the right models by considering factors
                  like time to market, cost, and accuracy.
                </p>
              </div>
            </div>

            {/* Expertise in embedding and model fine-tuning */}
            <div className="reason-grid-inner flex flex-col md:flex-row p-6 w-full lg:w-[48%]">
              <div className="reason-left w-full md:w-1/3 h-32 "></div>
              <div className="reason-right w-full md:w-2/3 mt-4 md:mt-0">
                <h5 className="text-2xl font-600">
                  Expertise in embedding and model fine-tuning
                </h5>
                <p className="text-white mt-2 text-xl">
                  Our team has deep expertise in embedding and fine-tuning
                  existing
                  <a href="#" className="text-blue-100 underline">
                    {" "}
                    Large Language Models (LLMs)
                  </a>
                  . This allows us to deliver customized solutions for our
                  clients.
                </p>
              </div>
            </div>

            {/* Leverage open-source systems and SaaS APIs */}
            <div className="reason-grid-inner flex flex-col md:flex-row p-6 w-full lg:w-[48%]">
              <div className="reason-left w-full md:w-1/3 h-32 rounded-lg"></div>
              <div className="reason-right w-full md:w-2/3 mt-4 md:mt-0">
                <h5 className="text-2xl font-600">
                  Leverage open-source systems and SaaS APIs
                </h5>
                <p className="text-white mt-2 text-xl">
                  We leverage powerful open-source systems and SaaS APIs to
                  enhance our solutions, allowing businesses to optimize
                  resources while achieving high efficiency.
                </p>
              </div>
            </div>

            {/* Customer-Centric Approach */}
            <div className="reason-grid-inner flex flex-col md:flex-row p-6 w-full lg:w-[48%]">
              <div className="reason-left w-[30%] h-[2px] bg-gradient-to-r from-gray-200 to-white h-32 rounded-lg mt-4 mr-4"></div>
              <div className="reason-right w-full md:w-2/3 mt-4 md:mt-0">
                <h5 className="text-2xl font-600">
                  Customer-Centric Approach
                </h5>
                <p className="text-white mt-2 text-xl">
                  At Ten Consulting, we put customers at the center of
                  everything we do. We tailor our Generative AI solutions to
                  match specific needs and deliver real business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI;
