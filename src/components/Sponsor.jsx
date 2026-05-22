import React from "react";
import { motion } from "framer-motion";

export default function Sponsors() {

  const sponsors = [
    {
      category: "Institutional Host",
      name: "MANIT Bhopal",
      desc: "Providing academic excellence and innovation ecosystem.",
    },

    {
      category: "Industry Leader",
      name: "Tata Motors",
      desc: "Driving sustainable mobility and futuristic EV innovation.",
    },

    {
      category: "Government Partner",
      name: "Urban Administration Dept.",
      desc: "Supporting smart mobility and green technology initiatives.",
    },

    {
      category: "Technical Partner",
      name: "Vaayu Robotics",
      desc: "Empowering robotics, automation and engineering solutions.",
    },

    {
      category: "Platform Partner",
      name: "Unstop",
      desc: "Managing registrations, competitions and outreach activities.",
    },

    {
      category: "Media Coalition",
      name: "BKB • MP04 • BHM",
      desc: "Amplifying digital presence and audience engagement.",
    },
  ];

  return (
    <section
      id="sponsors"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-black
      py-32
      px-6
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-[150px]
        "
      />

      {/* GRID BACKGROUND */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        text-center
        "
      >

        {/* TOP LABEL */}
        <p
          className="
          font-['Sora']
          text-cyan-300
          uppercase
          tracking-[6px]
          text-sm
          md:text-base
          font-semibold
          "
        >
          ✦ Strategic Collaborations ✦
        </p>

        {/* MAIN HEADING */}
        <h1
          className="
          mt-6
          font-['Orbitron']
          text-5xl
          md:text-8xl
          font-black
          text-white
          leading-tight
          "
        >
          Our
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
            Sponsors
          </span>
        </h1>

        {/* ANIMATED LINE */}
        <div
          className="
          relative
          mx-auto
          mt-8
          h-[5px]
          w-[240px]
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
            animate-[slide_2s_linear_infinite]
            "
          />
        </div>

        {/* DESCRIPTION */}
        <p
          className="
          mt-10
          max-w-4xl
          mx-auto
          text-gray-300
          text-lg
          md:text-2xl
          leading-relaxed
          font-['Space_Grotesk']
          "
        >
          Collaborating with visionary organizations,
          innovation leaders and technology pioneers
          to build the future of EV ecosystems and
          next-generation engineering experiences.
        </p>

      </motion.div>

      {/* SPONSORS GRID */}
      <div
        className="
        relative
        z-10
        mt-24
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10
        "
      >

        {sponsors.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
            group
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-2xl
            p-10
            transition-all
            duration-500
            hover:border-cyan-400/30
            hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]
            "
          >

            {/* CARD GLOW */}
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
              to-blue-500/10
              "
            />

            {/* BIG NUMBER */}
            <div
              className="
              absolute
              top-6
              right-6
              text-white/5
              text-8xl
              font-black
              font-['Orbitron']
              "
            >
              0{index + 1}
            </div>

            {/* CATEGORY TAG */}
            <div
              className="
              relative
              z-10
              inline-flex
              items-center
              px-5
              py-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              "
            >

              <span
                className="
                font-['Sora']
                text-cyan-300
                text-xs
                md:text-sm
                uppercase
                tracking-[3px]
                font-semibold
                "
              >
                {item.category}
              </span>

            </div>

            {/* SPONSOR NAME */}
            <h2
              className="
              relative
              z-10
              mt-10
              text-white
              text-3xl
              md:text-4xl
              font-bold
              leading-tight
              font-['Space_Grotesk']
              transition-all
              duration-300
              group-hover:text-cyan-300
              "
            >
              {item.name}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              relative
              z-10
              mt-6
              text-gray-300
              text-lg
              leading-relaxed
              font-['Space_Grotesk']
              "
            >
              {item.desc}
            </p>

            {/* ANIMATED LINE */}
            <div
              className="
              relative
              z-10
              mt-8
              h-[3px]
              w-0
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              transition-all
              duration-700
              group-hover:w-[140px]
              "
            />

            {/* FLOATING BLUR */}
            <div
              className="
              absolute
              -bottom-20
              -right-20
              w-[180px]
              h-[180px]
              rounded-full
              bg-cyan-400/10
              blur-[90px]
              "
            />

          </motion.div>

        ))}

      </div>

      {/* CENTER GLOW */}
      <div
        className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[800px]
        h-[800px]
        rounded-full
        bg-cyan-400/5
        blur-[180px]
        pointer-events-none
        "
      />

    </section>
  );
}