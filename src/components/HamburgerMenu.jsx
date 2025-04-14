import React from "react";

export default function HamburgerMenu({ isOpen, setIsOpen, sections, active, onClick }) {
  return (
    <div className="sm:hidden relative ml-auto">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
        ☰
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-black/90 border border-cyan-400 rounded shadow-lg py-2 z-50">
          {sections.map((sec, i) => (
            <li key={i}>
              <a
                href={`#${sec.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (typeof onClick === "function") {
                    onClick(sec.id);
                  }
                }}
                className={`block px-4 py-2 text-sm ${
                  active === sec.id ? "text-cyan-400 font-semibold" : "text-white"
                } hover:bg-cyan-700/20`}
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
