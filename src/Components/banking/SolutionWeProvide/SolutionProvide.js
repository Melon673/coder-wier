"use client";
import React, { useState } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Box,
  CardContent,
  Card,
  Divider,
  Button,
} from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import stripHtml from "@/utils/stripHtml";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaQuery } from "@/utils/MainPage/MediaQuerry";
import { useSwiper } from "@/utils/UseSwiper/UseSwiper";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "@/utils/UseSwiper/CustomArrows";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Autoplay } from "swiper/modules";
import 'animate.css';
const SolutionCard = ({ item, index, isFirstVisible, isHovered, isMobile, isTablet, expanded, setHoveredIndex, setExpanded, toggleExpand, imgLink, data }) => {
  const showDetails = (!isMobile && isHovered) || (isMobile && isFirstVisible);
  return (
    <Box
      key={index}
      style={{
        width: "100%",
        overflow: "visible",
        display: "flex",
        columnGap: "1%",
      }}
      onMouseEnter={() => {
        if (!isMobile || !isTablet || isFirstVisible) {
          setHoveredIndex(item?.title);
        }
      }}
      onMouseLeave={() => {
        if (!isMobile || !isTablet || isFirstVisible) {
          setHoveredIndex(null);
          setExpanded((prev) => (prev !== null && prev === index ? null : prev));
        }
      }}
    >
      <Box
        className="SolutionProvide"
        sx={{
          p: { md: "2% 2% 0 2%", xs: "0.5rem 0.5rem 0 0.5rem" },
          position: "relative",
          boxShadow: "0px 2px 40px 0px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease-in-out",
          height: { md: "28vw", xs: "28rem" },
          overflow: "visible",
          borderRadius: { md: "0.45vw", xs: "0.45rem" },
          width: "100%",
        }}
      >
        <Avatar
          variant="square"
          sx={{
            width: "20%",
            height: "auto",
            bgcolor: showDetails ? "transparent" : "#0486ff",
            borderRadius: { md: "0.45vw", xs: "0.45rem" },
            padding: "3%",
            zIndex: 20,
            transition: "all 0.8s ease-in-out",
          }}
          src={item?.image ? `${imgLink}${item.image}` : "/CustomwebWhite.png"}
        />

        <Box sx={{ position: "absolute", zIndex: 60, top: "15%" }}>
          <Typography
            className={showDetails ? "whiteColor" : "blackColor"}
            variant={item?.headingType?.title?.toLowerCase()}
            sx={{ height: { md: "auto", xs: "3rem" }, my: "2%", transition: "all 0.8s ease-in-out" }}
          >
            {item?.title}
          </Typography>

          <Box
            sx={{
              overflow:  expanded === index ?"auto":"hidden",
              textOverflow: "ellipsis",
              transition: "all 0.8s ease-in-out",
              maxHeight: {
                md: expanded === index ? "15vw" : "4.9vw",
                xs: expanded === index ? "30rem" : "5.5rem",
              },
              ml: "1%",
              "& *": {
                color: showDetails ? "white !important" : "#222 !important",
              },
            }}
            dangerouslySetInnerHTML={{ __html: item.shortDescription }}
          />
        </Box>

        {showDetails && (
          <>
          {item?.ctaLink && 
            <Link
              className={`whiteColor animate__animated animate__fadeInUp animate__delay-0.8s`}
              href={item?.ctaLink|| "#"}
              style={{
                display: "flex",
                columnGap: "4%",
                zIndex: 40,
                width: "40%",
                bottom: "5%",
                position: "absolute",
                textAlign: "center",
                alignItems: "center",
                transition: "all 1s ease-in-out",
              }}
            >
              View Industry
              <NorthEastIcon sx={{ fontSize: { md: "1vw", xs: "1rem" } }} />
            </Link>
            }

            <Box
              onClick={() => toggleExpand(index)}
              className="animate__animated animate__fadeInUp animate__delay-0.8s"
              sx={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
                display: "flex",
                alignItems: "center",
                zIndex: 60,
                bgcolor: "transparent",
                cursor: "pointer",
                p: "1%",
                color: "#fff",
                transition: "all 1s ease-in-out",
                border: "2px solid white",
                borderRadius: "50%",
                "&:hover": { bgcolor: "#0486ff" },
              }}
            >
              {expanded === index ? (
                <RemoveIcon sx={{ fontSize: { md: "1vw", xs: "1rem" } }} />
              ) : (
                <AddIcon sx={{ fontSize: { md: "1vw", xs: "1rem" } }} />
              )}
            </Box>
          </>
        )}

        <Avatar
          src={item?.image ? `${imgLink}${item.image}` : "/Retail2-01.webp"}
          variant="square"
          sx={{
            position: "absolute",
            left: showDetails ? 0 : "5%",
            bottom: 0,
            width: showDetails ? "100%" : "90%",
            height: {
              md: showDetails ? "100%" : "8vw",
              xs: showDetails ? "100%" : "8rem",
            },
            borderRadius: { md: "0.45vw", xs: "0.45rem" },
            transformOrigin: "center center",
            zIndex: 10,
            transition: "all 0.5s ease-in-out",
            objectFit: "cover",
          }}
        />
      </Box>
  <Divider orientation="horizontal" sx={{ border: "0.1px solid #b2b2b3ff" }} />
    </Box>
  );
};

const SolutionProvide = ({ data,index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
    const id = `${data?.idForfrontendUse || "Solution-Provide"}-${index}`;

  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const {
    swiperRef,
    handleSlideChange,
    swiperState,activeIndex,
    hoveredIndex,
    setHoveredIndex,isClient
  } = useSwiper();
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };
  const isMobile = isSmallMobile || isBigMobile;

  return (
      <Grid
        justifyContent={"center"}
        id={id}
        container
        my={{ md: "4.2%", xs: "3.63rem" }}
        sx={{ position: "relative" }}
      >
        <Grid item md={10} xs={11.5} textAlign={{ md: "left", xs: "center" }}>
          <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
            variant={data?.headingType?.title?.toLowerCase()}
            mb={"1%"}
          >
            {data?.title}
          </Typography>
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

          <Typography variant="body1" width={{md:"60%",xs:"100%"}}>
            {stripHtml(data?.description)}
          </Typography>
               <Box
            sx={{alignItems:"end",justifyContent:"flex-end",
              display: {
                md: data?.elements?.length > 4 ? "flex" : "none",
                xs: "none",
              },
            }}
          >
            <CustomPrevArrow
              swiperRef={swiperRef}
              SolutionProvide={data?.title}
              disabled={swiperState.isBeginning}
            />
            <CustomNextArrow
              SolutionProvide={data?.title}
              swiperRef={swiperRef}
              disabled={swiperState.isEnd}
            />
          </Box>
          </Box>
        </Grid>
 
          <Grid
            item
            md={data?.elements?.length===3?7:10}
            xs={11.5}
            sm={11.5}
            mt={"2%"}
            mb={{ md: 0, xs: "2rem" }} 
          >
            {isClient?(
            <Swiper    spaceBetween={isTablet || isMobile? 20 : "1%"}
              slidesPerView={isMobile ? 1.2 : isTablet ? 2 : data?.elements?.length===3?3:4}
          modules={[ Autoplay]} 
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
              grabCursor={data?.elements?.length > 4 ? true : false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}
>
  {data?.elements?.map((item, index) => {
    const isFirstVisible = index === activeIndex;
    const isHovered = hoveredIndex === item.title;
    return (
      <SwiperSlide key={index}>
        <SolutionCard
          {...{
            item,
            index,
            isFirstVisible,
            isHovered,
            isMobile,
            isTablet,
            expanded,
            hoveredIndex,
            setHoveredIndex,
            setExpanded,
            toggleExpand,
            imgLink,
            data
          }}
        />
      </SwiperSlide>
    );
  })}
</Swiper>):(
<Box sx={{ display: "flex", flexWrap: "wrap", columnGap: "1%" }}>
  {data?.elements?.map((item, index) => {
    const isFirstVisible = index === activeIndex;
    const isHovered = hoveredIndex === item.title;
    return (
      <Box key={index} sx={{ width: data?.elements?.length===3?"32%":"24%" }}>
        <SolutionCard
          {...{
            item,
            index,
            isFirstVisible,
            isHovered,
            isMobile,
            isTablet,
            expanded,
            hoveredIndex,
            setHoveredIndex,
            setExpanded,
            toggleExpand,
            imgLink,
            data
          }}
        />
      </Box>
    );
  })}
</Box>
)}
          
                <Box
              sx={{alignItems:"center",justifyContent:"left",mt:"1rem",
                display: {
                  md: "none",
                  xs: "flex",
                },
              }}
            >
              <CustomPrevArrow
                swiperRef={swiperRef}
                SolutionProvide={data?.title}
                disabled={swiperState.isBeginning}
              />
              <CustomNextArrow
                SolutionProvide={data?.title}
                swiperRef={swiperRef}
                disabled={swiperState.isEnd}
              />
            </Box>
          </Grid>
      </Grid>
  );
};

export default SolutionProvide;
