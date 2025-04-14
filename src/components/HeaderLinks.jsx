import React from "react";

export default function HeaderLinks({ sections, activeSection, onClick }) {
  return (
    <ul className="hidden sm:flex justify-center items-center gap-6 w-full text-md-blue-pastel text-sm font-semibold">
      {sections.map((sec, i) => (
        <li key={i}>
          <a
            href={`#${sec.id}`}
            className={`transition-colors duration-300 ${
              activeSection === sec.id ? "text-cyan-400 font-bold drop-shadow-[0_0_6px_cyan]" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" });
              onClick(sec.id);
            }}
          >
            {sec.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
