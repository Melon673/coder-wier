"use client";

import { useState, useRef, useEffect } from 'react';

export const useSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
      const [isClient, setIsClient] = useState(false);
  const [swiperState, setSwiperState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setSwiperState({
      isBeginning: swiper.isBeginning,
      isEnd: swiper.isEnd,
    });
  };
  const toggleExpand = (index) => {
    setHoveredIndex((prev) => (prev === index ? null : index));
  };
    useEffect(() => {
    setIsClient(true);
  }, []);
  return {
    activeIndex,toggleExpand,isClient,
    swiperRef,hoveredIndex,setHoveredIndex,
    handleSlideChange,
    setActiveIndex,
    swiperState,
  };
};
