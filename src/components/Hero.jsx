import React from "react";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-black
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      
      "
    >
      {/* Left Glow */}
      {/* <div
        className="
        absolute
        top-0
        left-0
        w-[400px]
        h-[400px]
        bg-green-500/10
        blur-[140px]
      "
      /> */}

      {/* Right Bottom Circle */}
      <div
        className="
        absolute
        -bottom-40
        -right-40
        w-[500px]
        h-[500px]
        border
        border-gray-700/40
        rounded-full
      "
      />

      {/* Small gear icon */}
      <div
        className="
        absolute
        top-7
        left-7
        text-gray-700
        text-5xl
      "
      >
        ⚙
      </div>

      {/* Hero Content */}
      <div
        className="
        relative
        z-10
        text-center
        max-w-6xl
      "
      >
        {/* Top Text */}
        <p
          className="
          text-green-400
          tracking-[4px]
          text-sm
          md:text-lg
          font-medium
          mb-10
        "
        >
          • #Innovate • #Build • #Evolve
        </p>
        

        {/* Main Heading */}
        <h1
          className="
          text-white
          text-6xl
          md:text-8xl
          font-extrabold
          leading-tight
        "
        >
          Vidyut
        </h1>

        {/* Sub Heading */}
        <div className="relative inline-block mt-6">

  {/* Tagline */}
  <h2
    className="
    relative
    text-white
    text-4xl
    md:text-7xl
    font-extrabold
    tracking-wide
    z-10
    "
  >
    <span
  className="
  bg-gradient-to-r
  from-cyan-300
  via-cyan-400
  to-blue-500
  bg-clip-text
  text-transparent
  drop-shadow-[0_0_px_#22d3ee]
  "
>
  The Electric Edge
    </span>
  </h2>

  {/* Animated Underline */}
  <div
    className="
    absolute
    left-1/2
    -translate-x-1/2
    mt-3
    h-[5px]
    w-[75%]
    rounded-full
    overflow-hidden
    bg-gray-800
    "
  >
    {/* Moving Glow */}
    <div
      className="
      h-full
      w-[40%]
      bg-gradient-to-r
      from-transparent
      via-green-400
      to-transparent
      animate-[slide_2s_linear_infinite]
      shadow-[0_0_20px_#22c55e]
      "
    />
  </div>

  {/* Extra Glow */}

</div>
     

        {/* Green Text */}
       

        {/* Description */}
        <p
          className="
          mt-10
          text-gray-300
          text-lg
          md:text-2xl
          leading-relaxed
          max-w-4xl
          mx-auto
        "
        >
          Experience the future of innovation with EV technology,
          robotics, AI, startup culture and futuristic engineering.
          VIDYUT’26 brings together creators, innovators and
          visionaries under one electrifying platform.
        </p>

        {/* Buttons */}
        <div
  className="
  mt-14
  flex
  flex-wrap
  justify-center
  gap-8
  "
>

  {/* REGISTER BUTTON */}
  <button
    className="
    group
    relative
    overflow-hidden
    px-10
    py-4
    rounded-full
    bg-gradient-to-r
    from-cyan-400
    to-blue-500
    text-white
    text-lg
    font-bold
    tracking-wide
    transition-all
    duration-500
    hover:scale-105
    hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]
    "
  >

    {/* Moving shine */}
    <span
      className="
      absolute
      top-0
      left-[-120%]
      w-full
      h-full
      bg-gradient-to-r
      from-transparent
      via-white/30
      to-transparent
      skew-x-12
      group-hover:left-[120%]
      transition-all
      duration-1000
      "
    />

    <span className="relative z-10">
      REGISTER NOW
    </span>

  </button>

  {/* EXPLORE EVENTS BUTTON */}
  <button
    className="
    group
    relative
    px-10
    py-4
    rounded-full
    border
    border-cyan-400
    text-cyan-300
    text-lg
    font-bold
    tracking-wide
    overflow-hidden
    transition-all
    duration-500
    hover:text-black
    hover:scale-105
    "
  >

    {/* Fill animation */}
    <span
      className="
      absolute
      inset-0
      w-0
      bg-cyan-400
      transition-all
      duration-500
      group-hover:w-full
      "
    />

    <span className="relative z-10">
      EXPLORE EVENTS
    </span>

  </button>

      </div>
      </div>
    </section>
  );
}