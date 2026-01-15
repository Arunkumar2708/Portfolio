import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 text-center md:text-left">
  {/* Quick Links */}
        <h3 className="text-lg text-center font-semibold text-white mb-3 underline underline-offset-3">Quick Links</h3>
        
          <div className="flex justify-around pb-4">
            
            <ul className="space-y-2 flex text-center justify-around w-full font-semibold ">
              <li>
                <a href="#" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center border-t border-gray-700 pt-5">
          {/* Copyright */}
          <div className="text-center md:text-center  items-center justify-center">
            <p className="text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-white">Designed By Arunkumar</span>.  
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://linkedin.com/in/arun-kumar-a-513ba7226"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Icon icon="mdi:linkedin" width="24" />
            </a>
            <a
              href="https://github.com/Arunkumar2708"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 transition"
            >
              <Icon icon="mdi:github" width="24" />
            </a>
             <a
              href="https://www.instagram.com/arun_kumar_27_?igsh=MTN5cXN2dGIydHBkOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <Icon icon="mdi:instagram" width="24" />
            </a>
           {/* <a
              href="https://behance.net/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Icon icon="mdi:behance" width="24" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
