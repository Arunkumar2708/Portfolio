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
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-1000 border-2 border-gray-200 overflow-hidden 
        ${isCardVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
      `}
    >
      {/* Project Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      {/* Content */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-gray-700">{project.title}</h3>

        <div className="relative mt-2">
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              isExpanded ? "max-h-[500px]" : "max-h-[4.5rem]"
            }`} // 4.5rem is roughly 3 lines of text
          >
            <p
              className={`text-gray-600 text-sm leading-relaxed ${!isExpanded && "line-clamp-3"}`}
            >
              {project.description}
            </p>
          </div>

          {/* Corner Button Wrapper */}
          <div
            className={`flex justify-end ${!isExpanded ? "absolute bottom-0.5 right-0" : "mt-2"}`}
          >
            {/* Subtle gradient background only when collapsed to hide text under the button */}
            <div
              className={`${!isExpanded ? "bg-gradient-to-l from-white via-white/100 to-transparent pl-10" : ""}`}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-extrabold text-blue-600 hover:text-purple-700 transition-colors cursor-pointer flex items-center gap-0.5"
              >
                {isExpanded ? (
                  <>
                    Show Less <Icon icon="mdi:chevron-up" />
                  </>
                ) : (
                  <>... Read More</>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Tech Used */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-4 mt-5">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              <Icon icon="mdi:open-in-new" width="18" /> Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              <Icon icon="mdi:github" width="18" /> GitHub
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
      className="pb-16 pt-20 relative bg-slate-50 overflow-hidden "
    >
      {/* Background Blobs */}
      <div className="absolute top-40 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-fuchsia-100 rounded-full blur-[120px] opacity-60" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
          <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full" />
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
