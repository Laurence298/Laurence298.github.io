import React from "react";
import Contact from "./Contact";

function AboutMe() {
  return (
    <>
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0">
              <img
                src="/PictureMe.jpg"
                alt="Profile"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[#234C6A] shadow-lg"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B3C53] mb-4">
                Hello!
              </h1>
              <div className="inline-block px-4 py-2 bg-[#234C6A] text-white rounded-lg mb-4 font-medium">
                Game Designer & Programmer
              </div>
              <p className="text-lg text-[#456882] leading-relaxed max-w-2xl">
                Hi! My name's <span className="text-[#1B3C53] font-semibold">Laurence</span>, and I'm a game designer and programmer with
                a passion for crafting engaging experiences. While my main focus is game
                development, I'm also interested in applying my skills to other
                areas, such as app development. I'm looking for opportunities as a
                game designer, programmer, or in related roles.
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
