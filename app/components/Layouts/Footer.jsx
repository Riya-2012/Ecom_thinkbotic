import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>

      {/* MAIN FOOTER */}
      <div className="px-10 py-8 border-t  text-[#1e4d3f]">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* LEFT */}
          <div className="flex-1">

            <div className="font-bold text-3xl pb-[30px] text-[#1e4d3f]">
              THINKBOTIC
            </div>

            <div className="flex items-center gap-4 pb-[20px] text-[#1e4d3f]">

              <TfiHeadphoneAlt size={40} />

              <div>
                <p className="text-sm">
                  Got questions? Call us 24/7!
                </p>
                <p className="text-lg font-semibold">
                  (+91) 888888888
                </p>
              </div>
            </div>

            <div className="pt-5 text-sm text-[#1e4d3f]">

              <p className="font-semibold text-lg">
                Contact Info
              </p>

              <p className="text-[#334155]">
                Radical Global: Plot no 110, New Dyneshwar Nagar,
                Manewada Road, Nagpur - 440027
              </p>

              <p className="flex items-center gap-2 mt-2 text-[#1e4d3f]">
                <IoIosMail /> info@thinkbotic.in
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 pt-6 text-[#1e4d3f]">

              <FaFacebookF size={25} className="hover:text-[#0f766e] cursor-pointer" />
              <FaLinkedinIn size={25} className="hover:text-[#0f766e] cursor-pointer" />
              <FaInstagram size={25} className="hover:text-[#0f766e] cursor-pointer" />
              <FaYoutube size={25} className="hover:text-[#0f766e] cursor-pointer" />

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="flex-1 text-[#1e4d3f]">
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>

            <ul className="space-y-2 text-[#334155]">
              <li className="hover:text-[#1e4d3f] cursor-pointer">Home</li>
              <li className="hover:text-[#1e4d3f] cursor-pointer">Products</li>
              <li className="hover:text-[#1e4d3f] cursor-pointer">Cart</li>
              <li className="hover:text-[#1e4d3f] cursor-pointer">Login</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex-1 text-[#1e4d3f]">

            <h2 className="font-semibold text-lg mb-4">Contact</h2>

            <div className="space-y-3 text-[#334155]">

              <p className="flex items-center gap-2">
                <FaPhone /> (+91) 888888888
              </p>

              <p className="flex items-center gap-2">
                <IoIosMail /> support@thinkbotic.in
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="bg-[#1e4d3f] text-white text-center py-3 text-sm">
        © SRK Innovations - All Rights Reserved Powered By Radical Global.
      </div>

    </div>
  );
}

export default Footer;