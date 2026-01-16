import React from "react";
import { Icon } from "@iconify/react";
import Billing from "../assets/Billing.png"
import Trading from "../assets/Trading.png"
import Interior from "../assets/Interior.png"
type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink: string;
  githubLink: string;
};

const projects: Project[] = [
  // {
  //   title: "Portfolio Website",
  //   description: "A personal portfolio website to showcase my skills and projects.",
  //   image: "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg", // Replace with real screenshot
  //   tech: ["React", "TailwindCSS", "TypeScript"],
  //   demoLink: "https://your-portfolio-demo.com",
  //   githubLink: "https://github.com/yourusername/portfolio",
  // },
  {
    title: "Trading Academy WebSite",
    description: "Responsive dashboard for Academy to manage datas and students.",
    image: Trading,
    tech: ["Angular", "Bootstrap"],
    demoLink: "https://.com",
    githubLink: "https://github.com/yourusername/doctor-dashboard",
  },
  {
    title: "Billing App",
    description: "Angular-based billing application with invoice generation & printing.",
    image: Billing,
    tech: ["Ionic", "Angular", "Bootstrap"],
    demoLink: "https://billing-app-demo.com",
    githubLink: "https://github.com/Tecnoexito-Billing-Software/UI",
  },
  {
    title: "Interior Website",
    description: "React-based interior website with design  & inoviation.",
    image: Interior,
    tech: ["React", "Bootstrap","AOS"],
    demoLink: "https://subash-masa.github.io/interior-app/",
    githubLink: "https://github.com/Subash-MASA/interior-app",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="pb-20 pt-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 border-b-2 border-gray-100 pb-5">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Project Thumbnail */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-700">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>

                {/* Tech Used */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-5">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <Icon icon="mdi:open-in-new" width="18" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
                  >
                    <Icon icon="mdi:github" width="18" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
