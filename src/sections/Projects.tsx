import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Billing from "../assets/Billing.png";
import Trading from "../assets/Trading.png";
import Interior from "../assets/Interior.png";
import TicketBooking from "../assets/TicketBooking.png";
import VehicleFinance from "../assets/Vehicle-Finance.png";
import Rootreach from "../assets/Rootreach.png";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoLink?: string;
  githubLink?: string;
};

const projects: Project[] = [
  {
    title: "Trading Academy WebSite",
    description:
      "A fully responsive web platform developed for a trading academy to manage student enrollments, courses, and administrative data efficiently. The system includes a structured dashboard for monitoring student progress, handling course information, and organizing academy operations. Built with Angular and Bootstrap to ensure scalability, performance, and a seamless user experience across devices.",
    image: Trading,
    tech: ["Angular", "Bootstrap"],
    demoLink: "https://aegistradingacademy.com/",
  },
  {
    title: "Vehicle Finance Web App",
    description:
      "A modern finance management web application designed for vehicle loan processing and payment tracking. The platform enables administrators to manage customer data, loan details, EMI schedules, and payment records through an intuitive dashboard. Developed using React, Tailwind CSS, and Laravel to deliver a secure, fast, and responsive financial management solution.",
    image: VehicleFinance,
    tech: ["React", "Tailwindcss", "Laravel"],
    demoLink: "https://sriambigaifinance.com/",
  },
  {
    title: "Ticket Booking",
    description:
      "An online ticket booking platform that provides users with a smooth and user-friendly seat reservation experience. The system supports real-time booking workflows, intuitive navigation, and responsive UI for seamless performance on all devices. Built using Angular, Bootstrap, and PHP to ensure reliable backend integration and efficient seat management.",
    image: TicketBooking,
    tech: ["Angular", "Bootstrap", "PHP"],
    demoLink: "https://indiancinemainmexico.com/home",
  },
  {
    title: "Billing App",
    description:
      "An Angular-based billing and invoicing application designed to streamline product billing, invoice generation, and print-ready documentation. The system includes product management, automated calculations, invoice previews, and print functionality. Developed using Ionic, Angular, and Bootstrap to provide a responsive and user-friendly billing experience.",
    image: Billing,
    tech: ["Ionic", "Angular", "Bootstrap"],
    demoLink: "https://billing-app-demo.com",
    githubLink: "https://github.com/Tecnoexito-Billing-Software/UI",
  },
  {
    title: "Interior Website",
    description:
      "A visually engaging website designed for showcasing interior design services and project presentations. The platform highlights design portfolios, service offerings, and customer engagement sections with smooth animations and modern UI components. Built using React, Bootstrap, and AOS to create an elegant and interactive browsing experience.",
    image: Interior,
    tech: ["React", "Bootstrap", "AOS"],
    demoLink: "https://subash-masa.github.io/interior-app/",
    githubLink: "https://github.com/Subash-MASA/interior-app",
  },
  {
    title: "Rootreach Technologies Website",
    description:
      "A corporate website developed to present company services, technology expertise, and contact information in a professional format. The platform focuses on brand identity, service presentation, and user engagement through a clean, responsive interface. Built using React, Bootstrap, and AOS for performance optimization and smooth animations.",
    image: Rootreach,
    tech: ["Angular", "Bootstrap", "AOS"],
    demoLink: "https://rootreachtechnologies.com/",
  },
];

// --- NEW INDIVIDUAL CARD COMPONENT ---
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the individual card is visible
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-panel relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_45px_rgba(168,85,247,0.18)] group
        ${isCardVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
      `}
    >
      {/* Sliding diagonal sheen overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-30"></div>

      {/* Inset rounded project image */}
      <div className="p-4 pb-0 relative overflow-hidden z-20">
        <div className="relative overflow-hidden rounded-2xl h-48 shadow-lg bg-slate-950/40">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-left relative z-20">
        <h3 className="text-xl font-extrabold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="mt-3">
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[500px]" : "max-h-[4.5rem]"
            }`}
          >
            <p
              className={`text-slate-350 text-sm leading-relaxed ${!isExpanded && "line-clamp-3"}`}
            >
              {project.description}
            </p>
          </div>

          {/* Read More button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-extrabold text-purple-450 hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-0.5"
            >
              {isExpanded ? (
                <>
                  Show Less <Icon icon="mdi:chevron-up" />
                </>
              ) : (
                <>Read More <Icon icon="mdi:chevron-down" /></>
              )}
            </button>
          </div>
        </div>

        {/* Translucent Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-white/5 border border-white/8 text-purple-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600/80 to-fuchsia-600/80 border border-purple-500/20 px-4.5 py-2.5 rounded-xl hover:from-purple-500 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <Icon icon="mdi:open-in-new" width="16" /> <span>Live Demo</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-200 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white px-4.5 py-2.5 rounded-xl active:scale-95 transition-all cursor-pointer"
            >
              <Icon icon="mdi:github" width="16" /> <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION COMPONENT ---
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="pb-24 pt-20 relative bg-[#0c1020] overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-40 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] opacity-60 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] opacity-60 animate-pulse-glow" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-3">Projects</h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full shadow-[0_2px_10px_rgba(168,85,247,0.4)]" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
