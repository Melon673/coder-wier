"use client";
import React from "react";
import { Grid, Typography, Avatar, Box } from "@mui/material";
import stripHtml from "../stripHtml";

const SkillsCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  const boxStyle = {
    borderRadius: "10px",
    border: "1px solid #FFF",
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
    padding: "2%",
    mt: { md: "1%", xs: "1rem" },
    height: { md: "18vw", xs: "100%" },
    backgroundColor: "transparent",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#0486ff",
      "& .skill-title": {
        color: "#fff",
        textDecoration: "underline",
      },
      "& .skill-desc *": {
        color: "#fff",
      },
    },
  };

  return (
    <>
      {data?.elements?.map((card, index) => (
        <Grid
          key={index}
          item
          xs={11.5}
          sm={5.5}
          md={2.4}
          sx={boxStyle}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: { md: "2%", xs: "1.5rem" },
              mb: { md: "5%", xs: "2%" },
            }}
          >
            <Avatar
              variant="square"
              alt={card?.imageAltText}
              src={`${imgLink}${card?.image}` || "/Assets/NOimg.webp"}
              sx={{ width: { md: "20%", xs: "15%" }, height: { md: "20%", xs: "15%" } }}
            />
            <Typography
              variant={card?.headingType?.title?.toLowerCase()}
              className="skill-title"
              sx={{ transition: "color 0.3s, text-decoration 0.3s" }}
            >
              {card?.title}
            </Typography>
          </Box>

          <Box
            className="skill-desc"
            textAlign={"left"}
            dangerouslySetInnerHTML={{
              __html: card?.shortDescription || "No shortDescription found",
            }}
            sx={{ transition: "color 0.3s" }}
          />
        </Grid>
      ))}
    </>
  );
};

export default SkillsCSR;
