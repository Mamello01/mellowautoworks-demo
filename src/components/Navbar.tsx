import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Book Service", path: "/book" },
    { name: "Request Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-performance-red flex items-center justify-center font-display font-bold text-xl group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="font-display font-bold text-2xl tracking-tight hidden sm:block">
            MELLOW <span className="text-performance-red">AUTOWORKS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display font-medium text-sm uppercase tracking-widest transition-colors hover:text-performance-red ${
                location.pathname === link.path ? "text-performance-red" : "text-off-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+27123456789"
            className="flex items-center gap-2 bg-off-white text-charcoal px-4 py-2 font-display font-bold text-sm hover:bg-performance-red hover:text-white transition-all uppercase tracking-tighter"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-off-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-charcoal z-40 lg:hidden flex flex-col items-center justify-center gap-8 px-6 text-center"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-display font-bold uppercase tracking-tight ${
                  location.pathname === link.path ? "text-performance-red" : "text-off-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+27123456789"
              className="mt-4 w-full btn-primary text-xl"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={24} />
              Call Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
