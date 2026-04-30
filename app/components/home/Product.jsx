import React from "react";

import ProductCard from "./Card";


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


  <div>


    <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 bg-[#1e4d3f] rounded-full"></span>
      <p className="text-xs font-medium text-[#1e4d3f] uppercase tracking-wider">
        Trending Now
      </p>
    </div>


    <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
      Featured Products
    </h2>

  </div>

  
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