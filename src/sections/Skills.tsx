// src/sections/Skills.tsx
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

type Skill = {
  name: string;
  icon: string;
  level: string;
};

const skills: { category: string; description: string; items: Skill[] }[] = [
  {
    category: "01. Design & Concept",
    description: "Establishing wireframes, high-fidelity visual interfaces, and user journeys.",
    items: [
      { name: "Figma UI/UX Tool", icon: "logos:figma", level: "85%" },
      { name: "Wireframing Layouts", icon: "mdi:draw", level: "80%" },
      { name: "Interactive Prototype", icon: "mdi:application-brackets", level: "75%" },
    ],
  },
  {
    category: "02. Layout & Styling",
    description: "Writing responsive styling matrices and pixel-perfect layouts.",
    items: [
      { name: "Tailwind CSS Grid", icon: "logos:tailwindcss-icon", level: "90%" },
      { name: "Bootstrap Framework", icon: "logos:bootstrap", level: "85%" },
      { name: "Mobile Responsiveness", icon: "mdi:responsive", level: "90%" },
    ],
  },
  {
    category: "03. App Development",
    description: "Developing robust single-page web codebases and mobile frameworks.",
    items: [
      { name: "React / React Native", icon: "logos:react", level: "90%" },
      { name: "Angular Framework", icon: "logos:angular-icon", level: "85%" },
      { name: "Ionic Hybrid App", icon: "logos:ionic-icon", level: "70%" },
    ],
  },
  {
    category: "04. Quality & Delivery",
    description: "Deploying code updates, environment configuration, and task management.",
    items: [
      { name: "Git Version Control", icon: "logos:git-icon", level: "80%" },
      { name: "VS Code Environment", icon: "vscode-icons:file-type-vscode", level: "95%" },
    ],
  },
];

const SkillBar: React.FC<{
  name: string;
  icon: string;
  level: string;
  isVisible: boolean;
}> = ({ name, icon, level, isVisible }) => {
  return (
    <li className="flex items-center space-x-3 group">
      <div className="p-2 bg-slate-950/80 border border-slate-850 rounded-xl group-hover:scale-108 group-hover:border-purple-500/25 group-hover:bg-slate-900 transition-all duration-300">
        <Icon icon={icon} width="22" height="22" />
      </div>

      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="font-bold text-slate-350 text-xs tracking-wide group-hover:text-white transition-colors">
            {name}
          </span>
          <span className="text-[10px] font-black text-purple-400">{level}</span>
        </div>

        <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-slate-900/60">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            style={{ width: isVisible ? level : "0%" }}
          ></div>
        </div>
      </div>
    </li>
  );
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative pt-24 pb-32 overflow-hidden bg-[#0a0f1d]"
    >
      {/* Background Blobs */}
      <div className="absolute top-24 left-0 w-80 h-80 bg-purple-600/10 rounded-full filter blur-[100px] -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px] -z-10 animate-pulse-glow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div
            className={`inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-extrabold text-white mb-3">
              Technical Expertise
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full shadow-[0_2px_10px_rgba(168,85,247,0.4)]" />
            <p className="text-slate-400 mt-5 max-w-md mx-auto text-base">
              A chronological software engineering pipeline highlighting my design-to-deployment skillsets.
            </p>
          </div>
        </div>

        {/* Connected Development Flow Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-3 xl:gap-5">
          {skills.map((group, index) => (
            <React.Fragment key={group.category}>
              {/* Stage Card */}
              <div
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`w-full lg:w-[22%] glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between shadow-lg relative transition-all duration-1000
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                `}
              >
                <div>
                  {/* Category Header */}
                  <h3 className="text-sm font-black text-white mb-2 flex items-center gap-2.5">
                    <span className="w-6 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></span>
                    {group.category}
                  </h3>
                  
                  {/* Category Description */}
                  <p className="text-[11px] text-slate-450 leading-relaxed mb-6 font-medium">
                    {group.description}
                  </p>

                  {/* Items List */}
                  <ul className="space-y-5">
                    {group.items.map((item) => (
                      <SkillBar key={item.name} {...item} isVisible={isVisible} />
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting Chevron (Hidden after last card) */}
              {index < 3 && (
                <div
                  className={`flex items-center justify-center text-purple-500/40 my-3 lg:my-0 lg:mx-0.5 rotate-90 lg:rotate-0 transition-all duration-1000 delay-500
                    ${isVisible ? "opacity-100 scale-100 animate-pulse" : "opacity-0 scale-50"}`}
                >
                  <Icon icon="mdi:chevron-double-right" className="text-3xl" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none z-10">
        <svg
          className="relative block w-full h-16 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 120L0 0C166.667 60 333.333 90 500 90C666.667 90 833.333 60 1200 0V120Z"
            className="fill-[#0c1020]"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
