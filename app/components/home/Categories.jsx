"use client";

import { useState } from "react";
import Image from "next/image";

const data = {
  Electronics: [
    { name: "Smart Speaker", image: "/product-1.jpg", brand: "Dell" },
    { name: "Earbuds", image: "/product-2.jpg", brand: "Samsung" },
    { name: "Tablet", image: "/product-1.jpg", brand: "Microsoft" },
    { name: "Phone", image: "/product-2.jpg", brand: "Apple" },
  ],
  Fashion: [
    { name: "Sneakers", image: "/product-1.jpg", brand: "Nike" },
    { name: "Jacket", image: "/product-2.jpg", brand: "Zara" },
  ],
  Gaming: [
    { name: "Console", image: "/p5.jpg", brand: "Sony" },
    { name: "Controller", image: "/p6.jpg", brand: "Xbox" },
  ],
};

export default function CategoryProducts() {
  const [active, setActive] = useState("Electronics");

  return (
    <div className="w-full py-12 px-4 lg:px-10 bg-white">

      <div className="max-w-[1400px] mx-auto">

        {/* TITLE + TABS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

          <h2 className="text-2xl font-bold text-[#0f172a]">
            Shop by Categories
          </h2>

          {/* TABS */}
          <div className="flex gap-6 mt-4 md:mt-0">
            {Object.keys(data).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-medium pb-1 transition ${
                  active === cat
                    ? "text-[#1e4d3f] border-b-2 border-[#1e4d3f]"
                    : "text-gray-500 hover:text-[#1e4d3f]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SLIDER */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">

          {data[active].map((item, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-[#f8fafc] rounded-2xl p-4 hover:shadow-md transition group"
            >
              
              {/* IMAGE */}
              <div className="relative w-full h-[120px] mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-110 transition"
                />
              </div>

              {/* TEXT */}
              <p className="text-xs text-gray-500">{item.brand}</p>

              <h3 className="font-semibold text-sm text-[#0f172a] mt-1">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}