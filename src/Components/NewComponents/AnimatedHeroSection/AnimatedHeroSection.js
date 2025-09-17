import React, { useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import Link from "next/link";
import ContactButtonBlue from "../Registration/ContactButtonBlue";
import ClientSideCarousel from "@/utils/MainPage/AnimatedHeroSectionCSR";
import TypewriterField from "@/utils/MainPage/TypeWritter";

const AnimatedHeroSection = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "AnimatedHeroSection"}-${index}`;
  const headingVariant = (data?.headingType?.title?.toLowerCase() || "h2");
  const titleText = data?.title;
  const descriptionText = stripHtml(data?.description);

  const images = useMemo(
    () => (data?.elements?.map(el => el.image).filter(Boolean) || []),
    [data?.elements]
  );

  const subTitles = useMemo(
    () => (data?.elements?.map(item => item.title).filter(Boolean) || []),
    [data?.elements]
  );

  return (
    <Grid
      container
      id={id}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // svh/dvh to avoid mobile URL bar jumps
        height: { md: "100svh", xs: "72svh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background carousel (first image should be high-priority inside component) */}
      <ClientSideCarousel images={images} />

      {/* Overlay content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 2,            // ensure above images
          px: { xs: 2, sm: 6 },
          color: "white",
        }}
      >
        <Grid item md={10} xs={12}>
          <Typography variant={headingVariant}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} className="whiteColor">
            {titleText}
          </Typography>

          <Typography variant="body1" className="whiteColor" mt={1}>
            {descriptionText}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 2,
              my: 5,
            }}
          >
            <Typography variant="h2" className="whiteColor" fontWeight={500}>
              {data?.subTitle}
            </Typography>

            <TypewriterField subTitles={subTitles} />
          </Box>

          {data?.ctaLnik && data?.ctaText && ( // ← confirm spelling (ctaLink?)
            <Link href={data.ctaLnik}>
              <ContactButtonBlue label={data.ctaText} />
            </Link>
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default AnimatedHeroSection;
