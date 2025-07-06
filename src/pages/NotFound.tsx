import React from "react";
import { Link } from "react-router-dom";
import FuzzyText from "../components/ui/FuzzyText";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full">
        <FuzzyText
          fontSize="clamp(3rem, 10vw, 6rem)"
          color="white" // Tailwind blue-600
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
        >
          404
        </FuzzyText>
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-100 font-semibold mt-4 text-center">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
