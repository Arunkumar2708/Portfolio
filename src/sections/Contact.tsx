import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const cards = [
  {
    title: "Location",
    value: "Sambavarvadakarai, Tenkasi - 627856",
    icon: "mdi:map-marker",
    link:"https://www.google.com/maps/place/Sambavarvadakarai,+Tamil+Nadu+627856/@9.0021986,77.3926113,3450m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b069d3afd762bad:0x3ffa9855713268ab!8m2!3d9.0021219!4d77.3936415!16zL20vMGY2NWtw?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Contact",
    value: "+91 6379751901",
    icon: "mdi:phone",
    link: "tel:+916379751901",
  },
  {
    title: "Mail",
    value: "arunkumarbsc105@gmail.com",
    icon: "mdi:email",
    link: "mailto:arunkumarbsc105@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/Arunkumar2708",
    icon: "mdi:github",
    link: "https://github.com/Arunkumar2708",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/arun-kumar-a-513ba7226",
    icon: "mdi:linkedin",
    link: "https://www.linkedin.com/in/arun-kumar-a-513ba7226/",
  },
];

const Contact: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    ref.current && observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20  bg-gradient-to-t from-gray-300/40 to-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-14 text-center border-b-2 border-gray-100 pb-5">
          Let’s Contact !
        </h2>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center"
        >
          {cards.map((card, index) => {
            const Wrapper = card.link ? "a" : "div";

            return (
              <Wrapper
                key={index}
                href={card.link}
                target={card.link?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`
                  relative w-full max-w-md h-40 rounded-2xl overflow-hidden
                  border border-gray-300 group cursor-pointer
                  transition-all duration-700 bg-white
                  ${index >= 3 ? "md:translate-x-1/2" : ""}
                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Gradient expanding circle */}
                <div
                  className="absolute -top-20 -left-20 w-48 h-48 
                             bg-gradient-to-br from-purple-600 to-fuchsia-600
                             rounded-full
                             scale-100 group-hover:scale-[6]
                             transition-transform duration-700 ease-out"
                />

                {/* Content */}
                <div className="relative z-10 text-gray-900 group-hover:text-white transition-colors duration-300">
                  <div className="flex items-center gap-6 p-4">
                    {/* Icon with ripple */}
                    <div className="relative w-12 h-12 rounded-full bg-white/20 
                                    flex items-center justify-center text-white
                                    overflow-hidden">
                      <span className="absolute inset-0 bg-white/30 
                                       scale-0 group-hover:scale-150 
                                       opacity-0 group-hover:opacity-100
                                       transition-all duration-700 rounded-full" />
                      <Icon icon={card.icon} className="text-2xl relative z-10" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">
                        {card.title}
                      </h3>
                      <hr className="border-black/30" />
                    </div>
                  </div>

                  <div className="flex  px-4 pl-20">
                    <p className="text-sm opacity-80  break-words">
                      {card.value}
                    </p>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
