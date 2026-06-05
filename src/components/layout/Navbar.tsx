import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // =========================
  // SCROLL EFFECT
  // =========================
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // CLOSE MENU ON ROUTE CHANGE
  // =========================
  useEffect(() => {
    setIsOpen(false);
    setDropdown(null);
  }, [location]);

  // =========================
  // LOCK SCROLL WHEN MOBILE MENU OPEN
  // =========================
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // =========================
  // ESC CLOSE SEARCH
  // =========================
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // =========================
  // NAV DATA
  // =========================
  const navItems = {
    about: {
      title: "About FPI",
      icon: "🏢",
      items: [
        { name: "About Us", path: "/about", description: "Learn about our mission" },
        { name: "Our Team", path: "/team", description: "Meet our team" },
        { name: "Sponsors", path: "/sponsors", description: "Our supporters" },
        { name: "Partners", path: "/partners", description: "Collaborations" },
      ],
    },
    programs: {
      title: "Programs",
      icon: "📚",
      items: [
        { name: "Advocacy", path: "/programs/advocacy", description: "Media freedom" },
        { name: "Media Literacy", path: "/programs/media-literacy", description: "Education" },
        { name: "Research", path: "/programs/research", description: "Insights" },
        { name: "Capacity Building", path: "/programs/capacity-building", description: "Training" },
      ],
    },
    knowledge: {
      title: "Knowledge",
      icon: "📖",
      items: [
        { name: "Newsletters", path: "/knowledge/newsletters", description: "Updates" },
        { name: "Reports", path: "/knowledge/reports", description: "Publications" },
      ],
    },
    mil: {
      title: "MIL",
      icon: "🎓",
      items: [
        { name: "About MIL", path: "/mil/about", description: "Understanding media literacy" },
        { name: "Brochure", path: "/mil/brochure", description: "Download resources" },
        { name: "Hubs", path: "/mil/hubs", description: "Community info" },
      ],
    },
  };

  const isActive = (path: string) => location.pathname === path;

  // =========================
  // ANIMATIONS
  // =========================
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
              FPI
            </div>
            <span className="font-bold text-lg">FPI Zambia</span>
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center space-x-4">

            {Object.entries(navItems).map(([key, section]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setDropdown(key)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 hover:text-blue-600">
                  <span>{section.icon}</span>
                  <span>{section.title}</span>
                  <ChevronDown size={14} />
                </button>

                <AnimatePresence>
                  {dropdown === key && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 bg-white shadow-lg rounded-lg w-64 p-2"
                    >
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                            isActive(item.path) ? "text-blue-600 font-semibold" : ""
                          }`}
                        >
                          <div>{item.name}</div>
                          <div className="text-xs text-gray-500">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link to="/contact" className="px-3 py-2 hover:text-blue-600">
              Contact
            </Link>

            <button onClick={() => setSearchOpen(true)}>
              <Search size={20} />
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 pt-20 px-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          >
            {Object.entries(navItems).map(([key, section]) => (
              <div key={key} className="mb-6">
                <h3 className="font-bold mb-2">{section.title}</h3>
                {section.items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                className="w-full border p-2 rounded"
                placeholder="Search..."
                autoFocus
              />

              <div className="flex justify-end mt-4">
                <button onClick={() => setSearchOpen(false)}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;