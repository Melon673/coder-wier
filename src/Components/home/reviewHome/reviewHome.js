import CommonComponents from "@/Components/CommonComponents/CommonComponents";
import stripHtml from "@/utils/stripHtml";
import { Box, Grid, } from "@mui/material";
import Image from "next/image";

const ReviewHome = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "Review Site Rating "}-${index}`;

  return (
    <Grid id={id} container justifyContent={'center'} my={{ md: "4.2%", xs: "3.63rem" }} columnGap={{ md: 0, xs: "2rem" }}>
      <CommonComponents
        textAlign={"center"}
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        description={stripHtml(data?.description || data.subTitle)}
      />
      {data?.elements?.map((image, index) => (
        <Grid
          item
          xs={4.5}
          sm={2.1}
          md={2.1}
          key={index}
          mt={{
            md: index % 2 === 1 ? "5%" : "0%",
            sm: index % 2 === 1 ? "5%" : "0%",
            xs: "2%",
          }}
          mb={{ md: 0, sm: 0, xs: "2%" }}
        >
          <Box
            sx={{
              position: 'relative',
              bgcolor: 'white',
              borderRadius: 2,
              p: 2,
              boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
              width: { md: '80%', xs: '100%' },
              aspectRatio: '1 / 1',
              overflow: 'hidden',
              mx: 'auto',
            }}
          >
            {/* Top-left corner stroke */}
            <Image
              src={
                image?.image
                  ? `${imgLink}${image.image}`
                  : "/Assets/NOimg.webp"
              }
              alt={image?.title || "Image"}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
      ))}

    </Grid >
  )
}

export default ReviewHome;
