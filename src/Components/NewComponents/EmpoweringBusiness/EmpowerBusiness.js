import {  Box, Chip, Grid, Typography} from "@mui/material";
import React from "react";
import EmpoweringBusinessCSR from "@/utils/MainPage/EmpoweringBusinessCSR";
import stripHtml from "@/utils/stripHtml";
import ContactButtonBlue from "../Registration/ContactButtonBlue";
import Link from "next/link";
import Image from "next/image";

const EmpoweringBusiness = ({ data ,index}) => {
   const isDarkTheme = data?.idForfrontendUse === "EmpoweringBusiness";
  const id = `${isDarkTheme ? "EmpoweringBusiness" : "EmpoweringBusinessLight"}-${index}`;
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  return (
      <Grid id={id} container sx={{ bgcolor:isDarkTheme?"#3F3C39": "#FFF" }} borderRadius={{md:"0.45vw",xs:"0"}} width={{md:"84%",xs:"100%"}} m={{md:"4.2% auto",xs:"auto"}} justifyContent={"center"} alignItems={"center"} columnGap={"2%"}   py={{md:"4.2%",xs:"3.63rem"}}  textAlign={{ md: "left", xs: "center" }}>
      <Grid item xs={11.5} md={4}  textAlign={{ md: "left", xs: "left" }}>
        <Typography  variant={data?.headingType?.title?.toLowerCase()} className={isDarkTheme?"whiteColor":"greyColor"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
          {data?.title}
        </Typography>
        <Typography variant="body1" className={isDarkTheme?"whiteColor":"greyColor"} my="2%" sx={{ width: { md: "80%", xs: "100%" } }}>
          {stripHtml(data?.description) }
        </Typography>
         {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }
     </Grid>
          <Grid item xs={11.5} sx={{position:"relative",p:"1rem",mt:"2rem",borderRadius:"0.45rem",display:{md:"none",xs:"block"},border:"2px solid white", backgroundImage: "radial-gradient(circle, rgba(4,134,255,0.5), rgba(4,134,255,0))",}}>
    <Box
       sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",
    maxHeight: {sm:"30rem",xs:"30rem"},
    overflowY: "scroll",
    pr: "1rem",
    "&::-webkit-scrollbar": {
      width: "12px !important",
    },
    "&::-webkit-scrollbar-track": {
      background: "#ffffff31",opacity:0.3,
      borderRadius: "12px",      width: "12px !important", 
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ffffff",
      borderRadius: "12px",           width: "12px !important",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#f5f5f5",
    },
  }}
  >
        {data?.caseStudies?.map((item, index) => (
              <Box key={index} sx={{bgcolor:"white",width:{xs:"100%",sm:"49%"},height:"100%",p:"1rem",borderRadius:"0.45rem",  mb:{xs:data?.caseStudies?.length-1===index?"0":"1rem",sm: index >= data?.caseStudies?.length - 2?"0":"1rem"}}}>
<Box sx={{ position: "relative", width: "100%", height:{xs:"10rem",sm:"15rem"}, borderRadius: "0.5rem", overflow: "hidden" }}>
  <Image
    src={ item?.caseStudy?.thumbnailImage ? `${imgLink}${item.caseStudy.thumbnailImage}` : "/Assets/NOimg.webp" }
    alt={`Image for ${item?.thumbnailImageAltText || "Case Study"}`}
    fill
    style={{ objectFit: "cover" }}  
  />
</Box>


    <Typography
                  variant={item?.headingType?.title?.toLowerCase() || "h3"}
                  className={"blackColor"}
                  sx={{textAlign:"left",my:"1rem",height:{xs:"auto",sm:"7rem"}
                  }}
                >
                  {item?.caseStudy?.title}
                </Typography>
                <Chip
                  label={item?.caseStudy?.industry?.title}
                  sx={{
                    bgcolor:"#0486ff",
                    color:"#fff",
                    width:"100%",mt:"1rem",
                    height:  "3rem" ,
                    fontSize:  "1rem",
                    borderRadius: "0.45rem"
                  }}
                />     </Box>
        ))}
        </Box>  
                  </Grid>
      <EmpoweringBusinessCSR isDarkTheme={isDarkTheme} data={data}/>
     
    </Grid>
  );
};
export default EmpoweringBusiness;
