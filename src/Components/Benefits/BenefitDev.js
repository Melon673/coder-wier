import stripHtml from "@/utils/stripHtml";
import { Grid, Typography, Avatar, Box } from "@mui/material";

const BenefitsDev = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "BenefitsDev"}-${index}`;

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
const imageSrc = `${imgLink}${data?.image || ""}`;

  return (
    <>
      <Grid id={id} alignItems={"center"} justifyContent={"center"} py={{ md: "3%", xs: "8%" }}
        container
        sx={{
          backgroundImage: "url(/Assets/Images/BenefitsDev/DevBG.jpg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "none",
          backgroundPosition: "center center",
        }}
      >
        <Grid item xs={12} md={12} textAlign={"center"} mb={"3%"}>
          <Typography variant="h2" className="whiteColor"> {data?.heading} </Typography>
          <Typography variant="body1" className="whiteColor" mt={"1%"}> {data?.describe} </Typography>
        </Grid>
        <Grid item xs={10} md={2.5}  >
          {data?.detail?.slice(0, 3).map((item, index) => (
            <Box key={index} my={{ md: "6%", xs: 0 }}>
              <Box sx={{ display: "flex", my: "2%", }} key={index}>
                <Typography variant="h3" sx={{ color: "#0486ff", }} >0{index + 1}</Typography>
                <Typography variant="h3" className="whiteColor" key={index} textTransform={"capitalize"}>.{item.title}</Typography>
              </Box>
              <Typography variant="body1" className="whiteColor" >{stripHtml(item.description) } </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center' }}>
          <Avatar variant="square" src={imageSrc} sx={{ width: "65%", height: "auto", borderRadius: "0.3vw", }} />
        </Grid>
        <Grid item xs={10} md={3} >
          {data?.detail?.slice(3, 6).map((item, index) => (
            <Box key={index} my={"5%"}>
              <Box sx={{ display: "flex", my: "2%", }} key={index}>
                <Typography variant="h3" sx={{ color: "#0486ff", }} >0{index + 4}</Typography>
                <Typography variant="h3" className="whiteColor" key={index} textTransform={"capitalize"}>.{item.title}</Typography>
              </Box>
              <Typography variant="body1" className="whiteColor" >{stripHtml(item.description)} </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default BenefitsDev;
