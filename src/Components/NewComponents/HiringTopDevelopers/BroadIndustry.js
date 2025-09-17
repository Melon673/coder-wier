import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const BroadIndustry = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "BroadIndustry"}-${index}`;

  return (
    <Grid
      container
      justifyContent={"center"}
      py={{ md: "4.2%", xs: "3.63rem" }}
      id={id}
    >
      {data.technologies?.map((item, index) => (
        <Grid
          xs={6}
          key={index}
          item
          md={2.1}
          sx={{
            borderRight: {
              md:
                index % 5 === 4
                  ? "0.15vw solid transparent"
                  : "0.15vw solid #e6e6e6",
              xs: "2px solid #e6e6e6",
            },
            borderBottom: {
              md:
                index < data.technologies.length - 5
                  ? "0.15vw solid #e6e6e6"
                  : "none",
              xs: "2px solid #e6e6e6",
            },
          }}
        >
          <Box sx={{ height: "13vh" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: { md: "4vw", xs: "5rem" },
                  height: "auto",
                  bgcolor: "#242328",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: { md: "0.7vw", xs: "0.7rem" },
                  borderRadius: { md: "0.3vw", xs: "0.3rem" },
                  my: "2vh",
                  position: "relative",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.heading || "Image"}
   fill 
  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h4"
            textAlign={"center"}
            mb={"3vh"}
            sx={{ color: "#242328 !important" }}
          >
            {item.heading}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default BroadIndustry;
