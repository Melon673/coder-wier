import React from "react";
import { Box, Grid, Typography, } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";

const SoftwareCapabilities = ({ data }) => {

  return (
    <Grid container justifyContent="center" columnGap={"1%"} my={{md:"4.2%",xs:"3.63rem"}} id="SoftwareCapabilities">
       <CommonComponents
  textAlign={"center" }
  variant={data?.headingType?.title?.toLowerCase()}
  title={data?.title} 
  description={stripHtml(data?.description)}
/>
      <Grid item md={12} xs={0}/>
        {data?.elements?.map((card, index) => (
          <Grid key={index} item xs={11.5} md={3.2} sm={5.8}  sx={{
            bgcolor: "#0F256E",mt:"1%",p: {md:"3vw",xs:"1rem"},height:"100%",
         borderRadius: { md: "0.45vw", xs: "0.45rem" }, transition: "transform 0.5s ease-in-out", "&:hover": { transform: { md: "scale(1.02)", xs: "inherit" } },
          }}>
              <Typography variant={card?.headingType?.title?.toLowerCase()} className="whiteColor" height={{md:"4vw",xs:"4rem"}} >
                {card?.title}
              </Typography>
<Box   sx={{
    color: "white",          
    "& *": {                  
      color: "white !important",
    },
  }}
            className="whiteColor"
                    dangerouslySetInnerHTML={{
                      __html: card.shortDescription,
                    }}
                  />          </Grid>
        ))}
    </Grid>
  );
};
export default SoftwareCapabilities;
