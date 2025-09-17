import React from 'react'
import { Grid, Typography, Avatar, Box } from "@mui/material";
import stripHtml from '../stripHtml';
import Image from 'next/image';

const SolutionWeOfferCSR = ({ data }) => {
  const imgLink = process.env.NEXT_PUBLIC_IMG_LINK;
  const formatDescription = (html) => {
    if (!html) return "";
    return html
      .replace(/style="[^"]*color:[^";]+;?[^"]*"/gi, '') // Remove color-specific inline styles
      .replace(/●/g, `<span style="display:inline-block;width:8px;height:8px;background:#007bff;margin-right:8px;"></span>`);
  };
  return (
    <>
      {data?.elements?.map((item, index) => (
        <Grid
          item
          md={3.25}
          xs={11.5}
          key={index}
          sx={{
            p: { md: "0.5vw", xs: "1%" },
            mt: { md: "1%", xs: "2.5%" }, borderRadius: { md: "0.45vw", xs: "0.45rem" },
            border: "2px solid white",
            '&:hover': {
              borderColor: '#A4D3FF',
            },
            '&:hover .hover-box': {
              backgroundColor: '#0486FF',
            },
            '&:hover .hover-box *': {
              color: 'white !important',
            },
          }}
        >
          <Box className="hover-box" sx={{
            bgcolor: 'white', borderRadius: { md: "0.45vw", xs: "0.45rem" },
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            p: { md: "2vw", xs: "4%" },
            transition: 'background-color 0.3s ease'
          }}>
            <Box
              sx={{
                width: { md: '2.5vw', xs: '2.5rem' },
                height: { md: '2.5vw', xs: '2.5rem' },
                position: 'relative',
                borderRadius: '0.5rem', // simulates "rounded"
                overflow: 'hidden',
              }}
            >
              <Image
                src={`${imgLink}${item.image || "/assets/noimg.webp"}`}
                alt={item?.title || "Image"}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>

            <Typography
              variant="h3"
              textTransform={"capitalize"}
              className="hover-title"
              sx={{
                my: "1%",
                height: { md: "3.5vw", xs: "auto" },
                transition: 'color 0.3s ease'
              }}
            >
              {stripHtml(item.title)}
            </Typography>

            <Box
              className="hover-desc"
              sx={{
                height: { md: "6vw", xs: "auto" },
                color: "black",
                transition: 'color 0.3s ease'
              }}
              dangerouslySetInnerHTML={{
                __html: formatDescription(item.description || item.shortDescription),
              }} />
          </Box>
        </Grid>
      ))}
    </>
  )
}

export default SolutionWeOfferCSR;
