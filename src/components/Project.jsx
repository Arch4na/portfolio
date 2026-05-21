import React from "react";

function Project() {
  return (
    <section
      id="stylesync"
      className="min-h-screen flex items-center justify-center px-[8%] py-32 relative overflow-hidden text-white"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full -top-40 -right-40 blur-[120px]"></div>

      <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 rounded-full -bottom-32 -left-32 blur-[120px]"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl rounded-[35px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl p-10 md:p-16 hover:scale-[1.02] transition duration-500">

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-blue-400 text-center mb-12 drop-shadow-lg">
          MINOR PROJECT <br />
          <span className="text-cyan-300">Style Sync</span>
        </h2>

        {/* Content */}
        <div className="space-y-8 text-center">

          {/* Subtitle */}
          <h3 className="text-3xl font-semibold text-cyan-300">
            AI Fashion Assistant
          </h3>

          {/* Description */}
          <p className="text-blue-100 leading-9 text-lg">
            StyleSync helps you manage wardrobe, mix & match outfits,
            and plan your fashion using smart AI suggestions. It is an
            intelligent web application designed to simplify fashion
            planning and outfit management through smart digital solutions.
          </p>

          <p className="text-blue-100 leading-9 text-lg">
            The platform features a Digital Wardrobe where users can
            upload and organize their clothes, shoes, and accessories
            virtually, making it easy to track and manage their fashion
            collections.
          </p>

          <p className="text-blue-100 leading-9 text-lg">
            One of the key highlights of StyleSync is its AI-powered
            Mix & Match system, which suggests stylish outfit combinations
            by analyzing colors, styles, and accessories to help users
            create fashionable looks effortlessly.
          </p>

          <p className="text-blue-100 leading-9 text-lg">
            The application also includes a Fashion Planner that allows
            users to schedule outfits for specific days, events, or even
            an entire month, helping them stay organized and save time in
            daily outfit selection.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            {/* Feature 1 */}
            <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition duration-500 overflow-hidden">

              <div className="absolute w-[150px] h-[150px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

              <div className="text-5xl mb-5 animate-bounce">
                👗
              </div>

              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                Digital Wardrobe
              </h3>

              <p className="text-blue-100 leading-7">
                Organize clothes, shoes, and accessories virtually.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition duration-500 overflow-hidden">

              <div className="absolute w-[150px] h-[150px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

              <div className="text-5xl mb-5 animate-bounce">
                🤖
              </div>

              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                AI Outfit Suggestions
              </h3>

              <p className="text-blue-100 leading-7">
                Smart outfit combinations using AI analysis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 hover:-translate-y-3 hover:shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition duration-500 overflow-hidden">

              <div className="absolute w-[150px] h-[150px] bg-blue-500/20 rounded-full -top-16 -right-16 blur-3xl"></div>

              <div className="text-5xl mb-5 animate-bounce">
                📅
              </div>

              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                Outfit Planner
              </h3>

              <p className="text-blue-100 leading-7">
                Schedule outfits for events and daily styling.
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="mt-12">

            <a
              href="#"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:-translate-y-2 hover:scale-105 hover:shadow-cyan-400/50 transition duration-300"
            >
              Explore Project
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;