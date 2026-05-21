import React from "react";

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-white/5 backdrop-blur-lg">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo / Name */}
          <div>
            <h2
              className="text-3xl font-bold bg-gradient-to-r 
              from-cyan-300 via-blue-400 to-indigo-400 
              bg-clip-text text-transparent"
            >
              Archana D
            </h2>

            <p className="mt-3 text-blue-100 max-w-md leading-7">
              Passionate Diploma student in Computer Engineering,
              focused on creating modern web experiences and
              beautiful user interfaces.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-white font-medium">

            <li>
              <a
                href="#home"
                className="hover:text-cyan-300 transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#education"
                className="hover:text-cyan-300 transition duration-300"
              >
                Education
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-cyan-300 transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#stylesync"
                className="hover:text-cyan-300 transition duration-300"
              >
                StyleSync
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-cyan-300 transition duration-300"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">

          <p>
            © 2026 Archana D. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <a
              href="#"
              className="hover:text-cyan-300 transition duration-300 hover:scale-110"
            >
              <i className="ri-github-fill text-2xl"></i>
            </a>

            <a
              href="#"
              className="hover:text-cyan-300 transition duration-300 hover:scale-110"
            >
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>

            <a
              href="#"
              className="hover:text-cyan-300 transition duration-300 hover:scale-110"
            >
              <i className="ri-instagram-line text-2xl"></i>
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;