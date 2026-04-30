import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full bg-[#f8fafc] py-8 px-4 lg:px-10">
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 h-[420px] bg-white rounded-3xl flex items-center justify-between px-10 relative overflow-hidden border">

          {/* TEXT */}
          <div className="max-w-lg">
            <p className="text-sm text-[#1e4d3f] font-medium mb-2">
              Up to 50% discount
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
              Smart Watch <br />
              <span className="text-[#1e4d3f]">
                Next Generation
              </span>
            </h1>

            <p className="text-gray-500 mt-4 text-sm">
              Track fitness, calls, and style — all in one powerful device.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="bg-[#1e4d3f] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                Shop Now
              </button>

              <button className="border px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition">
                Explore
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-[320px] h-[320px]">
            <Image
              src="/ban1.webp"
              alt="product"
              fill
              className="object-contain"
            />
          </div>

          {/* subtle background circle */}
          <div className="absolute right-[-80px] bottom-[-80px] w-[300px] h-[300px] bg-[#1e4d3f]/10 rounded-full blur-3xl"></div>
        </div>

        {/*  RIGHT  */}
        <div className="h-[420px] flex flex-col gap-6">

          {/* TOP CARD */}
          <div className="relative flex-1 rounded-3xl overflow-hidden">

            <Image
              src="/product-2.jpg"
              alt="headphone"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs opacity-80">Weekend Deal</p>

              <h2 className="text-xl font-semibold">
                Premium Headphones
              </h2>

              <p className="text-sm mt-1">Starting ₹999</p>

              <button className="mt-3 bg-white text-[#1e4d3f] px-4 py-2 rounded-full text-sm font-medium">
                Shop Now
              </button>
            </div>
          </div>

          {/* BOTTOM CARD */}
       <div className="flex-1 relative rounded-3xl overflow-hidden group cursor-pointer">

  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#e6f4f1] to-white"></div>

  {/* Hover Effect */}
  <div className="absolute inset-0 bg-[#1e4d3f]/5 opacity-0 group-hover:opacity-100 transition"></div>

  {/* Content */}
  <div className="relative z-10 p-6 flex items-center justify-between h-full">

    {/* LEFT TEXT */}
    <div>
      <p className="text-xs text-[#1e4d3f] font-medium">
        Hot Deal
      </p>

      <h3 className="text-lg font-semibold text-[#0f172a] mt-1">
        VR Headset
      </h3>

      <p className="text-[#1e4d3f] font-bold mt-2 text-lg">
        ₹1499
      </p>

      <button className="mt-3 text-sm text-white bg-[#1e4d3f] px-4 py-2 rounded-full hover:opacity-90 transition">
        Shop Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative w-[110px] h-[110px] group-hover:scale-110 transition duration-500">
      <Image
        src="/product-1.jpg"
        alt="vr"
        fill
        className="object-contain drop-shadow-lg"
      />
    </div>

  </div>
</div>

        </div>

      </div>
    </div>
  );
}