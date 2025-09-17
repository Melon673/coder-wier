import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const ServeHiring = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "WhomWeServe"}-${index}`;

  const formatDescription = (html) => {
    if (!html) return "";
    return html
      .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, "")
      .replace(/●/g, `<span style="display:inline-block;width:8px;height:8px;background:#007bff;margin-right:8px;"></span>`);
  };

  return (
    <Grid
      id={id}
      container
      justifyContent="center"
      columnGap="2%"
      py={{ md: "4.2%", xs: "3.63rem" }}
    >
      {/* Section Header */}
      <CommonComponents
        textAlign="left"
        width={{ md: "80%", xs: "100%" }}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title} m={{md:0,xs:0}}
        description={stripHtml(data?.description)}
      />

      {/* Cards */}
      {data?.elements?.map((item, index) => (
        <Grid
          key={index}
          item
          xs={11.5}
          sm={5.8}
          md={data?.elements.length>2?3.2:4}
          className="whomweserve"
          sx={{
            mt: "1%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#3F3C39",
              p: { md: "2vw", xs: "0.8rem" },
              borderRadius: { md: "0.45vw", xs: "0.45rem" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",transition:"all 0.3s ease-in-out",
              flex: 1,transform:"scale(1)",
              "&:hover": {
                transform:{md:"scale(1.1)",xs:"scale(1)"},
                backgroundImage:
                  "radial-gradient(circle, rgba(4, 134, 255, 0.82) 0%, rgba(4,134,255,0) 100%)",
              },
            }}
          >
            {/* Top Avatar + Titles */}
            <Box sx={{display:"flex",justifyContent:"center",mb:"4%"}}>

              {item?.image && (
                <Box
                  sx={{
                    position: "relative",
                    width: { md: "5vw", xs: "5rem" },borderRadius:"0.45rem",
                    height: { md: "5vw", xs: "5rem" },
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
            </Box>
                <Typography textAlign={"center"}
                  variant={item.headingType?.title?.toLowerCase()}
                  className="whiteColor"
                >
                  {item?.title}
                </Typography>
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
                  __html:
                    formatDescription(
                      item?.shortDescription || item?.description
                    ) 
                }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServeHiring;
