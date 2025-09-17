"use client";
import { useMediaQuery } from "@mui/material";


const MediaQuery = (services) => {
  const is375 = useMediaQuery("(min-width:300px) and (max-width:400px)");
  const is912 = useMediaQuery("(min-width:400px) and (max-width:900px)");
  const isMobile = useMediaQuery("(min-width:0px) and (max-width:900px)");
  const isSmallMobile = useMediaQuery("(min-width: 0px) and (max-width: 399px)");
  const isBigMobile = useMediaQuery("(min-width: 376px) and (max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 900px)");
  const isLaptop = useMediaQuery("(min-width: 961px) and (max-width: 1280px)");
  const isDesktop = useMediaQuery("(min-width: 1281px)");
  return { is375, is912, isMobile ,isSmallMobile, isBigMobile, isTablet, isLaptop, isDesktop};
};


export { MediaQuery };



