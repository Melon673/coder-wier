"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import { scrollToEl } from './ScrollToFunction'

const BlogDetailTableOfContent = ({data}) => {
  return (
     <Box
            sx={{
              bgcolor: "#F4FAFF",
              p: "4%",
              border: "1px solid #0486ff",
            }}
          >
            {Array.isArray(data) &&
              data.map((section, index) => (
                <Typography
                  key={index}
                  variant="h6"
                  onClick={() => scrollToEl(section?.title)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-start",
                    my: "2%",
                    columnGap: "2%",
                    transition: "color 0.3s ease",
                  }}
                >
                  <span className="blueColor">{index + 1}.</span>{" "}
                  {section?.title}
                </Typography>

              ))}
          </Box>
  )
}

export default BlogDetailTableOfContent
