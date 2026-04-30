"use client";

import Image from "next/image";

const collections = [
  {
    title: "Smart Gadgets",
    image: "/product-1.jpg",
  },
  {
    title: "Audio Essentials",
    image: "/product-2.jpg",
  },
  {
    title: "Fitness & Wearables",
    image: "/product-1.jpg",
  },
];

export default function CollectionsSection() {
  return (
    <div className="px-10 py-14 bg-white">

      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs text-[#1e4d3f] uppercase tracking-wider">
              Explore
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Shop by Collections
            </h2>
          </div>

          <button className="text-sm text-[#1e4d3f] hover:underline">
            View All →
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {collections.map((item, i) => (
            <div
              key={i}
              className="relative h-[220px] rounded-3xl overflow-hidden group cursor-pointer"
            >

        
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm opacity-80">Shop Now →</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}