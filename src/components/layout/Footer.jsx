import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0e1a2b] text-white py-16 relative overflow-hidden">
      {/* Background Wave (optional aesthetic) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* PKBM Identity */}
        <div>
          <h2 className="text-2xl font-semibold font-serif mb-4 text-white">
            PKBM Zahratul Syitha
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300">
            Pusat Kegiatan Belajar Masyarakat yang berkomitmen pada pendidikan
            inklusif, fleksibel, dan terakreditasi untuk menciptakan generasi mandiri.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-400 mb-4">
            Navigasi
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300 transition">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kontak Langsung */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-400 mb-4">
            Hubungi Kami
          </h3>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-blue-300" />
              Jl. Pendidikan No. 123, Dumai
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-blue-300" />
              0812-3456-7890
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-blue-300" />
              pkbmzsyitha@email.com
            </li>
          </ul>
        </div>

        {/* Accreditation or Motto */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-blue-400 mb-4">
            Motto Kami
          </h3>
          <blockquote className="italic text-neutral-300 border-l-4 border-blue-500 pl-4">
            “Belajar Sepanjang Hayat, untuk Kehidupan yang Lebih Bermakna.”
          </blockquote>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-700 mt-16 pt-6 text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} PKBM Zahratul Syitha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
