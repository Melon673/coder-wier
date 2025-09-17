import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import stripHtml from "@/utils/stripHtml";

const AboutUs = ({ data }) => {
  const renderCard = (card) => (
    <Box my={{ md: 0, xs: "0.5vh" }}
      sx={{
        border: "0.15vw solid grey",
        p: "1vw",
        borderRadius: '0.5vw',
        height: "8vh", my: '1vh',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "700 !Important" }}>{stripHtml(card?.title)}</Typography>
      <Typography variant="h4" className="smallText" sx={{ fontWeight: "bold" }}>
        {stripHtml(card?.shortDescription) }
      </Typography>
    </Box>

  );
  return (
    <Box py={{ md: "5vh", xs: "2vh" }}
      id="AboutUs">
      <Typography variant="h2" sx={{ color: "#202D3B", ml: "8vw" }}>
        {data.title}
      </Typography>
      <Typography variant="body1" sx={{ color: "#666666", ml: "8vw", pr: { md: "20vw", xs: "1%" } }}>
        {stripHtml(data.description)}
      </Typography>
      <Grid
        container spacing={{ md: 2, xs: 0 }} px={{ md: 0, xs: "2rem" }}
        py={{ md: "5vh", xs: "2vh" }}
        sx={{
          backgroundImage: `url("/Assets/Images/map.png")`,
          width: "80vw",
          height: "auto",
          margin: 'auto',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {data?.elements?.slice(0, 3).map((item, index) => (
          <Grid item md={2} xs={12} key={index} sx={{ ml: { md: index === 0 ? "8vw" : 0, xs: 0 } }}>
            {renderCard(item)}
          </Grid>
        ))}
        <Grid container justifyContent={"right"} ml={{ md: "-10vw", xs: 0 }}>
          <Grid item md={1.5} xs={12} >
            {data?.elements?.slice(3, 7).map(renderCard)}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
