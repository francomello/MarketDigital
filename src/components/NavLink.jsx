import React from "react";

export default function NavLink({ label, target, isActive }) {
  return (
    <li>
      <a
        href={`#${target}`}
        className={`transition-all duration-300 hover:text-cyan-400 ${
          isActive ? "text-cyan-400 font-bold tracking-wide shadow-cyan-500 drop-shadow" : ""
        }`}
      >
        {label}
      </a>
    </li>
  );
}
