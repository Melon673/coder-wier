"use client";
import React from "react";
import {
  Grid,
  CardMedia,
  Card,
  CardActions,
  Button,
  useMediaQuery,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useSwiper } from "../UseSwiper/UseSwiper";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import Link from "next/link";

const RecentWorkSwiperCSR = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const { swiperRef, handleSlideChange } = useSwiper();

  const renderArrow = (direction) => (
    <IconButton
      onClick={() =>
        swiperRef.current &&
        (direction === "prev"
          ? swiperRef.current.slidePrev()
          : swiperRef.current.slideNext())
      }
      className={`custom-${direction}`}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        [direction === "prev" ? "left" : "right"]: { md: "4%", xs: "2%" },
        zIndex: 999,
        backgroundColor: "#0486FF",
        color: "white",
        "&:hover": { backgroundColor: "#036bcc" },
      }}
    >
      {direction === "prev" ? <ArrowBack /> : <ArrowForward />}
    </IconButton>
  );

  return (
    <>
      {/* Navigation Arrows */}
      <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
        {renderArrow("prev")}
        {renderArrow("next")}
      </Box>

      {/* Swiper Grid */}
      <Grid item xs={12} md={10} mx="auto" mt={3}>
        <Swiper
          effect="coverflow"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          grabCursor
          loop
          spaceBetween={isMobile ? 20 : 0}
          slidesPerView={isMobile ? 1 : 4}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
        >
          {data?.cardData?.map((item, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: { md: "18.124vw", xs: "100%" },
                  transition: "background-color 0.3s ease",
                  ":hover": {
                    backgroundColor: "#0486FF",
                    "& .buttons": { color: "white" },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "100%", objectFit: "cover" }}
                  image={item.imageSrc}
                  title={item.title}
                />
                <CardActions>
      {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </>
  );
};

export default RecentWorkSwiperCSR;
