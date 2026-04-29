import { RiShoppingCart2Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Navbar() {
  return (
<div>
{/* offer bar */}
<div className="border-b px-6 py-1 bg-black text-white ">
<div className="flex justify-center">
  <p>Enjoy free shipping on order above 9999</p>
</div>
</div>

{/* top head */}
<div className="border-b px-6 py-1 flex justify-between">
  <div className="flex ">
    <div className="flex items-center gap-2 border-r pr-2"><FaPhone />(+91) 888888888</div>
     <div className="flex items-center gap-2 ps-2"> <IoIosMail /> thinkbotic@gmail.com</div>

  </div>
  <div className="flex ">
    <div className="flex items-center gap-2 border-r pr-2"><FaPhone />(+91) 888888888</div>
     <div className="flex items-center gap-2 ps-2"> <IoIosMail /> thinkbotic@gmail.com</div>

  </div>
</div>

   {/* navbar */}
    <div className="border-b px-6 py-4">
      
      <div className="flex items-center justify-between gap-6">
        
      
        <h1 className="text-xl font-bold">THINKBOTIC</h1>

      
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border px-4 py-2 pr-10 rounded-full outline-none focus:ring-2 transition"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2  text-gray-500 cursor-pointer" />
        </div>

    
        <div className="flex items-center gap-6">

          <CiHeart size={24} className="cursor-pointer hover:text-red-500" />

          <RiShoppingCart2Line size={24} className="cursor-pointer hover:text-green-600" />

          <button className="px-4 py-1 border rounded-full hover:bg-black hover:text-white transition">
            Sign Up
          </button>

          <button className="px-4 py-1 bg-black text-white rounded-full hover:opacity-80 transition">
            Sign In
          </button>

        </div>
      </div>

    </div>
</div>
  );
}

export default Navbar;