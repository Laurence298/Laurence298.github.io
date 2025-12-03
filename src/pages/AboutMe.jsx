import React from "react";
import Contact from "./Contact";

function AboutMe() {
  return (
    <>
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/PictureMe.jpg"
                alt="Profile"
                className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-[#234C6A] shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B3C53] mb-3 sm:mb-4">
                Hello!
              </h1>
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#234C6A] text-white rounded-lg mb-3 sm:mb-4 font-medium text-sm sm:text-base">
                Game Designer & Programmer
              </div>
              <p className="text-base sm:text-lg lg:text-xl text-[#456882] leading-relaxed">
                Hi! I'm Laurence, a game designer and full-stack developer. I build games with Unity and C#, and web applications with React and Next.js. From designing 2D fighting mechanics to integrating AI-powered features, I love solving technical challenges and creating polished user experiences. Currently seeking opportunities in game development, software engineering, or related roles.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default AboutMe;
