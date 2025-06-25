import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 p-2 bg-white rounded-2xl  max-w-4xl my-6 mx-auto">
      <img
        src="/PictureMe.jpg" // Update with your actual image path
        alt="Profile"
        className="w-50 h-50 rounded-full object-cover border-4 border-gray-200"
      />
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-2">Hello!</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          I'm laurence a game developer and software engineer passionate about
          creating immersive interactive experiences. I'm looking for
          opportunities in the gaming and tech industry where I can contribute
          to gameplay programming, AI systems, or tools development. I thrive in
          collaborative environments and love turning creative ideas into
          functional games.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
