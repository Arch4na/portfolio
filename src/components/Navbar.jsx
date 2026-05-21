import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home", icon: "🏠" },
    { name: "Education", link: "#education", icon: "🎓" },
    { name: "Skills", link: "#skills", icon: "⚡" },
    { name: "StyleSync", link: "#stylesync", icon: "💻" },
    { name: "Contact", link: "#contact", icon: "📩" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="w-full flex items-center justify-between
        px-6 lg:px-20 py-4
        bg-slate-900/70 backdrop-blur-xl
        border-b border-white/10 shadow-2xl relative"
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl lg:text-4xl font-extrabold
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
          bg-clip-text text-transparent"
        >
          Archana D
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="group relative flex items-center gap-2">
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full">
                {item.icon}
              </span>

              <a
                href={item.link}
                className="text-lg hover:text-cyan-300 transition"
              >
                {item.name}
              </a>

              <span
                className="absolute left-0 -bottom-2
                w-0 h-[2px]
                bg-gradient-to-r from-cyan-400 to-blue-500
                transition-all duration-500
                group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="hidden md:flex px-6 py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-cyan-500
          text-white font-semibold
          hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-slate-900/95 backdrop-blur-xl
          border-b border-white/10 px-6 py-6"
        >
          <ul className="flex flex-col gap-6 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="flex items-center gap-3 text-lg hover:text-cyan-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="bg-white/10 px-2 py-1 rounded-full">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-6 inline-block w-full text-center
            px-6 py-3 rounded-full
            bg-gradient-to-r from-blue-600 to-cyan-500
            text-white font-semibold"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;