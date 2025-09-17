import ContactButtonWhite from "@/Components/NewComponents/Registration/ContactButtonWhite";
import stripHtml from "@/utils/stripHtml";
import {  Avatar, Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import Link from "next/link";

const TopTalent = ({ data,index }) => {
  const imgLink= process.env.NEXT_PUBLIC_IMG_LINK;
    const id = `${data?.idForfrontendUse || "TopTalent"}-${index}`;

  return (
    <Grid alignItems="center"  id={id}
    py={{ md: "4.2%", xs: "3.63rem" }}columnGap={"2%"} container borderRadius={{md:"0.45vw",xs:"0"}} sx={{ bgcolor: "#0486ff",width:{md:"80%",xs:"100%"},m:'auto', }} justifyContent="center" >
      <Grid item md={5.8} xs={11.5} >
        <Typography variant={"h2"}  className="whiteColor" >
          {data.title}
        </Typography>
        <Typography variant={"body1"} my={"2%"}
          className="whiteColor" >
          {stripHtml(data.description) }
        </Typography>
       {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonWhite label={data.ctaText} />
                    </Link>
                    }
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: "2%" }}>
          {data.elements?.map((item, index) => (
            <Typography key={index} variant={"body1"}
              className="whiteColor" >
              <Checkbox
                sx={{
                  color: "#0486FF",
                  borderRadius: "1vw",
                }}
              />
              {item}
            </Typography>
          ))}
        </Box>

      </Grid>
      <Grid item md={5.5} xs={11.5} mt={{md:0,xs:"2rem"}}>
    <Avatar
          sx={{
            width: "auto", borderRadius: { md: "0.5vw", xs: "0.5rem" },
            height: 'auto'
          }}
          variant="rounded"
          alt={data.imageAltText}
          src={`${imgLink}${data.image ||"/Assets/NOimg.webp"}`}
        />
      </Grid>
    </Grid >
  );
};
export default TopTalent;
