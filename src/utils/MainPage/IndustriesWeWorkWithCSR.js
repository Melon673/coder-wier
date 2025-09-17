import React from 'react';
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';

const IndustriesWeWorkWithCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  const gridItemSx = {
    p: { md: "1%", xs: "1rem" },
    position: "relative",
    width: "100%",
    borderRadius: { md: "0.45vw", xs: "0.45rem" },
    overflow: "hidden",
    border: "1px solid #0486ff",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 19px rgba(0,0,0,.04)",
    "&:hover": {
      border: "1px solid transparent",
    },
    "&:hover .hover-bgs": {
      width: "100%",
    },
    "&:hover .texthover": {
      color: "#fff",
    },
  };

  const hoverBgSx = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "3%",
    backgroundColor: "#0486ff",
    transition: "all 0.3s ease-in-out",
    zIndex: 1,
  };

  const contentBoxSx = {
    position: "relative",
    zIndex: 2,
    ml: "6%",
    display: "flex",
    columnGap: "4%",
    alignItems: "center",
    height: "100%",
  };

  return (
    <>
      {data?.elements?.map((item, index) => (
        <Grid
          key={index}
          item
          md={3.1}
          sm={5.8}
          xs={11.5}
          sx={gridItemSx}
        >
          <Link href={item.ctaLnik}>
          <Box className="hover-bgs" sx={hoverBgSx} />

          <Box sx={contentBoxSx}>
            <Box
              sx={{
                position: "relative",
                width: { md: "3vw", xs: "2.5rem" },
                aspectRatio: "1 / 1",
                flexShrink: 0,
              }}
            >
              <Image
                src={item?.image ? `${imgLink}${item.image}` : "/Assets/NOimg.webp"}
                alt={item?.title || "Industry"}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography
              variant="h5"
              className="texthover"
              sx={{ transition: "all 0.3s ease-in-out" }}
            >
              {item?.title}
            </Typography>
          </Box>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default IndustriesWeWorkWithCSR;
