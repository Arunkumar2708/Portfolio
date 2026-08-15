import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060913] text-slate-400 border-t border-slate-900/80 py-10 relative z-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/60">
          {/* Logo / Branding */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg font-black tracking-wider bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              ARUN.DEV
            </a>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              Designing intuitive interfaces and crafting modern frontend solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <ul className="flex flex-wrap justify-center gap-6 font-semibold text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          {/* Copyright */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} <span className="font-bold text-slate-450 hover:text-white transition-colors">Arun Kumar</span>. All rights reserved.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-3 order-1 sm:order-2">
            {[
              {
                id: "linkedin",
                icon: "mdi:linkedin",
                url: "https://linkedin.com/in/arun-kumar-a-513ba7226",
                hover: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/10"
              },
              {
                id: "github",
                icon: "mdi:github",
                url: "https://github.com/Arunkumar2708",
                hover: "hover:text-white hover:border-slate-705 hover:bg-slate-800"
              },
              {
                id: "instagram",
                icon: "mdi:instagram",
                url: "https://www.instagram.com/arun_kumar_27_?igsh=MTN5cXN2dGIydHBkOQ==",
                hover: "hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-450/10"
              }
            ].map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-xl bg-slate-950 border border-slate-900/60 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.hover} cursor-pointer`}
                aria-label={social.id}
              >
                <Icon icon={social.icon} width="18" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
