import React from "react";
import { motion } from "framer-motion";

export default function Teams() {

  const founders = [
    {
      name: "Ayush Jain",
      role: "Founder",
      image: "/founder1.jpeg",
    },

    {
      name: "Aman Sharma",
      role: "Founder",
      image: "/founder2.jpeg",
    },

    {
      name: "Aryan Bargal",
      role: "Founder",
      image: "/founder3.jpeg",
    },

    {
      name: "Yash Kumar Atlani",
      role: "Founder",
      image: "/founder4.jpeg",
    },
  ];

  const leadership = [
    {
      name: "Akshat Agarwal",
      role: "President",
      image: "/president.jpeg",
    },

    {
      name: "Abhinav Chawda",
      role: "Vice President",
      image: "/vp1.jpeg",
    },

    {
      name: "Anant Srivastava",
      role: "Vice President",
      image: "/vp2.jpeg",
    },
  ];

  return (
    <section
      id="team"
      className="
      relative
      bg-black
      py-32
      px-6
      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
        absolute
        top-0
        left-0
        w-[450px]
        h-[450px]
        bg-cyan-500/10
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        bg-blue-500/10
        blur-[150px]
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
      <div className="relative z-10 text-center">

        <p
          className="
          text-cyan-400
          tracking-[7px]
          uppercase
          text-sm
          font-semibold
          "
        >
          OUR CORE TEAM
        </p>

        <h1
          className="
          mt-6
          text-5xl
          md:text-7xl
          font-black
          text-white
          "
        >
          Meet The
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
            {" "}Leadership
          </span>
        </h1>

        <p
          className="
          mt-8
          text-gray-400
          max-w-3xl
          mx-auto
          text-lg
          leading-relaxed
          "
        >
          The minds driving VIDYUT towards innovation,
          technology and futuristic engineering excellence.
        </p>
      </div>

      {/* FOUNDERS */}
      <div className="relative z-10 mt-24">

        <h2
          className="
          text-center
          text-4xl
          md:text-5xl
          font-black
          text-white
          mb-16
          "
        >
          Our
          <span className="text-cyan-400"> Founders</span>
        </h2>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          max-w-7xl
          mx-auto
          "
        >
          {founders.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              hover:border-cyan-400/40
              transition-all
              duration-700
              hover:-translate-y-4
              "
            >

              {/* Image */}
              <div className="overflow-hidden relative">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-full
                  h-[420px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

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
              </div>

              {/* Content */}
              <div
                className="
                absolute
                bottom-0
                left-0
                p-6
                "
              >
                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                  text-cyan-400
                  uppercase
                  tracking-[3px]
                  mt-2
                  text-sm
                  "
                >
                  {member.role}
                </p>
              </div>

            </motion.div>

          ))}
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="relative z-10 mt-32">

        <h2
          className="
          text-center
          text-4xl
          md:text-5xl
          font-black
          text-white
          mb-16
          "
        >
          Executive
          <span className="text-cyan-400"> Leadership</span>
        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-12
          max-w-6xl
          mx-auto
          "
        >
          {leadership.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="
              group
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-cyan-400/40
              transition-all
              duration-700
              hover:-translate-y-4
              "
            >

              {/* Image */}
              <div className="overflow-hidden relative">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                  w-full
                  h-[500px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                absolute
                bottom-0
                left-0
                p-8
                "
              >

                <h3
                  className="
                  text-white
                  text-3xl
                  font-bold
                  "
                >
                  {member.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-cyan-400
                  uppercase
                  tracking-[4px]
                  text-sm
                  "
                >
                  {member.role}
                </p>

              </div>

            </motion.div>

          ))}
        </div>

      </div>

    </section>
  );
}