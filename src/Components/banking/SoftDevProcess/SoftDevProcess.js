import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

// Style for each step card
const StepCardStyle = {
  backgroundColor: "#fbfbfb",
  p: { md: "2vw", xs: "0.8rem" },
  borderRadius: { md: "0.45vw", xs: "0.45rem" },
  height: { md: "20vw", xs: "auto" },
  transition: "background 0.3s ease-in-out",
  "&:hover .hoverIndex": {
    color: "#0486ff !important",
    opacity: 1,
  },
};

// Render individual step card
const StepCard = ({ item, index }) => (
  <Grid item xs={11.5} sm={5.8} md={3.2} mb={{ xs: "2rem", md: "2%" }} sx={StepCardStyle}>
    <Typography
      variant="body1"
      className="blackColor hoverIndex"
      sx={{
        fontSize: { md: "3vw", xs: "2.5rem" },
        fontWeight: "bold",
        opacity: 0.4,
        transition: "all 0.3s ease-in-out",
      }}
    >
      0{index + 1}
    </Typography>

    <Typography
      my="1%"
      variant={item?.headingType?.title?.toLowerCase() || "h3"}
    >
      {item?.title}
    </Typography>

    <Box
      sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}
      dangerouslySetInnerHTML={{
        __html: item?.shortDescription,
      }}
    />
  </Grid>
);

const SoftDevProcess = ({ data,index  }) => {
    const id = `${data?.idForfrontendUse || "SoftDevProcess"}-${index}`;

  return (
    <Grid
      container
      justifyContent="center"
      columnGap="2%"
      my={{ md: "4.2%", xs: "3.63rem" }}
      id={id}
    >
      <CommonComponents
        textAlign={{ md: "left", xs: "center" }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {data?.elements?.map((item, index) => (
        <StepCard key={index} item={item} index={index} />
      ))}
    </Grid>
  );
};

export default SoftDevProcess;
