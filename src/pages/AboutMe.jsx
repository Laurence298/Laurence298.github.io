import React from "react";
import Contact from "./Contact";

function AboutMe() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center gap-6 p-2 bg-white rounded-2xl  max-w-4xl my-6 mx-auto">
        <img
          src="/PictureMe.jpg" // Update with your actual image path
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover border-4 border-gray-200"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Hello!</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Hi! My name’s Laurence, and I’m a game designer and programmer with
            a passion for crafting games. While my main focus is game
            development, I’m also interested in applying my skills to other
            areas, such as app development. I’m looking for opportunities as a
            game designer, programmer, or in related roles.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default AboutMe;
