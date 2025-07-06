import React from "react";
import { useAccessibility } from "../context/AccessibilityContext";
import Hero from "../components/pages/home/Hero";
import ServicesPreview from "../components/pages/home/ServicesPreview";
import MainNewsPreview from "../components/pages/home/MainNewsPreview";
import AlumniSection from "../components/pages/home/AlumniSection";
import LearningFlow from "../components/pages/home/LearningFlow";
const Home = () => {
  const { mode } = useAccessibility();

  return (
    <div className={`w-full min-h-screen bg-base theme-${mode} `}>
      <Hero />
      <LearningFlow/>
      <ServicesPreview />
      <MainNewsPreview />
      <AlumniSection />
    </div>
  );
};

export default Home;
