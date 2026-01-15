// src/sections/Skills.tsx
import React from "react";
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
      { name: "React Native", icon: "tabler:brand-react-native" , level: "70%"  }
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



const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative pb-34 pt-34 overflow-hidden">

      {/* Abstract Background Blobs */}
      <div className="absolute top-25 left-0 w-60 h-60 bg-black/10  rounded-[40%] blur-3xl -z-10"></div>
      <div className="absolute bottom-25 right-10 w-72 h-72 bg-gray-900/10 rounded-[45%] blur-2xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>

      {/* Smaller vector style badges (like your image) */}
      <div className="absolute right-0 top-40 w-28 h-40 bg-yellow-200 rounded-3xl opacity-40 rotate-12 -z-10"></div>
      <div className="absolute left-0 bottom-60 w-20 h-32 bg-yellow-200 rounded-full opacity-30 rotate-[25deg] -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 border-b-2 border-gray-100 pb-5">Skills</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Soft top highlight */}
              <div className="absolute top-0 right-0 w-50 h-4 bg-gradient-to-l from-gray-600/40 to-transparent "></div>
              <div className="absolute bottom-0 left-0 w-50 h-4 bg-gradient-to-r from-gray-600/40 to-transparent "></div>

              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {group.category}
              </h3>

              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center space-x-4">
                    <Icon icon={item.icon} width="30" height="30" />

                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="text-sm text-gray-500">{item.level}</span>
                      </div>

                      <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
