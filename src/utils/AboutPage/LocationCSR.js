import React from 'react'
import { Grid, Typography, Avatar } from "@mui/material";
import CommonComponents from '@/Components/CommonComponents/CommonComponents';
import stripHtml from '../stripHtml';

const LocationCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  return (
    <>
      <CommonComponents
        textAlign="center"
        variant={data?.headingType?.title?.toLowerCase()}
        title={data?.title}
        className="whiteColor"
        description={stripHtml(data?.description)}
      />
      {data?.elements?.map((item, index) => (
        <Grid
          item
          key={index}
          md={3.1} sm={5.8}
          xs={11}
          sx={{
            mt: { md: "2%", xs: "2rem" },
            p: { md: "2vw", xs: "0.8rem" },
            borderRadius: { md: "0.45vw", xs: "0.45rem" },
            textAlign: "center",
            bgcolor: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#0486FF",
              "& .avatar": {
                borderColor: "#FFF",
                bgcolor: "#0486FF",
              },
              "& .title": { color: "white" },
              "& .desc *": { color: "white" },
            }
          }}
        >
          <Avatar
            src={`${imgLink}${item?.image}`}
            alt="Avatar Image"
            className="avatar"
            sx={{
              width: "20%",
              height: "auto",
              borderRadius: "50%",
              margin: "auto",
              p: "2.5%",
              top: { md: "-30%", xs: '-20%' },
              border: "3px dotted #0486FF",
              bgcolor: "white",
              transition: "all 0.3s ease",
            }}
          />

          <Typography
            variant="h3"
            className="title"
            mt="-8%"
            sx={{ color: "black", transition: "color 0.3s" }}
          >
            {item?.title}
          </Typography>

          <Typography
            variant="h4"
            className="desc"
            mt="3%"
            mb={{ md: 0, xs: "3%" }}
            sx={{ color: "#666666", transition: "color 0.3s" }}
            dangerouslySetInnerHTML={{
              __html: item?.shortDescription || item?.description,
            }}
          />
        </Grid>
      ))}
    </>
  );
};

export default LocationCSR;
