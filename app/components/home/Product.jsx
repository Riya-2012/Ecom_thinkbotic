import React from "react";
import Image from "next/image";
import { FaHeart, FaShareAlt, FaStar } from "react-icons/fa";



function ProductCard({ image, title, category, price, oldPrice }) {
  return (
    <div className="group w-[250px] bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition duration-300">

    
      <div className="relative w-full h-[240px] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

   
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      
        <span className="absolute top-3 left-3 bg-[#1e4d3f] text-white text-xs px-2 py-1 rounded-full shadow">
          -20%
        </span>

       
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">

          <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:text-red-500 transition">
            <FaHeart size={14} />
          </button>

          <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:text-[#1e4d3f] transition">
            <FaShareAlt size={14} />
          </button>

        </div>

       
        <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition">

          <button className="bg-white text-[#1e4d3f] px-6 py-3 rounded-full text-xs font-medium shadow hover:bg-gray-100 active:scale-95 transition">
            Add to Cart
          </button>

          <button className="bg-[#1e4d3f] text-white px-6 py-3 rounded-full text-xs font-medium shadow hover:opacity-90 active:scale-95 transition">
            Buy Now
          </button>

        </div>

      </div>

     
      <div className="p-3">

       
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {category}
        </p>

     
        <h3 className="font-semibold text-[15px] text-[#0f172a] mt-1 line-clamp-1">
          {title}
        </h3>

   
        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300" />

          <span className="text-gray-500 text-xs ml-2">(4.0)</span>

        </div>

        
        <div className="mt-2 flex items-center gap-2">

          <span className="text-lg font-bold text-[#1e4d3f]">
            ₹{price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{oldPrice}
          </span>

        </div>

      </div>
    </div>
  );
}



function Product() {
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
    {
      image: "/product-1.jpg",
      title: "Running Shoes",
      category: "Sports",
      price: 1599,
      oldPrice: 2099,
    },
    {
      image: "/product-2.jpg",
      title: "Stylish Shoes",
      category: "Footwear",
      price: 999,
      oldPrice: 1499,
    },
  ];

  return (
    <div className="px-10 py-10 bg-[#f8fafc]">


 <div className="flex items-center justify-between mb-10">

  {/* LEFT */}
  <div>

    {/* SMALL TAG */}
    <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 bg-[#1e4d3f] rounded-full"></span>
      <p className="text-xs font-medium text-[#1e4d3f] uppercase tracking-wider">
        Trending Now
      </p>
    </div>

    {/* MAIN HEADING */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
      Featured Products
    </h2>

  </div>

  {/* RIGHT */}
  <button className="text-sm font-medium text-[#1e4d3f] hover:underline">
    View All →
  </button>

</div>
      <div className="flex flex-wrap justify-center gap-6">

        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}

      </div>

    </div>
  );
}

export default Product;