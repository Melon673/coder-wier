"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import stripHtml from "../stripHtml";
import { MediaQuery } from "./MediaQuerry";
import { useSwiper } from "../UseSwiper/UseSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HireDevOpsDeveloperCSR = ({ data,isDarkTheme }) => {
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const {
    swiperRef,
    handleSlideChange,
    setActiveIndex,
    activeIndex
  } = useSwiper();

  const renderNavDots = () => (
    <Box sx={{ display: "flex", columnGap: { md: "0.5vw", xs: "0.5rem" }, width: "100%" }}>
      {data?.elements?.map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <Box
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            sx={{
              width: { md: isActive ? "2.5vw" : "0.5vw", xs: isActive ? "2.5rem" : "0.5rem" },
              height: { md: "0.5vw", xs: "0.5rem" },
              borderRadius: { md: isActive ? "1vw" : "50%", xs: isActive ? "1rem" : "50%" },
              backgroundColor: isActive ? "#297eff" : isDarkTheme?"#fff":"black" ,
              transition: "all 0.6s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: isActive ? "#297eff" : isDarkTheme? "#aaa":"#3f3c39",
              }
            }}
          />
        );
      })}
    </Box>
  );

  const renderArrowControls = () => (
    <Box sx={{ display: "flex", columnGap: { md: "0.5vw", xs: "0.5rem" } }}>
      {[{
        icon: <ArrowBackIcon sx={{ fontSize: { md: "1vw", xs: "1rem" } }} />,
        action: () => {
          const total = data?.elements?.length || 0;
          const prev = activeIndex === 0 ? total - 1 : activeIndex - 1;
          swiperRef.current?.slideTo(prev);
        }
      }, {
        icon: <ArrowForwardIcon sx={{ fontSize: { md: "1vw", xs: "1rem" } }} />,
        action: () => {
          const total = data?.elements?.length || 0;
          const next = activeIndex === total - 1 ? 0 : activeIndex + 1;
          swiperRef.current?.slideTo(next);
        }
      }].map((btn, idx) => (
        <Box
          key={idx}
          onClick={btn.action}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { md: "0.5vw", xs: "0.5rem" },
            width: { md: "2.5vw", xs: "2.5rem" },
            height: { md: "2.5vw", xs: "2.5rem" },
            borderRadius: "50%",
            zIndex: 1,
            color: isDarkTheme?"#9b9b9e": "black",
            cursor: "pointer",
            bgcolor:isDarkTheme?"#333339": "#fff",
            "&:hover": {
            bgcolor:isDarkTheme?"#333339": "#fff",
            },
          }}
        >
          {btn.icon}
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      {/* Left Swiper Column */}
      <Grid item md={3} xs={11.5} sx={{
        order: { xs: 3, md: 0 },
        borderRight: { md: isDarkTheme?"0.01vw solid #a1a1a2":"0.01vw solid #fff", xs: "transparent" },
        pr: "1.8%", py: "2%"
      }}>
        <Swiper
          spaceBetween={isTablet || isSmallMobile || isBigMobile ? 20 : "1%"}
          slidesPerView={1}
          allowTouchMove={false}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1000}
          grabCursor={false}
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {data?.elements?.map((item, index) => (
            <SwiperSlide key={index} style={{textAlign:"left"}}>
              <Typography variant="body1" className={isDarkTheme?"whiteColor":"greyColor"} sx={{ fontSize: { md: "3vw", xs: "3rem" } }}>
                0{index + 1}.
              </Typography>
              <Typography
                variant={item?.headingType?.title?.toLowerCase()}
                className={isDarkTheme?"whiteColor":"blackColor"}
                my="1%"
                sx={{ height: { md: "3.5vw", xs: "auto" } }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" textAlign="left" className={isDarkTheme?"whiteColor":"blackColor"}>
                {stripHtml(item?.shortDescription)}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dot + Arrow Controls */}
        <Box sx={{
          display: "flex",
          alignItems: "center",
          columnGap: { md: "1vw", xs: "1rem" },
          ml: { md: 0, xs: "1rem" },
          mt: { md: 0, xs: "1rem" }
        }}>
          {renderNavDots()}
          {renderArrowControls()}
        </Box>
      </Grid>

      {/* Right Button Stack Column */}
      <Grid item md={8.4} xs={11.5} py={{ md: "4%", xs: "1rem" }} mt={{ md: "10%", xs: 0 }} pl={{ md: "1.8%", xs: 0 }} overflow={{ md: "inherit", xs: "hidden" }}>
        {data?.elements?.map((item, index) => {
          const isSelected = activeIndex === index;
          const isOdd = index % 2 === 1;

          const buttonStyles = {
            bgcolor: isSelected ? "#0486ff" : "#a1a1a2",
            borderRadius: { md: "0.8vw", xs: "0.8rem" },
            fontSize: { md: "0.8vw", xs: "0.6rem" },
            width: { md: "55%", xs: "45%" },
            color: "white",
            zIndex: isOdd ? 2 : 1,
            transition: "all 0.8s ease-in-out",
            "&:hover": {
              bgcolor: isSelected ? "#0486ff" : "#333339",
            },
          };

          const boxStyles = {
            border: `0.15${isSmallMobile ? "rem" : "vw"} dashed ${isSelected ? "#0486ff" : "#a1a1a2"}`,
            width: { md: "34%", sm: "30%", xs: "25%" },
            transition: "all 0.8s ease-in-out"
          };

          return (
            <Grid container key={index} sx={{
              flexDirection: { md: isOdd ? "row-reverse" : "row", xs: "row" },
              justifyContent: { md: "flex-start", xs: "center" },
              alignItems: "center",
              position: "relative",
              mb: { md: "-4.1vw", xs: "0" }
            }}>
              {/* Button + Box */}
              <Grid item md={5} xs={12} sx={{
                mt: { md: 0, xs: "1rem", sm: "2rem" },
                display: "flex",
                position: "relative",
                flexDirection: { md: isOdd ? "row-reverse" : "row", xs: "row" },
                justifyContent: { md: isOdd ? "flex-end" : "flex-start", xs: "flex-start" },
                alignItems: "center",
                transform: { md: "translateY(1.5vw)", xs: "inherit" }
              }}
                onMouseOver={() => {
                  setActiveIndex(index);
                  swiperRef.current?.slideTo(index);
                }}
              >
                <Button sx={buttonStyles}>
                  {item.title.slice(0, isTablet ? 40 : 20)}...
                </Button>
                <Box sx={boxStyles}></Box>
              </Grid>

              {/* 3D Shape */}
              <Grid item md={1} xs={1} position="absolute" sx={{ left: { md: "38%", sm: "78%", xs: "75%" }, top: { md: 0, sm: 0, xs: "-1rem" } }}>
                <svg
                  width={isBigMobile || isSmallMobile ? "100" : isTablet ? "150" : "260"}
                  height="99"
                  viewBox="0 0 260 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ zIndex: 2, position: "relative", transition: "all 0.8s ease-in-out" }}
                >
                  <g opacity="0.95">
                    <path
                      d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                      fill={isSelected ? "#2A64FF" : "#3A3A3F"}
                      style={{ transition: "fill 0.8s ease-in-out" }}
                    />
                    <path
                      d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                      fill={isSelected ? "#1E4FCC" : "#2E2E33"}
                      style={{ transition: "fill 0.8s ease-in-out" }}
                    />
                    <path
                      d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                      fill={isSelected ? "#103FAD" : "#1F1F22"}
                      style={{ transition: "fill 0.8s ease-in-out" }}
                    />
                  </g>
                </svg>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default HireDevOpsDeveloperCSR;
