"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import { MediaQuery } from "./MediaQuerry";
import { useSwiper } from '../UseSwiper/UseSwiper';
import { useRouter } from "next/navigation";

const OutsourceServiceOverviewCSR = ({ data }) => {
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const { swiperRef, handleSlideChange, swiperState, isClient } = useSwiper();
 const router=useRouter();
  const slidesToShow = isSmallMobile || isBigMobile ? 1 : isTablet ? 2 : 3;
  const isArrowVisible = data?.elements?.length > 3;

  const descriptionStyles = {
    "& li": {
      listStyleType: "square",
      listStylePosition: "outside",
    },
    "& li::marker": {
      color: "#0486ff",
      fontSize: { md: "1vw", xs: "1rem" },
    },
    '& *': {
      color: '#FFF !important',
      WebkitTextFillColor: '#FFF !important',
    },
    textAlign: "left",
  };

  const cardStyles = {
    p: { md: "1vw", xs: "0.8rem" },
    height: "100%", flex: 1,
    borderRadius: { md: "1vw", xs: "0.8rem" },
  };

  const RenderCard = ({ card }) => (
    <Box className="OutsourceServiceOverview1" sx={{ height: "100%" }}>
      <Box sx={cardStyles}>
        <Typography
          className="whiteColor"
          variant={card?.headingType?.title?.toLowerCase()}
          sx={{ height: { md: "3vw", xs: "3rem" } }}
        >
          {card?.title}
        </Typography>
        <Typography
          variant="body1"
          className="whiteColor"
          sx={descriptionStyles}
          dangerouslySetInnerHTML={{
            __html: card?.shortDescription,
          }}
        />
      </Box>
    </Box>
  )
  return (
    <>
      {/* Arrows (Desktop Only - Top Right) */}
      {isArrowVisible && (
        <Grid
          item
          md={11.5}
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            justifyContent: "flex-end",
            mt: "-12%",
          }}
        >
          <CustomPrevArrow swiperRef={swiperRef} disabled={swiperState.isBeginning} OutsourceServiceOverview={data?.title} />
          <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} OutsourceServiceOverview={data?.title} />
        </Grid>
      )}

      {/* Main Swiper */}
      <Grid item md={11.5} xs={11.5} sm={11.5} >
        {isClient ? (
          <Swiper
            spaceBetween={isTablet || isSmallMobile || isBigMobile ? 20 : "1%"}
            slidesPerView={slidesToShow}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
            grabCursor={isArrowVisible} style={{ height: "100%" }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {data?.elements?.map((card, index) => (
              card.ctaLnik ? (<SwiperSlide onClick={()=>router.push(`${card.ctaLnik}`)} key={index} style={{
                borderRight: index !== data.elements.length - 1 ? "0.15vw solid white" : "none",
                minHeight: { md: "18vw", xs: "18rem" },
                maxHeight: { md: "22vw", xs: "22rem" },
                height: "auto",cursor:"pointer",
                overflow: "hidden",
              }}>
                <RenderCard card={card} />
              </SwiperSlide>) : (<SwiperSlide key={index} style={{
                borderRight: index !== data.elements.length - 1 ? "0.15vw solid white" : "none",
                minHeight: { md: "18vw", xs: "18rem" },
                maxHeight: { md: "22vw", xs: "22rem" },
                height: "auto",
                overflow: "hidden",
              }}>
                <RenderCard card={card} />
              </SwiperSlide>)
            ))}
          </Swiper>
        ) : (<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", columnGap: "1%" }} className="OurOutSourceBlackish">
          {data?.elements?.map((card, index) => (

             card.ctaLnik ? (<Box onClick={()=>router.push(`${card.ctaLnik}`)} key={index} sx={{
              width: { md: "32.33%", xs: "98%", sm: "48%" },
              borderRight: index !== data.elements.length - 1 ? "0.15vw solid white" : "none",
              minHeight: { md: "18vw", xs: "18rem" },
              maxHeight: { md: "22vw", xs: "22rem" },
              height: "auto",cursor:"pointer",
              overflow: "hidden",
            }}>
              <RenderCard card={card} />
            </Box>) : (<Box key={index} sx={{
              width: { md: "32.33%", xs: "98%", sm: "48%" },
              borderRight: index !== data.elements.length - 1 ? "0.15vw solid white" : "none",
              minHeight: { md: "18vw", xs: "18rem" },
              maxHeight: { md: "22vw", xs: "22rem" },
              height: "auto",
              overflow: "hidden",
            }}>
              <RenderCard card={card} />
            </Box>)
            
          ))}
        </Box>


        )}

      </Grid>

      {/* Arrows (Mobile Only - Bottom Center) */}
      {isArrowVisible && (
        <Grid
          item
          md={12}
          sx={{
            display: { md: "none", xs: "flex" },
            alignItems: "center",
            justifyContent: "center",
            mt: "-2%",
            columnGap: "2%",
          }}
        >
          <CustomPrevArrow swiperRef={swiperRef} disabled={swiperState.isBeginning} OutsourceServiceOverview={data?.title} />
          <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} OutsourceServiceOverview={data?.title} />
        </Grid>
      )}
    </>
  );
};

export default OutsourceServiceOverviewCSR;
