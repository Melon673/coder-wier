import React from "react";
import {Grid,Typography} from "@mui/material";
import HomeTeamsCSR from "@/utils/MainPage/HomeTeamCSR";

const HomeTeam = ({ data ,index}) => {
    const id = `${data?.idForfrontendUse || "HomeTeam"}-${index}`;

  return (
    <>
      <Grid sx={{ bgcolor: "#F4FAFF" }} id={id}  py={{ md: "4.2%", xs: "3.63rem" }}
        container
        justifyContent={"center"}
      >
        <Grid item xs={11.5} md={10} textAlign={"center"}>
          <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
            variant={data?.headingType?.title?.toLowerCase()} >
            {data?.title}
          </Typography>
        </Grid>
       <HomeTeamsCSR data={data} />
      </Grid>
    </>
  );
};

export default HomeTeam;
