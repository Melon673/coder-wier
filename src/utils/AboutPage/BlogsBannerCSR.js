"use client"
import React from 'react'
import { Grid, Typography } from '@mui/material'
import stripHtml from '../stripHtml';

const BlogsBannerCSR = ({data}) => {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
  return (
    <>
      <Grid item xs={11.5} md={4} onClick={handleClick} mt={"2vh"} textAlign={"center"}  >
        <Typography variant="h1" className="whiteColor" sx={{width:{md:"30vw",xs:"auto"},}} >
          {stripHtml(data?.title)}
        </Typography>
        <Typography variant="body1" className="whiteColor" sx={{mt: "2%" }}>
          {stripHtml(data?.description)}
        </Typography>
      </Grid>
    </>
  )
}

export default BlogsBannerCSR
