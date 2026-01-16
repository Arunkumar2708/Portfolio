import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["#", "about", "skills", "projects", "contact"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `relative transition ${
      active === id
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container flex justify-between items-center">

        {/* Logo (UNCHANGED) */}
        <div className="flex items-center">
          <svg width="350" height="60" viewBox="0 0 350 60">
            <path
              d="M0 0 H210 C200 0 200 70 95 60 H0 Z"
              fill="#000"
            />
            <text
              x="20"
              y="35"
              fill="white"
              fontSize="16"
              fontWeight="700"
            >
              ARUN KUMAR
            </text>
          </svg>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#" className={linkClass("#")}>
              Home
              {active === "#" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </a>
          </li>

          <li>
            <a href="#about" className={linkClass("about")}>
              About
              {active === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </a>
          </li>

          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
              {active === "skills" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </a>
          </li>

          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
              {active === "projects" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </a>
          </li>

          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
              {active === "contact" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={linkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
