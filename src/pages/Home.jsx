import React from "react";
import { useAccessibility } from "../context/AccessibilityContext";
import Hero from "../components/hero/Hero";
import ServicesPreview from "../components/services/ServicesPreview";
import MainNewsPreview from "../components/news/MainNewsPreview";
import AlumniSection from "../components/alumni/AlumniSection";

const Home = () => {
  const { mode } = useAccessibility();

  return (
    <div className={`min-h-screen bg-gray-50 theme-${mode}`}>
      <Hero />
      <ServicesPreview />
      <MainNewsPreview />
      <AlumniSection />
      {/* <main className="p-8 bg-white/80 rounded shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-2">Aksesibilitas Web Tailwind</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Ini adalah contoh implementasi aksesibilitas menggunakan <code>@apply</code> dan React context.
          Fitur meliputi kontras tinggi, teks besar, dan buta warna.
        </p>
      </main> */}
    </div>
  );
};

export default Home;
