import Image from "next/image";
import { FaHeart, FaShareAlt, FaStar } from "react-icons/fa";

export default function ProductCard({
  image,
  title,
  category,
  price,
  oldPrice,
  rating = 4,
  variant = "default",
}) {
  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden transition duration-300
        ${
          variant === "topRated"
            ? "w-[220px] shadow-sm hover:shadow-md"
            : "w-[250px] shadow-sm hover:shadow-xl"
        }
      `}
    >
    
      <div className="relative w-full h-[220px] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />

      
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

    
        {variant === "topRated" ? (
          <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full shadow">
            ⭐ Top Rated
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-[#1e4d3f] text-white text-xs px-2 py-1 rounded-full shadow">
            -20%
          </span>
        )}

      
        {variant !== "topRated" && (
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">

            <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:text-red-500 transition">
              <FaHeart size={14} />
            </button>

            <button className="bg-white/90 backdrop-blur p-2 rounded-full shadow hover:text-[#1e4d3f] transition">
              <FaShareAlt size={14} />
            </button>

          </div>
        )}

        {/* CTA BUTTONS (hide for top rated) */}
        {variant !== "topRated" && (
          <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition">

            <button className="bg-white text-[#1e4d3f] px-4 py-2 rounded-full text-xs font-medium shadow hover:bg-gray-100 transition">
              Add
            </button>

            <button className="bg-[#1e4d3f] text-white px-4 py-2 rounded-full text-xs font-medium shadow hover:opacity-90 transition">
              Buy
            </button>

          </div>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-3">

        {/* CATEGORY */}
        <p className="text-xs text-gray-500 uppercase tracking-wide">
          {category}
        </p>

        {/* TITLE */}
        <h3 className="font-semibold text-[15px] text-[#0f172a] mt-1 line-clamp-1">
          {title}
        </h3>

        {/* ⭐ RATING */}
        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-500 text-xs ml-2">
            ({rating}.0)
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-[#1e4d3f]">
            ₹{price}
          </span>

          {oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{oldPrice}
            </span>
          )}
        </div>

      </div>
    </div>
  );
}