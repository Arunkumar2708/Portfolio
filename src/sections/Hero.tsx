import React from "react";
import bgImg from "../assets/Picsart_25-08-26_18-40-04-843.png";
import { ArrowRight, MessageSquare } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-[25%_center] md:bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}

    >
      {/* Dark overlay with slight blur to integrate background and text */}

      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-glow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-glow z-0"></div>

      {/* Hero Section Container */}
      <section
        id="home"
        className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-20 py-24 md:py-32 z-10 gap-16"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-300 font-semibold text-xs tracking-wider uppercase mb-6 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Available for Hire
          </div>

          {/* Mobile badges row (hidden on desktop) */}
          <div className="flex md:hidden gap-3 mb-6 justify-center">
            <div className="glass-panel rounded-2xl px-4 py-2 flex items-center gap-2.5 shadow-md">
              <span className="text-sm">🎨</span>
              <span className="text-xs text-white font-extrabold">UI/UX Design</span>
            </div>
            <div className="glass-panel rounded-2xl px-4 py-2 flex items-center gap-2.5 shadow-md">
              <span className="text-sm">💻</span>
              <span className="text-xs text-white font-extrabold">React Dev</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold text-slate-300 mb-3 tracking-wide">
            I’m a UI/UX Designer &
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4">
            Frontend Developer
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              Arun Kumar
            </span>
          </h2>

          <p className="max-w-md text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
            I specialize in crafting stunning, user-centric interfaces and building
            high-performance web solutions. Passionate about clean code and interactive aesthetics.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(168,85,247,0.4)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 active:scale-95 cursor-pointer text-sm tracking-wide"
            >
              <span>View My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-500 text-slate-200 px-8 py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer text-sm tracking-wide"
            >
              <MessageSquare size={16} />
              <span>Hire Me</span>
            </a>
          </div>
        </div>

        {/* Right Content - Visual Representation (Hidden on Mobile) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center z-10">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Floating Tags */}
            <div className="absolute -top-4 -left-4 glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl animate-float z-20">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg">
                🎨
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Specialty</span>
                <span className="text-xs text-white font-extrabold">UI/UX Design</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 glass-panel rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl animate-float-delayed z-20">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg">
                💻
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Focus</span>
                <span className="text-xs text-white font-extrabold">React Dev</span>
              </div>
            </div>
          </div>
        </div>


      </section>
      {/* 👇 Bottom Divider Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] pointer-events-none z-10">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.33C906.67 116.67 823.33 123.33 740 109.17C656.67 95 573.33 60 490 54.17C406.67 48.33 323.33 70 240 80C156.67 90 73.33 90 0 80V120H1200V0C1117.67 27.5 1064.65 50 985.66 83.33Z"
            className="fill-[#000510] "
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
