import React, { useRef, useState } from "react"; import { Menu, X } from "lucide-react";  import logo from './logo.png'
import './index.css';
export default function Navbar() {

const menuItems = [ "HOME", "ABOUT US", "PROJECT", "EVENT", "TEAM", ];

const navRef = useRef(null);

const [torch, setTorch] = useState({ left: 0, width: 0, opacity: 0, });

const [open, setOpen] = useState(false);

const moveTorch = (e) => { const navRect = navRef.current.getBoundingClientRect(); const itemRect = e.currentTarget.getBoundingClientRect();

setTorch({
  left:
    itemRect.left -
    navRect.left +
    itemRect.width / 2 -
    45,
  width: 90,
  opacity: 1,
});

};

return ( <div className="w-full flex justify-center bg-linear-to-b from-[#1c1c1c] to-[#0a0a0a]"> <nav ref={navRef} onMouseLeave={() => setTorch((prev) => ({ ...prev, opacity: 0, })) } className="relative w-full h-[90px] bg-black overflow-visible px-10" >

{/* Torch */}
    <div
      className="absolute top-[2px] h-[6px] rounded-full bg-white transition-all duration-500 z-20 hidden md:block shadow-[0_0_15px_white,0_0_30px_white,0_0_80px_white]"
      style={{
        left: `${torch.left}px`,
        width: `${torch.width}px`,
        opacity: torch.opacity,
      }}
    />

    <div className="h-full flex justify-between items-center">

      <div className="flex items-center gap-12">
        <img
          src={logo}
          alt=""
          className="w-25 h-25 object-contain"
        />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12 ml-36">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onMouseEnter={moveTorch}
              className="group relative cursor-pointer"
            >
              <span
                className="text-[26px] text-gray-400 font-semibold transition-all duration-300 group-hover:text-white group-hover:[text-shadow:0_0_10px_white]"
              >
                {item}
              </span>

              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop button */}
      <button
        className="hidden md:block px-8 py-3 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] font-bold hover:scale-105 duration-300 text-white"
      >
        Register Now
      </button>

      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        {open ? <X size={35} /> : <Menu size={35} />}
      </button>
    </div>

    {/* Mobile dropdown */}
    {open && (
      <div className="md:hidden absolute top-[90px] left-0 w-full bg-[#111] py-8 flex flex-col items-center gap-6 z-50 rounded-b-3xl">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="text-white text-xl font-semibold cursor-pointer"
          >
            {item}
          </div>
        ))}

        <button className="px-8 py-3 rounded-full bg-white text-black font-bold">
          GET STARTED
        </button>
      </div>
    )}
  </nav>
</div>

); }