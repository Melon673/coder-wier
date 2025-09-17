"use client";
import React from 'react'
import { Grid, Typography, Avatar, Button, Box } from "@mui/material";
import { ServiceBannerCSR } from '../ServicePage/ServicesCSRFunctions';

const MapCSR = ({data}) => {
    const {visibleCards, handleViewAllClick} = ServiceBannerCSR();
  return (
    <>
       <Grid container  mt={"1%"} gap={{md:"2%",xs:'1.5%'}}>
            {data?.countries?.slice(0, visibleCards).map((item) => (
              <Grid item xs={5.9} md={3.5} key={item.id} sx={{bgcolor:"white",borderRadius:{md:"0.5vw",xs:"0.5rem"},textAlign:'center',my:"1%",p:"2%",
                    border: "2px solid #0486FF",
                    transition: "background-color 0.3s",
                    ":hover": {
                      backgroundColor: "#0486FF",
                      color: "white",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", mb: "2%" }}>
                    <Avatar
                      variant="square"
                      src={item.image}
                      alt={`${item.country} Flag`}
                      sx={{ width: "20%", height: "auto" }}
                    />
                  </Box>
                  <Typography variant='body1' className="greyColor">
                    {item.country}
                  </Typography>
                </Grid>
              ))}
          </Grid>

          {/* View All Button */}
          {visibleCards < data?.countries?.length && (
            <Button
              onClick={handleViewAllClick}
              sx={{
                bgcolor: "white",
                borderRadius: { md: "0.3vw", xs: "0.3rem" },
                textAlign: "center",
                my: "1%",
                p: "1.3%",
                fontSize: { md: "0.6vw", xs: "0.5rem" },
                border: "2px solid #0486FF",
                transition: "background-color 0.3s",
                ":hover": {
                  backgroundColor: "#0486FF",
                  color: "white",
                },
              }}
            >
              View All
            </Button>
          )}
    </>
  )
}

export default MapCSR
