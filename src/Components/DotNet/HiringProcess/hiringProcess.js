import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";

const HiringProcess = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "Hiring-Process"}-${index}`;

  return (
    <Grid
      container
      bgcolor="#fff"
      id={id}
      alignItems="center"
      justifyContent="center"
      py={{ md: "4.2%", xs: "3.63rem" }}
      overflow="hidden"
    >
      {/* Section Heading */}
      <CommonComponents
        textAlign="center"
        width={{ md: "70%", xs: "100%" }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {/* Process Steps */}
      {data?.elements?.map((item, i) => {
        const stepTitle = stripHtml(item?.title);
        const stepDescription = item?.shortDescription;
        const stepImage = item?.image || "/Assets/NOimg.webp";
        const icon = item?.imageBeforeHeading || "/Assets/NOimg.webp";
        const heading = item?.headingType?.title?.toLowerCase() ;

        return (
          <Fragment key={i}>
            {/* Step Text Block */}
            <Grid item md={6} xs={11} sm={8}>
              <Box sx={{ display: "flex", columnGap: "5%" }}>
                <Avatar
                  variant="square"
                  src={`${imgLink}${icon}`}
                  alt={`Step ${i + 1}`}
                  sx={{ width: { md: "6%", xs: "10%" }, height: "6%" }}
                />

                <Box>
                  <Typography
                    variant="body1"
                    className="blueColor"
                    mb="0.7%"
                    sx={{ fontWeight: "bold !important" }}
                  >
                    Step {i + 1}
                  </Typography>

                  <Typography variant={heading} mb="2%">
                    {stepTitle}
                  </Typography>

                  <Box
                    sx={{ width: { md: "60%", xs: "auto" }, mb: "3%" }}
                    dangerouslySetInnerHTML={{ __html: stepDescription }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* Step Image */}
            <Grid item md={2} sm={3} my={{ md: "1rem", xs: 0 }}>
              <Box
                sx={{
                  display: { md: "block", sm: "block", xs: "none" },
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={`${imgLink}${stepImage}`}
                  alt={`Step ${i + 1} Image`}
                  width={800}
                  height={600}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
          </Fragment>
        );
      })}
    </Grid>
  );
};

export default HiringProcess;
