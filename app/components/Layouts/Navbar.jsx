import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Navbar() {
  return (
    <div>

      {/* offer bar */}
      <div className="bg-[#1e4d3f] text-white px-6 py-1">
        <div className="flex justify-center">
          <p>Free delivery on orders above ₹999</p>
        </div>
      </div>

      {/* top bar */}
      <div className="border-b px-6 py-1 flex justify-between bg-[#f4f2eb] text-[#1e4d3f]">

        <div className="flex">
          <div className="flex items-center gap-2 border-r pr-2">
            <FaPhone /> (+91) 888888888
          </div>
          <div className="flex items-center gap-2 ps-2">
            <IoIosMail /> thinkbotic@gmail.com
          </div>
        </div>

        <div className="flex gap-4">
          <FaPhone /> Support Available 24/7
        </div>

      </div>

      {/* navbar */}
      <div className="border-b px-6 py-6 sticky top-0 z-50 bg-white shadow">

        <div className="flex items-center justify-between gap-6">

          <h1 className="text-xl font-bold text-[#1e4d3f]">
            THINKBOTIC
          </h1>

          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border px-4 py-2 pr-10 rounded-full focus:ring-2 focus:ring-[#1e4d3f]"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex items-center gap-6">

            <CiHeart size={24} className="hover:text-red-500 text-gray-700" />

            <RiShoppingCart2Line size={24} className="hover:text-[#1e4d3f] text-gray-700" />

            <button className="px-4 py-1 border border-[#1e4d3f] text-[#1e4d3f] rounded-full hover:bg-[#1e4d3f] hover:text-white">
              Sign Up
            </button>

            <button className="px-4 py-1 bg-[#1e4d3f] text-white rounded-full hover:opacity-90">
              Sign In
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Navbar;