import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generative_AI from "./pages/services/AI-ML/Generative_AI";
import DataSci from "./pages/services/AI-ML/DataSci";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AiMl from "./pages/services/AI-ML/AiMl";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ml" element={<AiMl />} />
        <Route path="/ai-ml/generative-ai" element={<Generative_AI />} />
        <Route path="/ai-ml/data-science" element={<DataSci />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
