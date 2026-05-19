import React from "react";

// import event1 from "";
// import event2 from ;
// import event3 from ;
// import event4 from 
// import event5 from "";
// import event6 from "/event-6.jpg";
import {motion} from "framer-motion"
import './index.css'

export default function Events() {
  const events = [
    {
      image: '/event-1.png',
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
      title: "EV DAY",
      desc: "Celebrate World EV Day by driving the transition toward a cleaner, quieter, and more sustainable future.",
    },
    {
      image: '/event-4.JPG',
      title: "Startup Pitch",
      desc: "Present groundbreaking ideas before investors and mentors.",
    },
    {
      image: "/event-5.jpg",
      title: "Guest Speakers",
      desc: "Driving the future of sustainable mobility with visionary insights.",
    },
    {
      image: "/event-6.jpg",
      title: "Tech Track",
      desc: "Witness autonomous flight and aerial innovation live.",
    },
  ];

  return (
    <section
      className="
      relative
      min-h-screen
      bg-black
      overflow-hidden
      py-28
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

      {/* Heading */}
      {/* Heading */}
<div className="
font-['Orbitron']
text-center
text-white
text-6xl
md:text-8xl
font-black
leading-tight
tracking-tight
">

  {/* Small Top Text */}
  <div className="relative inline-block">

    <p
      className="
      text-cyan-300
      tracking-[8px]
      uppercase text-7xl
      md:text-base
      font-semibold
      relative
      z-10
      animate-pulse
    "
    >
      ✦ VIDYUT 2026 ✦
    </p>

    {/* Glow Behind */}
    <div
      className="
      absolute
      inset-0
      blur-2xl
      bg-cyan-400/20
    "
    />
  </div>

  {/* Main Heading */}
  <div className="mt-8 relative flex flex-col items-center justify-center">

    <h1
      className="
      text-white
      text-6xl
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
        animate-[gradient_6s_linear_infinite]
      "
      >
        Events
      </span>
    </h1>

    {/* Animated Underline */}
    <div
      className="
      mt-6
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

  </div>

  {/* Description */}
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
font-light
tracking-wide
bg-gradient-to-r
from-cyan-300
to-blue-400
bg-clip-text
text-transparent
font-medium
"
  >
    Experience the future of innovation through
    <span className="text-cyan-300 font-medium">
      {" "}robotics, EV technology, hackathons,
    </span>
    startup culture and futuristic engineering experiences
    crafted for creators, innovators and visionaries.
  </p>

</div>

      {/* Events Grid */}
      <div
        className="
        relative
        z-10
        mt-24
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-10
        max-w-7xl
        mx-auto
      "
      >
        {events.map((event, index) => (
          <div
            key={index}
            className="
            group
            relative
            overflow-hidden
            rounded-[30px]
            bg-[#111]
            border
            border-gray-800
            hover:border-cyan-400/40
            transition-all
            duration-500
            hover:-translate-y-3
          "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={event.image}
                alt=""
                className="
                w-full
                h-[350px]
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:rotate-1
              "
              />
            </div>

            {/* Overlay */}
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
            />

            {/* Content */}
            <div
              className="
              absolute
              bottom-0
              left-0
              p-8
              z-20
            "
            >
              <h2
                className="
                text-white
                text-3xl
                font-bold
                mb-3
                group-hover:text-cyan-300
                transition-all
                duration-300
              "
              >
                {event.title}
              </h2>

              <p
                className="
                text-gray-300
                text-base
                leading-relaxed
              "
              >
                {event.desc}
              </p>

              {/* Animated Line */}
              <div
                className="
                mt-5
                w-0
                h-[3px]
                bg-cyan-400
                transition-all
                duration-500
                group-hover:w-[120px]
              "
              />
            </div>

            {/* Hover Glow */}
            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              bg-cyan-400/5
            "
            />
          </div>
        ))}
      </div>
    </section>
  );
}