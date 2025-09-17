import TestimonialsCSR from "@/utils/MainPage/TestimonialsCSR";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";


const Testimonials = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "Testimonials-2"}-${index}`;

  return (
    <Grid
      id={id}
      container my={{ md: "4.2%", xs: "3.63rem" }}
      justifyContent={"center"} position={"relative"}
    >
      <Grid item xs={12} md={12} textAlign={"center"} mb={"1%"}>
        <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} >
          {data?.title}
        </Typography>
      </Grid>
      <TestimonialsCSR data={data} />
      <Grid item md={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: '50%', height: 'auto', position: 'relative' }}>
          <Image
            src={data?.image ? `${imgLink}${data.image}` : "/CustomwebWhite.png"}
            alt={data?.title || "Image"}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto"
            }} width={800}  // Set according to aspect ratio (can adjust)
            height={600}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
