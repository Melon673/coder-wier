"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const FAQHomeCSR = ({ data }) => {
  const [expanded, setExpanded] = useState(data.elements[0].title);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (value) => {
    setExpanded(value);
  };

  const selectedItem = data.elements.find((item) => item.title === expanded);

  if (isMobile) {
    // ✅ MUI Accordion for mobile only
    return (
      <Box>
        {data.elements.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === item.title}
            onChange={() => handleChange(item.title)}
            sx={{ mb: 1, backgroundColor: expanded === item.title?"#0486ff":"#f9f9f9",boxShadow:"none",}}
          >
            <AccordionSummary sx={{paddingBottom:"0"}}
              expandIcon={
                expanded === item.title ? <RemoveIcon sx={{color:"#fff"}}/> : <AddIcon />
              }
            >
              <Typography variant={item.headingType.title.toLowerCase()} fontWeight={600} className={ expanded === item.title?"whiteColor":"blackColor" }>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
                variant="body1"   sx={{
                  "& *": {
                    color: expanded === item.title? "#fff !important":"black !important", // applies to all tags inside
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: item.shortDescription,
                }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }
  return (
    <>
      <Box
        sx={{
          width: "45%",
          zIndex: 10,
          py: "2.5%",
          borderRadius: { md: "0.45vw", xs: "0.45rem" },
        }}
      >
        {data.elements.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              columnGap: "1%",
              alignItems: "center",
              p: "2.5% 1.5%",
              cursor: "pointer",
              bgcolor: expanded === item.title ? "#0486ff" : "white",
              borderBottom:
                expanded === item.title
                  ? "0.4px solid transparent"
                  : "0.4px solid rgb(204, 204, 204)",
              transition: "all 0.3s ease-in-out",
            }}
            onClick={() => handleChange(item.title)}
          >
            {expanded === item.title ? (
              <CircleOutlinedIcon sx={{ color: "#fff", fontSize: "0.65vw" }} />
            ) : (
              <CircleIcon sx={{ color: "#0486ff", fontSize: "0.65vw" }} />
            )}
            <Typography
              variant={item?.headingType?.title?.toLowerCase()}
              className={
                expanded === item.title ? "whiteColor" : "blackColor"
              }
              sx={{ transition: "all 0.3s ease-in-out" }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {selectedItem && (
        <Box
          sx={{
            backgroundColor: "#a1a1a2",
            borderRadius: "8px",
            width: "55%",
            height: "auto",
            transition: "all 0.3s ease",
            display: "flex",
            transform: "translateX(-10%)",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: "5% 2% 2% 8%",
              '& *': {
      color: '#FFF !important',
      WebkitTextFillColor: '#FFF !important',
    },
          }}
        >
         <Typography
  variant="body1"
  className="whiteColor"
  dangerouslySetInnerHTML={{
    __html: selectedItem.shortDescription,
  }}
  sx={{
    "& ul": {
      columns: { xs: 1, md: 2 }, // 👈 One column on mobile, two on desktop
      listStyle: "disc",
      paddingLeft: "1.5rem",
      margin: "1rem 0",
    },
    "& ol": {
      columns: { xs: 1, md: 2 },
      listStyle: "decimal",
      paddingLeft: "1.5rem",
      margin: "1rem 0",
    },
    "& li": {
      breakInside: "avoid",
      marginBottom: "0.5rem",
    },
    textAlign: "left"
  }}
/>

        </Box>
      )}
    </>
  );
};

export default FAQHomeCSR;
