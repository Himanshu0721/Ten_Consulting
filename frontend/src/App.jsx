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

import CloudConsulting from "./pages/services/Cloud/CloudConsulting";
import CloudMigration from "./pages/services/Cloud/CloudMigration";
import QualityEngineering from "./pages/services/Product/QualityEngineering";
import MobileEngineering from "./pages/services/Product/MobileEngineering";
import CloudEngineering from "./pages/services/Cloud/CloudEngineering";
import ProductEngineering from "./pages/services/Product/ProductEngineering";
import CareerPage from "./pages/CareerPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/ai-ml/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ml/data-science" element={<DataSci />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/next-gen" element={<NextGen />} />
        <Route path="/next-gen/blockchain" element={<BlockChain />} />
        {/* <Route path="/data-analytics/analytics-services" element={<DataAna />} /> */}
        <Route path="/cloud-engineering/cloud-consulting" element={<CloudConsulting />} />
        <Route path="/cloud-engineering/cloud-migration" element={<CloudMigration />} />
        <Route path="/cloud-engineering" element={<CloudEngineering />} />
        <Route path="/product-engineering/quality-engineer" element={<QualityEngineering />} /> 
        <Route path="/product-engineering/mobile-engineering" element={<MobileEngineering />} />
        <Route path="/product-engineering" element={<ProductEngineering />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
