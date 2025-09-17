"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { usePathname } from "next/navigation";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import { MediaQuery } from "./MediaQuerry";
import { useSwiper } from "../UseSwiper/UseSwiper";
import Link from "next/link";

const OurOutSourceBlackishCSR = ({ data }) => {
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const { swiperRef, handleSlideChange, swiperState, isClient } = useSwiper();
  const showArrows = data?.elements?.length > 3;
  const slidesPerView = isSmallMobile || isBigMobile ? 1 : isTablet ? 2 : 3;
  const spaceBetween = isTablet ? 20 : 30;

  const slideSx = {
    backgroundColor: "#3F3C39",
    p: { md: "2vw", xs: "1.5rem" },
    borderRadius: { md: "0.45vw", xs: "0.45rem" },
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    transition: "background 0.4s ease-in-out",
    "&:hover": {
      backgroundImage:
        "radial-gradient(circle, rgba(4, 134, 255, 0.82) 0%, rgba(4,134,255,0) 100%)",
    },
  };

 const renderCard = (card, idx) => {
  const CardContent = (
    <Box
      className="OurOutSourceBlackish"
      sx={{ ...slideSx, width: "100%", flex: 1 }}
    >
      <Typography
        variant={card?.headingType?.title?.toLowerCase() || "h4"}
        mt="5%"
        mb="2%"
        className="whiteColor"
        sx={{ minHeight: { md: "3vw", xs: "3rem" } }}
      >
        {card.title}
      </Typography>

      <Typography
        variant="body1"
        className="whiteColor"
        dangerouslySetInnerHTML={{ __html: card.shortDescription }}
        sx={{
          "& li": {
            listStyleType: "square",
            listStylePosition: "outside",
          },
          "& li::marker": {
            color: "#0486ff",
            fontSize: { md: "1vw", xs: "1rem" },
          },
          "& *": {
            color: "#FFF !important",
            WebkitTextFillColor: "#FFF !important",
          },
        }}
      />
    </Box>
  );

  return card.ctaLnik ? (
    <Link href={`/${card.ctaLnik}`} key={idx}>
      {CardContent}
    </Link>
  ) : (
    <React.Fragment key={idx}>{CardContent}</React.Fragment>
  );
};


  return (
    <Grid
      container
      item
      md={10}
      sm={10.5}
      xs={11}
      mb={{ md: 0, xs: "2rem" }}
      alignItems="center"
      justifyContent="center"
      sx={{ display: { md: "flex", xs: "block" } }}
    >
      {/* Desktop Arrows - Left */}
      {showArrows && (
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <CustomPrevArrow swiperRef={swiperRef} disabled={swiperState.isBeginning} OurOutSourceBlackish="OurOutSourceBlackish" />
        </Box>
      )}
      <Box sx={{ width: { md: showArrows ? "90%" : "100%", xs: "100%" }, m: "auto" }}>
        {!isClient ? (
          <Box sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
            gap: "1.5rem",
            alignItems: "stretch",
          }}>
            {data?.elements.slice(0, 3)?.map(renderCard)}
          </Box>
        ) : (
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
            grabCursor
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {data?.elements?.map((card, idx) => (
              <SwiperSlide key={idx} style={{ display: "flex", height: "auto" }}>
                <Box sx={{width:"100%"}}>{renderCard(card, idx)}</Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>
      {showArrows && (
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} OurOutSourceBlackish="OurOutSourceBlackish" />
        </Box>
      )}
      <Box sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center", mt: "1rem" }}>
        <CustomPrevArrow swiperRef={swiperRef} disabled={swiperState.isBeginning} OurOutSourceBlackish="OurOutSourceBlackish" />
        <CustomNextArrow swiperRef={swiperRef} disabled={swiperState.isEnd} OurOutSourceBlackish="OurOutSourceBlackish" />
      </Box>
    </Grid>
  );
};

export default OurOutSourceBlackishCSR;
