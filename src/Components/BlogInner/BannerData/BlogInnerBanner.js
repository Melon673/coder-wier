import BreadcrumbServer from "@/Components/BreadCrumbs/BreadCrumbsServer";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";


const calenderimage = {
  width: "2.0625rem",
  height: "1.875rem",
  marginTop: "34px",
  marginRight: "10px",
};

const timeImage = {
  width: "2.0625rem",
  height: "1.875rem",
  marginTop: "34px",
  marginRight: "10px",
};


const BlogInnerBanner = ({ data, team,parts,pageMeta }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  return (
    <>
      <Grid id="Hiring-Banner" justifyContent={"center"}
        container
        sx={{
          py: "10%",
          bgcolor: "black",
          backgroundImage: `url("${imgLink}${data?.image}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item md={10} xs={11.5} >
               <BreadcrumbServer parts={parts} pageMeta={pageMeta}
                />
          <Typography className="whiteColor" variant={data?.headingType?.title?.toLowerCase() || 'h1'}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}  >
            {data?.title || "Blog"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "1%",
              mt: "2%",
              justifyContent: { md: "left", xs: "space-between" },
            }}
          >
            {/* Team Member Image */}
            <Box
              sx={{
                width: { md: "1.5vw", xs: "1.5rem" },
                height: { md: "1.5vw", xs: "1.5rem" },
                position: "relative",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image
                src={`${imgLink}${team?.image || "/Assets/NOimg.webp"}`}
                alt="team image"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Typography variant="h6" className="whiteColor">
              {team?.fullName || "Team Name"}
            </Typography>

            {/* Calendar Icon */}
            <Box
              sx={{
                width: { md: "1vw", xs: "1rem" },
                height: { md: "1vw", xs: "1rem" },
                position: "relative",
              }}
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/blogInner%2Fcalender.webp?alt=media&token=f3deb4cc-8321-44ef-897c-7af41104d86d"
                alt="calendar icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography variant="h6" className="whiteColor">
              October 30, 2023
            </Typography>

            {/* Time Icon */}
            <Box
              sx={{
                width: { md: "1vw", xs: "1rem" },
                height: { md: "1vw", xs: "1rem" },
                position: "relative",
              }}
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/blogInner%2Ftime.webp?alt=media&token=06a4aad7-e02f-41e7-beff-d50a09ee8ce4"
                alt="time icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography variant="h6" className="whiteColor">
              8 Mins Read
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </>
  );
};

export default BlogInnerBanner;
