import React from "react";

function Navbar() {
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
        px-8 lg:px-20 py-5
        bg-slate-900/40 backdrop-blur-2xl
        border-b border-white/10
        shadow-2xl relative overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        {/* Logo */}
        <a
          href="#home"
          className="relative text-3xl lg:text-4xl font-extrabold
          bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
          bg-clip-text text-transparent
          hover:scale-110 transition duration-500"
        >
          Archana D
        </a>

        {/* Nav Links */}
        <ul className="relative hidden md:flex items-center gap-10 text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="group relative flex items-center gap-2">

              {/* ICON (small image style) */}
              <span className="text-sm bg-white/10 px-2 py-1 rounded-full group-hover:bg-cyan-500/20 transition">
                {item.icon}
              </span>

              {/* LINK */}
              <a
                href={item.link}
                className="text-lg tracking-wide hover:text-cyan-300 transition duration-300 active:scale-95"
              >
                {item.name}
              </a>

              {/* underline animation */}
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

        {/* Button */}
        <a
          href="#contact"
          className="relative hidden md:flex
          px-7 py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-cyan-500
          text-white font-semibold
          shadow-lg shadow-cyan-500/20
          hover:scale-105 hover:shadow-cyan-400/40
          transition duration-300 active:scale-95"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;