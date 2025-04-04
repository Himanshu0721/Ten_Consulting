import React from "react";
import Chatbot from "./chatbot";
const Footer = () => {
  return (
    <footer className="relative bg-gray-100 p-6 text-center">
      <p className="text-gray-700 text-sm">© 2024 Your Company. All rights reserved.</p>
      {/* Chatbot Button & Window inside the Footer */}
      <div className="absolute bottom-5 right-5">
        <Chatbot />
      </div>
    </footer>
  );
};

export default Footer;
