import BreadcrumbServer from '@/Components/BreadCrumbs/BreadCrumbsServer';
import stripHtml from '@/utils/stripHtml'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const AboutBanner = ({pageMeta,parts, data ,index}) => {
    const id = `${data?.idForfrontendUse || "AboutBanner"}-${index}`;

  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;

  return (
    <Grid id={id} container justifyContent="center" py={{ md: "4.2%", xs: "3.63rem" }} alignItems={"center"} bgcolor={"#3F3C39"}>
      <Grid item md={5} xs={11.5}>
        <BreadcrumbServer pageMeta={pageMeta} parts={parts}/>
        <Typography variant={data?.headingType?.title?.toLowerCase() || "h1"} className="whiteColor"  sx={{
    "& span": {
      color: "#0486ff", 
    },
  }} >
          {data?.title}
        </Typography>
        <Typography
          variant="body1"
          className="blueColor">
          {stripHtml(data?.subTitle) }
        </Typography>
        <Typography
          variant="body1"
          className="whiteColor" sx={{ width: { md: "80%", xs: "100%" }, }}>

          {stripHtml(data?.description)}
        </Typography>
      </Grid>
      <Grid item md={5} xs={11.5}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Blue radial background */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(50% 63.7% at 50% 50%, rgba(4, 134, 255, 0.64) 0%, rgba(4, 134, 255, 0) 100%)',
            }}
          />

          {/* Avatar image on top */}
         <Avatar
            // src={data?.image ? `${imgLink}${data.image}` : "/codeninja.webp"}
            src={"/codeninja.webp"}
            alt={data?.title}
            variant="square"
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              mb: '-8.2%',
            }}
          />
        </Box>
      </Grid>


    </Grid>
  )
}

export default AboutBanner
