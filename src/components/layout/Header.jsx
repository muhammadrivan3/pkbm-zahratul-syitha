import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ic_pkbm from "../../assets/ic_pkbm.png";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Layanan", path: "/services" },
  { name: "PPDB", path: "/ppdb" },
  { name: "Berita", path: "/news" },
  { name: "Kontak", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // close menu on route change
    setMenuOpen(false);
  }, [location.pathname]);
  const isHome = location.pathname === "/";
   const headerClass = isHome
    ? `fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-black"
          : "bg-white/20 backdrop-blur-md text-white"
      }`
    : `fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md text-black`;

  return (
    // <header
    //   className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    //     scrolled ? "bg-white shadow-md text-black" : "bg-white/20 backdrop-blur-sm text-white"
    //   }`}
    // >
      <header
      className={headerClass}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={ic_pkbm} alt="PKBM Logo" className="w-10 h-10 object-contain" />
          <div className="leading-tight font-title select-none">
            <p className="font-bold text-lg">PKBM</p>
            <p className="text-sm font-light tracking-wide">ZAHRATUL SYITHA</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                location.pathname === link.path ? "text-blue-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1 rounded focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white text-black px-4 py-3 border-t border-gray-200 space-y-2">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`block text-sm font-medium py-2 px-2 rounded hover:bg-blue-50 transition ${
                location.pathname === link.path ? "text-blue-600" : "text-gray-800"
              }`}
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
  