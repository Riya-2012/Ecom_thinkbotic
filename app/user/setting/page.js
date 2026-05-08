"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";

export default function Page() {

  const [preview, setPreview] = useState("/profile.jpg");

  // IMAGE PREVIEW
  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-8">

      {/*  PAGE HEADER */}
      {/* <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a]">
          Profile Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your personal information and account settings.
        </p>

      </div> */}

      {/*  PROFILE FORM */}
      <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">

        {/* TOP */}
        {/* <div className="relative bg-gradient-blue-red px-6 sm:px-8 py-10">

      
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">

        
            <div className="relative">

              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">

                <Image
                  src={preview}
                  alt="profile"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />

              </div>

          
              <label className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer hover:scale-105 transition">

                <FaCamera className="text-primary-blue" />

                <input
                  type="file"
                  hidden
                  onChange={handleImage}
                />

              </label>

            </div>

        
            <div className="text-center sm:text-left text-white">

              <h2 className="text-2xl font-bold">
                Riya Sharma
              </h2>

              <p className="text-white/80 mt-1">
                riya@gmail.com
              </p>

            </div>

          </div>

        </div> */}

        {/* FORM */}
        <div className="p-6 sm:p-8">

          {/* SECTION TITLE */}
          <div className="mb-8">

            <h3 className="text-xl font-bold text-[#0f172a]">
              Personal Information
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Update your profile details here.
            </p>

          </div>

          {/* FORM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

  {/* <div className="w-full">

              <label className="profileLabel">
                User Name
              </label>

              <div className="profileInputWrapper">

                <FaUser className="profileIcon" />

                <input
                  type="text"
                  defaultValue="Riya_20"
                  className="profileInput"
                  placeholder="Username"
                />

              </div>

            </div> */}
<div>

              <label className="profileLabel">
                Username
              </label>

              <div className="profileInputWrapper">

                <FaUser className="profileIcon" />

                <input
                  type="text"
                  defaultValue="Riya_10"
                  className="profileInput"
                  placeholder="Username"
                />

              </div>

            </div>
            {/* FIRST NAME */}
            <div>

              <label className="profileLabel">
                First Name
              </label>

              <div className="profileInputWrapper">

                <FaUser className="profileIcon" />

                <input
                  type="text"
                  defaultValue="Riya"
                  className="profileInput"
                  placeholder="First Name"
                />

              </div>

            </div>

            {/* LAST NAME */}
            <div>

              <label className="profileLabel">
                Last Name
              </label>

              <div className="profileInputWrapper">

                <FaUser className="profileIcon" />

                <input
                  type="text"
                  defaultValue="Sharma"
                  className="profileInput"
                  placeholder="Last Name"
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="profileLabel">
                Email Address
              </label>

              <div className="profileInputWrapper">

                <FaEnvelope className="profileIcon" />

                <input
                  type="email"
                  defaultValue="riya@gmail.com"
                  className="profileInput"
                  placeholder="Email"
                />

              </div>

            </div>

            {/* PHONE */}
            <div>

              <label className="profileLabel">
                Phone Number
              </label>

              <div className="profileInputWrapper">

                <FaPhone className="profileIcon" />

                <input
                  type="text"
                  defaultValue="+91 9999999999"
                  className="profileInput"
                  placeholder="Phone Number"
                />

              </div>

            </div>

          </div>

          {/* GENDER */}
          <div className="mt-6">

            <label className="profileLabel">
              Gender
            </label>

            <div className="flex flex-wrap gap-4 mt-3">

              {["Male", "Female", "Other"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-xl px-5 py-3 hover:border-primary-blue transition"
                >

                  <input
                    type="radio"
                    name="gender"
                    className="accent-primary-blue"
                  />

                  <span className="text-sm font-medium">
                    {item}
                  </span>

                </label>
              ))}

            </div>

          </div>

          {/* PASSWORD SECTION */}
          {/* <div className="mt-10 border-t border-gray-100 pt-8">

            <h3 className="text-xl font-bold text-[#0f172a]">
              Change Password
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Keep your account secure with a strong password.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          
              <div>

                <label className="profileLabel">
                  Current Password
                </label>

                <div className="profileInputWrapper">

                  <FaLock className="profileIcon" />

                  <input
                    type="password"
                    className="profileInput"
                    placeholder="Current Password"
                  />

                </div>

              </div>

        
              <div>

                <label className="profileLabel">
                  New Password
                </label>

                <div className="profileInputWrapper">

                  <FaLock className="profileIcon" />

                  <input
                    type="password"
                    className="profileInput"
                    placeholder="New Password"
                  />

                </div>

              </div>

            </div>

          </div> */}

          {/* SAVE BUTTON */}
          <div className="mt-10 flex justify-end">

            <button className="px-8 py-3 bg-gradient-blue-red text-white rounded-2xl font-bold shadow-md hover:shadow-xl hover:scale-[1.02] transition">

              Save Changes

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}