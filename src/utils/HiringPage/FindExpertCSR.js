import React from "react";
import { Grid, Chip,  } from "@mui/material";
import Link from "next/link";

const FindExpertCSR = ({ data }) => {
  return (
      <Grid item md={4} sm={8}  xs={12} sx={{ display: "flex", flexWrap: 'wrap',columnGap:"2%", justifyContent: "center",  }}>
        {data.elements?.map((item, index) => (
          <Link href={item.ctaLnik?.startsWith("http")
  ? item.ctaLnik
  : `/${item.ctaLnik}`}
            key={index}
          >
          <Chip
            sx={{cursor:"pointer",
              backgroundColor:  "#DAEDFD", fontSize: { md: '0.8vw', xs: "0.7rem" },
              borderRadius: { md: "0.5vw", xs: "0.5rem" }, p: { md: "0.6vw", xs: "0.6rem" }, height: 'auto',
              mb: "6%",
              color: "#0486FF",
              "&:hover": {
                backgroundColor:"#0486FF" ,
              color: "#fff",

              },
            }}
            label={item.title}
          />
          </Link>
        ))}
      </Grid>
  )
}

export default FindExpertCSR
