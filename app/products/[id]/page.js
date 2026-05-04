"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import {use} from "react";
export default function Page({ params }) {

  const { id } = use(params);

  const products = [
    {
  "name": "Smart Watch Elite",
  "Brand": "Apple",
  "img": "/product-1.jpg",
  "images": [
    {
      "imageColor": "Black",
      "imageSet": ["/watch1.jpg", "/watch2.jpg"]
    }
  ],
  "descriptions": "Advanced smartwatch with fitness tracking",
  "category": "Electronics",
  "subCategory": "Wearables",
  "price": 2999,
  "oldPrice": 3999,
  "discount": 25,
  "gst": 18,
  "stock": 15,
  "stockStatus": "in-stock",
  "rating": 4.5,
  "ratingCount": 120,
  "ratingTotal": 540,
  "productDescription": "Track fitness, calls, and notifications.",
  "specifications": [
    { "key": "Display", "value": "AMOLED" },
    { "key": "Battery", "value": "2 Days" }
  ],
  "warranty": [
    { "key": "Warranty", "value": "1 Year" }
  ],
  "offers": [
    { "key": "Bank Offer", "value": "10% cashback" }
  ]
},
{
  "name": "Pro Noise Cancelling Headphones",
  "Brand": "Sony",
  "img": "/product-2.jpg",
  "images": [
    {
      "imageColor": "Beige",
      "imageSet": ["/head1.jpg", "/head2.jpg"]
    }
  ],
  "descriptions": "High-quality sound with noise cancellation",
  "category": "Audio",
  "subCategory": "Headphones",
  "price": 1299,
  "oldPrice": 1999,
  "discount": 35,
  "gst": 18,
  "stock": 8,
  "stockStatus": "few-left",
  "rating": 4,
  "ratingCount": 80,
  "ratingTotal": 320,
  "productDescription": "Enjoy music without disturbance.",
  "specifications": [
    { "key": "Battery", "value": "20 Hours" }
  ]
},
{
  "name": "Urban Sneakers X1",
  "Brand": "Nike",
  "img": "/product-3.jpg",
  "images": [
    {
      "imageColor": "Red",
      "imageSet": ["/shoe1.jpg", "/shoe2.jpg"]
    }
  ],
  "descriptions": "Comfortable running shoes",
  "category": "Fashion",
  "subCategory": "Shoes",
  "price": 1999,
  "oldPrice": 2499,
  "discount": 20,
  "gst": 12,
  "stock": 0,
  "stockStatus": "out-of-stock",
  "rating": 3,
  "ratingCount": 45,
  "ratingTotal": 135,
  "productDescription": "Perfect for daily use."
},
{
  "name": "Wireless Earbuds Lite",
  "Brand": "Boat",
  "img": "/product-4.jpg",
  "images": [
    {
      "imageColor": "White",
      "imageSet": ["/ear1.jpg"]
    }
  ],
  "descriptions": "Compact and lightweight earbuds",
  "category": "Audio",
  "subCategory": "Earbuds",
  "price": 899,
  "oldPrice": 1299,
  "discount": 30,
  "gst": 18,
  "stock": 25,
  "stockStatus": "in-stock",
  "rating": 4,
  "ratingCount": 60,
  "ratingTotal": 240
}

    
]
;

  const product = products[0]; 

  const [selectedImage, setSelectedImage] =
    product.images?.[0]?.imageSet?.[0] || product.img;

  const [qty, setQty] = useState(1);

  return (
    <div className="bg-[#f8fafc] min-h-screen">

      {/* HEADER */}
    <div className="bg-white  border-b border-gray-400 py-6 px-4 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div>
            <p className="text-xs text-gray-500 mb-1.5 font-medium tracking-wide">
             <Link href="/"> <span className="hover:text-primary-blue cursor-pointer transition">Home</span></Link> / <Link href="products"><span className="hover:text-primary-blue cursor-pointer transition">Shop</span></Link> / <span className="text-primary-blue font-bold">{product.name}</span>
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f172a] flex items-center gap-3">
                {product.name}
              {/* <span className="text-sm font-medium bg-primary-blue/10 text-primary-blue px-3 py-1 rounded-full">{sortedProducts.length} items</span> */}
            </h1>
          </div>
          
        
      
          
        </div>
      </div>



      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT IMAGE */}
        <div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="relative w-full h-[350px]">
              <Image
                src="/product-1.jpg"
                fill
                className="object-contain"
                alt=""
              />
            </div>

            {/* thumbnails */}
            {/* <div className="flex gap-3 mt-4">
              {product.images?.map((imgObj) =>
                imgObj.imageSet.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    width={70}
                    height={70}
                    onClick={() => setSelectedImage(img)}
                    className="cursor-pointer border rounded-lg"
                    alt=""
                  />
                ))
              )}
            </div> */}
          </div>
        </div>

        
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          {/* NAME */}
          <h1 className="text-2xl font-bold text-[#0f172a]">
            {product.name}
          </h1>

          {/* BRAND */}
          <p className="text-gray-500 mt-2">
            Brand: {product.Brand}
          </p>

          {/* CATEGORY */}
          <p className="text-gray-500 text-sm">
            {product.category} / {product.subCategory}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating} ({product.ratingCount} reviews)
            </span>
          </div>

          {/* PRICE */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-bold text-primary-red">
              ₹{product.price}
            </span>

            <span className="line-through text-gray-400">
              ₹{product.oldPrice}
            </span>

            <span className="text-green-600 font-medium">
              {product.discount}% off
            </span>
          </div>

          {/* GST */}
          <p className="text-sm text-gray-500 mt-1">
            Inclusive of GST ({product.gst}%)
          </p>

          {/* STOCK */}
          <p className="mt-2 text-green-600 font-medium">
            {product.stockStatus}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 text-gray-600">
            {product.productDescription}
          </p>

         
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Specifications</h3>
            {product.specifications?.map((spec, i) => (
              <p key={i} className="text-sm text-gray-600">
                <strong>{spec.key}:</strong> {spec.value}
              </p>
            ))}
          </div>

      
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Warranty</h3>
            {product.warranty?.map((w, i) => (
              <p key={i} className="text-sm text-gray-600">
                {w.key}: {w.value}
              </p>
            ))}
          </div>

        
          <div className="mt-6 bg-red-50 border border-primary-red p-4 rounded-xl">
            <h3 className="font-semibold text-red-500 mb-2">Offers</h3>
            {product.offers?.map((offer, i) => (
              <p key={i} className="text-sm text-red-500">
                {offer.key}: {offer.value}
              </p>
            ))}
          </div>

          {/*  QUANTITY */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex border rounded-lg">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-4 py-2"
              >
                -
              </button>

              <span className="px-4 py-2">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-4 py-2"
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">

            <button className="flex-1 bg-gradient-blue-red text-white py-3 rounded-xl">
              Add to Cart
            </button>

            <button className="flex-1 border border-primary-red text-primary-red py-3 rounded-xl">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}