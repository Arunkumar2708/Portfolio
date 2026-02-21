// src/sections/Skills.tsx
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

type Skill = {
  name: string;
  icon: string;
  level: string;
};

const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend Frameworks",
    items: [
      { name: "Angular", icon: "logos:angular-icon", level: "85%" },
      { name: "React", icon: "logos:react", level: "90%" },
      { name: "React Native", icon: "tabler:brand-react-native", level: "70%" },
    ],
  },
  {
    category: "UI Libraries",
    items: [
      { name: "Bootstrap", icon: "logos:bootstrap", level: "85%" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: "90%" },
      { name: "Ionic", icon: "logos:ionic-icon", level: "70%" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "logos:git-icon", level: "80%" },
      { name: "Figma", icon: "logos:figma", level: "85%" },
      // { name: "Adobe XD", icon: "logos:adobe-xd", level: "75%" },
      { name: "VS Code", icon: "vscode-icons:file-type-vscode", level: "95%" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Responsive Design", icon: "mdi:responsive", level: "90%" },
      { name: "Wireframing", icon: "mdi:draw", level: "80%" },
      { name: "Prototyping", icon: "mdi:application-brackets", level: "75%" },
    ],
  },
];

// --- Sub-component for individual skill bars to handle their own animation ---
const SkillBar: React.FC<{
  name: string;
  icon: string;
  level: string;
  isVisible: boolean;
}> = ({ name, icon, level, isVisible }) => {
  return (
    <li className="flex items-center space-x-4 group">
      <div className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
        <Icon icon={icon} width="28" height="28" />
      </div>

      <div className="w-full">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-gray-700 text-sm tracking-wide">
            {name}
          </span>
          <span className="text-xs font-bold text-purple-600">{level}</span>
        </div>

        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden border border-gray-200/50">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
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
      className="relative pt-24 pb-32 overflow-hidden bg-transparent"
    >
      {/* Abstract Background Blobs */}

      <div className="absolute top-25 left-0 w-60 h-60 bg-black/10  rounded-[40%] blur-3xl -z-10"></div>

      <div className="absolute bottom-25 right-10 w-72 h-72 bg-gray-900/10 rounded-[45%] blur-2xl -z-10"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Smaller vector style badges (like your image) */}

      <div className="absolute right-0 top-40 w-28 h-40 bg-yellow-200 rounded-3xl opacity-40 rotate-12 -z-10"></div>

      <div className="absolute left-0 bottom-60 w-20 h-32 bg-yellow-200 rounded-full opacity-30 rotate-[25deg] -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            className={`inline-block transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
              Technical Expertise
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 max-w-md mx-auto">
              A specialized toolset focused on building high-performance web and
              mobile applications.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={group.category}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                ${index === 3 ? "lg:col-start-2" : ""}
              `}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                {group.category}
              </h3>

              <ul className="space-y-6">
                {group.items.map((item) => (
                  <SkillBar key={item.name} {...item} isVisible={isVisible} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 120L0 0C166.667 60 333.333 90 500 90C666.667 90 833.333 60 1200 0V120Z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;
