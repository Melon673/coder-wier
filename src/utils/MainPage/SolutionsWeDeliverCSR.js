"use client";
import {Box, Grid, IconButton, Typography } from "@mui/material";
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import { MediaQuery } from "./MediaQuerry";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSwiper } from "../UseSwiper/UseSwiper";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SolutionsWeDeliverCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const {
    swiperRef,
    handleSlideChange,
    swiperState,isClient,setHoveredIndex,hoveredIndex
  } = useSwiper();

const router=useRouter();

  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();

  const formatDescription = (html) => {
    if (!html) return "";
    return html
      .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, '')
      .replace(/●/g, `<span style="display:inline-block;width:8px;height:8px;background:#007bff;margin-right:8px;"></span>`);
  };

  const slidesPerView = isSmallMobile || isBigMobile ? 1 : isTablet ? 2 : 3.5;
  const spaceBetween = isSmallMobile || isBigMobile || isTablet ? "1%" : "20vw";

  const RenderCard = ({ card,index }) => (
    <Box 
      className="SolutionsWeDeliverCSR"
      sx={{
        mt: "2%",
        background: "#3F3C39",
        borderRadius: { md: "0.45vw", xs: "0.43rem" },
        p: { md: "2vw", xs: "1.5rem" },
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        pointerEvents: "auto",
        cursor: "grab",
        transition: "background 0.4s ease-in-out",
        "&:hover": {
          backgroundImage:
            "radial-gradient(circle, rgba(4, 134, 255, 0.82) 0%, rgba(4,134,255,0) 100%)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "left", xs: "center" },
          mt: "6%",
        }}
      >
        <Box
          sx={{
            width: { xs: "3rem", md: "3vw" },
            height: { md: "3vw", xs: "3rem" },
            bgcolor: "white",
            borderRadius: { md: "0.3vw", xs: "0.3rem" },
            padding: { md: "2%", xs: "2%" },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={`${imgLink}${card?.image || "/Assets/NOimg.webp"}`}
            alt={card?.imageAltText || "Image"}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>

      <Typography
        variant={card?.headingType?.title?.toLowerCase()}
        my={{ md: "3%", xs: "1rem" }}
        className={"whiteColor"}
        sx={{
          height: { md: "2.7vw", xs: "auto" },
        }}
      >
        {card?.title}
      </Typography>

      <Box
        sx={{
          mt: "2%",
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
        }}
      >
        <Typography
          variant="body1"
          className="whiteColor"
          dangerouslySetInnerHTML={{
            __html: formatDescription(card?.shortDescription),
          }}
        />
      </Box>
      {hoveredIndex===index && card.ctaLnik && 
       <Link href={`/${card.ctaLnik}`} style={{position:"absolute",bottom:"4%",right:"4%"}}>
        <ArrowForwardIcon sx={{color:"#0486ff",fontSize:{md:"1.5vw",xs:"1.5rem"}}}/>
       </Link>
       }
    </Box>
  );

  return (
    <>
      <Grid item md={10} xs={11.5} sx={{ position: "relative" }}>
        {/* Top Info + Arrows */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",position:"absolute",top:"-20%",right:0 }}>
          <Box
            sx={{
              display: {
                md: data?.elements?.length > 4 ? "flex" : "none",
                xs: "none",
              },
              columnGap: "2%",
            }}
          >
            <CustomPrevArrow
              swiperRef={swiperRef}
              disabled={swiperState.isBeginning}
              SolutionsWeDeliverCSR={data?.title}
            />
            <CustomNextArrow
              swiperRef={swiperRef}
              disabled={swiperState.isEnd}
              SolutionsWeDeliverCSR={data?.title}
            />
          </Box>
        </Box>

        {/* Swiper */}
        {isClient ? (
          <Swiper
            spaceBetween={spaceBetween}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
            slidesPerView={slidesPerView}
        grabCursor={data?.elements?.length > 4 ? true : false}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={handleSlideChange}      
            className="customSwiper"
          >
            {data?.elements?.map((card, index) => (
              card.ctaLnik ?( <SwiperSlide  onClick={()=>router.push(`/${card.ctaLnik}`)} onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} key={index} style={{ display: 'flex',cursor:"pointer", height: 'auto' ,position:"relative"}}>
                <RenderCard  card={card} index={index} />
              </SwiperSlide>):( <SwiperSlide    onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)} key={index} style={{ display: 'flex', height: 'auto' ,position:"relative"}}>
                <RenderCard  card={card} index={index} />
              </SwiperSlide>)
             
            ))}
          </Swiper>
        ) : (
          <Box sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(3, 1fr)", xs: "1fr" },
            gap: "1.5rem",
            alignItems: "stretch",
          }}>
            {data?.elements.slice(0, 3)?.map((card, index) => (
                     card.ctaLnik ?(  <Box onClick={()=>router.push(`/${card.ctaLnik}`)} key={index} sx={{ display: 'flex', height: '100%', flex: 1,position:"relative",cursor:"pointer" }} onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)}>
                <RenderCard card={card} index={index}/>
              </Box>):(  <Box key={index} sx={{ display: 'flex', height: '100%', flex: 1,position:"relative" }} onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)}>
                <RenderCard card={card} index={index}/>
              </Box>)   
            ))}
          </Box>
        )}
      </Grid>

      {/* Arrows for mobile */}
      <Box
        sx={{
          columnGap: "2%",
          justifyContent: "center",
          alignItems: "center",
          mt: "2.3rem",
          display: {
            md: "none",
            xs: "flex",
          },
        }}
      >
        <CustomPrevArrow
          swiperRef={swiperRef}
          disabled={swiperState.isBeginning}
          SolutionsWeDeliverCSR={data?.title}
        />
        <CustomNextArrow
          swiperRef={swiperRef}
          disabled={swiperState.isEnd}
          SolutionsWeDeliverCSR={data?.title}
        />
      </Box>
    </>
  );
};

export default SolutionsWeDeliverCSR;
