
import CommonComponents from '@/Components/CommonComponents/CommonComponents'
import OurOutSourceBlackishCSR from '@/utils/MainPage/OurOutSourceBlackishCSR'
import stripHtml from '@/utils/stripHtml'
import { Grid, Typography } from '@mui/material'
import React from 'react'


const OurOutSourceBlackish = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "OutsourceServiceOverview-2"}-${index}`;

  return (
    <Grid id={id}
      container
      justifyContent="center"
      sx={{
        position: "relative"
      }}
      py={{ md: "4.2%", xs: "3.63rem" }}

    >
      <CommonComponents
        textAlign={{ md: "left", xs: "center" }}
        variant={data?.headingType?.title?.toLowerCase()} 
        title={data?.title}
        description={stripHtml(data?.description)}
      />

      <OurOutSourceBlackishCSR data={data} />
    </Grid>
  )
}

export default OurOutSourceBlackish
