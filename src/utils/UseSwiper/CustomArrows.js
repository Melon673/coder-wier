"use client";
import React from "react";
import { Box } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

const CustomArrow = ({
  onClick,
  OurOutSourceBlackish,
  testimonial,
  direction,
  OutsourceServiceOverview,
  SolutionProvide,
  disabled,
  hiringtopdevelopers,
  EmpoweringBusiness,
  ExpertQAServicesTesting,
  SolutionsWeDeliverCSR,
  PricingModalCSR
}) => {
  const isSpecialLayout =
    testimonial ||
    OurOutSourceBlackish ||
    SolutionsWeDeliverCSR ||
    EmpoweringBusiness ||
    ExpertQAServicesTesting ||
    SolutionProvide || PricingModalCSR ||
    OutsourceServiceOverview;

  const getPositionStyle = () => ({
    position: isSpecialLayout ? "inherit" : "absolute",
    left:
      direction === "prev"
        ? {
            md: "9%",
            xs: hiringtopdevelopers ? "80%" : "41%",
            sm: hiringtopdevelopers ? "88%" :"3%",
          }
        : "auto",
    right:
      direction === "next"
        ? {
            md: "9%",
            xs: hiringtopdevelopers ? "2%" : "41%",
            sm: hiringtopdevelopers ? "2%" : "3%",
          }
        : "auto",
    top: {
      md:"57%",
      xs: hiringtopdevelopers ? "-24%" : "87%",
      sm: hiringtopdevelopers ? "-20%" :  "55%",
    },
    zIndex: 100,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "all 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const iconSize = {
    fontSize: {
      md: "1.5vw",
      xs: "1.5rem",
    },
  };

  const getIconColor = () => {
    if (testimonial || ExpertQAServicesTesting || SolutionsWeDeliverCSR) {
      return EmpoweringBusiness?"#b2b2b3ff":"#009BFF";
    }
    return disabled ? "#666666" : EmpoweringBusiness?"#b2b2b3ff":"#0486ff";
  };

  return (
    <Box
      onClick={!disabled ? onClick : undefined}
      sx={getPositionStyle()}
      className="carousel-arrow"
    >
      {direction === "prev" ? (
        testimonial || EmpoweringBusiness || ExpertQAServicesTesting || SolutionsWeDeliverCSR ? (
          <KeyboardBackspaceIcon
            sx={{
              color: getIconColor(),
              ...iconSize,
              "&:hover": {
                color: getIconColor(),
              },
            }}
          />
        ) : (
          <ArrowCircleLeftOutlinedIcon
            sx={{
              color: getIconColor(),
              ...iconSize,
            }}
          />
        )
      ) : testimonial || EmpoweringBusiness || ExpertQAServicesTesting || SolutionsWeDeliverCSR ? (
        <EastIcon
          sx={{
            color: getIconColor(),
            ...iconSize,
            "&:hover": {
              color: getIconColor(),
            },
          }}
        />
      ) : (
        <ArrowCircleRightOutlinedIcon
          sx={{
            color: getIconColor(),
            ...iconSize,
          }}
        />
      )}
    </Box>
  );
};

// Reusable arrows using props spread and custom overrides
export const CustomPrevArrow = (props) => (
  <CustomArrow
    {...props}
    direction="prev"
    onClick={() => props.swiperRef?.current?.slidePrev()}
  />
);

export const CustomNextArrow = (props) => (
  <CustomArrow
    {...props}
    direction="next"
    onClick={() => props.swiperRef?.current?.slideNext()}
  />
);
