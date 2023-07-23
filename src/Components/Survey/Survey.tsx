import React, { useRef, useState, useEffect, ReactPropTypes } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import styles from "./Survey.module.scss";

interface SurveryProps {
  children: React.ReactNode[];
}

export const Survey: React.FC<SurveryProps> = ({ children }) => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const [swiper, setSwiper] = useState(null);

  const handleNext = () => {
    swiper.slideNext();
    console.log(swiper);
  };

  const handlePrev = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    const swiper = document.querySelector(".swiper")?.swiper;
    setSwiper(swiper);
  }, []);
  console.log({ children });
  const slides = children.map((child, i) => {
    return (
      <SwiperSlide key={i}>
        {React.cloneElement(child as React.ReactElement, {
          handleNext,
          handlePrev,
        })}
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.container}>
      <SwiperComponent
        allowTouchMove={false}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        slidesPerView={"auto"}
      >
        {slides}
      </SwiperComponent>
    </div>
  );
};
