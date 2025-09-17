import stripHtml from "@/utils/stripHtml";
import { Box, Grid, Typography } from "@mui/material";

const CoreService = ({ data }) => {
  return (
    <Grid container justifyContent={"center"}  columnGap={"0.5%"} id="Core-Service"  my={{ md: "4.2%", xs: "3.63rem" }}
>
      <Grid item md={12} xs={11} textAlign={"center"}>
        <Typography variant={data?.headingType?.title?.toLowerCase()}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} mb={"1%"}>{data.title}</Typography>
        <Typography variant="body1" mb={"1%"} className="greyColor ">{stripHtml(data?.description) }</Typography>
      </Grid>
      {data?.elements?.map((item, index) => (
        <Grid item md={2.5} xs={11} key={index} className="coreservice" mt={"0.3%"} p={{ md: "0.3%", xs: "1%" }} sx={{
          transition: "all 0.3s ease-in-out",borderRadius:{md:"0.45vw",xs:"0.45rem"}, border: "2px solid transparent", "&:hover": {
            border: "2px solid #0486FF",
            color: "#FFF",
            "& .boxcolor": {
              bgcolor: "#0486FF",
              border: "1px solid #0486FF",
            },
            "& *": {
              color: "#FFF !important",
            },
          }
        }}
          >
          <Box sx={{ border: "1px solid #666666", height: '100%', p: "4%", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }} className="boxcolor">
            <Typography variant={data?.headingType?.title?.toLowerCase()}   sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} >
              {item?.title }
            </Typography>
          <Box
                        mt={"3%"}
                        ml={"3%"} 
                        dangerouslySetInnerHTML={{
                          __html: item.shortDescription,
                        }}
                      />  </Box>
        </Grid >
      ))}
    </Grid >
  );
};
export default CoreService;
