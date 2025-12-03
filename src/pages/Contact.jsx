import React from "react";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "laurencemunoko@gmail.com",
      href: "mailto:laurencemunoko@gmail.com",
      icon: "📧"
    },
    {
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/laurence-76noire/",
      icon: "💼"
    },
    {
      label: "Discord",
      value: "Chat on Discord",
      href: "https://discordapp.com/users/https://laurence298.github.io/#",
      icon: "💬"
    }
  ];

  return (
    <section id="contact" className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1B3C53] mb-2">
            Get In Touch
          </h2>
          <p className="text-[#456882]">Feel free to reach out through any of these channels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? "_blank" : undefined}
              rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="bg-[#E3E3E3] p-6 rounded-lg hover:bg-[#234C6A] hover:text-white transition-all duration-200 group text-center border-2 border-transparent hover:border-[#1B3C53]"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {contact.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#1B3C53] group-hover:text-white mb-1">
                {contact.label}
              </h3>
              <p className="text-sm text-[#456882] group-hover:text-white/90 break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
