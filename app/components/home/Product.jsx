import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProductSlider from "./Slider";

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
    {
      image: "/product-2.jpg",
      title: "Stylish Shoes",
      category: "Footwear",
      price: 999,
      oldPrice: 1499,
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
    <div className="md:px-10 py-10 bg-[#f8fafc]">

      <div className="flex items-center justify-between mb-10">

        <div className="ps-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 bg-primary-red rounded-full"></span>
            <p className="text-xs font-medium text-primary-red uppercase tracking-wider">
              Trending Now
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
            Featured Products
          </h2>
        </div>

        <div className="flex items-center gap-1 text-primary-blue hover:underline cursor-pointer">
          <button className="text-md font-bold">
            View All
          </button>
          <FaArrowRight />
        </div>

      </div>

   <div className="flex justify-center items-center">
       <ProductSlider products={products} />
   </div>

    </div>
  );
}

export default Product;