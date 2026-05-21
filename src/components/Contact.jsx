import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-[8%] py-32 relative overflow-hidden text-white"
    >

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full -top-40 -left-40 blur-[120px]"></div>

      <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 rounded-full -bottom-40 -right-40 blur-[120px]"></div>

      {/* Title */}
      <h2 className="text-center text-5xl md:text-6xl font-bold text-blue-400 mb-5 animate-pulse relative z-10">
        Get In Touch
      </h2>

      {/* Subtitle */}
      <p className="text-center text-blue-100 text-lg max-w-3xl mx-auto mb-16 relative z-10 leading-8">
        Let’s connect! Feel free to reach out for collaboration,
        projects, or opportunities.
      </p>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-16 relative z-10">

        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-6">

          {/* Email Card */}
          <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="absolute w-[120px] h-[120px] bg-blue-500/20 rounded-full -top-10 -right-10 blur-3xl"></div>

            <div className="text-5xl mb-5 animate-bounce">
              📧
            </div>

            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              Email
            </h3>

            <a
              href="mailto:archanad8010@gmail.com"
              className="text-blue-100 hover:text-blue-400 hover:underline transition"
            >
              archanad8010@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="absolute w-[120px] h-[120px] bg-blue-500/20 rounded-full -top-10 -right-10 blur-3xl"></div>

            <div className="text-5xl mb-5 animate-bounce">
              📱
            </div>

            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              Phone
            </h3>

            <p className="text-blue-100">
              +91 98765 43210
            </p>
          </div>

          {/* Location Card */}
          <div className="relative p-8 rounded-[25px] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] transition duration-500">

            <div className="absolute w-[120px] h-[120px] bg-blue-500/20 rounded-full -top-10 -right-10 blur-3xl"></div>

            <div className="text-5xl mb-5 animate-bounce">
              📍
            </div>

            <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
              Location
            </h3>

            <p className="text-blue-100">
              Thiruvananthapuram, Kerala
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="flex-1 flex flex-col gap-6 p-10 rounded-[30px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-6 py-4 rounded-2xl bg-white/10 text-white placeholder:text-blue-100 outline-none focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-6 py-4 rounded-2xl bg-white/10 text-white placeholder:text-blue-100 outline-none focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Your Message"
            required
            className="w-full px-6 py-4 rounded-2xl bg-white/10 text-white placeholder:text-blue-100 outline-none resize-none focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400 transition"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:-translate-y-2 hover:shadow-cyan-400/50 transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;