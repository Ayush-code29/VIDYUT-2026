import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Trophy,
  Cpu,
} from "lucide-react";

export default function Stats() {

  const stats = [
    {
      icon: <Users size={42} />,
      number: "5000+",
      title: "Participants",
      desc: "Students, innovators and creators joining VIDYUT.",
    },

    {
      icon: <Zap size={42} />,
      number: "25+",
      title: "Events",
      desc: "Hackathons, EV showcases, robotics and tech sessions.",
    },

    {
      icon: <Cpu size={42} />,
      number: "15+",
      title: "Industry Experts",
      desc: "Visionary speakers and mentors from leading industries.",
    },

    {
      icon: <Trophy size={42} />,
      number: "₹1L+",
      title: "Prize Pool",
      desc: "Exciting rewards and recognition for top innovators.",
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

      {/* Background Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[140px]
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
        blur-[140px]
      "
      />

      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >

        <p
          className="
          font-['Orbitron']
          text-cyan-300
          tracking-[8px]
          uppercase
          text-sm
          md:text-base
          animate-pulse
        "
        >
          ✦ VIDYUT IMPACT ✦
        </p>

        <h1
          className="
          mt-6
          font-['Orbitron']
          text-5xl
          md:text-8xl
          font-black
          leading-tight
          text-white
        "
        >
          Innovation In
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
            Numbers
          </span>
        </h1>

        {/* Animated Underline */}
        <div
          className="
          mt-8
          mx-auto
          w-[220px]
          h-[5px]
          rounded-full
          overflow-hidden
          bg-white/10
          relative
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

        <p
          className="
          mt-10
          font-['Space_Grotesk']
          text-gray-300
          text-lg
          md:text-2xl
          max-w-4xl
          mx-auto
          leading-relaxed
          tracking-wide
        "
        >
          VIDYUT brings together technology, innovation and visionary
          minds through electrifying events, futuristic experiences and
          impactful collaborations.
        </p>

      </motion.div>

      {/* Stats Cards */}
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
        lg:grid-cols-4
        gap-8
        "
      >

        {stats.map((item, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 80,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}

            viewport={{ once: true }}

            whileHover={{
              y: -10,
              scale: 1.03,
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
            duration-700
            hover:border-cyan-400/40
            hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
          >

            {/* Glow */}
            <div
              className="
              absolute
              -top-20
              -right-20
              w-[180px]
              h-[180px]
              bg-cyan-400/10
              blur-[100px]
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-700
            "
            />

            {/* Icon */}
            <div
              className="
              relative
              z-10
              w-20
              h-20
              rounded-2xl
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-cyan-400/20
              to-blue-500/20
              border
              border-cyan-400/20
              text-cyan-300
              mb-8
              group-hover:scale-110
              transition-all
              duration-500
            "
            >
              {item.icon}
            </div>

            {/* Number */}
            <h1
              className="
              relative
              z-10
              font-['Orbitron']
              text-5xl
              font-black
              text-white
              mb-4
              group-hover:text-cyan-300
              transition-all
              duration-500
            "
            >
              {item.number}
            </h1>

            {/* Title */}
            <h2
              className="
              relative
              z-10
              text-2xl
              font-bold
              text-white
              mb-4
              font-['Orbitron']
            "
            >
              {item.title}
            </h2>

            {/* Description */}
            <p
              className="
              relative
              z-10
              text-gray-300
              leading-relaxed
              font-['Space_Grotesk']
            "
            >
              {item.desc}
            </p>

            {/* Animated Bottom Line */}
            <div
              className="
              mt-8
              h-[3px]
              w-0
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              transition-all
              duration-700
              group-hover:w-full
            "
            />

          </motion.div>

        ))}

      </div>

    </section>
  );
}