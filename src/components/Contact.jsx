import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <section
      id="contact"
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

      {/* Grid Pattern */}
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
          CONTACT US
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
          Get In
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
            {" "}Touch
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
          Have questions, ideas or feedback?
          Connect with the VIDYUT team and become a part
          of the future of innovation and technology.
        </p>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
        relative
        z-10
        max-w-4xl
        mx-auto
        mt-24
        "
      >

        <div
          className="
          relative
          overflow-hidden
          rounded-[35px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-10
          md:p-14
          shadow-[0_0_40px_rgba(34,211,238,0.08)]
          "
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
            "
          />

          <form
            onSubmit={handleSubmit}
            className="relative z-10"
          >

            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <label
                  className="
                  block
                  text-gray-300
                  mb-3
                  tracking-[2px]
                  uppercase
                  text-sm
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all
                  duration-300
                  "
                />
              </div>

              <div>
                <label
                  className="
                  block
                  text-gray-300
                  mb-3
                  tracking-[2px]
                  uppercase
                  text-sm
                  "
                >
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition-all
                  duration-300
                  "
                />
              </div>

            </div>

            {/* Phone */}
            <div className="mt-8">

              <label
                className="
                block
                text-gray-300
                mb-3
                tracking-[2px]
                uppercase
                text-sm
                "
              >
                Phone Number
              </label>

              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="
                w-full
                bg-black/40
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                text-white
                outline-none
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />
            </div>

            {/* Feedback */}
            <div className="mt-8">

              <label
                className="
                block
                text-gray-300
                mb-3
                tracking-[2px]
                uppercase
                text-sm
                "
              >
                Feedback
              </label>

              <textarea
                required
                rows="6"
                placeholder="Write your feedback..."
                className="
                w-full
                bg-black/40
                border
                border-white/10
                rounded-2xl
                px-6
                py-5
                text-white
                outline-none
                resize-none
                focus:border-cyan-400
                transition-all
                duration-300
                "
              />
            </div>

            {/* Submit Button */}
            <button
  type="submit"
  className="
  group
  relative
  overflow-hidden
  mt-4
  px-10
  py-4
  rounded-2xl
  bg-gradient-to-r
  from-cyan-500
  via-blue-500
  to-indigo-600
  text-white
  font-semibold
  tracking-[2px]
  uppercase
  transition-all
  duration-500
  hover:scale-105
  hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
  active:scale-95
  "
>
  {/* Glow Effect */}
  <span
    className="
    absolute
    inset-0
    bg-white/10
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500
    "
  />

  {/* Shine Animation */}
  <span
    className="
    absolute
    top-0
    left-[-120%]
    w-full
    h-full
    bg-gradient-to-r
    from-transparent
    via-white/40
    to-transparent
    skew-x-12
    group-hover:left-[120%]
    transition-all
    duration-1000
    "
  />

  <span className="relative z-10">
    Submit Feedback
  </span>
</button>

          </form>

        </div>

      </motion.div>

      {/* Popup */}
      <AnimatePresence>

        {showPopup && (

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
            className="
            fixed
            inset-0
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-md
            z-[100]
            "
          >

            <div
              className="
              bg-black
              border
              border-cyan-400/30
              rounded-[30px]
              px-10
              py-12
              text-center
              shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-cyan-400/10
                flex
                items-center
                justify-center
                mx-auto
                text-4xl
                "
              >
                ✓
              </div>

              <h2
                className="
                mt-6
                text-3xl
                font-black
                text-white
                "
              >
                Thank You!
              </h2>

              <p
                className="
                mt-4
                text-gray-400
                text-lg
                "
              >
                Your feedback has been submitted successfully.
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}