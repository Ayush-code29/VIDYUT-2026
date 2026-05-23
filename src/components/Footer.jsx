import React from "react";

import logo from "./logo.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
    

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (
    <footer className="relative bg-black overflow-hidden pt-24">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#00ff6650,transparent_35%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top */}
        <div className="grid lg:grid-cols-3 gap-16">

          {/* left */}
          <div>

            <img
              src={logo}
              alt=""
              className="w-28 mb-6"
            />

            <p className="text-gray-400 leading-8 text-[15px]">
              The Interdisciplinary Technical Club of
              MANIT Bhopal.
              Building the future through innovation,
              collaboration and cutting-edge technology.
            </p>

            {/* social */}
            <div className="flex gap-4 mt-4">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/evolve_nitb?igsh=dnk0czcybHVucGFo"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition duration-300"
  >
    <FaInstagram className="text-pink-400 text-xl" />
  </a>

  {/* Linkedin */}
  <a
    href="https://www.linkedin.com/company/evolve-nit-bhopal/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition duration-300"
  >
    <FaLinkedin className="text-blue-400 text-xl" />
  </a>
</div>
            

          </div>


          {/* quick links */}

          <div className="mx-10">

            <h2 className="text-white font-bold text-3xl mb-8">
              Quick Links
            </h2>

            <div className="space-y-5">

              {[
                "Home",
                "About",
                "Projects",
                "Events",
                "Team"
              ].map((item,index)=>(

                <div
                key={index}
                className="text-gray-400 hover:text-green-400 transition cursor-pointer"
                onClick={()=>{
                  document.getElementById(item.toLowerCase())?.scrollIntoView({
                    behavior:"smooth"
                  })
                }}
                >
                  {item}
                </div>

              ))}

            </div>

          </div>


          {/* domains */}

          <div>

            <h2 className="text-white font-bold text-3xl mb-8">
              Our Domains
            </h2>

            <div className="space-y-5 text-gray-400">

              <p className="hover:text-green-400 transition">
                Electric Vehicles & Ecosystem
              </p>

              <p className="hover:text-green-400 transition">
                Software Development & AI
              </p>

              <p className="hover:text-green-400 transition">
                Robotics & Automation
              </p>

              <p className="hover:text-green-400 transition">
                Innovation & Research
              </p>

            </div>

          </div>

        </div>


        {/* location */}

        <div className="mt-20">

          <h1 className="text-4xl font-bold text-white mb-8">
            Our Location
          </h1>

          <div className="overflow-hidden rounded-3xl border border-green-500/20">

            <iframe
              title="map"
              src="https://maps.google.com/maps?q=MANIT%20Bhopal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{border:0}}
              loading="lazy"
            ></iframe>

          </div>

        </div>


        {/* bottom */}

        <div className="mt-16 border-t border-white/10 py-8 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 VIDYUT - MANIT Bhopal.
            All rights reserved.
          </p>


          

        </div>

      </div>
      


    </footer>
    
  );
}