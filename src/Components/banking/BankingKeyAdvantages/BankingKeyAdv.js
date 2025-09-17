"use client";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import Image from "next/image";

const BankingKeyAdv = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "Banking-Key-Advantages"}-${index}`;

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const items = data?.elements || [];

  const renderItems = (start, end) => {
    return items.slice(start, end).map((item, idx) => (
      <Box key={idx} mt={{ md: "1%", xs: "1rem" }} sx={{ display: "flex", columnGap: "2%", alignItems: "flex-start" }} className="BankingKey">
        <Typography
          variant={item?.headingType?.title?.toLowerCase()}
          className="blueColor"
          mt="0.5%"
          minWidth={{ md: "3vw", xs: "3rem" }}
        >
  0{start + idx + 1}.
        </Typography>
        <Box>
          <Typography variant={item?.headingType?.title?.toLowerCase()} className="whiteColor">
            {item?.title}
          </Typography>
          <Typography
            variant="body1"
            className="whiteColor"
            sx={{
              height: { md: "5vw", xs: "auto" },
              "& *": { color: "#fff !important" }
            }}
            dangerouslySetInnerHTML={{ __html: item?.shortDescription}}
          />
        </Box>
      </Box>
    ));
  };

  return (
    <Grid id={id}
      container
      justifyContent="center"
      alignItems="stretch"
      columnGap={{ sm: "2%", md: 0, xs: 0 }}
      py={{ md: "4.2%", xs: "3.63rem" }}
      sx={{
        backgroundImage: "url(/bankingkey.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
     
    >
      <CommonComponents
        textAlign="center"
        className="whiteColor"
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {/* Left Column */}
      <Grid item xs={11.5} sm={5.5} md={3.5} mt={{ md: "1.5%", xs: 0 }}>
        {renderItems(0, 3)}
      </Grid>

      {/* Center Image */}
      <Grid item xs={12} md={3} sm={0} sx={{ display: { md: "block", xs: "none" } }}>
        <Box
          sx={{
            width: "80%",
            height: "100%",
            borderRadius: { md: "0.5vw", xs: "0.5rem" },
            m: "auto",
            overflow: "hidden",       // to clip the corners
            position: "relative",     // required for Image fill
          }}
        >
          <Image
            src={`${imgLink}${data?.image || "/Assets/NOimg.webp"}`}
            alt={data?.imageAltText || "Image"}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>

      {/* Right Column */}
      <Grid item xs={11.5} sm={5.5} md={3.5} mt={{ md: "1.5%", xs: 0 }}>
        {renderItems(3, 6)}
      </Grid>
    </Grid>
  );
};

export default BankingKeyAdv;
