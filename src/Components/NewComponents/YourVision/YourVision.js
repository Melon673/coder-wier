import stripHtml from '@/utils/stripHtml'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ContactButtonWhite from '../Registration/ContactButtonWhite'
import Link from 'next/link'

const YourVision = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "YourVision"}-${index}`;

  return (
    <Grid id={id} container sx={{ bgcolor: "#3F3C39" }} borderRadius={{ md: "0.45vw", xs: "0" }} width={{ md: "84%", xs: "100%" }} m={"4.2% auto"} justifyContent={"center"} alignItems={"center"} py={{ md: "4.2%", xs: "3.63rem" }} textAlign={{ md: "left", xs: "center" }}>
      <Grid item md={8.4} xs={11.5}>
        <Box><Typography  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }} variant={data?.headingType?.title?.toLowerCase() || "h2"} className='whiteColor'>{data?.title}</Typography>
          <Typography variant='body1' className='whiteColor' mt={"1%"} >{stripHtml(data?.description) || stripHtml(data?.subTitle)}</Typography></Box>
      </Grid>
      <Grid item md={2.7} xs={11.5} mt={{ md: 0, xs: "2rem" }} display={"flex"} justifyContent={{ xs: "center", md: "flex-end" }}>
            {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonWhite label={data.ctaText} />
                    </Link>
                    }
      </Grid>
    </Grid>
  )
}

export default YourVision
