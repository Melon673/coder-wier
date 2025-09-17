import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from 'next/link';
import ContactButtonBlue from '@/Components/NewComponents/Registration/ContactButtonBlue';

const DiscussCSR = ({ data }) => {

  return (
    <>
     {data?.elements?.map((item, index) => (
       <Grid
  item
  md={2.4} xs={11.5}
  key={index}
  sx={{
    p: { md: '2vw', xs: '1.5rem' },
    backgroundColor: "#F4FAFF",mt:{md:0,xs:"0.6rem"},
    border: "2px solid #0486ff",
    boxShadow:
      "inset 0px 30px 60px -12px rgba(244, 250, 255, 0.25), inset 0px 18px 36px -18px rgba(244, 250, 255, 0.30)",
    transition: "all 0.3s ease-in-out",
    borderRadius: { md: "0.5vw", xs: "0.5rem" },
    height: "100%",
    "&:hover": {
      backgroundColor: "#0486FF",
      color: "#FFF",
      "& *": {
        color: "#FFF !important",
      },
      "& .custom-btn": {
        backgroundColor: "transparent",
        color: "#FFF !important",
        border: "1px solid #FFF",
      },
    },
  }}
>
  <Typography
    variant={item?.headingType?.title?.toLowerCase()}
    height={{ md: "3.5vw", xs: "auto" }}
  >
    {item?.title}
  </Typography>

  <Box
    my={{md:"2%",xs:"1.5rem"}}
    height={{ md: "8vw", xs: "auto" }}
    dangerouslySetInnerHTML={{
      __html: item.shortDescription,
    }}
  />



    {item?.ctaText && item?.ctaLnik &&
                            <Link href={`/${item?.ctaLnik}`} passHref>
  <Button
    className="custom-btn"
    sx={{
      backgroundColor: "#0486FF",
      color: "#fff",
      border: "1px solid transparent",
      borderRadius: {md:"0.54vw",xs:"0.54rem"},
      padding: "0.75rem 1.25rem",
      fontSize: { md: "0.84vw", xs: "0.84rem" },
      textTransform: "capitalize",
      transition: "all 0.3s ease-in-out",
    }}
  >
    {item?.ctaText}
  </Button>                            </Link>
                        }
</Grid>

      ))}
    </>
  )
}

export default DiscussCSR
