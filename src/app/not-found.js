import { Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Grid
        container
        pt={30}
        pb={10}
        px={{ md: "10%", xs: "1px" }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        sx={{ backgroundColor: "#f4faff", widht: "100%" }}
      >
        <Grid item md={4} paddingLeft={{ md: "10%", xs: "300px" }}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/coders-wire.appspot.com/o/404%2F404.webp?alt=media&token=0c433ebb-9609-4d75-8704-5ca1def2b897"
            alt="404 Illustration"
            width={800}
            height={600} 
            style={{ borderRadius: "0.5rem", width: "80vh", height: "auto" }} 
          />
        </Grid>
        <Grid
          item
          md={8}
          justifyContent={"center"}
        >
          <Typography variant="h2" mb={1} color={"#0486ff"}>
            404
          </Typography>
          <Typography variant="h2" mb={1} color={"#202d3b"}>
            Oops! Page Not Found
          </Typography>
          <Typography
            variant="body1"
            className="h3"
            color={"#121e2a"}
            sx={{ fontSize: { md: "0.9rem", xs: "0.95rem" } }}
          >
            We&apos;re sorry the page you requested could not be found
          </Typography>
          <Typography
            variant="body1"
          >
            Please go back to the homepage
          </Typography>
          <Link href="/" passHref>
            <Button className="" sx={{ color: "white", borderRadius: "12px", backgroundColor: "#2B3C74 !important" }}>Go Home</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

