import LocationCSR from "@/utils/AboutPage/LocationCSR";
import { Grid } from "@mui/material";


const OurLocation = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "Location-Based-Outsource"}-${index}`;


  return (
    <Grid
      id={id} py={{ md: "4.2%", xs: "3.63rem" }} columnGap={"2%"}
      container
      justifyContent={"center"}
      sx={{
        backgroundImage: "url(/locationbasedoutsourcing.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <LocationCSR data={data} />

    </Grid >
  );
};
export default OurLocation;
