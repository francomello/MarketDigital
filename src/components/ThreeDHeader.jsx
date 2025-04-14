import React, { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import HeaderLinks from "./HeaderLinks";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "sobre-market", label: "Sobre market" },
  { id: "beneficios", label: "Beneficios" },
  { id: "vision", label: "Vision" },
  { id: "faq", label: "Faq" },
  { id: "contacto", label: "Contacto" },
];

export default function ThreeDHeader() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[70%] max-w-5xl">
      <nav className="relative flex justify-between items-center bg-black/30 backdrop-blur-md py-3 px-6 rounded-full border border-cyan-400/20 shadow-xl">
        <div className="text-md-blue-light font-bold text-lg hidden sm:block">MarketDigital</div>
        <HeaderLinks
          sections={sections}
          activeSection={activeSection}
          onClick={handleLinkClick}
        />
        <HamburgerMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          sections={sections}
          active={activeSection}
          onClick={handleLinkClick}
        />
      </nav>
    </header>
  );
}
