import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const WhomWeServe = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "WhomWeServe"}-${index}`;

  const formatDescription = (html) => {
    if (!html) return "";
    return html
      .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "")
      .replace(
        /●/g,
        `<span style="display:inline-block;width:8px;height:8px;background:#007bff;margin-right:8px;"></span>`
      );
  };

  return (
    <Grid
      id={id}
      container
      justifyContent="center"
      columnGap="1%"
      py={{ md: "4.2%", xs: "3.63rem" }}
    >
      {/* Section Header */}
      <CommonComponents
        textAlign="center"
        width={{ md: "60%", xs: "auto" }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      {/* Cards */}
      {data?.elements?.map((item, index) => {
        const CardContent = (
          <Box
            sx={{
              backgroundColor: "#3F3C39",
              p: { md: "2vw", xs: "1.5rem" },
              borderRadius: { md: "0.45vw", xs: "0.45rem" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flex: 1,
              transition: "background 0.4s ease-in-out",
              "&:hover": {
                backgroundImage:
                  "radial-gradient(circle, rgba(4, 134, 255, 0.82) 0%, rgba(4,134,255,0) 100%)",
              },
            }}
          >
            {/* Top Avatar + Titles */}
            <Box
              height={{ md: "3vw", xs: "auto" }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: item.image ? "center" : "flex-start",
                m: "auto",
                width: item.image ? "90%" : "100%",
                columnGap: "3%",
              }}
            >
              {item?.image && (
                <Box
                  sx={{
                    position: "relative",
                    width: { md: "2.5vw", xs: "2.5rem" },
                    height: { md: "2.5vw", xs: "2.5rem" },
                  }}
                >
                  <Image
                    src={`${imgLink}${item.image}`}
                    alt={item?.title || "Image"}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              )}

              <Box textAlign={item.image ? "left" : "center"} width={"100%"}>
                <Typography
                  variant={item.headingType?.title?.toLowerCase()}
                  className="whiteColor"
                >
                  {item?.title}
                </Typography>
                {item?.subtitle && (
                  <Typography variant="h5" className="whiteColor">
                    {item?.subtitle}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* Description */}
            <Box
              sx={{
                mt: "2%",
                "& li": {
                  listStyleType: "square",
                  listStylePosition: "outside",
                },
                "& li::marker": {
                  color: "#0486ff",
                  fontSize: { md: "1vw", xs: "1rem" },
                },
                "& *": {
                  color: "#FFF !important",
                  WebkitTextFillColor: "#FFF !important",
                },
              }}
            >
              <span
                className="whiteColor"
                dangerouslySetInnerHTML={{
                  __html: formatDescription(
                    item?.shortDescription || item?.description
                  ),
                }}
              />
            </Box>
          </Box>
        );

        return (
          <Grid
            key={index}
            item
            xs={11.5}
            sm={5.8}
            md={3.2}
            className="whomweserve"
            sx={{
              mt: "1%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {item?.ctaLnik ? (
              <Link
                href={item.ctaLnik}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  flex: 1,
                }}
              >
                {CardContent}
              </Link>
            ) : (
              CardContent
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WhomWeServe;
