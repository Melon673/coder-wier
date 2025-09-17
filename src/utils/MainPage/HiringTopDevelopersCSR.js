"use client";
import React, { useEffect, useState } from "react";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import { MediaQuery } from "./MediaQuerry";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import { useSwiper } from "../UseSwiper/UseSwiper";

const HiringTopDevelopersCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK || "";
  const { isBigMobile, isSmallMobile, isTablet } = MediaQuery();
  const { swiperRef, handleSlideChange, swiperState,isClient } = useSwiper();

  const elements = data?.sectionTeams?.map((entry) => ({
    id: entry.id,
    personName: entry.team.fullName,
    personImage: entry.team.image,
    designation: entry.team.designation,
    skills: entry.team.skills?.split(",").map((skill) => skill.trim()),
    experience: entry.team.experience,
    time: entry.team.availableTime,
  }));
  if (!isClient) {
    return (
      <Box display="flex" flexWrap="wrap" columnGap={"1%"} justifyContent="center">
        {elements?.slice(0, 3).map((item, index) => (
          <Box key={index} sx={{width:{md:"32.33%",xs:"98%",sm:"48%"} }}>
        <Box 
              textAlign="center"
              sx={{userSelect:"none",cursor:"grab",
                display: { md: "block", xs: "none", sm: "none" },
                bgcolor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                p: "1vw",
                mb: "1rem",
                borderRadius:{md: "0.5vw",xs:"0.5rem"},
              }}
            >
 <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    height: { md: "8vw", xs: "auto" },
  }}
>
  <Box
    sx={{
      position: "relative",
      width: { md: "40%", xs: "5rem" },
      aspectRatio: "1 / 1",
      borderRadius: { md: "0.8vw", xs: "0.8rem" },
      overflow: "hidden",
      mt: { md: 0, xs: "3vh" },
    }}
  >
    <Image
      src={
        item?.personImage
          ? `${imgLink}${item.personImage}`
          : "/assets/noimg.webp"
      }
      alt={item?.personName || "Person Image"}
      fill
      style={{ objectFit: "cover" }}
    />
  </Box>
</Box>

              <Typography variant="h4" fontWeight={"bold"} my={"2%"}>
                {item.personName}
              </Typography>

              <Typography
                variant="h6" className="blueColor"     sx={{fontSize:"0.7vw",pb:"1%",
                  borderBottom: "0.15vw solid #e6e6e6",
                  fontWeight: "bold !important"
                }}
              >
                {item.designation}
              </Typography>

              <Typography
                variant={isBigMobile || isSmallMobile ? "body1" : "h6"}
                sx={{ fontWeight: "bold !important",}}
              >
                {item.experience}
              </Typography>
              <Box sx={{overflow:"hidden"}}>

              <Box sx={{ height: { md: "7vw", xs: "auto" }, mt: "1%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    px: { md: "0.5vw", xs: "0.2rem" },
                    gap: "0.5vw",
                    justifyContent: "center",
                  }}
                >
                  {item.skills?.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        bgcolor: "#bfbfbf",
                        borderRadius: { md: "0.4vw", xs: "0.4rem" },
                        fontSize: { md: "0.6vw", xs: "0.8rem" },
                        height: { md: "4vh", xs: "3vh" },
                        color: "#e6e6e6",
                      }}
                    />
                  ))}
                </Box>
              </Box>
              </Box>

              <Typography
                variant="body1" className="blueColor"
                sx={{mt:"4%",
                  borderTop: "0.15vw solid #e6e6e6",
                  fontWeight: "bold !important",
                }}
              >
                {item.time}
              </Typography>
            </Box>
            <Box
              sx={{
                display: { md: "none", xs: "flex", sm: "flex" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#FFFDFD",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                p: "1rem",
                height: "100%",
                borderRadius: "0.5rem",
                width: "98%",
                m: "auto auto 1rem auto",
              }}
            >
              <Box
                sx={{ display: "flex", columnGap: "6%", alignItems: "center" }}
              >
                <Box>
                  <Avatar
                    variant="square"
                    src={`${imgLink}${
                      item.personImage || "/assets/noimg.webp"
                    }`}
                    alt={item.personName}
                    sx={{
                      width: "100px",
                      height:
                        item.personName === "MICHEL RICHARD"
                          ? "120px"
                          : "100px",
                      borderRadius: "0.8rem",
                    }}
                  />
                  <Typography
                    variant="h4"
                    textAlign={"center"}
                    mt={"1rem"}
                    className="smallText blueColor"
                    sx={{
                      fontWeight: "bold !important",
                    }}
                  >
                    {item.time}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={"bold"} my={"2%"}>
                    {item.personName}
                  </Typography>

                  <Typography
                    variant="h4"
                    className="smallText blueColor"
                    sx={{
                      borderBottom: "2px solid #e6e6e6",
                      fontWeight: "bold !important",
                    }}
                  >
                    {item.designation}
                  </Typography>
                  <Box
                    sx={{ display: "flex", columnGap: "2%", flexWrap: "wrap" }}
                  >
                    {item.skills?.map((skill, index) => (
                      <Typography
                        variant="body1"
                        width={
                          item.personName === "MICHEL RICHARD" ? "48%" : "auto"
                        }
                        key={index}
                        my={"2%"}
                      >
                        <span style={{ color: "#0486ff" }}>{index + 1}-</span>{" "}
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }
  return (
    <>
      <Box sx={{ display: { md: "none", xs: "flex" } }}>
        <CustomPrevArrow
          swiperRef={swiperRef}
          disabled={swiperState.isBeginning}
          hiringtopdevelopers={data?.title}
        />
        <CustomNextArrow
          swiperRef={swiperRef}
          disabled={swiperState.isEnd}
          hiringtopdevelopers={data?.title}
        />
      </Box>

      <Swiper
        spaceBetween={isBigMobile || isSmallMobile || isTablet ? "0" : "2%"}
        grabCursor={true}
        slidesPerView={isBigMobile || isSmallMobile ? 1 : isTablet ? 1.5 : 2.8}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {elements?.map((item, index) => (
          <SwiperSlide key={index} >
            <Box 
              textAlign="center"
              sx={{userSelect:"none",cursor:"grab",
                display: { md: "block", xs: "none", sm: "none" },
                bgcolor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                p: "1vw",
                mb: "1rem",
                borderRadius:{md: "0.5vw",xs:"0.5rem"},
              }}
            >
 <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    height: { md: "8vw", xs: "auto" },
  }}
>
  <Box
    sx={{
      position: "relative",
      width: { md: "40%", xs: "5rem" },
      aspectRatio: "1 / 1",
      borderRadius: { md: "0.8vw", xs: "0.8rem" },
      overflow: "hidden",
      mt: { md: 0, xs: "3vh" },
    }}
  >
    <Image
      src={
        item?.personImage
          ? `${imgLink}${item.personImage}`
          : "/assets/noimg.webp"
      }
      alt={item?.personName || "Person Image"}
      fill
      style={{ objectFit: "cover" }}
    />
  </Box>
</Box>

              <Typography variant="h4" fontWeight={"bold"} my={"2%"}>
                {item.personName}
              </Typography>

              <Typography
                variant="h6" className="blueColor"     sx={{fontSize:"0.7vw",pb:"1%",
                  borderBottom: "0.15vw solid #e6e6e6",
                  fontWeight: "bold !important"
                }}
              >
                {item.designation}
              </Typography>

              <Typography
                variant={isBigMobile || isSmallMobile ? "body1" : "h6"}
                sx={{ fontWeight: "bold !important",}}
              >
                {item.experience}
              </Typography>
              <Box sx={{overflow:"hidden"}}>

              <Box sx={{ height: { md: "7vw", xs: "auto" }, mt: "1%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    px: { md: "0.5vw", xs: "0.2rem" },
                    gap: "0.5vw",
                    justifyContent: "center",
                  }}
                >
                  {item.skills?.map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      sx={{
                        bgcolor: "#bfbfbf",
                        borderRadius: { md: "0.4vw", xs: "0.4rem" },
                        fontSize: { md: "0.6vw", xs: "0.8rem" },
                        height: { md: "4vh", xs: "3vh" },
                        color: "#e6e6e6",
                      }}
                    />
                  ))}
                </Box>
              </Box>
              </Box>

              <Typography
                variant="body1" className="blueColor"
                sx={{mt:"4%",
                  borderTop: "0.15vw solid #e6e6e6",
                  fontWeight: "bold !important",
                }}
              >
                {item.time}
              </Typography>
            </Box>
<Box
  sx={{
    display: { md: "none", xs: "flex", sm: "flex" },
    flexDirection: "column",
    bgcolor: "#FFFDFD",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    p: "1rem",
    height: {xs:180,sm:230},              // 👈 fixed height so all cards equal
    borderRadius: "0.5rem",
    width: "98%",
    m: "auto auto 1rem auto",
    overflow: "hidden",       // 👈 outer doesn't overflow
  }}
>
  <Box sx={{ display: "flex", columnGap: "6%", alignItems: "stretch", height: "100%" }}>
    {/* Left (avatar + time) stays fixed, no scroll */}
    <Box sx={{ flexShrink: 0 }}>
      <Avatar
        variant="square"
        src={`${imgLink}${item.personImage || "/assets/noimg.webp"}`}
        alt={item.personName}
        sx={{
          width: 100,
          height: item.personName === "MICHEL RICHARD" ? 120 : 100,
          borderRadius: "0.8rem",
        }}
      />
      <Typography
        variant="h4"
        textAlign="center"
        mt="1rem"
        className="smallText blueColor"
        sx={{ fontWeight: "bold !important" }}
      >
        {item.time}
      </Typography>
    </Box>

    {/* Right side scrollable content */}
    <Box
      sx={{
        flex: 1,
        overflowY: "auto",     // 👈 scroll yaha
        pr: "0.5rem",          // scrollbar ke liye thoda padding
      }}
    >
      <Typography variant="h4" fontWeight="bold" my="2%">
        {item.personName}
      </Typography>

      <Typography
        variant="h4"
        className="smallText blueColor"
        sx={{ borderBottom: "2px solid #e6e6e6", fontWeight: "bold !important" }}
      >
        {item.designation || "Designation not found"}
      </Typography>

      <Box sx={{ display: "flex", columnGap: "2%", flexWrap: "wrap" }}>
        {item.skills?.map((skill, index) => (
          <Typography
            variant="body1"
            width={item.personName === "MICHEL RICHARD" ? "48%" : "auto"}
            key={index}
            my="2%"
          >
            <span style={{ color: "#0486ff" }}>{index + 1}-</span> {skill}
          </Typography>
        ))}
      </Box>
    </Box>
  </Box>
</Box>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HiringTopDevelopersCSR;
