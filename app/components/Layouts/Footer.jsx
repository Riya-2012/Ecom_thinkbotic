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

            <div className="px-10 py-8 border-t bg-gray-50">

                <div className="flex flex-col md:flex-row justify-between gap-8">


                    <div className="flex-1">
                        <div className="font-bold text-3xl pb-[30px]">THINKBOTIC</div>

                        <div className="flex items-center gap-4 pb-[20px]">
                            <TfiHeadphoneAlt size={40} />

                            <div>
                                <p className="text-sm text-gray-600">
                                    Got questions? Call us 24/7!
                                </p>
                                <p className="text-lg font-semibold">
                                    (+91) 888888888
                                </p>
                            </div>
                        </div>

                        <div className="pt-5 text-sm text-gray-600">
                            <p className="font-semibold text-lg text-black">Contact Info</p>
                            <p>
                                Radical Global: Plot no 110, New Dyneshwar Nagar,
                                Manewada Road, Nagpur - 440027
                            </p>
                            <p className="flex items-center gap-2 mt-2">
                                <IoIosMail /> info@thinkbotic.in
                            </p>
                        </div>

                        <div className="flex gap-6 pt-6">
                            < FaFacebookF size={25} />
                            <FaLinkedinIn size={25} />
                            <FaInstagram size={25} />
                            <FaYoutube size={25} />
                        </div>
                    </div>


                    <div className="flex-1">
                        <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-gray-600">
                            <li className="hover:text-black cursor-pointer">Home</li>
                            <li className="hover:text-black cursor-pointer">Products</li>
                            <li className="hover:text-black cursor-pointer">Cart</li>
                            <li className="hover:text-black cursor-pointer">Login</li>
                        </ul>
                    </div>


                    <div className="flex-1">
                        <h2 className="font-semibold text-lg mb-4">Contact</h2>

                        <div className="space-y-3 text-gray-600">
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
            {/* footer bottom */}

            <div className="bg-black text-white text-center">
                © SRK Innovations - All Rights Reserved Powered By Radical Global.
            </div>

        </div>




    );
}

export default Footer;