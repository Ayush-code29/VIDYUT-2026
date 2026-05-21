import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Events() {
  const events = [
    {
      image: "/event-1.jpeg",
      title: "Hackathon",
      desc: "Build futuristic solutions with innovation and teamwork.",
    },
    {
      image: "/event-2.png",
      title: "EV Expo",
      desc: "Explore next-gen electric vehicles and mobility tech.",
    },
    {
      image: "/event-3.jpg",
      title: "EV Day",
      desc: "Driving the transition toward a cleaner and sustainable future.",
    },
    {
      image: "/event-4.JPG",
      title: "Startup Pitch",
      desc: "Present groundbreaking ideas before investors and mentors.",
    },
    {
      image: "/event-5.jpg",
      title: "Guest Lectures",
      desc: "Visionary insights shaping the future of mobility and tech.",
    },
    {
      image: "/event-6.jpg",
      title: "Tech Track",
      desc: "Experience futuristic engineering and autonomous innovation.",
    },
  ];

  return (
    <section
      className="
      relative
      min-h-screen
      bg-black
      overflow-hidden
      py-32
      px-6
      "
    >
      {/* Background Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:70px_70px]
        "
      />

      {/* Top Glow */}
      <div
        className="
        absolute
        top-[-200px]
        left-[-150px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-400/10
        blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <div
        className="
        absolute
        bottom-[-200px]
        right-[-100px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/10
        blur-[150px]
        "
      />

      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        relative
        z-20
        text-center
        max-w-5xl
        mx-auto
        "
      >
        {/* Small Top Text */}
        <div
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
            font-['Orbitron']
            text-cyan-300
            tracking-[5px]
            uppercase
            text-xs
            md:text-sm
            "
          >
            VIDYUT 2026
          </p>
        </div>

        {/* Main Heading */}
        <h1
          className="
          mt-10
          font-['Orbitron']
          text-white
          text-5xl
          sm:text-6xl
          md:text-8xl
          font-black
          leading-tight
          tracking-tight
          "
        >
          Explore Our

          <span
            className="
            block
            mt-2
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-cyan-200
            bg-clip-text
            text-transparent
            "
          >
            Events
          </span>
        </h1>

        {/* Animated Underline */}
        <div
          className="
          relative
          mx-auto
          mt-7
          w-[240px]
          h-[5px]
          overflow-hidden
          rounded-full
          bg-white/10
          "
        >
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
            animate-[slide_2.5s_linear_infinite]
            "
          />
        </div>

        {/* Description */}
        <p
          className="
          mt-12
          text-gray-300
          text-lg
          md:text-2xl
          leading-relaxed
          max-w-4xl
          mx-auto
          font-light
          tracking-wide
          font-['Space_Grotesk']
          "
        >
          Discover electrifying experiences through
          <span className="text-cyan-300 font-medium">
            {" "}robotics, EV technology, startup culture,
          </span>
          hackathons and futuristic engineering designed for
          creators, innovators and visionaries.
        </p>
      </motion.div>

      {/* EVENTS LAYOUT */}
      <div
        className="
        relative
        z-20
        mt-28
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-10
        "
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            "
          >
            {/* Animated Border Glow */}
            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
              bg-gradient-to-br
              from-cyan-400/10
              via-transparent
              to-blue-500/10
              "
            />

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="
                w-full
                h-[420px]
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              {/* Dark Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-transparent
                "
              />

              {/* Floating Number */}
              <div
                className="
                absolute
                top-6
                right-6
                w-14
                h-14
                rounded-full
                border
                border-white/20
                bg-black/40
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-white
                text-lg
                font-bold
                font-['Orbitron']
                "
              >
                0{index + 1}
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="
              absolute
              bottom-0
              left-0
              w-full
              p-8
              z-20
              "
            >
              {/* Event Title */}
              <h2
                className="
                text-white
                text-3xl
                md:text-4xl
                font-bold
                mb-4
                font-['Exo_2']
                transition-all
                duration-500
                group-hover:text-cyan-300
                "
              >
                {event.title}
              </h2>

              {/* Description */}
              <p
                className="
                text-gray-300
                text-base
                md:text-lg
                leading-relaxed
                font-['Space_Grotesk']
                max-w-[90%]
                "
              >
                {event.desc}
              </p>

              {/* Bottom Row */}
              <div
                className="
                mt-7
                flex
                items-center
                justify-between
                "
              >
                {/* Animated Line */}
                <div
                  className="
                  h-[3px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-700
                  group-hover:w-[130px]
                  "
                />

                {/* Arrow */}
                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-cyan-400/30
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  transition-all
                  duration-500
                  group-hover:bg-cyan-400
                  group-hover:text-black
                  group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>

            {/* Hover Shine */}
            <div
              className="
              absolute
              top-0
              left-[-120%]
              w-[80%]
              h-full
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              skew-x-12
              transition-all
              duration-1000
              group-hover:left-[130%]
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}