import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <p className="text-gray-600 mb-6">You can find me on these platforms:</p>
      <div className="flex justify-center gap-10">
        {/* Email */}
        <a href="laurencemunoko@gmail.com" className="group text-center">
          <img
            src="https://img.icons8.com/color/48/000000/apple-mail.png"
            alt="Email"
            className="w-12 h-12 mx-auto transition-transform group-hover:scale-110"
          />
          <p className="mt-2 text-sm text-gray-700 group-hover:text-blue-600">
            Email
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/laurence-76noire/"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="w-12 h-12 mx-auto transition-transform group-hover:scale-110"
          />
          <p className="mt-2 text-sm text-gray-700 group-hover:text-blue-600">
            LinkedIn
          </p>
        </a>

        {/* Discord */}
        <a
          href="https://discordapp.com/users/yororso
"
          target="_blank"
          rel="noopener noreferrer"
          className="group text-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
            alt="Discord"
            className="w-12 h-12 mx-auto transition-transform group-hover:scale-110"
          />
          <p className="mt-2 text-sm text-gray-700 group-hover:text-blue-600">
            Discord
          </p>
        </a>
      </div>
    </section>
  );
}
