"use client";

import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaSearch, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      {/* TOP BAR (HIDE ON MOBILE) */}
      <div className="hidden md:flex border-b px-6 py-1 justify-between bg-gradient-blue-red text-white text-sm">

        <div className="flex">
          <div className="flex items-center gap-2 border-r pr-3">
            <FaPhone /> (+91) 888888888
          </div>
          <div className="flex items-center gap-2 pl-3">
            <IoIosMail /> thinkbotic@gmail.com
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone /> Support Available 24/7
        </div>

      </div>

      {/* MAIN NAVBAR */}
      <div className="px-4 md:px-6 py-4 sticky top-0 z-50 bg-white shadow-sm">

        <div className="flex items-center justify-between">

          {/* LEFT: LOGO */}
         <Link href="/"> <Image src="/Logo.png" height={140} width={140} alt="logo" /></Link>

          {/* DESKTOP SEARCH */}
          <div className="hidden md:flex w-full max-w-lg mx-6 border border-primary-blue rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-primary-blue transition">

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 outline-none"
            />

            <div className="flex items-center justify-center px-6 border-l bg-gradient-blue text-white cursor-pointer">
              <FaSearch />
            </div>

          </div>

          {/* RIGHT (DESKTOP) */}
          <div className="hidden md:flex items-center gap-5">

            {/* HEART */}
            <div className="relative cursor-pointer">
              <CiHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-primary-red text-white text-[10px] px-1.5 rounded-full">
                0
              </span>
            </div>

            {/* CART */}
            <div className="relative cursor-pointer">
              <RiShoppingCart2Line size={24} />
              <span className="absolute -top-2 -right-2 bg-primary-blue text-white text-[10px] px-1.5 rounded-full">
                0
              </span>
            </div>

            <button className="px-[15px] py-[10px] bg-primary-red font-bold text-white rounded-full text-sm">
              Sign Up
            </button>

            <button className="px-[15px] py-[10px] font-bold bg-primary-blue text-white rounded-full text-sm">
              Sign In
            </button>

          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center gap-4">

            <CiHeart size={22} />
            <RiShoppingCart2Line size={22} />

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t pt-4">

            {/* SEARCH */}
            <div className="flex border rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <div className="px-4 flex items-center bg-primary-blue text-white">
                <FaSearch />
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-3 text-sm">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">Shop</p>
              <p className="cursor-pointer">Collections</p>
              <p className="cursor-pointer">Deals</p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button className="flex-1 bg-primary-red text-white py-2 rounded-full">
                Sign Up
              </button>
              <button className="flex-1 bg-primary-blue text-white py-2 rounded-full">
                Sign In
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;