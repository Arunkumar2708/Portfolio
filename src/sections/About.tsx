import React, { useEffect, useRef, useState } from "react";
import bgImg from "../assets/ChatGPT Image Dec 21, 2025, 07_22_29 PM.png";
import { Icon } from "@iconify/react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      className="relative pt-20 pb-16 bg-white overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div
        className={`absolute left-10 top-20 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-2xl -z-10 transition-all duration-[2000ms] ${isVisible ? "translate-x-10" : ""}`}
      ></div>
      <div
        className={`absolute right-0 top-40 w-64 h-64 bg-fuchsia-200 rounded-full opacity-20 blur-3xl -z-10 transition-all duration-[3000ms] ${isVisible ? "-translate-y-10" : ""}`}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        {/* Section Title Animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Graphic Area - Slides from Left */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-2xl scale-75 animate-pulse" />
            <img
              src={bgImg}
              alt="profile"
              className="relative z-10 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Text Area - Slides from Right */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Need Creative Design?
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                I can Help You!
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              I’m a UI/UX Designer with a strong focus on clean, minimal, and
              modern interfaces. I create designs that not only look good but
              also work intuitively and effectively.
            </p>

            {/* Skills badges - Staggered Appearance */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Angular",
                "React",
                "Bootstrap",
                "Tailwind",
                "Ionic",
                "React Native",
              ].map((item, i) => (
                <span
                  key={item}
                  style={{ transitionDelay: `${700 + i * 100}ms` }}
                  className={`px-4 py-2 text-sm font-semibold bg-gray-900 text-white rounded-full shadow-md hover:bg-purple-600 hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Social icons - Pop-in effect */}
            {/* Social icons - Pop-in effect with Links */}
            <div
              className={`mt-8 flex gap-4 transition-all duration-700 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {[
                {
                  id: "linkedin",
                  icon: "linkedin",
                  url: "https://linkedin.com/in/arun-kumar-a-513ba7226",
                },
                {
                  id: "github",
                  icon: "github",
                  url: "https://github.com/Arunkumar2708",
                },
                {
                  id: "instagram",
                  icon: "instagram",
                  url: "https://www.instagram.com/arun_kumar_27_?igsh=MTN5cXN2dGIydHBkOQ==",
                },
              ].map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-full hover:bg-purple-600 hover:rotate-[360deg] transition-all duration-500 cursor-pointer shadow-lg flex items-center justify-center"
                  aria-label={social.id}
                >
                  <Icon icon={`mdi:${social.icon}`} width="20" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
