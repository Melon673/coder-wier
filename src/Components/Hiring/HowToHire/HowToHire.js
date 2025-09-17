import HowToHireCSR from "@/utils/HiringPage/HowToHireCSR";
import { Grid, Typography } from "@mui/material";

const HowToHire = ({ data }) => {
  return (
    <Grid container id={data?.mainHeading} mt={{ md: "3%", xs: "3rem" }} justifyContent={"center"} mb={{ md: "3%", xs: "8rem" }}>
      <Grid item xs={12} md={12} textAlign={"center"} mb={"2%"} >
        <Typography variant="h2">{data?.mainHeading}</Typography>
        <Typography        variant="body1" mt={"0.6%"} >
          {data?.describe}
        </Typography>
      </Grid>
     <HowToHireCSR data={data} />
    </Grid>
  );
};
export default HowToHire;
