import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Generative_AI from "./pages/services/AI-ML/Generative_AI";
import DataSci from "./pages/services/AI-ML/DataSci";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-ml/generative-ai" element={<Generative_AI />} />
        <Route path="/ai-ml/data-science" element={<DataSci />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;