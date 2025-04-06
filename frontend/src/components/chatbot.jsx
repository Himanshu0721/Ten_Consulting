import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaPaperPlane,
  FaMobileAlt,
  FaArrowLeft,
  FaBriefcase,
  FaBullhorn,
  FaChartLine,
  FaQuestionCircle,
  FaListUl,
  FaBolt,
} from "react-icons/fa";

const predefinedQA = {
  "What services does TEN offer?": "We offer a wide range of services to help entrepreneurs grow through mentorship, practical classes, and global opportunities.",
  "How can I join TEN?": "You can join TEN by applying through our official website or attending one of our onboarding webinars.",
  "What is the mission of TEN?": "TEN aims to empower entrepreneurs with the tools, network, and skills needed to thrive in today’s business world.",
  "Is there any certificate provided?": "Yes! We provide certificates for all major programs upon successful completion.",
  "Are your classes practical?": "Absolutely! We focus on hands-on learning, live projects, and real-world case studies.",
  "Thanks": "You're welcome! 😊 If you have any more questions, feel free to ask.",
  "Okay": "Got it! Let me know if there's anything else you'd like help with.",
  "Great": "Awesome! Glad I could help. 🚀 Anything else you're curious about?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [activeTab, setActiveTab] = useState("faq");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          text: "👋 Hi there! Welcome to TEN. How can I assist you today?",
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

    if (option) setHiddenOptions((prev) => [...prev, option]);

    setTimeout(() => {
      let lowerMsg = userMessage.toLowerCase();
      let botResponse =
        predefinedQA[userMessage] ||
        "🤔 I'm not sure how to answer that. Try a different question!";

      if (lowerMsg.includes("mobility")) {
        botResponse =
          "📱 Mobility services include app development and cloud-based solutions.";
      } else if (lowerMsg.includes("careers")) {
        botResponse = "🚀 Explore exciting career opportunities at TEN!";
      } else if (lowerMsg.includes("media partner")) {
        botResponse = "📢 Contact our PR team for media collaborations.";
      } else if (lowerMsg.includes("investor query")) {
        botResponse =
          "📊 Visit our investor section or contact our finance team.";
      } else if (lowerMsg.includes("general query")) {
        botResponse =
          "📩 You can email us at hello@ten.com. We're happy to help!";
      }

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleResetOptions = () => {
    setHiddenOptions([]);
  };

  return (
    <div className="font-sans">
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.15 }}
          className="fixed bottom-6 right-6 bg-gradient-to-tr from-orange-400 to-yellow-300 text-white p-3 rounded-full shadow-2xl text-3xl transition-all duration-300 hover:shadow-yellow-500/40"
          onClick={() => setIsOpen(true)}
        >
          👩‍💻
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-20 right-6 w-80 h-[520px] bg-white/30 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-white p-3 flex justify-between items-center rounded-t-3xl">
            <span className="font-semibold text-sm">TEN Assistant</span>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.sender === "bot" ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`p-2 text-xs rounded-lg max-w-[75%] ${
                  msg.sender === "bot"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "bg-orange-400 text-white ml-auto"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                className="text-xs text-gray-500 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Typing...
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* TAB SWITCH */}
          <div className="flex gap-1 bg-white/50 border-t px-2 py-2">
            <button
              onClick={() => setActiveTab("faq")}
              className={`flex-1 py-1 text-xs rounded-full ${
                activeTab === "faq"
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-600"
              } flex items-center justify-center gap-2`}
            >
              <FaListUl /> FAQs
            </button>
            <button
              onClick={() => setActiveTab("quick")}
              className={`flex-1 py-1 text-xs rounded-full ${
                activeTab === "quick"
                  ? "bg-orange-400 text-white"
                  : "bg-white text-gray-600"
              } flex items-center justify-center gap-2`}
            >
              <FaBolt /> Quick Options
            </button>
          </div>

          {/* FAQ or QUICK OPTIONS */}
          {activeTab === "faq" ? (
            <div className="p-2 bg-white/50 space-y-1 max-h-32 overflow-y-auto text-gray-800 border-t">
              {Object.entries(predefinedQA).map(([question], idx) => (
                <motion.button
                  key={idx}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSend(question)}
                  className="w-full text-left text-xs px-3 py-1 rounded-md bg-white hover:bg-gray-100 font-medium shadow-sm"
                >
                  {question}
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="p-2 bg-white/50 space-y-1 border-t">
              {!hiddenOptions.includes("Services") && (
                <ChatOption
                  label="Explore Our Services"
                  icon={<FaMobileAlt />}
                  onClick={() => handleSend("Explore Our Services", "Services")}
                />
              )}
              {!hiddenOptions.includes("Careers") && (
                <ChatOption
                  label="Explore TEN Careers"
                  icon={<FaBriefcase />}
                  onClick={() => handleSend("Explore TEN Careers", "Careers")}
                />
              )}
              {!hiddenOptions.includes("Media") && (
                <ChatOption
                  label="Become Our Media Partner"
                  icon={<FaBullhorn />}
                  onClick={() =>
                    handleSend("Become Our Media Partner", "Media")
                  }
                />
              )}
              {!hiddenOptions.includes("Investor") && (
                <ChatOption
                  label="Investor Query"
                  icon={<FaChartLine />}
                  onClick={() => handleSend("Investor Query", "Investor")}
                />
              )}
              {!hiddenOptions.includes("General") && (
                <ChatOption
                  label="General Query"
                  icon={<FaQuestionCircle />}
                  onClick={() => handleSend("General Query", "General")}
                />
              )}
              {hiddenOptions.length >= 5 && (
                <ChatOption
                  label="Main Menu"
                  icon={<FaArrowLeft />}
                  onClick={handleResetOptions}
                />
              )}
            </div>
          )}

          {/* Input */}
          <div className="p-2 border-t bg-white/60 backdrop-blur-md flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 text-gray-800 rounded-full text-xs border border-gray-300 focus:outline-none"
            />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-orange-400 text-white p-2 rounded-full shadow-md hover:bg-orange-500"
              onClick={() => handleSend()}
            >
              <FaPaperPlane size={14} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const ChatOption = ({ label, icon, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex items-center justify-center gap-2 px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded-full shadow hover:bg-gray-100 w-full"
  >
    {icon} {label}
  </motion.button>
);

export default Chatbot;
