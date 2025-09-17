"use client";
import { Avatar, Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { MediaQuery } from "@/utils/MainPage/MediaQuerry";

const MarqueeClients = ({ data, index }) => {
  const { isSmallMobile, isBigMobile, isTablet } = MediaQuery();
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "OurTrustedPatners"}-${index}`;

  const commonBoxStyles = {
    border: "clamp(2px, 0.2vw, 4px) solid #e6e6e6",
    bgcolor: "white",
    borderRadius: "clamp(0.5rem, 0.8vw, 1rem)",
    boxShadow: "0 4px 19px rgba(0,0,0,.04)",
    p: "clamp(1rem, 1.8vw, 2.2rem)",
    height: { md: "6vw", xs: "4rem" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mx: "clamp(0.4rem, 0.5vw, 0.8rem)",
    my: { md: "1.5%", sm: "0.5rem", xs: "2%" },
  };

  return (
    <Box id={id} sx={{ p: "1%", width: "80%", m: "auto", transform: { md: "translateY(-20%)", xs: "translateY(-30%)" }, bgcolor: "white", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)", borderRadius: "1vw",mb:"3%" }}>
      <Marquee pauseOnHover direction="left">
        {data?.elements?.map((item, index) => (
          <Box key={index} sx={commonBoxStyles}>
            <Avatar
              variant="square"
              src={`${imgLink}${item.image}`}
              alt={`Image for ${item.title}`}
              sx={{
                width:
                  isSmallMobile || isBigMobile
                    ? "3rem"
                    : isTablet
                      ? "4rem"
                      : "clamp(3rem, 5vw, 6rem)",
                height: "auto",
                // filter: "grayscale(100%)", // Uncomment if needed
              }}
            />
          </Box>
        ))}
      </Marquee>
    </Box>

  );
};

export default MarqueeClients;
