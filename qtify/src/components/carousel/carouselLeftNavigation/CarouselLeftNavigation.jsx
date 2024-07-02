import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import { KeyboardArrowLeft } from "@mui/icons-material";
import styles from "./CarouselLeftNavigation.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <KeyboardArrowLeft onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
