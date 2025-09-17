import React from 'react';
import { Grid, Typography } from '@mui/material';
import DevLifeCycleCSR from '@/utils/MainPage/DevLifeCycleCSR';
import stripHtml from '@/utils/stripHtml';

const DevLifeCycle = ({ data, index }) => {
  const id =
    data?.idForfrontendUse === 'DevLifeCycle'
      ? 'DevLifeCycle'
      : data?.idForfrontendUse === 'DevLifeCycleThree'
      ? 'DevLifeCycleThree'
      : data?.idForfrontendUse === 'DevLifeCycleLight'
      ? 'DevLifeCycleLight': data?.idForfrontendUse === 'DevLifeCycleThreeLight'?"DevLifeCycleThreeLight"
      : null;

  const isLightVersion =
    data?.idForfrontendUse === 'DevLifeCycleLight' || data?.idForfrontendUse === 'DevLifeCycleThreeLight';

  return (
    <Grid
      id={`${id}-${index}`}
      container
      justifyContent="center"
      bgcolor={isLightVersion ? '#FFFFFF' : '#3F3C39'} // ✅ Conditional background
      px={{ md: '3.8%', xs: 0 }}
      py={{ md: '4.2%', xs: '3.63rem' }}
      borderRadius={{ md: '0.45vw', xs: 0 }}
      width={{ md: '84%', xs: '100%' }}
      m="4.2% auto"
    >
      <Grid item md={6} xs={11.5} textAlign={{ md: 'left', xs: 'center' }}>
        <Typography
          variant={data?.headingType?.title?.toLowerCase()}  sx={{ width: { md: '35vw', xs: '100%' },
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
          className={isLightVersion ? 'blackColor' : 'whiteColor'} // ✅ Optional: change text color
        
        >
          {data.title}
        </Typography>
      </Grid>

      <Grid item md={6} xs={11.5} my={{ md: 0, xs: '1rem' }}>
        <Typography
          variant="body1"
          className={isLightVersion ? 'blackColor' : 'whiteColor'} // ✅ Optional: change text color
        >
          {stripHtml(data?.description)}
        </Typography>
      </Grid>
      <DevLifeCycleCSR data={data} isLightVersion={isLightVersion} />
    </Grid>
  );
};

export default DevLifeCycle;
