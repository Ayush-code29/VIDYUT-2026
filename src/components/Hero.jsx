import React from "react";
import { motion } from "framer-motion";
import './index.css'

export default function Hero() {
  return (
    <section
    id="Home"
      className="
      relative
      min-h-screen
      bg-black
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      pt-24
      "
    >
      {/* Background Image */}
      <div
        className="
        absolute
        inset-0
        bg-[url('/bg.jpg')]
        bg-cover
        bg-center
        opacity-20
        scale-105
        "
      />

      {/* Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/70
        "
      />

      {/* Animated Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.07]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:70px_70px]
        "
      />

      {/* Top Left Glow */}
      <div
        className="
        absolute
        top-[-150px]
        left-[-120px]
        w-[500px]
        h-[500px]
        bg-cyan-400/10
        rounded-full
        blur-[140px]
        animate-pulse
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        bg-blue-500/10
        rounded-full
        blur-[150px]
        animate-pulse
        "
      />

      {/* Floating Ring */}
      <div
        className="
        absolute
        right-[-150px]
        top-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        rounded-full
        border
        border-cyan-400/10
        "
      />

      {/* Small Floating Gear */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        top-10
        left-10
        text-cyan-400/20
        text-6xl
        "
      >
        ⚙
      </motion.div>

      {/* Hero Content */}
      <div
        className="
        relative
        z-20
        text-center
        max-w-7xl
        "
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          inline-flex
          items-center
          gap-3
          px-6
          py-3
          rounded-full
          border
          border-cyan-400/20
          bg-white/5
          backdrop-blur-xl
          "
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <p
            className="
            font-['Exo 2']
            text-cyan-300
            tracking-[5px]
            text-xs
            md:text-sm
            uppercase
            "
          >
            Innovate • Build • Evolve
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          mt-10
          font-['Orbitron']
          uppercase
          font-black
          leading-none
          tracking-[8px]
          text-7xl
          sm:text-8xl
          md:text-[150px]
          "
        >
          <span
            className="
            bg-gradient-to-r
            from-white
            via-cyan-100
            to-cyan-300
            bg-clip-text
            text-transparent
            "
          >
            VIDYUT
          </span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
          relative
          inline-block
          mt-8
          "
        >
          <h2
            className="
            font-['Exo_2']
            text-3xl
            sm:text-5xl
            md:text-7xl
            italic
            font-bold
            tracking-[4px]
            "
          >
            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-cyan-200
              bg-clip-text
              text-transparent
              "
            >
              The Electric Edge
            </span>
          </h2>

          {/* Animated Underline */}
          <div
            className="
            relative
            mx-auto
            mt-5
            h-[5px]
            w-[80%]
            overflow-hidden
            rounded-full
            bg-white/10
            "
          >
            <div
              className="
              absolute
              inset-0
              w-[40%]
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              animate-[slide_2s_linear_infinite]
              "
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="
          mt-12
          max-w-4xl
          mx-auto
          text-gray-300
          text-lg
          md:text-2xl
          leading-relaxed
          font-light
          tracking-wide
          font-['Space_Grotesk']
          "
        >
          Experience the future of innovation through
          <span className="text-cyan-300 font-medium">
            {" "}EV technology, robotics, AI,
          </span>
          {" "}startup culture and futuristic engineering.
          VIDYUT’26 unites creators, innovators and visionaries
          under one electrifying platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-8
          "
        >
          {/* Register Button */}
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
            font-['Exo_2']
            text-lg
            uppercase
            tracking-[3px]
            font-bold
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            {/* Shine */}
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
              Register Now
            </span>
          </button>

          {/* Explore Button */}
          <button
            className="
            group
            relative
            overflow-hidden
            px-10
            py-4
            rounded-full
            border
            border-cyan-400/50
            bg-white/5
            backdrop-blur-xl
            text-cyan-300
            font-['Exo_2']
            text-lg
            uppercase
            tracking-[3px]
            font-bold
            transition-all
            duration-500
            hover:scale-105
            hover:text-black
            "
          >
            {/* Fill Animation */}
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
              Explore Events
            </span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
          absolute
          left-1/2
          -translate-x-1/2
          mt-24
          hidden
          md:flex
          flex-col
          items-center
          "
        >
          <span
            className="
            text-gray-400
            text-sm
            tracking-[4px]
            uppercase
            font-['Orbitron']
            "
          >
            Scroll
          </span>

          <div
            className="
            mt-3
            w-[2px]
            h-16
            bg-gradient-to-b
            from-cyan-400
            to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}