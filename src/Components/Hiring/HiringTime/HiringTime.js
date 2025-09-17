import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import ContactButtonWhite from "@/Components/NewComponents/Registration/ContactButtonWhite";
import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HiringTime = ({ data ,index}) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "Hiring-Time"}-${index}`;

  return (
    <Grid
      container
    sx={{
  py: { md: "4.2%", xs: "3.63rem" },
  columnGap: "2%",
  backgroundImage: 'url("/hiring time.webp")',
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}

      justifyContent={"center"}
      id={id}
    >
      <CommonComponents
        textAlign={"center"} className="whiteColor"
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title} width={{ md: "80%", xs: "100%" }}
        description={stripHtml(data?.description)}
      />
      {data?.elements?.map((item, index) => (
        <React.Fragment key={index}>
          <Grid item md={3} xs={11.5}>
            <Avatar
              variant="square"
              sx={{ width: { md: "auto", xs: "auto" }, height: "100%", m: "1%" }}
              alt={item?.imageAltText}
              src={`${imgLink}${item?.image || "/Assets/NOimg.webp"}`}
            />
          </Grid>

          <Grid item md={7} xs={11.5}>
            <Grid
              container
              justifyContent={"center"}
              sx={{
                textAlign: { md: "left", xs: "center" },
                p: "4%",
                mt: "1.7%",
                backgroundColor: "#0486FF",
                borderRadius: { md: "0.7vw", xs: "0.7rem" },
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.10)",
              }}
            >
              <Grid item md={5} xs={12}>
                <Typography variant={"h3"} className="whiteColor">
                  {item?.title}
                </Typography>
                <Typography variant={"h3"} className="whiteColor" my={"2%"}>
                  {item?.subtitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ width: { md: "85%", xs: "auto" } }}
                  className="whiteColor"
                >
                  {stripHtml(item?.shortDescription)}
                </Typography>
              </Grid>

              <Grid item md={1} xs={12} mt={{ md: "-1%", xs: "2%" }} mb={"2%"}>
                <Divider
                  sx={{
                    height: { md: "120%", xs: "0.2rem" },
                    width: { md: "3%", xs: "auto" },
                    bgcolor: "#FFF",
                  }}
                  orientation="vertical"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography variant="body1" className="whiteColor" >
                  {stripHtml(item?.description)}
                </Typography>
                <Box mt={"17%"}
                  sx={{ display: "flex", justifyContent: { md: "left", xs: "center" } }}
                >
              {data?.ctaLnik && data?.ctaText && 
                    <Link href={item?.ctaLnik} passHref>
                        <ContactButtonWhite label={item.ctaText} />
                    </Link>
                    }
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default HiringTime;
