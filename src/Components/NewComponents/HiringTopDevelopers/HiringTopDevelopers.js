import HiringTopDevelopersCSR from "@/utils/MainPage/HiringTopDevelopersCSR";
import stripHtml from "@/utils/stripHtml";
import { Box,Typography } from "@mui/material";
import React from "react";
import ContactButtonWhite from "../Registration/ContactButtonWhite";
import Link from "next/link";

const HiringTopDevelopers = ({ data ,index }) => {
    const id = `${data?.idForfrontendUse || "HiringTopDevelopers"}-${index}`;

  return (
      <Box
        sx={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
          overflow: "hidden",
        }}
        my={{ md: "4.2%", xs: "3.63rem" }}
        id={id}
      >
        <Box width={{ md: "84%", xs: "100%" }} mt={{xs:0,sm:"2rem"}}>
          {" "}
          <Box
            sx={{
              width: { md: "40%", xs: "100%" },
              bgcolor: "#3F3C39",
              backgroundImage:
                "radial-gradient(50% 63.7% at 50% 50%, rgba(4, 134, 255, 0.64) 0%, rgba(4, 134, 255, 0) 100%)",
              height: {
                md: "26vw",
                xs: "calc(100vh - 45vh)",
                sm: "45vh",
              },
              p: { md: "1vw", xs: "1rem" },
            }}
          >
            <Typography
              variant={data?.headingType?.title?.toLowerCase()}
              className="whiteColor"  sx={{
    "& span": {
      color: "#0486ff", // blue color for span
    },
  }}
              width={{ md: "80%", xs: "100%" }}
            >
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              className="whiteColor"
              mt={{ md: "4%", xs: "3%" }}
              width={{ md: "80%", xs: "auto" }}
            >
              {" "}
              {stripHtml(data?.description)}
            </Typography>
            <Box sx={{ mt: { md: "24%", xs: "1rem" } }}>
                  {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonWhite label={data.ctaText} />
                    </Link>
                    }
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { md: "10%", xs: "60%", sm: "48%" },
            left: { md: "37%", xs: "5%" },
            width: { md: "60%", xs: "90%" },
          }}
        >
          <HiringTopDevelopersCSR data={data} />
        </Box>
      </Box>
  );
};

export default HiringTopDevelopers;
