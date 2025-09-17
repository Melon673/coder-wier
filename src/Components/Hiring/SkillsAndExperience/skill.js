import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import SkillsCSR from "@/utils/HiringPage/SkillsCSR";
import stripHtml from "@/utils/stripHtml";

const Skills = ({ data }) => {

  const boxItem = {
    backgroundColor: "#F4FAFF",
    background: data?.bgImage,
    backgroundSize: "100% 100%",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center center",
  };

  return (
    <Box sx={boxItem}  py={{md:"4.2%",xs:"3.63rem"}}  id="Skills-Experienced-Development">
  
        <Grid columnGap={"1%"}
          container
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Grid item xs={11.5} md={12} >
            <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
              variant={data?.headingType?.title?.toLowerCase()}
            >
              {data?.title}
            </Typography>
            <Typography
              variant="body1" mt={"1%"}>
              {stripHtml(data?.description)}
            </Typography>
          </Grid>
          <SkillsCSR data={data} />
        </Grid>
        </Box>
  );
};

export default Skills;
