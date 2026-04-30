"use client";

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Sports",
  "Gaming",
];

export default function StickyCategoryNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all duration-500 ${
        show
          ? "fixed top-0 opacity-100 translate-y-0"
          : "fixed -top-20 opacity-0"
      }`}
    >
      {/* NAVBAR */}
      <div className="bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">

          {/* LEFT - CATEGORY DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-medium text-[#0f172a] hover:text-[#1e4d3f]">
              Shop by Categories
              <FaChevronDown size={12} />
            </button>

            {/* DROPDOWN */}
            <div className="absolute top-full mt-3 hidden group-hover:block bg-white shadow-lg rounded-xl p-4 w-[200px] border">
              {categories.map((cat, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-600 hover:text-[#1e4d3f] py-1 cursor-pointer"
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>

          {/* CENTER LINKS */}
          <div className="hidden md:flex gap-6 text-sm text-gray-700">
            <p className="hover:text-[#1e4d3f] cursor-pointer">Home</p>
            <p className="hover:text-[#1e4d3f] cursor-pointer">Shop</p>
            <p className="hover:text-[#1e4d3f] cursor-pointer">Collections</p>
            <p className="hover:text-[#1e4d3f] cursor-pointer">Deals</p>
          </div>

  
          <div>
            <button className="bg-[#1e4d3f] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
              Today’s Deal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}