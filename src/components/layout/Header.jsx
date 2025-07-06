import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Layanan", path: "/services" },
  { name: "PPDB", path: "/ppdb" },
  { name: "Berita", path: "/news" },
  { name: "Kontak", path: "/contact" },
];

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const menuVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isScrolled = scrolled || !isHome;

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-base shadow-sm text-title" : "bg-transparent text-title-inverse"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 select-none">
          <img src="/img/ic_pkbm.png" alt="PKBM Logo" className="w-10 h-10" />
          <div className="leading-tight font-title">
            <p className="font-bold text-lg">PKBM</p>
            <p className="text-md font-medium tracking-wide">ZAHRATUL SYITHA</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={clsx(
                    "relative text-md font-ui font-medium px-2 py-1 transition-colors duration-300",
                    isActive ? "text-link" : "hover:text-link-hover"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-link-hover"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <motion.div
            className="w-6 h-6 relative"
            animate={menuOpen ? "open" : "closed"}
            initial="closed"
          >
            <motion.span
              className="absolute left-0 w-6 h-[2px] bg-current"
              style={{ top: "50%", transformOrigin: "center" }}
              variants={{
                closed: { rotate: 0, y: -6 },
                open: { rotate: 45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-0 w-6 h-[2px] bg-current"
              style={{ top: "50%", transformOrigin: "center" }}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 w-6 h-[2px] bg-current"
              style={{ top: "50%", transformOrigin: "center" }}
              variants={{
                closed: { rotate: 0, y: 6 },
                open: { rotate: -45, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className="min-h-screen md:hidden overflow-hidden bg-base text-black border-t border-gray-200 px-4 py-6 space-y-4"
          >
            {/* Mobile Menu Links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={clsx(
                    "block font-body text-md py-2 px-3 rounded-md transition",
                    location.pathname === link.path
                      ? "text-link font-semibold"
                      : "text-subtitle"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Kontak & Sosial Media */}
            <div className="pt-8 mt-6 border-t border-subtle">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Kontak Resmi */}
                <div>
                  <h4 className="text-sm font-semibold text-subtitle mb-3 uppercase tracking-wide">
                    Kontak Resmi
                  </h4>
                  <ul className="space-y-3 text-sm font-body text-body">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-link mt-0.5" />
                      <a
                        href="mailto:info@pkbmzahratuls.com"
                        className="hover:text-link-hover transition-colors underline underline-offset-2"
                      >
                        info@pkbmzahratuls.com
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-link mt-0.5" />
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-link-hover transition-colors underline underline-offset-2"
                      >
                        +62 812-3456-7890
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Sosial Media */}
                <div>
                  <h4 className="text-sm font-semibold text-subtitle mb-3 uppercase tracking-wide">
                    Ikuti Kami
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://instagram.com/pkbm_zahratul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent/10 hover:bg-accent/30 text-link text-sm transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/pkbmzahratul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent/10 hover:bg-accent/30 text-link text-sm transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Facebook
                    </a>
                    <a
                      href="https://youtube.com/@pkbmzahratul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent/10 hover:bg-accent/30 text-link text-sm transition-colors"
                    >
                      <Youtube className="w-4 h-4" />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
