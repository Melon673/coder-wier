import React from "react";
import RecentWorkSwiperCSR from "@/utils/ServicePage/RecentWorkSwiperCSR";
import { Grid, Typography } from "@mui/material";

const RecentWork = ({ data,index}) => {
    const id = `${data?.idForfrontendUse || "RecentWork"}-${index}`;

  return (
    <>
      <Grid
        container
        my={{ md: "3%", xs: "10%" }}
        justifyContent={"center"} sx={{ position: "relative", }}
        id={data?.idForfrontendUse||"RecentWork"}
      >
        <Grid item xs={12} md={12} mb={"2%"} textAlign={"center"}>
          <Typography variant="h2">{data?.title}</Typography>
        </Grid>
        <RecentWorkSwiperCSR data={data} />
      </Grid>
    </>
  );
};

export default RecentWork;
