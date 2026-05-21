import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-[8%] py-32 relative overflow-hidden text-white"
    >

      {/* Background Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full -top-40 -left-40 blur-[120px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 rounded-full -bottom-32 -right-32 blur-[120px]"></div>

      {/* Title */}
      <h2 className="text-center text-5xl md:text-6xl font-bold text-blue-400 mb-20 relative z-10 animate-pulse">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">

        {/* Skill Card 1 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            💻
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Web Development
          </h3>

          <p className="text-blue-100 leading-8">
            Creating responsive and modern websites using HTML, CSS,
            JavaScript, and React.
          </p>
        </div>

        {/* Skill Card 2 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            🎨
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            UI / UX Design
          </h3>

          <p className="text-blue-100 leading-8">
            Designing attractive user interfaces with smooth animations
            and modern layouts.
          </p>
        </div>

        {/* Skill Card 3 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            🧠
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Problem Solving
          </h3>

          <p className="text-blue-100 leading-8">
            Analyzing problems logically and finding efficient technical
            solutions.
          </p>
        </div>

        {/* Skill Card 4 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            🤝
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Team Collaboration
          </h3>

          <p className="text-blue-100 leading-8">
            Working effectively in teams and contributing ideas to
            achieve project goals.
          </p>
        </div>

        {/* Skill Card 5 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            ⚡
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Quick Learning
          </h3>

          <p className="text-blue-100 leading-8">
            Passionate about learning new technologies and improving
            development skills continuously.
          </p>
        </div>

        {/* Skill Card 6 */}
        <div className="relative p-10 rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-4 hover:scale-105 hover:border-blue-400/40 hover:shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition duration-500">

          <div className="absolute w-[180px] h-[180px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

          <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 text-4xl mb-6 shadow-xl animate-bounce">
            📱
          </div>

          <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
            Responsive Design
          </h3>

          <p className="text-blue-100 leading-8">
            Building mobile-friendly and responsive layouts for all
            screen sizes.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;