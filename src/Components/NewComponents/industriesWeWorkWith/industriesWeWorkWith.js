import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IndustriesWeWorkWithCSR from "@/utils/MainPage/IndustriesWeWorkWithCSR";
import stripHtml from "@/utils/stripHtml";

const IndustriesWeWorkWith = ({ data, index }) => {
    const id = `${data?.idForfrontendUse || "IndustriesWeWorkWith"}-${index}`;

    return (
        <Grid id={id} container columnGap={"1vw"} rowGap={"1vw"} justifyContent={"center"} my={{ md: "4.2%", xs: "3.63rem" }}>
            <Grid item md={12} xs={11.5} textAlign={"center"} mb={"2%"}>
                <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}> {stripHtml(data.title)}</Typography>
            </Grid>
            <IndustriesWeWorkWithCSR data={data} />
        </Grid>
    );
};


export default IndustriesWeWorkWith;
