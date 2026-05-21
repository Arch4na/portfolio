import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-[5%] py-24 text-white"
    >

      {/* Title */}
      <h2 className="text-center text-5xl font-bold text-blue-400 mb-20 animate-bounce">
        Education Journey
      </h2>

      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

        {/* Left Side */}
        <div className="flex-1 flex justify-center">

          {/* Main Card */}
          <div className="relative w-full max-w-[550px] p-12 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden hover:-translate-y-3 hover:scale-105 transition duration-500">

            {/* Glow Circle */}
            <div className="absolute w-[250px] h-[250px] bg-blue-500/30 rounded-full -top-20 -right-20 blur-3xl"></div>

            {/* Animated Circle */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 mb-8 animate-pulse"></div>

            <h3 className="text-3xl font-bold text-cyan-300 mb-4">
              Diploma in Computer Engineering
            </h3>

            <h4 className="text-blue-100 mb-5 font-medium text-lg">
              Gov. Women's Polytechnic College, Kaimanam
            </h4>

            <p className="inline-block px-5 py-2 rounded-full bg-blue-500/20 text-blue-400 font-semibold mb-6">
              2024 - 2027
            </p>

            <p className="leading-8 text-slate-200">
              Currently pursuing a Diploma in Computer Engineering with
              a strong interest in web development, programming, UI/UX
              design, and modern technologies.
            </p>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 w-full">

          <div className="flex flex-col gap-6">

            {/* Info Box 1 */}
            <div className="p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:translate-x-3 hover:bg-blue-500/10 transition duration-500 shadow-xl">

              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                Programming
              </h3>

              <p className="text-slate-200 leading-7">
                Learning JavaScript, React, and modern web technologies.
              </p>

            </div>

            {/* Info Box 2 */}
            <div className="p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:translate-x-3 hover:bg-blue-500/10 transition duration-500 shadow-xl">

              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                Creative Skills
              </h3>

              <p className="text-slate-200 leading-7">
                Focused on UI design, animations, and responsive layouts.
              </p>

            </div>

            {/* Info Box 3 */}
            <div className="p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:translate-x-3 hover:bg-blue-500/10 transition duration-500 shadow-xl">

              <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                Future Goals
              </h3>

              <p className="text-slate-200 leading-7">
                To become a successful software developer and UI designer.
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;