import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {

  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {

    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setPercent(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);

          setTimeout(() => {
            onFinish();
          }, 600);

        }, 500);
      }

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          exit={{
            opacity:0,
            scale:1.1
          }}
          transition={{
            duration:.7
          }}
          className="
          fixed
          inset-0
          bg-black
          z-[99999]
          flex
          items-center
          justify-center
          overflow-hidden
          "
        >

          {/* background glow */}

          <div
            className="
            absolute
            w-[600px]
            h-[600px]
            rounded-full
            bg-cyan-500/10
            blur-[150px]
            "
          />

          <div className="flex flex-col items-center">

            {/* title */}

            <h1
              className="
              font-['Orbitron']
              text-white
              text-4xl
              font-black
              tracking-[10px]
              mb-10
              "
            >
              VIDYUT
            </h1>

            {/* battery */}

            <div className="relative">

              {/* battery body */}

              <div
                className="
                relative
                w-[320px]
                h-[120px]
                border-[5px]
                border-cyan-400
                rounded-[25px]
                p-2
                overflow-hidden
                shadow-[0_0_40px_rgba(34,211,238,.4)]
                "
              >

                {/* battery fill */}

                <motion.div
                  initial={{ width:0 }}
                  animate={{
                    width:`${percent}%`
                  }}
                  transition={{
                    ease:"linear"
                  }}
                  className="
                  h-full
                  rounded-[18px]
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-cyan-300
                  shadow-[0_0_40px_#22d3ee]
                  "
                />

                {/* charging bolt */}

                <motion.div
                  animate={{
                    opacity:[1,.3,1]
                  }}
                  transition={{
                    repeat:Infinity,
                    duration:.8
                  }}
                  className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-white
                  text-5xl
                  "
                >
                  ⚡
                </motion.div>

              </div>

              {/* battery cap */}

              <div
                className="
                absolute
                top-1/2
                -right-5
                -translate-y-1/2
                w-[12px]
                h-[45px]
                rounded-r-lg
                bg-cyan-400
                shadow-[0_0_20px_#22d3ee]
                "
              />

            </div>

            {/* percent */}

            <motion.p
              key={percent}
              initial={{
                opacity:0,
                y:10
              }}
              animate={{
                opacity:1,
                y:0
              }}
              className="
              mt-8
              text-cyan-300
              text-2xl
              font-bold
              tracking-[4px]
              "
            >
              {percent}%
            </motion.p>

            <p
              className="
              mt-3
              text-gray-400
              tracking-[5px]
              text-sm
              animate-pulse
              "
            >
              CHARGING FUTURE...
            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}