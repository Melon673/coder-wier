"use client"
import { Avatar, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import { FooterDataNew } from './NewFooterData';

// tiny helper (replaces Luxon)
const formatTime = (timeZone) => {
  try {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone
    }).format(new Date());
  } catch {
    return 'Error';
  }
};

const NewFooter = ({ menus, sideButton, imgLink, filteredSiteDetails }) => {
  const data = FooterDataNew;
  const isMobile = useMediaQuery("(max-width: 900px)");

  // same behavior as before: compute once on mount
  const [times] = useState(() => {
    const initial = {};
    data.locations.forEach((location) => {
      initial[location.country] = formatTime(location.timezone);
    });
    return initial;
  });

  return (
    <Grid container justifyContent={"center"} py={"1%"} spacing={{ md: 0, xs: 2 }} id="Footer">
      {data.locations.map((location, index) => (
        <Grid item xs={5.8} md={2} sm={2.3} key={index} sx={{ borderBottom: "0.15vw solid #dddddd", }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { md: "row", xs: 'column' }, pl: "0.5vw" }}>
            <Box sx={{
              width: "8vh",
              height: "8vh", justifyContent: 'center', alignItems: 'center', display: 'flex',
              borderRadius: '50%', color: "white", padding: '1vw',
              backgroundColor: 'black', boxShadow: "0 .15rem .25rem rgba(10,12,16,.05)!important",
            }}>
              <Typography variant="body1" className='whiteColor' textAlign={"center"}>
                {times[location.country] || 'Loading...'}
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ mt: "1%", ml: { md: "1vw", xs: "0" } }}>
              {location.country}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ mt: "2%", height: { md: "3vw", xs: "5rem" } }} px={"1vw"}>
            {location.address}
          </Typography>
        </Grid>
      ))}

      <Grid item md={12} xs={12} />
      <Grid item md={0.3} />

      {menus?.map((item, index) => (
        <Grid
          item
          md={2}
          xs={index === 4 ? 11 : 5.5}
          sm={index === 0 || index === 1 ? 5.8 : 3.8}
          key={index}
          mt={"2vh"}
          sx={{ borderBottom: "0.15vw solid #dddddd", pb: '3vh' }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'bold !important' }} mb={"0.5%"}>
            {item.name}
          </Typography>
          {item.submenu?.map((page, idx) => (
            <Link key={idx} href={`/${page.link}`}>
              <Typography
                variant='h6'
                my={"1%"}
                sx={{
                  cursor: "pointer",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "#0486ff !important" }
                }}
              >
                {page.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      ))}

      <Grid item md={10} xs={10}>
        <Grid container pt={"2%"}>
          <Grid item md={9} xs={12} sx={{ display: 'flex', gap: { md: "1vw", xs: "0rem" }, alignItems: 'center', flexWrap: "wrap", justifyContent: { md: 'left', xs: "center" } }}>
            {data.clients?.map((client, idx) => (
              <Box key={idx} sx={{ mr: { md: 0, xs: "1rem" }, my: { md: "0", xs: "0.5rem" } }}>
                <Avatar src={client.src} variant='square' alt={client.name} sx={{ width: { md: "2.5vw", xs: "2.4rem" }, height: 'auto' }} />
              </Box>
            ))}
          </Grid>

          <Grid item md={3} xs={12} sx={{ display: "flex", mt: { md: 0, xs: "0.5rem" }, gap: { md: "0.5vw", xs: "0.7rem" }, alignItems: 'center', pl: { md: "5vw", xs: 0 }, textAlign: { md: 'left', xs: "center" }, justifyContent: { md: 'left', xs: "center" } }}>
            {data.SocialIcons?.map((icon, idx) => (
              <a
                key={idx}
                className="hover-icon"
                style={{
                  '--hover-bg-color': icon.backgroundColor,
                  marginRight: { md: "0.5vw", xs: "0.5rem" },
                  display: "inline-flex",
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
                href={icon.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isMobile ? icon.mobileIcon : icon.icon}
              </a>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={10} xs={12} sx={{ borderTop: "0.15vw solid #dddddd", mt: '3vh' }}>
        <Grid container pt={{ md: "1%", xs: "0vh" }}>
          <Grid item md={9.9} xs={12} textAlign={{ md: 'left', xs: 'center' }}>
            <Typography variant='body1'>{filteredSiteDetails?.copywrite}</Typography>
          </Grid>

          <Grid item md={2.1} xs={12} sx={{ display: 'flex', gap: { md: "0.5vw", xs: "0.3rem" }, alignItems: 'center', pl: { md: "5vw", xs: 0 }, justifyContent: { md: "left", xs: 'center' } }}>
            {data.policies?.map((item, idx) => (
              <Typography variant='body1' key={idx}>{item}</Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewFooter;
