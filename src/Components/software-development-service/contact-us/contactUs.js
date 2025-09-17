import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


const ContactUs = () => {

  return (
    <Box bgcolor="white" px={{ md: "8%", xs: "2%" }} my={"3%"} >
      <Grid sx={{ bgcolor: "#0486FF", height: { md: "16vh", xs: 'auto' }, p: { md: "2%", xs: "1rem" }, borderRadius: { md: "1vw", xs: "0.8rem" } }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={10} textAlign={{ md: "left", xs: 'center' }}>
          <Typography variant="h2" className="whiteColor" mb={"0.5%"}>
            Need a Tech Hand?
          </Typography>
          <Typography
            variant="body1" className="whiteColor"
          >
            Level up your enterprise with CodersWire&apos;s secure and scalable
            software solutions.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: { md: "left", xs: 'center' }, mt: { md: 0, xs: "4%" } }}>
          <Link href="/start/role" passHref>
            <Button className="blueBackgroundButton">
              Get In Touch!
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
