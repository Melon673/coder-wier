import ContactButtonWhite from "@/Components/NewComponents/Registration/ContactButtonWhite";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";


const ContactUs = () => {
    return (
        <Box bgcolor='white' py={{md:"3%",xs:'2rem'}}>
            <Grid container sx={{ backgroundColor: "#0486FF",padding:"2%",width:{md:"84%",xs:"100%"},m:'auto',borderRadius:{md:"1vw",xs:"0"}}} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={10} >
                    <Typography variant="h2" className="whiteColor"  mb={"1%"}>
                    Hire Our Banking Software<br /> Development Experts.
                    </Typography>
                    <Typography variant="body1" className="whiteColor" >
                        Let us help you decide the services you need.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2} mt={{md:0,xs:"1rem"}}>
                <Link href="/contact-us" passHref>
                    <Button variant="whiteBorderButton" >Contact Us</Button>
                       
                </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;