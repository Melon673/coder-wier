import { Box, Grid, Typography } from "@mui/material";
import stripHtml from "@/utils/stripHtml";
import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import Image from "next/image";

const CustomBanking = ({ data,index }) => {
    const id = `${data?.idForfrontendUse || "Custom-Banking-Card"}-${index}`;

  return (
    <>
      <Grid
        container
        justifyContent="center"
        my={{ md: "4.2%", xs: "3.63rem" }}
        columnGap={"4%"}
        textAlign="center"
        id={id}
      >
        <CommonComponents
          textAlign={"center"}
          variant={data?.headingType?.title?.toLowerCase()}
          title={data?.title}
          description={stripHtml(data?.description)}
        />
        {data?.elements?.map((item, index) => (
          <Grid
            key={index}
            item
            md={3.01}
            xs={11.5}
            sx={{
              p: { md: "2%", xs: "2rem" },
              height: "100%",
              bgcolor: "white",
              boxShadow: "0px 13px 26px rgba(80, 80, 80, 0.07)",
              mt: { md: "1%", xs: "0.6rem" },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  bgcolor: "#0486ff",
                  borderRadius: "50%",
                  width: { md: "4vw", xs: "4rem" },
                  height: { md: "4vw", xs: "4rem" },
                  overflow: "hidden", // ensure circular clipping
                  position: "relative", // required for Image fill
                }}
              >
                <Image
                  src="/CustomwebWhite.png"
                  alt="Custom Web"
                  fill
                  style={{ objectFit: "contain", padding: "20%" }} // optional padding to center the icon visually
                />
              </Box>
            </Box>
            <Typography
              variant={"h3"}
              my={{ md: "1%", xs: "1rem" }}
              sx={{ textAlign: "center", height: { md: "4vw", xs: "auto" } }}
            >
              {item.title}
            </Typography>
            <Box
              dangerouslySetInnerHTML={{
                __html: item?.shortDescription,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default CustomBanking;
