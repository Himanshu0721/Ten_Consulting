import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaPaperPlane,
  FaMobileAlt,
  FaClipboard,
  FaCloud,
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

  const handleSend = (message, option) => {
    const userMessage = message || input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
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
          onClick={() => setIsOpen(true)}
        >
          {/* Tooltip (Appears on Hover) */}
          <div
            className="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-200 bg-white shadow-md rounded-lg 
                     px-3 py-1 text-xs font-medium text-gray-800 mr-2"
          >
            Chat With Us
          </div>

          {/* Chatbot Icon */}
          <div
            className="w-12 h-12 flex items-center justify-center bg-[#D1884F] rounded-full 
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
          className="fixed bottom-16 right-6 w-80 h-[500px] bg-white shadow-xl border border-gray-200 rounded-2xl flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#D1884F] text-white p-3 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold text-sm">Assistant</span>
            <button
              onClick={() => setIsOpen(false)} // Close chat on click
              className="p-2 rounded-full hover:bg-gray-200 transition-all"
            >
              <FaTimes size={18} className="text-gray-600" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-3 bg-gray-100 space-y-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "bot" ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-2 text-xs rounded-lg shadow-md max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-gray-300 text-gray-800 self-start"
                    : "bg-[#D1884F] text-white ml-auto"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 text-xs italic">
                ...
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="p-2 bg-white border-t flex flex-col items-center">
            {!hiddenOptions.includes("Services") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Explore Our Services", "Services")}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 mb-2 w-full justify-center"
              >
                <FaMobileAlt size={14} /> Explore Our Services
              </motion.button>
            )}

            {!hiddenOptions.includes("Careers") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Explore TEN Careers", "Careers")}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 mb-2 w-full justify-center"
              >
                <FaBriefcase size={14} /> Explore TEN Careers
              </motion.button>
            )}

            {!hiddenOptions.includes("MediaPartner") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Become Our Media Partner", "MediaPartner")}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 mb-2 w-full justify-center"
              >
                <FaBullhorn size={14} /> Become Our Media Partner
              </motion.button>
            )}

            {!hiddenOptions.includes("InvestorQuery") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Investor Query", "InvestorQuery")}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 mb-2 w-full justify-center"
              >
                <FaChartLine size={14} /> Investor Query
              </motion.button>
            )}

            {!hiddenOptions.includes("GeneralQuery") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("General Query", "GeneralQuery")}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 mb-2 w-full justify-center"
              >
                <FaQuestionCircle size={14} /> General Query
              </motion.button>
            )}

            {hiddenOptions.length === 5 && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleResetOptions}
                className="flex items-center gap-2 px-4 py-1 text-xs font-medium 
                           text-blue-500 border-[0.5px] border-blue-400 rounded-full 
                           transition-all hover:bg-blue-100 w-full justify-center"
              >
                <FaArrowLeft size={14} /> Main Menu
              </motion.button>
            )}
          </div>

          {/* Input Area */}
          <div className="p-2 border-t bg-white flex items-center">
            <input
              type="text"
              className="flex-grow p-2 text-xs border border-gray-300 rounded-full 
                         focus:outline-none focus:ring-2 focus:ring-[#D1884F] shadow-sm"
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
              <FaPaperPlane />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
