"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQuery } from "../MainPage/MediaQuerry";
import { useSwiper } from "../UseSwiper/UseSwiper";
import { CustomNextArrow, CustomPrevArrow } from "../UseSwiper/CustomArrows";
import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import Link from "next/link";

const PricingModalCSR = ({ data }) => {
  const formatDescription = (html) => {
    if (!html) return "";
    return html
      .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, '') // Remove color-specific inline styles
      .replace(/●/g, `<span style="display:inline-block;width:8px;height:8px;background:#007bff;margin-right:8px;"></span>`);
  };

  const useSwipers = data?.elements?.length > 3;

  const PricingCard = ({ item, useSwipers }) => (
    <Box
      className="pricingModal"
      sx={{
        bgcolor: "#f4faff", width: { md: useSwipers ? "90%" : "100%", xs: "100%" },
        p: { md: "2vw", xs: "2rem" },
        borderRadius: { md: "0.45vw", xs: "0.45rem" },
        border: "2px solid #0486ff",
        transition: "all 0.6s ease-in-out",
        height: { md: "100%", xs: "auto" },
        "&:hover": {
          transform: { md: useSwipers ? "inherit" : "scale(1.1)", xs: "inherit" },
        },
      }}
    >
      <Box textAlign="center" mb="2%">
        <Typography variant="h3" mb="1%">
          {item?.subtitle }
        </Typography>
        <Typography variant={item?.headingType?.title?.toLowerCase()}>
          {item?.title }
        </Typography>
      </Box>

      <Box
        sx={{
          my: "2%",
          height: { md: useSwipers ? "68%" : "78%", xs: "50%" },
          "& li": {
            listStyle: "none", 
            position: "relative",
            pl: "1.8em",
            mb: "0.5em",
          },
          "& li::before": {
            content: '"✔"',
            position: "absolute",
            left: 0,
            color: "#0486ff",
            fontSize: { md: "1.1vw", xs: "1.1rem" },
          },
        }}
      >
        <Box
          dangerouslySetInnerHTML={{
            __html: formatDescription(
              item.description || item.shortDescription
            ),
          }}
        />
      </Box>
      <Box sx={{ mt: { md: 0, xs: "4rem" },display:"flex",justifyContent:"center" }}>
    {data?.ctaLnik && data?.ctaText && 
                     <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link> 
                    }     
                     </Box>
    </Box>
  );
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const {
    swiperRef,
    handleSlideChange,
    swiperState, isClient
  } = useSwiper();
  return (
    <>

      {useSwipers ? (
        <>
          <Grid item md={10} xs={11.5} sx={{ display: "flex", alignItems: "center", }}>
            <Box sx={{ display: { md: "block", xs: "none" } }}>

              <CustomPrevArrow
                swiperRef={swiperRef}
                PricingModalCSR={data?.title}
                disabled={swiperState.isBeginning}
              />
            </Box>
            {isClient ? (
              <Swiper
                slidesPerView={isSmallMobile || isBigMobile ? 1 : isTablet ? 2 : 3}
                style={{ height: "100%", cursor: "grab" }}
                grabCursor={true} spaceBetween={isSmallMobile || isBigMobile ? 20 : 0}
                modules={[Autoplay]}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
              >
                {data?.elements?.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      display: "flex", mx: { md: 0, xs: "1.5rem", },
                      justifyContent: "center",
                      padding: { md: "0", xs: "1.5rem" }, py: "2vw",
                    }}
                  >
                    <PricingCard item={item} useSwipers={true} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (<Box sx={{ display: "flex", flexWrap: 'wrap', columnGap: "2%" }}>
              {data?.elements.slice(0, 3)?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: { md: "31.33%", xs: "98%", sm: "48%" },
                    display: "flex", mx: { md: 0, xs: "1.5rem", },
                    justifyContent: "center",
                    padding: { md: "0", xs: "1.5rem" }, py: "2vw",
                  }}
                >
                  <PricingCard item={item} useSwipers={true} />
                </Box>
              ))}
            </Box>)}

            <Box sx={{ display: { md: "block", xs: "none" } }}>
              <CustomNextArrow
                PricingModalCSR={data?.title}
                swiperRef={swiperRef}
                disabled={swiperState.isEnd}
              />
            </Box>

          </Grid>
          <Grid item xs={12} sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center", mt: "2%" }}>
            <CustomPrevArrow
              swiperRef={swiperRef}
              PricingModalCSR={data?.title}
              disabled={swiperState.isBeginning}
            />
            <CustomNextArrow
              PricingModalCSR={data?.title}
              swiperRef={swiperRef}
              disabled={swiperState.isEnd}
            />
          </Grid>
        </>

      ) : (
        <>
          {data?.elements?.map((item, index) => (
            <Grid
              item
              md={2.7}
              xs={11.5}
              key={index}
              sx={{ mt: { md: 0, xs: "2%" } }}
            >
              <PricingCard item={item} useSwipers={false} />
            </Grid>
          ))}
        </>
      )}

    </>
  );
};

export default PricingModalCSR;
