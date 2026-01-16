// src/components/About.tsx
import React from "react";
import bgImg from "../assets/ChatGPT Image Dec 21, 2025, 07_22_29 PM.png"
import { Icon } from "@iconify/react";
const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-20 pb-3 bg-white overflow-hidden"
    > 
      {/* Abstract Black Shapes */}
      <div className="absolute left-10 top-20 w-40 h-40 bg-black rounded-full opacity-10 blur-2xl -z-10"></div>
      <div className="absolute right-0 top-40 w-64 h-64 bg-gray-900 rounded-full opacity-5 blur-3xl -z-10"></div>
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-gray-800 rounded-full opacity-5 blur-3xl -z-10 translate-x-1/2"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-10 text-center">
         <h2 className="text-3xl font-bold text-gray-800 mb-12 border-b border-gray-300 pb-5 ">About</h2>
        <div className=" mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Graphic Area */}
          <div className="relative">
            {/* <div className="absolute -top-10 -left-5 w-56 h-56 bg-yellow-400 rounded-[3rem] rotate-6 opacity-90 shadow-xl"></div> */}
            <img
              src={bgImg}
              alt="profile"
              className="relative z-10  mx-auto drop-shadow-xl"
            />
          </div>

          {/* Right Text Area */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight text-start">
              Need Creative Design?<br />
              <span className="text-gray-700">I can Help You!</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed text-start">
              I’m a UI/UX Designer with a strong focus on clean, minimal, and
              modern interfaces. I create designs that not only look good but
              also work intuitively and effectively.
            </p>

            {/* Skills badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Angular", "React", "Bootstrap", "Tailwind", "Ionic" ,"React Native"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 text-sm font-semibold bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
                >
                  {item}
                </span>
              ))}
            </div> 

            {/* Social icons */}
           <div className="mt-8 flex gap-4">
  <span className="p-3 bg-black text-white rounded-full hover:bg-gray-700 cursor-pointer">
    <Icon icon="mdi:facebook" width="20" />
  </span>

  <span className="p-3 bg-black text-white rounded-full hover:bg-gray-700 cursor-pointer">
    <Icon icon="mdi:instagram" width="20" />
  </span>

  <span className="p-3 bg-black text-white rounded-full hover:bg-gray-700 cursor-pointer">
    <Icon icon="mdi:linkedin" width="20" />
  </span>
</div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
