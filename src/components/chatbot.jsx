import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaPaperPlane, FaRobot, FaMobileAlt, FaClipboard, FaCloud, FaArrowLeft } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: "Hi there! 👋 Welcome! How can I assist you today?", sender: "bot" }]);
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
      {/* Chatbot Icon (Appears on Hover) */}
      <div 
        className="fixed bottom-6 right-6 w-16 h-16"
        onMouseEnter={() => setIsIconVisible(true)}
        onMouseLeave={() => setIsIconVisible(false)}
      >
        {isIconVisible && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#D1884F] text-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-[#B16D3A] transition-all flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <FaRobot size={24} />
          </motion.div>
        )}
      </div>

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
            <span className="font-semibold text-lg flex items-center">
              <FaRobot className="mr-2" /> Assistant
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-all"
            >
              <FaTimes size={20} className="text-gray-600" />
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
                className={`p-2 text-sm rounded-lg shadow-md max-w-[75%] ${
                  msg.sender === "bot" ? "bg-gray-300 text-gray-800 self-start" : "bg-[#D1884F] text-white ml-auto"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 text-sm italic">
                ...
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="p-2 bg-white border-t flex flex-wrap justify-center gap-2">
            {!hiddenOptions.includes("Mobility") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Tell me about Mobility services", "Mobility")}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all hover:bg-blue-700"
              >
                <FaMobileAlt size={14} /> Mobility
              </motion.button>
            )}

            {!hiddenOptions.includes("Services") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Explore Our Services", "Services")}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-green-600 rounded-lg shadow-md transition-all hover:bg-green-700"
              >
                <FaClipboard size={14} /> Services
              </motion.button>
            )}

            {!hiddenOptions.includes("Support") && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend("Support", "Support")}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-red-600 rounded-lg shadow-md transition-all hover:bg-red-700"
              >
                <FaCloud size={14} /> Support
              </motion.button>
            )}

            {hiddenOptions.length === 3 && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleResetOptions}
                className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-700 bg-gray-300 rounded-lg shadow-md transition-all hover:bg-gray-400"
              >
                <FaArrowLeft size={14} /> Main Menu
              </motion.button>
            )}
          </div>

          {/* Input Area */}
          <div className="p-2 border-t bg-white flex items-center">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D1884F] text-sm shadow-sm"
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
