"use client"
import React from 'react'
import { Grid, Typography, Button, Box, Avatar, useMediaQuery } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ReactElasticCarousel from "react-elastic-carousel";

const SliderCSR = ({ data }) => {
    const imgLink= process.env.NEXT_PUBLIC_IMG_LINK;
    const isMobile = useMediaQuery("(min-width:0px) and (max-width:900px)");

    const MyArrow = ({ type, onClick, isEdge }) => {
        const iconStyle = {
            fontSize: { md: "2vw", xs: "2rem" },
            color: "#fff",
        };
        const ArrowIcon = type === "NEXT" ? ArrowForwardIos : ArrowBackIos;
        return (
            <Button onClick={onClick} disabled={isEdge}>
                <ArrowIcon sx={iconStyle} />
            </Button>
        );
    };

    return (
        <>
            <Grid item xs={12} md={10.8}>
                <ReactElasticCarousel
                    itemsToScroll={1}
                    enableAutoPlay
                    autoPlaySpeed={1500}
                    renderArrow={MyArrow}
                    itemsToShow={isMobile ? 1 : 3}
                >
                    {data?.caseStudies?.map((item) => (
                        <Box key={item.id}>
                            <Avatar
                                variant="square"
                                src={`${imgLink}${item.caseStudy?.thumbnailImage || "/Assets/NOimg.webp"}`}
                                alt={item.caseStudy?.thumbnailImageAltText || `Case Study ${item.id}`}
                                sx={{
                                    width: { md: "20vw", xs: "15rem" },
                                    height: "auto",
                                    borderRadius: { md: "0.5vw", xs: "0.3rem" },
                                }}
                            />
                            <Box sx={{ ml: { md: "3%", xs: 0 }, mt: "3%" }}>
                                <Typography variant="h6" className="whiteColor" sx={{ display: "flex", alignItems: "center" }}>
                                    <FolderCopyIcon sx={{ mr: "4%", fontSize: { md: '1vw', xs: "1rem" } }} />
                                    {item.caseStudy?.industry?.title} &nbsp; &nbsp;
                                    <KeyboardIcon sx={{ mr: "4%", fontSize: { md: '1vw', xs: "1rem" } }} />
                                    {item.caseStudy?.title }
                                </Typography>
                                <Typography variant="body1" className="whiteColor">
                                    {item.caseStudy?.shortDescription}
                                </Typography>
                                <Button sx={{ color: "#0486FF !important", fontSize: { md: '0.8vw', xs: '0.7rem' } }}>
                                    Read More
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </ReactElasticCarousel>
            </Grid>
        </>
    );
};

export default SliderCSR;