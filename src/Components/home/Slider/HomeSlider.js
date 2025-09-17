import { Grid, Typography } from "@mui/material";

const Slider = ({ data }) => {

  return (

    <>
        <Grid id="Case-Studies" container justifyContent={"center"}
          sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/Group%20120756.webp?alt=media&token=86b77503-f9b9-4ea0-8d0a-55617100237e')", backgroundSize: { md: "100% 100%", xs: "100% 100%" }, backgroundRepeat: { md: "none", xs: "no-repeat" }, py:"3%" }}>
            <Grid item xs={12} md={12} sx={{textAlign: "center",mb:{md:'2%',xs:"5%"}}} >
              <Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} variant={data?.headingType?.title?.toLowerCase()}   className="whiteColor">
                {data?.title}
              </Typography>
            </Grid>
        </Grid>
    </>
  );
};
export default Slider;
