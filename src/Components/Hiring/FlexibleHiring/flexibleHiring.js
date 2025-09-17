import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Grid, Typography } from "@mui/material";
const Flexible = ({ data }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      id="FlexibleModal"
      my={{ md: "4.2%", xs: "3.63rem" }}
      columnGap={{ md: 0, xs: 0, sm: "2%" }}
    >
      <Grid item md={10} xs={11.5} textAlign={"center"} mb={"1%"}>
        <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} mb={"1%"}>
          {data?.title}
        </Typography>
        <Typography variant="body1" className="greyColor">
          {stripHtml(data?.description)}
        </Typography>
      </Grid>
      {data?.elements?.map((item, index) => (
       <Grid
       item
       md={2.5}
       sm={5.6}
       xs={11.5}
       key={index}
       className="flexible"
       sx={{
         display: "flex",
         flexDirection: "column",
         justifyContent: "space-between",
         transition: "all 0.3s ease-in-out",
         bgcolor: "#fff",
         borderRadius: { md: "0.4vw", xs: "0.4rem" },
         mt: { md: "0", xs: "1rem" },
         border: { md: "2px solid transparent", xs: "0.5px solid #0486FF" },
         "&:hover": {
           bgcolor: "#F4FAFF",
           borderColor: "transparent",
           "& .boxBg": {
             bgcolor: "#0486FF",
           },
           "& .colorwhite": {
             color: "white !important",
           },
         },
       }}
     >
       <Box
         sx={{
           bgcolor: "#F4FAFF",
           p: "4%",
           textAlign: "center",
           borderRadius: { md: "0.3vw 0.3vw 0 0", xs: "0.3rem 0.3rem 0 0" },
           transition: "all 0.3s ease-in-out",
           border: {
             md: "2px solid transparent",
             xs: "0.5px solid #0486FF",
           },
         }}
         className="boxBg"
       >
         <Typography
           variant={item?.headingType?.title?.toLowerCase()}
           className="colorwhite"
         >
           {item?.title}
         </Typography>
         <Typography variant="body1" mt={"1%"} className="colorwhite">
           {item?.subtitle}
         </Typography>
       </Box>
         <Box
           width={{ md: "95%", xs: "95%" }}
           sx={{
             m: "3% auto 3% auto",
             flexGrow: 1,
           }}
           dangerouslySetInnerHTML={{
             __html: item?.shortDescription,
           }}
         />
     
       {/* Bottom Section */}
       <Box
         sx={{
           bgcolor: "#F4FAFF",
           p: "8%",
           borderRadius: { md: "0 0 0.3vw 0.3vw", xs: "0 0 0.3rem 0.3rem" },
           transition: "all 0.3s ease-in-out",
           border: {
             md: "2px solid transparent",
             xs: "0.5px solid #0486FF",
           },
         }}
         className="boxBg"
       />
     </Grid>
     
      ))}
    </Grid>
  );
};
export default Flexible;
