"use client";

import ProductCard from "./Card";

export default function Discount() {
  const products = [
    {
      image: "/product-1.jpg",
      title: "Stylish Shoes",
      category: "Footwear",
      price: 999,
      oldPrice: 1499,
    },
    {
      image: "/product-2.jpg",
      title: "Cool Sneakers",
      category: "Shoes",
      price: 1299,
      oldPrice: 1799,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-14 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT BANNER */}
        <div className="relative rounded-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between bg-gradient-blue text-white shadow-lg">

          {/* BACKGROUND EFFECTS */}
          <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-60px] right-[-40px] w-[220px] h-[220px] bg-yellow-300/20 rounded-full blur-3xl"></div>

          {/* BADGE */}
          <div className="absolute top-5 right-5 bg-primary-red text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
            50% OFF
          </div>

          {/* TEXT */}
          <div className="z-10">
            <p className="text-lg sm:text-xl uppercase text-primary-red font-bold">
              Flash Sale
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2">
              Mega <br /> Discount
            </h2>

            <p className="text-sm mt-3 opacity-90 max-w-[250px]">
              Limited time deals on top products. Shop before gone.
            </p>
          </div>

          {/* BUTTON */}
          <button className="z-10 mt-6 bg-white text-primary-red px-6 py-3 rounded-full font-semibold w-fit hover:scale-105 transition">
            Shop Now →
          </button>

          {/* IMAGE */}
          <div className="absolute right-[-10px] bottom-[-10px] w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] rotate-[-10deg]">
            <img
              src="/product-1.jpg"
              alt="deal"
              className="object-contain w-full h-full drop-shadow-2xl"
            />
          </div>

        </div>

        {/* RIGHT PRODUCTS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6 lg:mt-0">

          {products.map((item, index) => (
            <ProductCard
              key={index}
              {...item}
              variant="default"
            />
          ))}

        </div>

      </div>
    </div>
  );
}