import React from "react";
import profileImg from "../assets/DSC_4649j-removebg-preview.png"; // adjust path if needed
import bgImg from "../assets/Picsart_25-08-26_18-40-04-843.png"

const Hero: React.FC = () => {
  return (
   <div className="relative h-screen flex items-center  justify-center md:justify-center  md:items-center  bg-cover bg-right md:bg-center "
    style={{
    backgroundImage: `url(${bgImg})`,
 
  }} >
     <section
      id="#"
      className="flex flex-col-reverse md:flex-row items-end  justify-between container mx-auto px-6 "
   >
      {/* Left Content */}
      <div className="text-end md:text-left max-w-lg z-1 flex flex-col  items-end md:items-start ">
       <div className="w-60 lg:w-100">
         <p className="text-red-500 font-semibold mb-2 uppercase md:pb-4 pb-20 md:">
          Get Every Single Solutions.
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
           I’m UI/UX Designer & Frontend Developer
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
         
           <span className="text-blue-900">Arun Kumar</span>
        </h1>
        <p className="mt-4 text-gray-600">
          I specialize in creating stunning, user-friendly websites that bring
          ideas to life. Passionate about clean design and modern web
          technologies.
        </p>
       </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Image with Circular Gradient */}
      {/* <div className="relative flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0">
      
        <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full -z-10 blur-2xl opacity-70"></div>
        
        <img
          src={profileImg}
          alt="Profile"
          className="w-90 h-auto object-cover rounded-full border-4 border-white shadow-xl"
        />
      </div> */}

      {/* 👇 Wave Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-24 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.33C906.67 116.67 823.33 123.33 740 109.17C656.67 95 573.33 60 490 54.17C406.67 48.33 323.33 70 240 80C156.67 90 73.33 90 0 80V120H1200V0C1117.67 27.5 1064.65 50 985.66 83.33Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
   </div>
  );
};

export default Hero;
