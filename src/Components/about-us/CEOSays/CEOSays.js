'use client';

import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import ProfileCard from "@/Components/ui/ProfileCard";
import { motion } from "motion/react";

const CEOSays = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "CEOSays"}-${index}`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        background: "rgba(224, 240, 255, 0.6)", // Slightly blue background
        borderRadius: "20px",
        padding: { md: "2.5rem", xs: "1.5rem" },
        margin: { md: "2rem auto", xs: "1rem auto" },
        maxWidth: "1200px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.05)", // subtle floating effect
      }}
    >
      <Grid
        container
        id={id}
        py={{ md: "3%", xs: "2rem" }}
        px={{ md: "3%", xs: "0" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{
          minHeight: "50vh",
          position: "relative",
          overflow: "hidden",
          gap: { md: 2, xs: 4 }, // Less space between left & right
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            borderRadius: "50%",
            zIndex: 0,
          },
          "&::before": {
            top: "-10%",
            right: "-5%",
            width: "280px",
            height: "280px",

          },
          "&::after": {
            bottom: "-5%",
            left: "-5%",
            width: "180px",
            height: "180px",

          }
        }}
      >
        {/* Left Side Content */}
        <Grid
          item
          md={6}
          xs={12}
          mb={{ xs: "2rem", md: 0 }}
          sx={{ position: "relative", zIndex: 2, pr: { md: "1.5rem", xs: 0 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant={data?.headingType?.title?.toLowerCase() || "h2"}
              sx={{
                fontSize: { md: "2.1rem", xs: "1.6rem" },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: "0.8rem",
                background: "linear-gradient(135deg, #2c3e50 0%, #0486ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                "& span": { color: "#0486ff", fontWeight: 800 },
              }}
            >
              {data?.title || "No title found"}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
               
                lineHeight: 1.7,
                color: theme.palette.text.secondary,
                mb: "1.2rem",
                "& p": { marginBottom: "1rem" },
                "& strong": { color: "#0486ff", fontWeight: 600 },
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: data.description }} />
            </Typography>
          </motion.div>


          {data?.ctaText && data?.ctaLnik && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: { md: "1rem", xs: "0.8rem" },
                }}
              >
                <Link href={data.ctaLnik} passHref>
                  <ContactButtonBlue
                    label={data.ctaText}
                    sx={{
                      px: "1.8rem",
                      py: "0.65rem",
                      fontSize: "0.9rem",
                      borderRadius: "10px",
                      boxShadow: "0 4px 16px rgba(4, 134, 255, 0.25)",

                      color: "#fff",
                      "&:hover": {
                        boxShadow: "0 6px 22px rgba(4, 134, 255, 0.35)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  />
                </Link>
              </Box>
            </motion.div>
          )}
        </Grid>

        {/* Right Side ProfileCard */}
        <Grid
          item
          md={5}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                borderRadius: "18px",
                width: { md: "85%", xs: "100%" },
                maxWidth: "350px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                backdropFilter: "blur(10px)",

              }}
            >
              <ProfileCard
                avatarUrl={data?.image ? `${imgLink}${data.image}` : "/assets/noimg.webp"}
                enableTilt={true}
                enableMobileTilt={false}

              />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CEOSays;
