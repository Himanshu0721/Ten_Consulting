import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataSci from "./pages/services/AI-ML/DataSci";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AiMl from "./pages/services/AI-ML/AiMl";
import GenerativeAI from "./pages/services/AI-ML/GenerativeAI";
import NextGen from "./pages/services/NextGen/NextGen";
import BlockChain from "./pages/services/NextGen/BlockChain";
import Careers from "./pages/Careers";
import Metaverse from "./pages/services/NextGen/Metaverse";
import Services from "./pages/services/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/ai-ml/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ml/data-science" element={<DataSci />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/next-gen" element={<NextGen />} />
        <Route path="/next-gen/blockchain" element={<BlockChain />} />
        <Route path="/next-gen/metaverse" element={<Metaverse />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
