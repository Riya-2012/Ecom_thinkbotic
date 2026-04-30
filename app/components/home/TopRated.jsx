"use client";

import ProductCard from "./Card";
import { FaArrowRight } from "react-icons/fa6";
const products = [
  {
    image: "/product-1.jpg",
    title: "Premium Headphones",
    category: "Electronics",
    price: 2999,
    oldPrice: 3999,
    rating: 5,
  },
  {
    image: "/product-2.jpg",
    title: "Smart Watch",
    category: "Gadgets",
    price: 4999,
    oldPrice: 5999,
    rating: 5,
  },
  {
    image: "/product-1.jpg",
    title: "Wireless Earbuds",
    category: "Audio",
    price: 1999,
    oldPrice: 2499,
    rating: 4,
  },
  {
    image: "/product-2.jpg",
    title: "Gaming Console",
    category: "Gaming",
    price: 5999,
    oldPrice: 6999,
    rating: 5,
  },
];

export default function TopRatedProducts() {
  return (
    <div className="px-10 py-14 bg-white">

      <div className="max-w-[1400] mx-auto">

       
        <div className="flex items-center justify-between mb-10">

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <p className="text-xs font-medium text-yellow-500 uppercase tracking-wider">
                Customer Favorites
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
              Top Rated Products
            </h2>
          </div>

          <button className="text-md font-bold text-[#1e4d3f] hover:underline">
            View All <FaArrowRight />

          </button>

        </div>

      
        <div className="flex gap-6 ">

          {products.map((item, index) => (
            <ProductCard
              key={index}
              {...item}
              variant="topRated"
            />
          ))}

        </div>

      </div>
    </div>
  );
}