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
    <div className="px-6 lg:px-10 py-14 bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

     <div className="relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-br from-[#1e4d3f] via-[#166534] to-[#0f3d2e] text-white shadow-lg">

  <div className="absolute -top-10 -left-10 w-[200px] h-[200px] bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-60px] right-[-40px] w-[220px] h-[220px] bg-yellow-300/20 rounded-full blur-3xl"></div>

 
  <div className="absolute top-5 right-5 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
    50% OFF
  </div>

  {/* TEXT */}
  <div className="z-10">
    <p className="text-xl uppercase  text-red-500 font-bold opacity-80">
      Flash Sale
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
      Mega <br /> Discount
    </h2>

    <p className="text-sm mt-3 opacity-90 max-w-[250px]">
      Limited time deals on top products. Shop before it’s gone.
    </p>
  </div>


  <button className="z-10 mt-6 bg-white text-[#1e4d3f] px-6 py-3 rounded-full font-semibold w-fit hover:scale-105 transition">
    Shop Now →
  </button>


  <div className="absolute right-[-10px] bottom-[-10px] w-[220px] h-[220px] rotate-[-10deg]">
    <img
      src="/product-1.jpg"
      alt="deal"
      className="object-contain w-full h-full drop-shadow-2xl"
    />
  </div>

</div>

        
        <div className="grid grid-cols-2 gap-6">
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