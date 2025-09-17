import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import Image from "next/image";
const WhoWeWork = ({ data,index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMAGE_URL;
    const id = `${data?.idForfrontendUse || "Who-we-work-with"}-${index}`;

  return (
    <Grid id={id}
      container my={{ md: "3%", xs: "2rem" }}
      justifyContent="center" columnGap={"0.8%"}

    >
      <CommonComponents
        textAlign={"center"}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />
      {data?.elements?.map((item, index) => (
        <Grid key={index} item xs={11} md={2.45} sx={{ bgcolor: "#0486ff", p: {md:'2%',xs:"1.5rem"}, borderRadius: "0.45rem", mb:{md: '0.8%',xs:"1rem"} }}>
{item.image && 
<Box
  sx={{
    pt: '3%',
    width: { xs: "40%", sm: "25%", md: "15%" },
    mx: "auto",
    position: "relative",
  }}
>
  <Image
    src={
      item?.image
        ? `${imgLink || ''}${item.image}`
        : "/Assets/NOimg.webp"
    }
    alt={item.imageAltText || "Image"}
    width={500}
    height={500}
    style={{
      width: "100%",
      height: "auto",
      objectFit: "contain",
    }}
    priority
  />
</Box>  }    <Typography variant={item?.headingType?.title?.toLowerCase()} className="whiteColor" my={"5%"}>
            {item.title}
          </Typography>
          <Typography variant="body1" className="whiteColor" textAlign={"left"}>
            {stripHtml(item.shortDescription)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default WhoWeWork;
