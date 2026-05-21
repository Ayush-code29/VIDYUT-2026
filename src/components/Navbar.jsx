import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./logo.png";
import './index.css'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "PROJECTS",
    "EVENTS",
    "TEAM",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      flex
      justify-center
      px-4
      pt-4
      "
    >
      <nav
        className={`
        absolute top-0
        w-full
        max-w-7xl
        h-[85px]
        rounded-2xl
        border
        transition-all
        duration-500
        flex
        items-center
        justify-between
        px-8
        overflow-hidden

        ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            : "bg-black/40 backdrop-blur-xl border-white/10"
        }
        `}
      >
        {/* Animated Glow */}
        <div
          className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2
          w-[300px]
          h-[300px]
          bg-cyan-400/10
          blur-[120px]
          pointer-events-none
          "
        />

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4 z-20"
        >
          <img
            src={logo}
            alt="logo"
            className="
            w-16
            h-16
            object-contain
            "
          />

          <div className="hidden sm:block">
            <h1
              className="
              text-white
              text-2xl
              font-black
              tracking-[4px]
              uppercase
              font-['Orbitron']
              "
            >
              VIDYUT
            </h1>

            <p
              className="
              text-cyan-300
              text-xs
              tracking-[3px]
              uppercase
              "
            >
              EVOLUTION OF TECH
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div
          className="
          hidden
          lg:flex
          items-center
          gap-12
          absolute
          left-1/2
          -translate-x-1/2
          "
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="
              group
              relative
              cursor-pointer
              "
            >
              <span
                className="
                text-gray-300
                text-[15px]
                uppercase
                tracking-[4px]
                font-medium
                font-['Orbitron']
                transition-all
                duration-300
                group-hover:text-cyan-300
                "
              >
                {item}
              </span>

              {/* Animated Underline */}
              <div
                className="
                absolute
                left-0
                -bottom-2
                h-[2px]
                w-0
                bg-cyan-400
                transition-all
                duration-500
                group-hover:w-full
                shadow-[0_0_10px_#22d3ee]
                "
              />

              {/* Hover Glow */}
              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                blur-xl
                bg-cyan-400/10
                transition-all
                duration-500
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Register Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
          hidden
          lg:flex
          relative
          overflow-hidden
          items-center
          justify-center
          px-7
          py-3
          rounded-full
          border
          border-cyan-400/30
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          text-white
          font-bold
          tracking-[2px]
          uppercase
          transition-all
          duration-500
          hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
          "
        >
          {/* Shine Effect */}
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
            hover:left-[120%]
            transition-all
            duration-1000
            "
          />

          <span className="relative z-10">
            Register Now
          </span>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
          lg:hidden
          text-white
          z-50
          "
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="
              absolute
              top-[100px]
              left-0
              w-full
              rounded-3xl
              border
              border-cyan-400/20
              bg-black/90
              backdrop-blur-2xl
              p-10
              flex
              flex-col
              items-center
              gap-8
              lg:hidden
              shadow-[0_0_40px_rgba(34,211,238,0.08)]
              "
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="
                  text-white
                  text-xl
                  tracking-[4px]
                  uppercase
                  font-['Orbitron']
                  cursor-pointer
                  hover:text-cyan-300
                  transition-all
                  duration-300
                  "
                >
                  {item}
                </motion.div>
              ))}

              <button
                className="
                mt-4
                px-8
                py-3
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-white
                font-bold
                tracking-[2px]
                uppercase
                "
              >
                Register Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}