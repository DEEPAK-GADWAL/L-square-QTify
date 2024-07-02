import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./carouselLeftNavigation/CarouselLeftNavigation"
import { CarouselRightNavigation } from "./carouselRightNavigation/CarouselRightNavigation";
import "swiper/css";
import "swiper/css/navigation";

const Controls=({data})=>{
  const swiper= useSwiper();

  useEffect(()=>{
    swiper.slideTo(0)
  },[data])
  return <></>
}
const Carousel = ({ data, renderComponent }) => {
  console.log("Carousel data", data);

  return (
    <div className={styles.wrapper}>
      <Swiper 
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={6}
        spaceBetween={60}
        allowTouchMove
        navigation
      >
        <Controls data={data}/>
        {/* <CarouselLeftNavigation /> */}
        {/* <CarouselRightNavigation /> */}
        {data.map((ele, index) => (
          <SwiperSlide key={index}>{renderComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
