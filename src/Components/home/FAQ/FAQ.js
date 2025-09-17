import React from "react";
import { Grid, Typography } from "@mui/material";
import FAQHomeCSR from "@/utils/MainPage/FAQHomeCSR";


const FAQHome = ({ data,index }) => {
  const id = `${data?.idForfrontendUse || "FAQ"}-${index}`;

  return (
    <Grid
      id={data?.idForfrontendUse || "FAQ"} alignContent={"flex-start"}
      container my={{ md: "4.2%", xs: "3.63rem" }}
      justifyContent={"center"}
    >
      <Grid item xs={12} md={12} textAlign={"center"} mb={"2%"}>
        <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
          variant={data?.headingType?.title?.toLowerCase()} >
          {data?.title}
        </Typography>
      </Grid>
      <Grid item md={10} xs={11.5} sx={{ display: "flex", justifyContent: "center", ml: { md: "5%", xs: 0 }, }}>
        <FAQHomeCSR data={data} />
      </Grid>
    </Grid>
  );
};

export default FAQHome;
