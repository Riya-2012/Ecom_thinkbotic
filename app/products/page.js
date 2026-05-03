"use client";

import { useState } from "react";
import ProductCard from "../components/home/Card";
import { FaFilter, FaStar, FaChevronDown, FaCheck } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const allProducts = [
  {
    image: "/product-1.jpg",
    title: "Smart Watch Elite",
    category: "Electronics",
    price: 2999,
    oldPrice: 3999,
    rating: 5,
    colors: ["#0f172a", "#3b82f6", "#ef4444"],
    sizes: ["One Size"],
  },
  {
    image: "/product-2.jpg",
    title: "Pro Noise-Canceling Headphones",
    category: "Audio",
    price: 1299,
    oldPrice: 1999,
    rating: 4,
    colors: ["#0f172a", "#94a3b8"],
    sizes: ["One Size"],
  },
  {
    image: "/product-1.jpg",
    title: "Urban Sneakers X1",
    category: "Fashion",
    price: 1999,
    oldPrice: 2499,
    rating: 3,
    colors: ["#ffffff", "#ef4444", "#10b981"],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    image: "/product-2.jpg",
    title: "Wireless Earbuds Lite",
    category: "Audio",
    price: 899,
    oldPrice: 1299,
    rating: 4,
    colors: ["#ffffff", "#0f172a"],
    sizes: ["One Size"],
  },
  {
    image: "/product-1.jpg",
    title: "Fitness Tracker Band",
    category: "Electronics",
    price: 1499,
    oldPrice: 1999,
    rating: 5,
    colors: ["#3b82f6", "#ef4444", "#10b981"],
    sizes: ["One Size"],
  },
  {
    image: "/product-2.jpg",
    title: "Premium Leather Jacket",
    category: "Fashion",
    price: 4999,
    oldPrice: 6999,
    rating: 5,
    colors: ["#8b4513", "#0f172a"],
    sizes: ["M", "L", "XL", "XXL"],
  },
];

const categories = ["All", "Electronics", "Audio", "Fashion"];
const availableColors = ["#0f172a", "#3b82f6", "#ef4444", "#10b981", "#ffffff", "#8b4513", "#94a3b8"];
const availableSizes = ["7", "8", "9", "10", "11", "M", "L", "XL", "XXL", "One Size"];

export default function ProductsPage() {
  const [sort, setSort] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);

  // Toggle handlers
  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  // 🚀 Filtering logic
  let filteredProducts = allProducts.filter((product) => {
    // Category Filter
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    // Price Filter
    if (product.price > priceRange) return false;
    // Color Filter (Product must have at least one of the selected colors)
    if (selectedColors.length > 0 && !product.colors?.some((c) => selectedColors.includes(c))) return false;
    // Size Filter
    if (selectedSizes.length > 0 && !product.sizes?.some((s) => selectedSizes.includes(s))) return false;
    
    return true;
  });

  // 🚀 Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-16">
      
      {/* 🔹 BREADCRUMB & HEADER */}
      <div className="bg-white border-b border-gray-100 py-6 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div>
            <p className="text-xs text-gray-500 mb-1.5 font-medium tracking-wide">
              <span className="hover:text-primary-blue cursor-pointer transition">Home</span> / <span className="hover:text-primary-blue cursor-pointer transition">Shop</span> / <span className="text-[#0f172a] font-bold">All Products</span>
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] flex items-center gap-3">
              Shop Products
              <span className="text-sm font-medium bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full">{sortedProducts.length} items</span>
            </h1>
          </div>
          
          {/* MOBILE FILTER BTN & SORT DROPDOWN */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex-1 flex justify-center items-center gap-2 bg-gray-50 border border-gray-200 text-[#0f172a] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-100 transition duration-300"
            >
              <FaFilter className="text-primary-red" /> Filters
            </button>
            
            <div className="relative flex-1 sm:w-[220px]">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 text-[#0f172a] px-4 py-2.5 pr-10 rounded-xl text-sm font-medium focus:outline-none focus:border-primary-blue transition cursor-pointer"
              >
                <option value="default">Sort by: Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>

      {/* 🔹 MAIN LAYOUT */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-10 mt-8 relative">

        {/* 🔹 SIDEBAR (Desktop: Sticky, Mobile: Off-canvas) */}
        <div className={`
          fixed lg:sticky top-0 lg:top-8 left-0 h-full lg:h-fit w-[300px] lg:w-[280px] 
          bg-white lg:bg-transparent shadow-2xl lg:shadow-none z-50 lg:z-10
          overflow-y-auto lg:overflow-visible transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          
          <div className="bg-white rounded-none lg:rounded-3xl lg:border border-gray-100 p-6 lg:shadow-sm min-h-full lg:min-h-fit">
            
            {/* MOBILE CLOSE BTN */}
            <div className="flex justify-between items-center lg:hidden mb-8 border-b pb-4">
              <h3 className="font-bold text-xl text-[#0f172a]">Filters</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <MdOutlineClose size={20} />
              </button>
            </div>

            {/* CATEGORIES */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg text-[#0f172a] mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary-red rounded-full"></span> Categories
              </h4>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left text-[15px] flex items-center justify-between transition group ${
                        selectedCategory === cat ? "text-primary-red font-bold" : "text-gray-600 hover:text-primary-blue"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${selectedCategory === cat ? "bg-gradient-blue-red text-white shadow-sm" : "bg-gray-100 text-gray-500 group-hover:bg-primary-blue/10 group-hover:text-primary-blue"}`}>
                        {cat === "All" ? allProducts.length : allProducts.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* PRICE RANGE */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-lg text-[#0f172a]">Price</h4>
                <span className="text-xs font-bold text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-md">
                  Up to ₹{priceRange}
                </span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="10000" 
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-blue" 
              />
              <div className="flex justify-between text-xs text-gray-400 mt-3 font-medium">
                <span>₹500</span>
                <span>₹10,000+</span>
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* COLORS */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg text-[#0f172a] mb-4">Colors</h4>
              <div className="flex flex-wrap gap-3">
                {availableColors.map((color) => {
                  const isSelected = selectedColors.includes(color);
                  const isWhite = color === "#ffffff";
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      style={{ backgroundColor: color }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isWhite ? "border-2 border-gray-200" : "border-none shadow-sm"
                      } ${isSelected ? "ring-2 ring-offset-2 ring-primary-blue scale-110" : "hover:scale-110"}`}
                      title={color}
                    >
                      {isSelected && (
                        <FaCheck size={12} className={isWhite ? "text-gray-800" : "text-white"} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <hr className="border-gray-100 my-6" />

            {/* SIZES */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg text-[#0f172a] mb-4">Size</h4>
              <div className="flex flex-wrap gap-2.5">
                {availableSizes.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isSelected 
                          ? "bg-gradient-blue-red border-transparent text-white shadow-lg shadow-primary-blue/30 scale-105" 
                          : "bg-white border-2 border-gray-100 text-gray-600 hover:border-primary-red/50 hover:text-primary-red"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* 🔹 MOBILE OVERLAY */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* 🔹 PRODUCTS GRID */}
        <div className="flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((item, index) => (
                <ProductCard key={index} {...item} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center flex flex-col items-center justify-center min-h-[400px] border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <FaFilter className="text-gray-300 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-3">No products found</h3>
              <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
                We couldn't find any products matching your current filters. Try adjusting your category, price, or color selections.
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange(10000);
                  setSelectedColors([]);
                  setSelectedSizes([]);
                }}
                className="bg-gradient-blue-red text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-md"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}