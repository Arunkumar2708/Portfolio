import React, { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const sections = [
  { id: "#", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id || "#");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = id === "#" ? document.body : document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Class for desktop links
  const linkClass = (id: string) =>
    `relative py-2 px-1 transition-colors duration-300 font-medium ${
      active === id ? "text-yellow-600" : "text-gray-600 hover:text-yellow-500"
    }`;

  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
  }, [showResume]);

  return (
    <>
      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="flex">
          {/* Logo */}
          <div className="flex items-center">
            <svg width="250" height="60" viewBox="0 0 250 60">
              <path d="M0 0 H210 C200 0 200 70 95 60 H0 Z" fill="#000" />
              <text x="20" y="35" fill="white" fontSize="16" fontWeight="700">
                ARUN KUMAR
              </text>
            </svg>
          </div>
          <div className="container flex justify-end  md:justify-center items-center pr-6 h-16">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center md:space-x-7 lg:space-x-12">
              {sections.map(({ id, label }) => (
                <li key={id} className="relative group flex items-center">
                  <a
                    href={id === "#" ? "#" : `#${id}`}
                    className={linkClass(id)}
                  >
                    {label}
                    {/* Underline Animation */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-yellow-600 transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowResume(true)}
                  className="ml-4 px-5 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full font-semibold 
                shadow-lg shadow-yellow-200 hover:shadow-yellow-300 hover:-translate-y-0.5 transition-all active:scale-95 flex 
                items-center gap-2 cursor-pointer"
                >
                  <FileText size={18} />
                  <span className="md:hidden lg:flex"> Resume</span>
                </button>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col px-6 py-6 space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id === "#" ? "#" : `#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl transition-all ${
                    active === id
                      ? "bg-blue-50 text-blue-600 font-bold"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <button
                onClick={() => {
                  setShowResume(true);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-md active:scale-[0.98] transition-all"
              >
                View Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setShowResume(false)}
                className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-transform hover:rotate-90 cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              src={`${process.env.PUBLIC_URL}/ARUNKUMAR.A.pdf`}
              title="Resume"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
