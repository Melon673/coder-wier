"use client";
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

import stripHtml from '@/utils/stripHtml';
import { CustomNextArrow, CustomPrevArrow } from '@/utils/UseSwiper/CustomArrows';
import { MediaQuery } from '@/utils/MainPage/MediaQuerry';
import { useSwiper } from '@/utils/UseSwiper/UseSwiper';
import { useRouter } from 'next/navigation';

const ExpertQAServicesTestingHover = ({ data ,index}) => {
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const { swiperRef, handleSlideChange, swiperState,isClient } = useSwiper();
  const id = `${data?.idForfrontendUse || "ExpertQAServicesTestingHover"}-${index}`;
 const Router=useRouter();
  const slidesPerView = isSmallMobile || isBigMobile ? 1 : isTablet ? 2 : 3;
  const spaceBetween = isTablet || isSmallMobile || isBigMobile ? 20 : "1%";
const RenderCard=({index,item})=>(
    <Box
                className="ExpertQAServicesTestingHover"
                sx={{
                  width: "100%",
                  mb: { md: "0%", xs: "1rem" },
                  p: { md: "1.5vw", xs: "1.5rem" },
                  backgroundColor: "#F4FAFF",
                  border: "2px solid #0486ff",
                  boxShadow: `
                    inset 0px 30px 60px -12px rgba(244, 250, 255, 0.25),
                    inset 0px 18px 36px -18px rgba(244, 250, 255, 0.30)
                  `,
                  transition: "all 0.3s ease-in-out",
                  borderRadius: { md: "0.5vw", xs: "0.5rem" },
                  cursor: "grab",
                  userSelect: "none",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "#0486FF",
                    color: "#FFF",
                    "& *": {
                      color: "#FFF !important",
                    },
                  },
                }}
              >
                <Typography
                  variant="body1"
                  className="whitehoverColor"
                  sx={{
                    fontSize: { md: "4vw", xs: "3rem" },
                    lineHeight: "130% !important",
                  }}
                >
                  0{index + 1}
                </Typography>

                <Typography
                  variant={item?.headingType?.title?.toLowerCase() || "h5"}
                  className="whitehoverColor"
                  sx={{ height: { md: "4vw", xs: "4rem" } }}
                >
                  {stripHtml(item?.title)}
                </Typography>

                <Box
                  dangerouslySetInnerHTML={{
                    __html: item?.shortDescription,
                  }}
                />
              </Box>
)
  return (
    <Grid
      container
      id={id}
      justifyContent="center"
      textAlign="left"
      position="relative"
      my={{ md: "4.2%", xs: "3.63rem" }}
    >
      {/* Section Heading */}
      <Grid item md={10} xs={11.5}>
        <Typography variant={data?.headingType?.title?.toLowerCase() || "h2"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
          {data?.title}
        </Typography>

        {/* Description + Desktop Arrows */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="body1"
            sx={{ width: { md: "60vw", xs: "auto" } }}
          >
            {stripHtml(data?.description) || stripHtml(data?.subTitle)}
          </Typography>

          <Box sx={{ display: { md: "flex", xs: "none" }, columnGap: "2%" }}>
            <CustomPrevArrow
              swiperRef={swiperRef}
              disabled={swiperState.isBeginning}
              ExpertQAServicesTesting={data?.title}
            />
            <CustomNextArrow
              swiperRef={swiperRef}
              disabled={swiperState.isEnd}
              ExpertQAServicesTesting={data?.title}
            />
          </Box>
        </Box>
      </Grid>

      {/* Swiper Section */}
      <Grid item md={10} sm={11.5} xs={11.5} mt="2%">
        {isClient?(   <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          grabCursor
          speed={1000}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          style={{ height: "100%" }}
        >
          {data?.elements?.map((item, index) => (
            
                   item.ctaLnik ?( <SwiperSlide onClick={()=>Router.push(`/${item.ctaLnik}`)} key={index} style={{ display: "flex", height: "auto",cursor:"pointer" }}>
            <RenderCard index={index} item={item}/>
            </SwiperSlide>):( <SwiperSlide key={index} style={{ display: "flex", height: "auto" }}>
            <RenderCard index={index} item={item}/>
            </SwiperSlide>)
          ))}
        </Swiper>
        ):(
 <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",columnGap:"1%"}}>
           {data?.elements.slice(0,3)?.map((item, index) => (
            
             item.ctaLnik ?( <Box  onClick={()=>Router.push(`/${item.ctaLnik}`)} key={index} sx={{cursor:"pointer", display: "flex", height: "auto",width:{md:"32.33%",xs:"98%",sm:"48%"} }}>
            <RenderCard index={index} item={item}/>
            </Box>):(<Box key={index} sx={{ display: "flex", height: "auto",width:{md:"32.33%",xs:"98%",sm:"48%"} }}>
            <RenderCard index={index} item={item}/>
            </Box>)
          ))}
        </Box>
        )}
    

        {/* Arrows for Mobile */}
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            justifyContent: "center",
            columnGap: "2%",
          }}
        >
          <CustomPrevArrow
            swiperRef={swiperRef}
            disabled={swiperState.isBeginning}
            ExpertQAServicesTesting={data?.title}
          />
          <CustomNextArrow
            swiperRef={swiperRef}
            disabled={swiperState.isEnd}
            ExpertQAServicesTesting={data?.title}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExpertQAServicesTestingHover;
