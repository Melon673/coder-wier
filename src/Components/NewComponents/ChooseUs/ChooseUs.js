import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import ContactButtonBlue from "../Registration/ContactButtonBlue";
import Link from "next/link";

const ChooseUs = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
    const isDarkTheme = data?.idForfrontendUse === "ChooseUs";
  const id = `${isDarkTheme ? "ChooseUs" : "ChooseUsLight"}-${index}`;

  return (
    <Grid
      id={id}
      container
      sx={{ bgcolor:isDarkTheme? "#3F3C39":"#fff" }}
      borderRadius={{ md: "0.45vw", xs: "0" }}
      width={{ md: "84%", xs: "100%" }}
      m={{ md: "4.2% auto", xs: "auto" }}
      justifyContent="left"
      alignItems="center"
      py={{ md: "4.2%", xs: "3.63rem" }}
    >
      <CommonComponents 
        className={isDarkTheme?"whiteColor":"blackColor"}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title} md={8}
        width={{ md: "80%", xs: "100%" }} m={{md:0,xs:0}}
        description={stripHtml(data?.description)}
      />
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch" px={"4%"}
      >
        {/* Left Image */}
        <Grid item md={5.5} xs={12}
          sx={{ display: {md:"flex",xs:"none"}, justifyContent: {md:"left",xs:"center"} }}
        >
          <Avatar
            src={`${imgLink}${data.image || "/Assets/NOimg.webp"}`}
            alt={data.imageAltText}
            variant="square"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: { md: "0.8vw", xs: "0.8rem" },
            }}
          />
        </Grid>
        <Grid item xs={11.5} md={5.5}
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          {data?.elements?.map((item, index) => (
            <Box
              display="flex"
              key={index}
              columnGap="2%"
              mt="2%"
              alignItems="flex-start"
            >
              <Box>
                <Typography
                  className={isDarkTheme?"whiteColor":"blackColor"} mb={"1%"}
                  variant={item?.headingType?.title?.toLowerCase() || "h3"}
                >
                  {item.title}
                </Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html: item?.shortDescription,
                  }}
                  sx={{
                    "& *": {
                      color: isDarkTheme? "white !important":"black !important",
                    },
                  }}
                />

              </Box>
            </Box>
          ))}
          <Box>    {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }
          </Box>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChooseUs;
