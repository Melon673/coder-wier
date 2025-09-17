"use client"
import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { MediaQuery } from "./MediaQuerry";
import { RegistrationCSR } from "./MainPageCSRFunctions";
import stripHtml from "../stripHtml";

const NewsletterCSR = ({ data }) => {
    const { focusedField, handleFocus, handleBlur } = RegistrationCSR("newsletter");
    const { is375, is912 } = MediaQuery();

    const getInputStyles = (field) => ({
        outline: "none",
        border: focusedField === field ? "2px solid white" : '2px solid transparent',
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        width: is912 ? "16rem" : is375 ? "100%" : "70%",
        borderRadius: is912 || is375 ? "0.3rem" : "0.5vw",
        padding: is912 || is375 ? "0.8rem" : "2%",
        fontSize: is912 || is375 ? "0.8rem" : "1vw",
        color: "#fff",
        background: "#2a97fd",
    });
    return (
        <>
            <Grid item xs={11.5} md={12} mb={"1%"}>
                <Typography variant={data?.headingType?.title?.toLowerCase()} className={"whiteColor"} textTransform={"capitalize"}  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}>
                    {data?.title}
                </Typography>
            </Grid>
            <Grid item xs={11.5} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                <input type="email" id="email" name="email" placeholder={stripHtml(data?.description) || "Type your email here"} required
                    className="inputplaceholderNewsletter"
                    style={getInputStyles("email")} onFocus={() => handleFocus("email")} onBlur={handleBlur} ></input>
                <Button variant="whiteBorderButton" sx={{ marginLeft: "2%" }}>{data?.ctaText || "no cta text found"}</Button>
            </Grid>
        </>
    )
}

export default NewsletterCSR
