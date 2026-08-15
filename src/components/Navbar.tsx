import React, { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id || "home");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = id === "home" ? document.body : document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Class for desktop links
  const linkClass = (id: string) =>
    `relative py-1.5 px-0.5 transition-colors duration-300 font-medium text-sm ${active === id ? "text-purple-400" : "text-slate-400 hover:text-purple-300"
    }`;

  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
  }, [showResume]);

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl bg-slate-950/60 backdrop-blur-lg border border-slate-800/80 rounded-2xl z-50 transition-all duration-300 px-4 md:px-8 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent hover:opacity-85 transition-opacity">
              ARUN.DEV
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center">
            <ul className="hidden md:flex items-center md:space-x-6 lg:space-x-10">
              {sections.map(({ id, label }) => (
                <li key={id} className="relative group flex items-center">
                  <a
                    href={`#${id}`}
                    className={linkClass(id)}
                  >
                    {label}
                    {/* Underline Animation */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"}`}
                    ></span>
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setShowResume(true)}
                  className="ml-4 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-bold text-xs uppercase tracking-wider
                shadow-lg shadow-purple-900/40 hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all active:scale-95 flex 
                items-center gap-2 cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Resume</span>
                </button>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-950/95 rounded-xl ${isOpen ? "max-h-[500px] opacity-100 mt-4 p-4 border border-slate-800" : "max-h-0 opacity-0 border-0"}`}
        >
          <ul className="flex flex-col space-y-2">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id === "#" ? "#" : `#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl transition-all text-sm font-medium ${active === id
                      ? "bg-purple-950/50 text-purple-400 border border-purple-900/30"
                      : "text-slate-400 hover:bg-slate-900 hover:text-white"
                    }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-slate-900">
              <button
                onClick={() => {
                  setShowResume(true);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-bold text-sm shadow-md active:scale-[0.98] transition-all"
              >
                View Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-[999] p-4">
          <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-850 shadow-2xl">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setShowResume(false)}
                className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 rounded-full p-2 shadow-lg transition-all hover:rotate-90 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={`${process.env.PUBLIC_URL}/ARUNKUMAR.A.pdf`}
              title="Resume"
              className="w-full h-full border-none bg-slate-950"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
