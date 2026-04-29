'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

function Slider() {
  return (
    <div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
      >
        <SwiperSlide>
          <Image src="/banner.webp" width={1200} height={400} className="w-full h-[400px] object-cover" alt="banner" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/banner2.webp" width={1200} height={400} className="w-full h-[400px] object-cover" alt="banner" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/banner.webp" width={1200} height={400} className="w-full h-[400px] object-cover" alt="banner" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src="/banner2.webp" width={1200} height={400} className="w-full h-[400px] object-cover" alt="banner" />
        </SwiperSlide>
      </Swiper>

      <div className="custom-pagination mt-4 flex justify-center"></div>

    </div>
  );
}

export default Slider;