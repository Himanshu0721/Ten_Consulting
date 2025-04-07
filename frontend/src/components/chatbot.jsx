import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import {
  FaHome,
  FaPaperPlane,
  FaMobileAlt,
  FaComments,
  FaArrowLeft,
  FaBriefcase,
  FaBullhorn,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLanding, setIsLanding] = useState(true);

  const [isExpanded, setIsExpanded] = useState(true); // Controls chat expansion
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls menu dropdown
  const sentSoundRef = useRef(null);
  const receivedSoundRef = useRef(null);


  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "Hi there! 👋 Welcome to TEN! It's great to have you here. How can I assist you today?",
          sender: "bot",
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;


  const handleSend = (message, option) => {
    const userMessage = message || input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    sentSoundRef.current?.play();

    setInput("");
    setIsTyping(true);

    if (option) {
      setHiddenOptions((prev) => [...prev, option]);
    }

    setTimeout(() => {
      let botResponse = "I'm not sure how to answer that.";
      if (userMessage.toLowerCase().includes("mobility")) {
        botResponse = "Mobility services include app development and cloud-based solutions. 🚀";
      } else if (userMessage.toLowerCase().includes("services")) {
        botResponse = "We offer Digital Transformation, AI, and ML solutions! 🤖";
      } else if (userMessage.toLowerCase().includes("support")) {
        botResponse = "For support, visit our website or email us at support@company.com. 📩";
      } else if (userMessage.toLowerCase().includes("careers")) {
        botResponse = "Explore exciting career opportunities at TEN! 💼 Visit our careers page for more info.";
      } else if (userMessage.toLowerCase().includes("media partner")) {
        botResponse = "Become our media partner and amplify your reach! 📢 Contact our PR team for collaborations.";
      } else if (userMessage.toLowerCase().includes("investor query")) {
        botResponse = "Get all your investor-related queries resolved here! 📊 Visit our investor relations section.";
      } else if (userMessage.toLowerCase().includes("general query")) {
        botResponse = "Got a question? We're here to help! ❓ Reach out to our support team for assistance.";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      receivedSoundRef.current?.play();

      setIsTyping(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const handleResetOptions = () => {
    setHiddenOptions([]);
  };



  return (
    <div>
      {/* Show Chatbot Icon Only If Chat is Closed */}
      {!isOpen && (
        <div
          className="fixed bottom-6 right-6 flex items-center group cursor-pointer"
          onClick={() => {
            setIsOpen(true);
            setIsLanding(true); // 👈 Make sure it starts compact
          }}
        >
          {/* Tooltip (Appears on Hover) */}
          <div
            className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-200 bg-white shadow-md rounded-lg 
                     px-3 py-1 text-sm font-medium text-gray-800 mr-2"
          >
            Chat With Us
          </div>

          {/* Chatbot Icon */}
          <div
            className="w-14 h-14 flex items-center justify-center bg-[#D1884F] rounded-full 
                     shadow-lg relative transition-all duration-200 group-hover:scale-105"
          >
            {/* Chat Bubble (Black Square) */}
            <div className="relative w-5 h-4 bg-black rounded-md flex items-center justify-center">
              {/* Chat Tail (Small Triangle) */}
              <div
                className="absolute -bottom-[3px] left-1/2 transform -translate-x-1/2 
                         w-2 h-2 bg-black rotate-45"
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 rounded-2xl overflow-hidden border border-gray-200 z-[1000]
            bg-white shadow-xl flex flex-col transition-all duration-500 ease-in-out
            ${isLanding ? "w-64 h-[360px]" : "w-[360px] h-[500px]"}
          `}

        >
          {/* Header */}
          {/* Dropdown Menu (Shown when clicking three dots) */}

          {/* Menu Icon (Vertical Dots) & Dropdown Arrow */}
          <div className="bg-[#D1884F] text-white p-3 flex justify-between items-center w-full rounded-t-none relative">
            <span className="font-semibold text-base">Assistant</span>

            {/* Menu Icon (Three Dots & Dropdown) */}
            <div className="absolute top-3 right-3 flex items-center space-x-4 cursor-pointer">
              {/* Three Vertical Dots (Opens Menu) */}
              {/* <div
                className="flex flex-col items-center space-y-[2px]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
              </div> */}

              {/* Dropdown Arrow (Expands/Collapses Chat) */}
              <span
                className={`w-2.5 h-2.5 border-black border-b-[1.5px] border-r-[1.5px] transform ${isExpanded ? "rotate-45" : "-rotate-135"
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  setIsMenuOpen(false); // 👈 Hide the menu too
                }}
              ></span>
            </div>

          </div>

          {isLanding ? (
            // WELCOME SCREEN CONTENT
            <div className="flex flex-col h-full justify-between bg-white/20 backdrop-blur-md backdrop-saturate-150">
              {/* Orange Top Section */}
              <div className="bg-orange-400/50 backdrop-blur-md p-4 text-white flex flex-col items-start gap-2">
                <div className="flex items-center space-x-2">
                  <img src="/logo.png" alt="TEN Logo" className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-semibold text-black">TEN</span>
                </div>


                <p className="text-base text-black">Welcome to TEN 😊</p>
              </div>

              {/* Chat With Us Button */}
              <div className="p-4 flex justify-center">
                <button
                  onClick={() => {
                    setIsLanding(false);
                    if (messages.length === 0) {
                      setMessages([
                        {
                          text: "Hi there! 👋 Welcome to TEN! It's great to have you here. How can I assist you today?",
                          sender: "bot",
                        },
                      ]);
                    }
                  }}
                  // Switches to chat view
                  className="bg-white border border-white rounded-xl shadow px-4 py-3 text-sm w-full flex justify-between items-center hover:bg-gray-100 text-black"
                >
                  Chat with us
                  <span className="text-blue-500">
                    <FaPaperPlane />
                  </span>
                </button>
              </div>

              {/* Footer */}
              <div className="text-center text-xs text-gray-500 py-2 border-t">
                Powered by TEN 😊
              </div>
            </div>
          ) : (
            <>
              {/* Chat Area */}
              <div className="flex-grow overflow-y-auto p-3 bg-white/10 backdrop-blur-md shadow-inner space-y-2">



                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: msg.sender === "bot" ? -30 : 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`p-2 text-[14px] rounded-lg shadow-md max-w-[75%] ${msg.sender === "bot"
                          ? "bg-white text-gray-800"
                          : "bg-[#D1884F] text-white"
                        }`}
                    >
                      {msg.text}
                    </motion.div>
                  </div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 text-xs italic flex gap-1 items-center"
                  >
                    <span className="animate-bounce">•</span>
                    <span className="animate-bounce delay-100">•</span>
                    <span className="animate-bounce delay-200">•</span>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Options */}
              <div className="p-2 bg-white/10 backdrop-blur-md border-t flex flex-col items-center">
                {!hiddenOptions.includes("Services") && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend("Explore Our Services", "Services")}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"

                  >
                    <FaMobileAlt size={14} /> Explore Our Services
                  </motion.button>
                )}

                {!hiddenOptions.includes("Careers") && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend("Explore TEN Careers", "Careers")}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"
                  >
                    <FaBriefcase size={14} /> Explore TEN Careers
                  </motion.button>
                )}

                {!hiddenOptions.includes("MediaPartner") && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend("Become Our Media Partner", "MediaPartner")}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"

                  >
                    <FaBullhorn size={14} /> Become Our Media Partner
                  </motion.button>
                )}

                {!hiddenOptions.includes("InvestorQuery") && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend("Investor Query", "InvestorQuery")}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"

                  >
                    <FaChartLine size={14} /> Investor Query
                  </motion.button>
                )}

                {!hiddenOptions.includes("GeneralQuery") && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend("General Query", "GeneralQuery")}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"

                  >
                    <FaQuestionCircle size={14} /> General Query
                  </motion.button>
                )}

                {hiddenOptions.length === 5 && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleResetOptions}
                    className="self-end flex items-center gap-2 px-4 py-1 text-sm font-medium 
                text-blue-500 border border-blue-500 rounded-full transition-all 
                hover:bg-blue-100 hover:underline decoration-[0.5px] mb-2 justify-end text-right"

                  >
                    <FaArrowLeft size={14} /> Main Menu
                  </motion.button>
                )}
              </div>
              {/* Input Area */}

              {!isLanding && (
                <div className="p-2 border-t bg-white/10 backdrop-blur-md flex items-center">
                  <input
                    type="text"
                    className="self-end flex-grow p-2 text-sm border border-gray-300 rounded-full 
              focus:outline-none focus:ring-2 focus:ring-[#D1884F] shadow-sm text-black"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  />

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D1884F] text-white px-3 py-2 ml-2 rounded-full hover:bg-[#B16D3A] transition-all shadow-md"
                    onClick={() => handleSend()}
                  >
                    <FaPaperPlane className="text-xl"/>
                  </motion.button>
                </div>
              )}
            </>
          )}
          {/* Bottom Icon Bar */}
          <div className="flex justify-around py-2 border-t bg-white z-10">

            <div
              onClick={() => {
                setIsLanding(true);
              }}
              className="flex flex-col items-center text-blue-600 cursor-pointer hover:text-black transition"
            >
              <FaHome className="w-5 h-5" />
              <span className="text-sm">Home</span>
            </div>
            <div
              onClick={() => {
                setIsOpen(true);
                setIsLanding(false);
              }}
              className="flex flex-col items-center text-gray-600 cursor-pointer hover:text-black transition"
            >
              <FaComments className="w-5 h-5" />
              <span className="text-sm">Chat</span>
            </div>
          </div>
          <audio ref={sentSoundRef} src="/sounds/send.mp3" preload="auto" />
           <audio ref={receivedSoundRef} src="/sounds/received.mp3" preload="auto" />
        </motion.div>

      )}


    </div>
  );
};

export default Chatbot;




