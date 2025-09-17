'use client';

import ContactButtonBlue from "@/Components/NewComponents/Registration/ContactButtonBlue";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import ProfileCard from "@/Components/ui/ProfileCard";
import BlurText from "@/Components/ui/BlurText";
import { motion } from "motion/react";

const CEOSays = ({ data, index }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const id = `${data?.idForfrontendUse || "CEOSays"}-${index}`;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      id={id}
      className="Ceo"
      py={{ md: "5%", xs: "4rem" }}
      px={{ md: "5%", xs: "1.5rem" }}
      alignItems={"right"}
      justifyContent={"center"}
      sx={{
        background: "linear-gradient(135deg, #f8faff 0%, #f0f7ff 100%)",
        minHeight: "60vh",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(4,134,255,0.1) 0%, rgba(4,134,255,0) 70%)",
          zIndex: 0,
        }
      }}
    >
      {/* Left Side Content */}
      <Grid 
        item 
        md={5.5} 
        xs={12} 
        mb={{ xs: "5%", md: 0 }}
        sx={{ 
          position: "relative", 
          zIndex: 2,
          pr: { md: "3%", xs: 0 }
        }}
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
              fontSize: { md: "2.5rem", xs: "1.8rem" },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: "1.5rem",
              "& span": {
                color: "#0486ff",
                fontWeight: 800,
              },
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
          sx={{
            fontSize: { md: "1.1rem", xs: "1rem" },
            lineHeight: 1.7,
            color: theme.palette.text.secondary,
            mb: "2rem",
            "& p": {
              marginBottom: "1.5rem",
            },
            "& strong": {
              color: "#0486ff",
              fontWeight: 600,
            }
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
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
                mt: { md: "2rem", xs: "1.5rem" },
              }}
            >
              <Link href={data.ctaLnik} passHref>
                <ContactButtonBlue 
                  label={data.ctaText} 
                  sx={{
                    px: "2.5rem",
                    py: "0.875rem",
                    fontSize: "1rem",
                    borderRadius: "50px",
                    boxShadow: "0 4px 12px rgba(4, 134, 255, 0.3)",
                    "&:hover": {
                      boxShadow: "0 6px 16px rgba(4, 134, 255, 0.4)",
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
        md={5.5}
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
          initial={{ opacity: 0, scale: 0.9 }}
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
              borderRadius: "16px",
              width: { md: "70%", xs: "85%" },
              maxWidth: "400px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              position: "relative",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-15px",
                left: "15px",
                right: "-15px",
                height: "30px",
                background: "rgba(4, 134, 255, 0.1)",
                borderRadius: "50%",
                filter: "blur(5px)",
                zIndex: -1,
              }
            }}
          >
            <ProfileCard
              avatarUrl={
                data?.image ? `${imgLink}${data.image}` : "/assets/noimg.webp"
              }
              enableTilt={true}
              enableMobileTilt={false}
              sx={{
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "all 0.4s ease",
                "&:hover": {
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                }
              }}
            />
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default CEOSays;