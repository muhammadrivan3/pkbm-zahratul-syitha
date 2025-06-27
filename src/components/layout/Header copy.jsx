import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ic_pkbm from "../../assets/ic_pkbm.png";

const navLinks = [
   { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Layanan", path: "/services" },       // bisa dipecah nanti di halaman: Pendidikan, Pelatihan, Pemberdayaan
  { name: "PPDB", path: "/ppdb" },              // khusus pendaftaran peserta didik baru
  { name: "Berita", path: "/news" },            // info kegiatan atau pengumuman
  { name: "Kontak", path: "/contact" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // ketika discroll > 10px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header  className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-white/20 text-white"
      }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <img src={ic_pkbm} alt="PKBM Logo" className="w-12 h-auto" />
          <div className="flex flex-col font-title select-none">
            <span className="font-semibold text-lg  leading-tight">PKBM</span>
            <span className="font-light text-sm  leading-tight">
              ZAHRATUL SYITHA
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4" aria-label="Primary Navigation">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-sm font-normal  transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden  focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white p-4 flex flex-col gap-3 border-t border-gray-300"
          aria-label="Mobile Primary Navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-sm font-normal "
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
