
import MapCSR from "@/utils/AboutPage/MapCSR";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const Map = ({ data }) => {

  return (
    <>
      <Grid
        id="Map-Locations"
        py={{ md: "1%", xs: "4%" }}
        container
        justifyContent="center"
        sx={{ bgcolor: "#F4FAFF" }}
      >
        <Grid item xs={12} md={12} textAlign={"center"} mb={"1%"}>
          <Typography variant="h2" >
            {data?.Heading}
          </Typography>
          <Typography variant="body1" className="greyColor">
            {data?.subheading}
          </Typography>
        </Grid>
        <Grid item xs={11.5} md={5} >
          <Box
            sx={{
              width: { md: "41vw", xs: "100%" },
              height: "auto",
              position: "relative",
            }}
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/about-us%2Fmap.png?alt=media&token=74acbe97-f180-4b86-8866-172bf7febb79"
              alt="Map Image"
              width={1920} // optional, replace with actual image dimensions
              height={1080} // optional, for proper ratio
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </Box>
        </Grid>


        <Grid item xs={11.5} md={5}>
          {data?.details?.map((item, index) => (
            <Typography
              key={index}
              sx={{ display: "flex", alignItems: "center", my: "1%" }}
              variant="body1" className="greyColor"
            >
              {item.icon} {item.name}
            </Typography>
          ))}
          <MapCSR data={data} />
        </Grid>
      </Grid>
    </>
  );
};

export default Map;
