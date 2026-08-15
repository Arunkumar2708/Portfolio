import React, { useEffect, useRef, useState } from "react";
import bgImg from "../assets/ChatGPT Image Dec 21, 2025, 07_22_29 PM.png";
import { Icon } from "@iconify/react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"story" | "focus" | "philosophy">("story");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative pt-24 pb-20 bg-[#000510] overflow-hidden"
    >
      {/* Decorative Glow Blobs */}
      <div
        className={`absolute left-10 top-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-[80px] -z-10 transition-all duration-[2000ms] ${isVisible ? "translate-x-10" : ""}`}
      ></div>
      <div
        className={`absolute right-10 bottom-10 w-96 h-96 bg-fuchsia-500/10 rounded-full filter blur-[100px] -z-10 transition-all duration-[3000ms] ${isVisible ? "-translate-y-10" : ""}`}
      ></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block">
            <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">About Me</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full shadow-[0_2px_10px_rgba(168,85,247,0.4)]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Graphic Area & Quick Stats - Spans 5 cols on lg */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-3xl blur-2xl scale-75 animate-pulse" />

            {/* Premium glass frame around profile */}
            <div className="relative z-10 p-4 glass-panel rounded-3xl shadow-2xl max-w-sm mx-auto group">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/40">
                <img
                  src={bgImg}
                  alt="Arun Kumar Profile Graphic"
                  className="w-full h-auto object-cover opacity-90 group-hover:scale-103 transition-transform duration-500 drop-shadow-xl"
                />
              </div>
            </div>

            {/* Floating Mini Experience badge */}
            <div className="absolute -bottom-6 -right-2 md:right-8 glass-panel rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 animate-float z-20">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-500 to-fuchsia-500 flex items-center justify-center text-white text-base font-bold">
                💼
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Experience</span>
                <span className="text-sm text-white font-extrabold">2+ Years Code</span>
              </div>
            </div>
          </div>

          {/* Right Text Area & Interactive Tabs - Spans 7 cols on lg */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Need Creative Design?
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                I can Help You!
              </span>
            </h2>

            {/* Interactive Modern Glass Tabs */}
            <div className="flex p-1 bg-slate-950/50 border border-slate-900 rounded-xl mb-6 max-w-md">
              {(["story", "focus", "philosophy"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === tab
                    ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                    }`}
                >
                  {tab === "story" ? "My Story" : tab === "focus" ? "My Focus" : "Philosophy"}
                </button>
              ))}
            </div>

            {/* Tab Contents with Fade animation */}
            <div className="min-h-[160px] mb-8 bg-slate-900/30 border border-slate-850/60 rounded-2xl p-6 backdrop-blur-sm">
              {activeTab === "story" && (
                <div className="animate-fade-in">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    I am a frontend engineer and UI/UX designer based in Tamil Nadu, India. Having worked on live deployments like the <strong className="text-purple-400 font-semibold">Trading Academy Web Application</strong> platform, <strong className="text-purple-400 font-semibold">Finance Applications</strong> portals, and online ticket booking applications, I specialize in translating client criteria into beautiful, secure, and production-ready code.
                  </p>
                </div>
              )}

              {activeTab === "focus" && (
                <div className="animate-fade-in flex flex-col gap-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    I run an integrated design-to-deployment pipeline:
                  </p>
                  <ul className="text-slate-450 text-xs md:text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span><strong>Figma </strong> to establish strong visual hierarchy and UX patterns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span><strong>React & Angular SPA engineering</strong> using modern state-management and styling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-bold">✓</span>
                      <span><strong>Cross-platform development</strong> using Ionic and React Native for mobile.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "philosophy" && (
                <div className="animate-fade-in">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    I believe great design is invisible—it simply works. I focus on optimizing performance metrics, ensuring full responsive adaptiveness across devices, and maintaining semantic layouts that are SEO-friendly and highly accessible to all users.
                  </p>
                </div>
              )}
            </div>

            {/* Core Frameworks Badges */}
            <div className="mb-8">
              <h4 className="text-xs text-slate-400 font-extrabold uppercase tracking-widest mb-4">Toolkit Focus</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Angular",
                  "React Native",
                  "Ionic",
                  "Tailwind CSS",
                  "Figma",
                  "Bootstrap",
                ].map((item, i) => (
                  <span
                    key={item}
                    style={{ transitionDelay: `${200 + i * 50}ms` }}
                    className={`px-3.5 py-1.5 text-xs font-bold bg-slate-900/60 text-slate-300 border border-slate-800/60 rounded-full shadow-sm hover:bg-gradient-to-r hover:from-purple-650 hover:to-fuchsia-650 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:shadow-purple-550/20 transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="text-xs text-slate-400 font-extrabold uppercase tracking-widest mb-4">Connect With Me</h4>
              <div
                className={`flex gap-4 transition-all duration-700 delay-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
                  }`}
              >
                {[
                  {
                    id: "linkedin",
                    icon: "linkedin",
                    url: "https://linkedin.com/in/arun-kumar-ayyappan-513ba7226",
                    color: "hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/10"
                  },
                  {
                    id: "github",
                    icon: "github",
                    url: "https://github.com/Arunkumar2708",
                    color: "hover:text-white hover:border-slate-700 hover:bg-slate-800"
                  },
                  {
                    id: "instagram",
                    icon: "instagram",
                    url: "https://www.instagram.com/arun_kumar_27_?igsh=MTN5cXN2dGIydHBkOQ==",
                    color: "hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/10"
                  },
                ].map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-950 border border-slate-900/60 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} cursor-pointer`}
                    aria-label={social.id}
                  >
                    <Icon icon={`mdi:${social.icon}`} width="20" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
