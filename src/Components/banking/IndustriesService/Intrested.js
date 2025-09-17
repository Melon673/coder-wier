import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const IntrestedService = ({ data,index}) => {
    const id = `${data?.idForfrontendUse || "Intrested-Services"}-${index}`;

  return (
    <Grid
      id={id}
      container
    py={{ md: "4.2%", xs: "3.63rem" }}
      justifyContent={"center"}
      bgcolor={"white"}
    >
      <Grid item xs={11.5} md={10} textAlign="center" mb={"1%"}>
               <Typography variant={data?.headingType?.title?.toLowerCase() || "h2"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} >
                    {data?.title}
                </Typography>
      </Grid>
      {data?.subHeading?.map((industry, index) => (
        <Grid
          key={index}
          item
          xs={10}
          sm={6}
          md={2.5}
          my={"0.5%"}
          sx={{
            p: { md: "0.3%", xs: "1%" },
            border: "2px solid #fff",
            bgcolor: "white",
            ":hover": {
              border: "2px solid #A4D3FF",
              "& .buttons": {
                bgcolor: "#0486FF",
                color: "white",
              },
            },
          }}
        >
          {/* <Button
            fullWidth
            variant="blueBackgroundButton"
          >
            {industry}
          </Button> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default IntrestedService;
