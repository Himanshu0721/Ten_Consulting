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
import DataAnalytics from "./pages/services/Data-Analytics/DataAnalytics";
import Agentic from "./pages/services/Data-Analytics/Agentic";
import DataConsulting from "./pages/services/Data-Analytics/DataConsulting";
import AnalyticsService from "./pages/services/Data-Analytics/AnalyticsService";
import IntegrationApi from "./pages/services/Data-Analytics/IntegrationApi";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/data-analytics" element={<DataAnalytics/>}/>
        <Route path="/data-analytics/data-consulting" element={<DataConsulting/>} />
        <Route path="/data-analytics/analyticService" element={<AnalyticsService/>} />
        <Route path="/data-analytics/integration-api" element={<IntegrationApi/>} />
        <Route path="/data-analytics/agentic" element={<Agentic/>} />
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
