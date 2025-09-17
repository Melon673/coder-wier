import React from "react";
import { Grid, Typography } from "@mui/material";
import OutsourceServiceOverviewCSR from "@/utils/MainPage/OutsourceServiceOverviewCSR";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const OutsourceServiceOverview = ({ data,index }) => {
  const id = `${data?.idForfrontendUse || "OutsourceServiceOverview-1"}-${index}`;

  return (
    <>
      <Grid id={id} container sx={{ bgcolor: "#3F3C39" }} borderRadius={{ md: "0.45vw", xs: "0" }} width={{ md: "84%", xs: "100%" }} m={{ md: "4.2% auto", xs: "auto" }} justifyContent={"center"} alignItems={"center"} py={{ md: "4.2%", xs: "3.63rem" }} >
        <CommonComponents
          textAlign={{ md: "left", xs: "center" }} className="whiteColor"
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title} md={11.5}
          description={stripHtml(data?.description)}
        />
        <OutsourceServiceOverviewCSR data={data} />
      </Grid>
    </>

  );
};

export default OutsourceServiceOverview;
