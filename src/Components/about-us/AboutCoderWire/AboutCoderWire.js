"use client"
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import stripHtml from '@/utils/stripHtml';
import CommonComponents from '@/Components/CommonComponents/CommonComponents';
import dynamic from 'next/dynamic';
import { useSwiper } from '@/utils/UseSwiper/UseSwiper';

const WorldMapWithStats = dynamic(() => import('./MapWithStats'), {
  ssr: false,
});
const AboutCoderWire = ({ data, index }) => {
  const stats = data?.elements || [];
    const {isClient } = useSwiper();
  
  const id = `${data?.idForfrontendUse || "AboutUs"}-${index}`;

  const leftStats = stats.slice(0, 4);
  const rightStats = stats.slice(4);

  return (
    <Grid id={id} container justifyContent="center" my={{ md: "4.2%", xs: "3.63rem" }} sx={{ overflow: 'hidden', display: { md: !isClient?"none":"flex", xs: "none" } }}>
      <CommonComponents variant={data?.headingType?.title?.toLowerCase()} title={data?.title || 'About Us'} description={stripHtml(data?.description)} />
      <Grid item md={12} xs={12} sx={{ position: 'relative' }}>
        <WorldMapWithStats />
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '8%',
            zIndex: 2000, width: "30%",
            textAlign: 'left',
            left: '8%',
            pointerEvents: 'none',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {leftStats.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                border: '1px solid rgba(41, 42, 118, 0.3)',
                padding: '4%',
                borderRadius: '10px',
                width: '48%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography 
                variant={item?.headingType?.title?.toLowerCase()} 
                sx={{ color: '#0486ff' }}
              >
                {item.title}
              </Typography>
              <span style={{ color: 'white' }}>{stripHtml(item.shortDescription)}</span>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: { md: '8%', xs: 0 },
            zIndex: 2000,
            textAlign: 'left',
            right: '-4%',
            flexWrap: 'wrap',
            width: { md: '40%', xs: '100%' },
            pointerEvents: 'none',
            gap: 2,
          }}
        >
          {rightStats.map((item, index) => (
            <Box
              key={item.id || index}
              sx={{
                border: '1px solid rgba(41, 42, 118, 0.3)',
                padding: '4%',
                borderRadius: '10px',
                width: '36%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography 
                variant={item?.headingType?.title?.toLowerCase()} 
                className="h3"
                sx={{ color: '#0486ff' }}
              >
                {item.title}
              </Typography>
              <span style={{ color: 'white' }}>{stripHtml(item.shortDescription)}</span>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutCoderWire;