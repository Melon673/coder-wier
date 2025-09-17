"use client"
import { Grid, Typography, CardContent, CardMedia, Button, Card, CardActionArea, Box, Avatar } from "@mui/material";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import dynamic from "next/dynamic";
import { MediaQuery } from "../MainPage/MediaQuerry";
// const Carousel = dynamic(() => import("react-elastic-carousel"), {
//   ssr: false,
// });

const MeetDevelopersCSR = ({data}) => {
    const MyArrow = ({ type, onClick, isEdge }) => {
        const iconStyle = {
          fontSize: { md: "2vw", xs: "1rem" },
          color: "#0486FF",
        };
        const ArrowIcon = type == "NEXT" ? ArrowForwardIos : ArrowBackIos;
        return (
          <Button onClick={onClick} disabled={isEdge}>
            <ArrowIcon style={iconStyle} />
          </Button>
        );
      };
      const isMobile = MediaQuery();
    
      const actions = [
        { icon: <FacebookIcon sx={{ fontSize: { md: "1vw", xs: "1.5rem" } }} />, name: "Facebook" },
        { icon: <TwitterIcon sx={{ fontSize: { md: "1vw", xs: "1.5rem" } }} />, name: "Twitter" },
        { icon: <WhatsAppIcon sx={{ fontSize: { md: "1vw", xs: "1.5rem" } }} />, name: "Whatsapp" },
        { icon: <LinkedInIcon sx={{ fontSize: { md: "1vw", xs: "1.5rem" } }} />, name: "LinkedIn" },
      ];
  return (
    <>
      <Grid item xs={12} md={12} xl={10} lg={12} >
        
        </Grid>
    </>
  )
}

export default MeetDevelopersCSR
