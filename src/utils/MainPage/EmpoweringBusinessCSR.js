"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  IconButton
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { MediaQuery } from "./MediaQuerry";
import { useSwiper } from "../UseSwiper/UseSwiper";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import Image from "next/image";

const StyledSwiperSlide = styled(SwiperSlide)(() => ({
  "&.swiper-slide-next": {
    transform: "translate3d(-200.974px, 0px, -399.965px) scale(0.9) !important",
    zIndex: 0,
    transitionDuration: "1000ms",
    "@media (max-width: 900px)": { transform: "none !important" }
  },
  "&.swiper-slide-prev": {
    transform: "translate3d(-170.974px, 0px, -399.965px) scale(0.9) !important",
    zIndex: 0,
    marginLeft: 0,
    transitionDuration: "1000ms",
    "@media (max-width: 900px)": { transform: "none !important" }
  },
  "&.swiper-slide-active": {
    transform: "translate3d(0px, 0px, 0px) scale(1) !important",
    zIndex: 20,
    marginLeft: 0,
    background: "radial-gradient(circle, rgba(4,134,255,0.5), rgba(4,134,255,0))",
    "@media (max-width: 900px)": { transform: "none !important" }
  }
}));

const EmpoweringBusinessCSR = ({ data,isDarkTheme }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  
  const { activeIndex, setActiveIndex, swiperRef, swiperState,isClient, handleSlideChange, setHoveredIndex } = useSwiper();
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();

  const isMobileView = isSmallMobile || isBigMobile ;
 const ResultCard=({item})=>(
           <Grid container justifyContent="center" flexDirection={{md:"row",xs:"column-reverse"}} p={{ md: "1vw", xs: "0.6rem" }}>
              <Grid item md={6.5} xs={12} sm={11.5} mt="2%">
                <Typography
                  variant={item?.headingType?.title?.toLowerCase() || "h3"}
                  textAlign={{ md: "left", xs: "center", sm: "left" }}
                  className={!isDarkTheme?"blackColor":"whiteColor"}
                  sx={{
                    pr: { md: "0.5vw", xs: 0 },
                    height: { md: "auto", xs: "8rem", sm: "4rem" }
                  }}
                >
                  {item?.caseStudy?.title}
                </Typography>
                <Chip
                  label={item?.caseStudy?.industry?.title}
                  sx={{
                    bgcolor:!isDarkTheme?"#0486ff": "white",
                    color:!isDarkTheme?"#fff": "black",
                    mt: { md: "2.8vh", xs: "3vh" },
                    width: { md: "6vw", xs: "8rem" },
                    height: { md: "2.8vh", xs: "3vh" },
                    fontSize: { md: "0.7vw", xs: "0.7rem" },
                    borderRadius: { md: "0.2vw", xs: "0.5rem" }
                  }}
                />
              </Grid>
              <Grid item md={5.5} xs={12} sm={11.5} mt={{ md: 0, xs: "1rem" }}>
               <Box
  sx={{
    position: "relative",
    width: "100%",
    height: { md: "30vh", xs: "15rem", sm: "30rem" },
    overflow: "hidden",
  }}
>
  <Image
    src={
      item?.caseStudy?.thumbnailImage
        ? `${imgLink}${item.caseStudy.thumbnailImage}`
        : "/Assets/NOimg.webp"
    }
    alt={`Image for ${item?.thumbnailImageAltText || "Case Study"}`}
    fill
    style={{ objectFit: "contain",borderRadius: "0.5rem" }}
  />
</Box>
              </Grid>
            </Grid>
 )
  if (!isClient) {
    return (
      <>
        {data?.caseStudies.slice(0,1)?.map((item, index) => (
         <Grid  key={index} md={7} xs={11.5} mt={{ md: 0, xs: "1rem" }} position="relative"        sx={{display:{md:"block",xs:"none"},
              border:!isDarkTheme?"2px solid black":"2px solid #f8f8fb",  backgroundImage: "radial-gradient(circle, rgba(4,134,255,0.5), rgba(4,134,255,0))",
              borderRadius: { md: "0.5vw", xs: "0.5rem" }
            }}>
              
     <ResultCard item={item}/>
         </Grid>

         ))} 
      </>
         );
  }
  return (
   <Grid item md={7} xs={11.5} mt={{ md: 0, xs: "1rem" }} sx={{display:{md:"block",xs:"none"}}} position="relative">
      <Swiper
        effect={isMobileView ? "slide" : "coverflow"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        grabCursor
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        spaceBetween={isMobileView ? 20 : isTablet?20:0}
        slidesPerView={isMobileView ? 1 : 1.2}
      >
        {data?.caseStudies?.map((item, index) => (
          <StyledSwiperSlide
            key={item.id || index}
            sx={{
              border: !isDarkTheme?"2px solid black":"2px solid #f8f8fb",
              borderRadius: { md: "0.5vw", xs: "0.5rem" }
            }}
          >
     <ResultCard item={item}/>
   
          </StyledSwiperSlide>
        ))}
      </Swiper>

      <Box display="flex" justifyContent="center" alignItems="center" mt="4%">
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <CustomPrevArrow swiperRef={swiperRef} disabled={swiperState.isBeginning} EmpoweringBusiness={data?.title} />
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          {data?.caseStudies?.map((_, index) => (
            <IconButton
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                swiperRef.current?.slideToLoop(index);
                setActiveIndex(index);
              }}
            >
              {activeIndex === index ? (
                <SquareRoundedIcon sx={{ color: "#0486ff", fontSize: { md: "0.8vw", xs: "0.7rem" } }} />
              ) : (
                <CropSquareIcon sx={{ color: "#b2b2b3ff", fontSize: { md: "0.8vw", xs: "0.7rem" } }} />
              )}
            </IconButton>
          ))}
        </Box>

        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} EmpoweringBusiness={data?.title} />
        </Box>
      </Box>
    </Grid>
  );
};

export default EmpoweringBusinessCSR;
