"use client"
import React from "react";
import { Grid, Tabs, Divider, Tab, Box } from "@mui/material";
import { HomeTeamCSR } from "@/utils/MainPage/MainPageCSRFunctions";
import { MediaQuery } from "@/utils/MainPage/MediaQuerry";
const HomeTeamsCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const { value, handleChange } = HomeTeamCSR();
  const { isMobile } = MediaQuery(data?.cardData);
  return (
    <>
      <Grid item xs={11.5} md={10} sx={{ display: { md: 'flex', xs: "inherit" }, justifyContent: { md: 'center', xs: "inherit" }, mt: '1%' }} >
        {data?.elements?.length > 1 && (
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              width: { md: "auto", xs: "25rem" },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              className="bannerTitle"
              variant="scrollable"
              scrollButtons
            >
              {data?.elements?.map((data) => (
                <Tab
                  label={data?.labelName}
                  key={data?.labelName}
                  component={isMobile ? "h4" : "h3"}
                  sx={{ mx: "4%" }}
                />
              ))}
            </Tabs>
          </Box>
        )}
      </Grid>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        sx={{ width: "80%", margin: "0 auto", height: "2px", m: "3vh" }}
      />
      <Grid item xs={12} md={8} xl={8}>
      </Grid>
    </>
  )
}

export default HomeTeamsCSR
