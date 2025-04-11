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
import CareerPage from "./pages/CareerPage";
import DataAnalytics from "./pages/services/Data-Analytics/DataAnalytics";
import Agentic from "./pages/services/Data-Analytics/Agentic";
import DataConsulting from "./pages/services/Data-Analytics/DataConsulting";
import AnalyticsService from "./pages/services/Data-Analytics/AnalyticsService";
import IntegrationApi from "./pages/services/Data-Analytics/IntegrationApi";
import Metaverse from "./pages/services/NextGen/Metaverse";
import Services from "./pages/services/Services";
import ContactUs from "./pages/ContactUs";
import Testimonials from "./pages/Testimonials";
import CloudEngineering from "./pages/services/Cloud/CloudEngineering";
import CloudConsulting from "./pages/services/Cloud/CloudConsulting";
import CloudMigration from "./pages/services/Cloud/CloudMigration";
import ProductEngineering from "./pages/services/Product/ProductEngineering";
import QualityEngineering from "./pages/services/Product/QualityEngineering";
import MobileEngineering from "./pages/services/Product/MobileEngineering";


import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Blogs from "./pages/All_Insights/Blogs";
import DigiExp from "./pages/services/DigiExp/DigiExp";
import ProductDesign from "./pages/services/DigiExp/ProductDesign";
import ProductCons from "./pages/services/DigiExp/ProductCons";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/insights" element={<Blogs />} />
        <Route
          path="/data-analytics/data-consulting"
          element={<DataConsulting />}
        />
        <Route
          path="/data-analytics/analyticService"
          element={<AnalyticsService />}
        />
        <Route
          path="/data-analytics/integration-api"
          element={<IntegrationApi />}
        />
        <Route path="/data-analytics/agentic" element={<Agentic />} />
        <Route path="/ai-ml/generative-ai" element={<GenerativeAI />} />
        <Route path="/ai-ml/data-science" element={<DataSci />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/next-gen" element={<NextGen />} />
        <Route path="/next-gen/blockchain" element={<BlockChain />} />
        <Route path="/digital-experience" element={<DigiExp />} />
        <Route
          path="/digital-experience/product-design"
          element={<ProductDesign />}
        />
        <Route
          path="/digital-experience/product-consulting"
          element={<ProductCons />}
        />

        <Route path="/next-gen/metaverse" element={<Metaverse />} />
        <Route path="/cloud-engineering" element={<CloudEngineering />} />
        <Route path="/cloud-engineering/cloud-consulting" element={<CloudConsulting />} />
        <Route path="/cloud-engineering/cloud-migration" element={<CloudMigration />} />
        <Route path="/product-engineering" element={<ProductEngineering />} />
        <Route path="/product-engineering/quality-engineer" element={<QualityEngineering />} />
        <Route path="/product-engineering/mobile-engineering" element={<MobileEngineering />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
