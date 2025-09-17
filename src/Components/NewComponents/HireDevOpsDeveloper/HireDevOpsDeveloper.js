import React from "react";
import { Grid, Typography } from "@mui/material";
import HireDevOpsDeveloperCSR from "@/utils/MainPage/HireDevOpsDeveloperCSR";
import stripHtml from "@/utils/stripHtml";

const HireDevOpsDeveloper = ({ data, index }) => {
  const isDarkTheme = data?.idForfrontendUse === "HireDevOpsDeveloper";
  const id = `${isDarkTheme ? "HireDevOpsDeveloper" : "HireDevOpsDeveloperLight"}-${index}`;

  return (
    <Grid
      id={id}
      container
      sx={{
        bgcolor: isDarkTheme ? "#3f3c39" : "#fff",
      }}
      borderRadius={{ md: "0.45vw", xs: "0" }}
      width={{ md: "84%", xs: "100%" }}
      m={{ md: "4.2% auto", xs: "auto" }}
      justifyContent="center"
      alignItems="center"
      py={{ md: "4.2%", xs: "3.63rem" }}
      textAlign={{ md: "left", xs: "center" }}
    >
      {/* Title */}
      <Grid item md={4.4} xs={11.5} textAlign={{ md: "left", xs: "center" }} mb="1%">
        <Typography
          variant={data?.headingType?.title?.toLowerCase() || "h2"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
          className={isDarkTheme ? "whiteColor" : "blackColor"}
        >
          {data?.title}
        </Typography>
      </Grid>
          <Grid item md={0.4}/>
      <Grid item md={6.6} xs={11.5} textAlign={{ md: "left", xs: "center" }}>
        <Typography
          variant="body1"
          className={isDarkTheme ? "whiteColor" : "blackColor"}
        >
          {stripHtml(data?.description)}
        </Typography>
      </Grid>

      {/* Divider */}
      <Grid
        item
        md={12}
        xs={12}
        sx={{
          borderBottom: `0.01vw solid ${isDarkTheme ? "#a1a1a2" : "#3f3c39"}`,
          mt: "3%",
        }}
      ></Grid>

      {/* CSR Component */}
      <HireDevOpsDeveloperCSR isDarkTheme={isDarkTheme} data={data} />
    </Grid>
  );
};

export default HireDevOpsDeveloper;
