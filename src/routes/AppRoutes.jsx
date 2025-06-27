import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Home from "../pages/Home";
import AccessibilityToggle from "../components/common/AccessibilityToggle";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import ServiceDetail from "../pages/ServiceDetail";
import PPDB from "../pages/PPDB";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-gray-50">
        <Header />
        <AccessibilityToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/ppdb" element={<PPDB />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
