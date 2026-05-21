import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(2);

  useEffect(() => {
    console.log("Count updated:", count);
    return()=>{
      console.log("count deleted")
    };
  }, [count]);

  function Increment() {
    if (count < 20) setCount(count +multi*multi );
  }

  function Decrement() {
    if (count > 0) setCount(count -multi*multi);
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* 🧮 MATH BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* GLASS CARD */}
      <div className="relative z-10 w-[320px] sm:w-[380px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-center">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-white mb-6 tracking-wide">
          Counter App
        </h1>

        {/* COUNT */}
        <div className="text-7xl font-extrabold text-white mb-8 drop-shadow-lg">
          {count}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4">

          <button
            onClick={Increment}
            className="py-3 rounded-xl bg-white/20 text-white font-semibold border border-white/30 hover:bg-white hover:text-black transition duration-300"
          >
            Increment +
          </button>

          <button
            onClick={Decrement}
            className="py-3 rounded-xl bg-black/30 text-white font-semibold border border-white/20 hover:bg-white hover:text-black transition duration-300"
          >
            Decrement -
          </button>

          <button
            onClick={Reset}
            className="py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
          >
            Reset
          </button>

        </div>

      </div>
    </div>
  );
}

export default Counter;