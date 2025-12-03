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
      <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B3C53] mb-1">
            Get In Touch
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? "_blank" : undefined}
              rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 bg-[#E3E3E3] px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#234C6A] hover:text-white transition-all duration-200 group border-2 border-transparent hover:border-[#1B3C53]"
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200">
                {contact.icon}
              </span>
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base text-[#1B3C53] group-hover:text-white">
                  {contact.label}
                </div>
                <div className="text-xs text-[#456882] group-hover:text-white/90 hidden sm:block">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
