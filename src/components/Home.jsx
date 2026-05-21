import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div
      id="home"
      className="min-h-screen overflow-x-hidden text-white relative font-[Poppins]"
    >

      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-indigo-500/10"></div>

      {/* Navbar */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        className="min-h-screen flex flex-col lg:flex-row
        items-center justify-center
        gap-20 px-8 lg:px-24 pt-32"
      >

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          {/* Small Intro */}
        

          {/* Main Heading */}
          <h1
            className="mt-6 text-5xl md:text-6xl lg:text-7xl
            font-extrabold leading-tight"
          >

            Hi, I'm{" "}

            <span
              className="bg-gradient-to-r
              from-cyan-300 via-blue-400 to-indigo-400
              bg-clip-text text-transparent"
            >
              Archana D
            </span>

          </h1>

          {/* Role */}
          <h2
            className="mt-6 text-2xl lg:text-3xl
            font-semibold text-cyan-200"
          >
            Diploma Student In Computer Engineering
          </h2>

          {/* Description */}
          <p
            className="mt-8 text-blue-100 leading-8
            max-w-2xl text-lg"
          >

            Passionate about technology, UI/UX design,
            and modern web development. I love creating
            beautiful and responsive websites with
            clean user experiences and interactive designs.

          </p>

          {/* Buttons */}
          <div
            className="mt-10 flex flex-wrap
            gap-5 justify-center lg:justify-start"
          >

            {/* Explore Button */}
            <a
              href="#education"
              className="px-8 py-4 rounded-full
              bg-gradient-to-r from-blue-600 to-cyan-500
              font-semibold shadow-lg
              hover:scale-105 hover:shadow-cyan-500/50
              transition duration-300"
            >
              Explore More
            </a>

            {/* Project Button */}
            <a
              href="#stylesync"
              className="px-8 py-4 rounded-full
              border-2 border-cyan-400
              text-cyan-300 font-semibold
              hover:bg-cyan-400 hover:text-slate-900
              transition duration-300"
            >
              View Projects
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="relative group">

            {/* Glow Background */}
            <div
              className="absolute inset-0 rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-500
              blur-3xl opacity-40
              group-hover:opacity-70
              transition duration-500"
            ></div>

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
              alt="Archana"
              className="relative w-[320px] h-[320px]
              md:w-[380px] md:h-[380px]
              lg:w-[430px] lg:h-[430px]
              rounded-full object-cover
              border-4 border-white/20
              shadow-[0_0_40px_rgba(59,130,246,0.5)]
              hover:scale-105
              transition duration-500"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home; 