import React from "react";
import { github, linkedin } from "../assets/icons";
import Resume from "../assets/resume/chandan_kumar_A04.pdf";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/chandan0405",
    icon: (
      <img
        src={github}
        alt="GitHub"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chandan04051999",
    icon: (
      <img
        src={linkedin}
        alt="LinkedIn"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M13.48 3.567a1.2 1.2 0 0 1 1.695 0l4.258 4.259a1.2 1.2 0 1 1-1.697 1.697l-3.41-3.41-8.06 8.06a1.2 1.2 0 0 0 0 1.697l3.38 3.38a1.2 1.2 0 1 1-1.697 1.697l-3.38-3.38a3.6 3.6 0 0 1 0-5.09l8.909-8.91z" />
        <path d="M8.7 11.6h10.1a1.2 1.2 0 1 1 0 2.4H8.7a1.2 1.2 0 1 1 0-2.4z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2.2A3.6 3.6 0 0 0 4.2 7.8v8.4a3.6 3.6 0 0 0 3.6 3.6h8.4a3.6 3.6 0 0 0 3.6-3.6V7.8a3.6 3.6 0 0 0-3.6-3.6H7.8z" />
        <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM17.6 6.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className=" p-4 border-t border-slate-200 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-500 transition-all duration-200 flex items-center justify-center"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href={Resume}
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/25 transition-all duration-200"
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;
