"use client";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import stripHtml from "../stripHtml";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaQuery } from "@/utils/MainPage/MediaQuerry";
import { useSwiper } from "@/utils/UseSwiper/UseSwiper";
import {
  CustomNextArrow,
  CustomPrevArrow,
} from "@/utils/UseSwiper/CustomArrows";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
const TestimonialsCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const { swiperRef, handleSlideChange, swiperState, activeIndex, setActiveIndex, setHoveredIndex } = useSwiper();
  return (
    <>
      <Grid
        item
        md={7}
        xs={11.5}
        sm={11.5}
        my={{ md: "2%", xs: "1rem" }}
        sx={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
          p: { md: "2%", xs: "1.5rem" },
          borderRadius: { md: "0.8vw", xs: "0.8rem" },
        }}
      >
        <Swiper
          spaceBetween={isTablet || isSmallMobile || isBigMobile ? 20 : "10%"}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000} grabCursor={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {data?.sectionTestimonials?.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{
                overflow: "visible",
                display: isSmallMobile || isBigMobile ? "block" : "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ userSelect: "none" }}
                width={{ md: "70%", xs: "100%", sm: "70%" }}
                display={{ md: "block", xs: "none", sm: "block" }}
              >
                <Typography
                  variant="h4"
                  className="greyColor"
                  fontWeight={"bold"}
                >
                  FeedBack Summary
                </Typography>
                <Typography variant="body1" my={"2%"}>
                  {`"${stripHtml(
                    item?.testimonial?.description ||
                    item?.testimonial?.shortDescription
                  )
                    }"`}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold !Important" }}
                  my={"1%"}
                >
                  {item?.testimonial?.clientName}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold !Important" }}>
                  {item?.testimonial?.projectName || "No projectName"}
                </Typography>
              </Box>
              <Box sx={{ display: { md: "none", xs: "block", sm: "none" } }}>
                <Typography
                  variant="h4"
                  className="greyColor"
                  fontWeight={"bold"}
                >
                  FeedBack Summary
                </Typography>
                <Typography variant="body1" my={"2%"}>
                  {`"${stripHtml(
                    item?.testimonial?.description ||
                    item?.testimonial?.shortDescription
                  ) 
                    }"`}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "2rem" }}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold !Important" }}
                      my={"1%"}
                    >
                      {item?.testimonial?.clientName}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold !Important" }}
                    >
                      {item?.testimonial?.projectName || "No projectName"}
                    </Typography>
                  </Box>
                  <Avatar
                    src={
                      item?.testimonial?.image
                        ? `${imgLink}${item.testimonial.image}`
                        : "/Assets/NOimg.webp"
                    }
                    alt={item?.imageAltText}
                    variant="square"
                    sx={{
                      width: "5rem",
                      borderRadius: "0.8rem",
                      height: "5rem",
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: { md: "block", xs: "none", sm: "block" },
                  width: { md: "10vw", xs: "10rem" },
                  height: { md: "10vw", xs: "10rem" },
                  borderRadius: { md: "0.8vw", xs: "0.8rem" },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src={
                    item?.testimonial?.image
                      ? `${imgLink}${item.testimonial.image}`
                      : "/Assets/NOimg.webp"
                  }
                  alt={item?.imageAltText || "Image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box
          sx={{
            display: { md: "flex", xs: "none", sm: "flex" },
            alignItems: "center",
            columnGap: "1%",
            mt: "4%",
          }}
        >
          <CustomPrevArrow
            swiperRef={swiperRef}
            testimonial={data?.title}
            disabled={swiperState.isBeginning}
          />

          {data?.sectionTestimonials?.map((item, index) => (
            <Avatar
              key={index}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideTo(index);
                }
              }}
              src={
                item?.testimonial?.image
                  ? `${imgLink}${item.testimonial.image}`
                  : "/Assets/NOimg.webp"
              }
              alt={"testimonial-thumbnail"}
              variant="square"
              sx={{
                cursor: "pointer",
                width: { md: "3vw", xs: "3rem" },
                height: { md: "3vw", xs: "3rem" },
                borderRadius: "50%",
                border:
                  activeIndex === index
                    ? "2px solid #0486ff"
                    : "2px solid transparent",
                opacity: activeIndex === index ? "1" : "0.4",
              }}
            />
          ))}
          <CustomNextArrow
            testimonial={data?.title}
            swiperRef={swiperRef}
            disabled={swiperState.isEnd}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sx={{
        display: { md: "none", xs: "flex", sm: "none" },
        alignItems: "center", justifyContent: "center",
        columnGap: "1%",
      }}>

        <CustomPrevArrow
          swiperRef={swiperRef}
          testimonial={data?.title}
          disabled={swiperState.isBeginning}
        />

        {data?.sectionTestimonials?.map((_, index) => (
          <IconButton
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              swiperRef.current?.slideToLoop(index);
              setActiveIndex(index);
            }}
          >
            {activeIndex === index ? <SquareRoundedIcon sx={{ color: "#0486ff", fontSize: { md: "0.7vw", xs: "0.7rem" }, }} /> : <CropSquareIcon sx={{ color: "#0486ff", fontSize: { md: "0.8vw", xs: "0.7rem" }, }} />}

          </IconButton>
        ))}
        <CustomNextArrow
          testimonial={data?.title}
          swiperRef={swiperRef}
          disabled={swiperState.isEnd}
        />
      </Grid>
    </>
  );
};

export default TestimonialsCSR;
