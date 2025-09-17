import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import stripHtml from "@/utils/stripHtml";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SoftwareDevelopmentContact = ({ data, index }) => {
  const id = `${data?.idForfrontendUse || "SoftwareDevelopmentContact"}-${index}`;

  return (
    <Box id={id}
      bgcolor="white"
      py={{ md: "4.2%", xs: "3.63rem" }}
    >
      <Grid
        sx={{
          bgcolor: "#0486FF",
          p: { md: "2%", xs: "1rem" },
        }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={8}  >
          <Typography variant="h2" className={"whiteColor"} mb={"1%"} sx={{ width: { md: "70%", xs: "auto" }, }}>
            {data?.title}
          </Typography>
          <Typography sx={{ width: { md: "70%", xs: "auto" }, }} variant="body1" className="whiteColor" mb={"8%"}>{stripHtml(data?.description)}</Typography>{" "}
    {data?.ctaLnik && data?.ctaText && 
                    <Link href={data?.ctaLnik} passHref>
                        <ContactButtonBlue label={data.ctaText} />
                    </Link>
                    }
        </Grid>
        <Grid item xs={12} md={4} sx={{ pl: { md: 0, xs: "4rem" } }}>
          <Box
            sx={{
              width: { md: "100%", xs: "80%" },
              height: "auto",
              position: "relative",
            }}
          >
            <Image
              src={data?.image || "/Assets/NOimg.webp"}
              alt="Image"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "auto"
              }}
              width={100}
              height={75}

              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SoftwareDevelopmentContact;
