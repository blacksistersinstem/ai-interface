import React, { useRef, useState, useEffect, ReactPropTypes } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./Survey.css";

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
    <SwiperComponent
      allowTouchMove={false}
      centeredSlides
      centeredSlidesBounds
      modules={[Navigation]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      spaceBetween={30}
      slidesPerView={'auto'}
    >
      {slides}
    </SwiperComponent>
  );
};
