import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Achievements() {

  const achievements = [
    {
      image: "/achievement-1.jpeg",
      title: "National Media Coverage",
      desc: "VIDYUT featured in leading newspapers for innovation and futuristic engineering excellence.",
    },

    {
      image: "/achievement-2.jpeg",
      title: "EV Innovation Recognition",
      desc: "Recognized for promoting sustainable mobility and next-generation EV technologies.",
    },

    {
      image: "/achievement-3.jpeg",
      title: "Tech Community Impact",
      desc: "Empowering creators, developers and innovators through high-impact technical events.",
    },

    {
      image: "/achievement-4.jpeg",
      title: "Startup & Robotics Excellence",
      desc: "Celebrating groundbreaking ideas in robotics, AI and startup ecosystems.",
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
        top-[-150px]
        left-[-150px]
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[160px]
      "
      />

      <div
        className="
        absolute
        bottom-[-150px]
        right-[-150px]
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-[160px]
      "
      />

      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Floating Blur */}
      <div
        className="
        absolute
        top-[30%]
        left-[20%]
        w-[250px]
        h-[250px]
        rounded-full
        bg-cyan-400/10
        blur-[120px]
        animate-pulse
      "
      />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >

        {/* Top Text */}
        <div className="relative inline-block">

          <p
            className="
            font-['Orbitron']
            text-cyan-300
            tracking-[10px]
            uppercase
            text-sm
            md:text-base
            font-semibold
            relative
            z-10
          "
          >
            ✦ ACHIEVEMENTS ✦
          </p>

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
        <h1
          className="
          mt-8
          font-['Orbitron']
          text-5xl
          md:text-8xl
          font-black
          leading-tight
          text-white
        "
        >
          Our
          <span
            className="
            block
            mt-3
            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-cyan-200
            bg-clip-text
            text-transparent
            animate-[gradient_8s_linear_infinite]
          "
          >
            Achievements
          </span>
        </h1>

        {/* Animated Underline */}
        <div
          className="
          mt-8
          mx-auto
          w-[260px]
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

        {/* Paragraph */}
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
          From newspaper headlines to innovation showcases,
          <span className="text-cyan-300">
            {" "}VIDYUT continues to inspire creators,
          </span>
          engineers and future innovators through impactful
          technology-driven achievements.
        </p>

      </motion.div>

      {/* SLIDER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 mt-24 max-w-7xl mx-auto"
      >

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            EffectCoverflow,
          ]}

          effect={"coverflow"}

          grabCursor={true}

          centeredSlides={true}

          slidesPerView={"auto"}

          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}

          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
          }}

          navigation={true}

          loop={true}

          className="achievementSwiper pb-20"
        >

          {achievements.map((item, index) => (

            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[650px]"
            >

              <motion.div
                whileHover={{
                  y: -15,
                  scale: 1.02,
                }}

                transition={{ duration: 0.5 }}

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
                duration-700
                shadow-[0_0_40px_rgba(255,255,255,0.03)]
              "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.image}
                    alt=""
                    className="
                    w-full
                    h-[520px]
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
                    via-black/40
                    to-transparent
                  "
                  />

                  {/* Shine Effect */}
                  <div
                    className="
                    absolute
                    top-0
                    left-[-120%]
                    w-full
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    skew-x-12
                    group-hover:left-[120%]
                    transition-all
                    duration-1000
                  "
                  />

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

                  {/* Number */}
                  <div
                    className="
                    absolute
                    right-8
                    bottom-24
                    text-[120px]
                    font-black
                    text-white/10
                    font-['Orbitron']
                  "
                  >
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h2
                    className="
                    font-['Orbitron']
                    text-white
                    text-3xl
                    md:text-4xl
                    font-bold
                    leading-tight
                    transition-all
                    duration-500
                    group-hover:text-cyan-300
                  "
                  >
                    {item.title}
                  </h2>

                  {/* Desc */}
                  <p
                    className="
                    mt-5
                    font-['Space_Grotesk']
                    text-gray-300
                    text-lg
                    leading-relaxed
                    max-w-[500px]
                  "
                  >
                    {item.desc}
                  </p>

                  {/* Animated Line */}
                  <div
                    className="
                    mt-6
                    h-[3px]
                    w-0
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    transition-all
                    duration-700
                    group-hover:w-[180px]
                  "
                  />

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </motion.div>

    </section>
  );
}