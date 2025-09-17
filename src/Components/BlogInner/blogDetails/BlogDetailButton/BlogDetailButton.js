"use client"
import React, { useState } from 'react';
import { IconButton, Drawer, Box, Typography, Button, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { scrollToEl } from '../ScrollToFunction';
const BlogDetailButton = ({data}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <IconButton color="primary" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>

      <Drawer
  anchor="left"
  open={open}
  onClose={toggleDrawer}
  PaperProps={{
    sx: {
      width: 280,
      mt: "4.8rem",
      height: "calc(100vh - 4.8rem)",
      bgcolor: "#F4FAFF",
      border: "2px solid #0486ff",
      display: "flex",            // ✅ make drawer content a flexbox
      flexDirection: "column",    // ✅ column layout for full height stretch
    },
  }}
>
  <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
    <Box sx={{ display: "flex", justifyContent: "flex-end", my: "1rem", mr: "0.5rem" }}>
      <IconButton
        color="primary"
        onClick={toggleDrawer}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "2rem",
          height: "2rem",
          border: "2px solid #0486ff",
          borderRadius: "50%",
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>

    {/* Content Area with Table of Contents + Share */}
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      {/* Top: Table of Content */}
      <Box sx={{ p: "0.6rem", borderTop: "1px solid rgb(139, 137, 137)" }}>
        <Typography variant="h3" mb={"1rem"}>
          Table Of Content
        </Typography>
        {Array.isArray(data) &&
          data.map((section, index) => (
            <Typography
              key={index}
              variant="h5"
              onClick={() => {
                scrollToEl(section?.title);
                setOpen(false);
              }}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "flex-start",
                mt: "1rem",
                columnGap: "2%",
                transition: "color 0.3s ease",
              }}
            >
              <span className="blueColor">{index + 1}.</span> {section?.title}
            </Typography>
          ))}
      </Box>

      {/* Bottom: Share Section */}
      <Box
        sx={{
          p: "0.6rem",
          borderTop: "1px solid rgb(139, 137, 137)",
          borderBottom: "1px solid rgb(139, 137, 137)",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" mb={"2%"}>
          Share This Article
        </Typography>
        {[
          "/Assets/Images/NewCompoents/Home/NewFooter/Facebook.svg",
          "/Assets/Images/blogInner/twitter.webp",
          "/Assets/Images/NewCompoents/Home/NewFooter/Instagram.svg",
          "/Assets/Images/NewCompoents/Home/NewFooter/Linkedin.svg",
        ].map((src, i) => (
          <Button key={i}>
            <Avatar src={src} sx={{ width: { md: "2vw", xs: "2rem" }, height: "auto" }} />
          </Button>
        ))}
      </Box>
    </Box>
    
  </Box>
</Drawer>

    </div>
  );
};

export default BlogDetailButton;
