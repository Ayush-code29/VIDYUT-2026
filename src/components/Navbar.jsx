import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./logo.png";
import "./index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "HOME", id: "hero" },
    { name: "EVENTS", id: "events" },
    { name: "PROJECTS", id: "projects" },
    { name: "TEAM", id: "team" },
    { name: "CONTACT", id: "contact" },
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
      z-[9999]
      flex
      justify-center
      px-4
      pt-4
      "
    >
      <nav
        className={`
        relative
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
        overflow-visible

        ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            : "bg-black/40 backdrop-blur-xl border-white/10"
        }
        `}
      >
        {/* Glow */}
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
          "
        />

        {/* Logo */}
        <div className="flex items-center gap-4 z-20">
          <img
            src={logo}
            alt=""
            className="w-16 h-16 object-contain"
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
        </div>

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
              className="group relative cursor-pointer"
              onClick={() => {
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
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
                {item.name}
              </span>

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
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop Button */}
        <button
          className="
          hidden
          lg:flex
          px-7
          py-3
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          text-white
          font-bold
          tracking-[2px]
          uppercase
          hover:scale-105
          transition-all
          duration-500
          "
        >
          Register Now
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          className="
          lg:hidden
          relative
          z-[9999]
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-full
          border
          border-cyan-400/20
          bg-black/40
          text-white
          "
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={30} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="
              absolute
              top-[100px]
              left-0
              w-full
              rounded-3xl
              bg-black/95
              p-10
              flex
              flex-col
              items-center
              gap-8
              lg:hidden
              z-[9998]
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
                  "
                  onClick={() => {
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });

                    setOpen(false);
                  }}
                >
                  {item.name}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}