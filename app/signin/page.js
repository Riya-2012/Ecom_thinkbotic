"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function SigninPage() {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
  });


  const [loading, setLoading] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log(formData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-[#f8fafc] overflow-hidden">

      {/*LEFT SIDE */}
      <div className="relative hidden lg:flex lg:w-1/2 overflow-hidden bg-gradient-blue-red items-center justify-center">

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* GLOW */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center px-10 mt-5 text-center">

          <h1 className="text-5xl font-bold  text-white tracking-tight">
            Thinkbotic
          </h1>

          <p className="text-white/80 mt-4 text-lg max-w-md leading-relaxed">
            Build your account and explore premium shopping experiences with
            futuristic technology and modern design.
          </p>

          {/* IMAGE */}
          <div className="relative w-[500px] h-[500px] mt-6 animate-pulse">

            <DotLottieReact
      src="/e-comerce.lottie"
      loop
      autoplay
      
    />
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10 relative">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 left-10 w-52 h-52 bg-primary-red/10 rounded-full blur-3xl"></div>

        {/* FORM CARD */}
        <div className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:-translate-y-1">

          {/* HEADER */}
          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-primary-blue">
              Sign in to your account
            </h2>

            <p className="text-gray-500 mt-3">
              Join us and start your premium journey today.
            </p>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

        

              <div className="relative">

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 border border-gray-200 rounded-2xl bg-gray-50 focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-primary-blue/10 outline-none transition-all"
                />

                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  Phone Number
                </label>

              </div>
        

   

            {/* PASSWORD */}
          
            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-gradient-blue-red text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            >
              {loading ? "Creating Account..." : "Sign In"}
            </button>

          </form>

          {/* LOGIN */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              New User{" "}

              <Link
                href="/login"
                className="text-primary-red font-bold hover:text-primary-blue transition"
              >
                Signup
              </Link>

            </p>
          </div>

        </div>
      </div>
    </div>
  );
}