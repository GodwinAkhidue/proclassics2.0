"use client";
import Video_Item from "./video_item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Video_Scroll() {
  const videos = [
    "https://www.youtube.com/embed/m2mcP58caKI?si=6u1ml--LPqQl6s0S",
    "https://www.youtube.com/embed/xp64JL_zd5o?si=6UvRmlMAEpnLNnka",
    "https://www.youtube.com/embed/l7qkKouzyMI?si=y_lrpI5YATfkiOZu",
    "https://www.youtube.com/embed/7fZIqfemYtw?si=HqWRviQAADZxo-hn",
  ];

  return (
    <div className="mt-10 lg:mt-28 mb-10 w-full relative px-4">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={"auto"}
      >
        {videos.map((i, index) => (
          <SwiperSlide key={index} style={{ width: "180px" }}>
            <Video_Item url={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
